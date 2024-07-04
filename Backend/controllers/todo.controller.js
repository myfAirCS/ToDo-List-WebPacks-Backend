import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";
import { Todo } from "../models/todos.model.js";

const addTask = asyncWrapper(async (req, res) => {
  try {
    const { Title } = req.body;

    if (Title.trim() == "" || !Title) {
      res.status(404).json(new apiError("Title is Missing", 404));
      throw new apiError("Title is Missing", 404);
    }

    const todo = await Todo.create({
      Title: Title,
      userId: req.user._id,
      Status: false,
    });

    if (!todo) {
      res.status(500).json(new apiError("Failed to add", 500));
      throw new apiError("Failed to add", 500);
    }

    res.status(201).json(new apiResponse(201, "Task added successfully", todo));
  } catch (error) {
    console.error("Error : ", error.message);
    res.status(500).json(new apiError(error.message || "Server Issue", 500));
  }
});

const editTask = asyncWrapper(async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(404).json(new apiError("Id is Missing", 404));
      throw new apiError("Id is Missing", 404);
    }
    const { Title } = req.body;

    if (!Title) {
      res.status(404).json(new apiError("Title is Missing", 404));
      throw new apiError("Title is Missing", 404);
    }
    const todo = await Todo.findByIdAndUpdate(
      id,
      {
        $set: {
          Title: Title,
        },
      },
      {
        new: true,
      }
    );

    if (!todo) {
      res.status(500).json(new apiError("Failed To Update", 500));
    }

    res
      .status(201)
      .json(new apiResponse(201, "Task Edited Successfully", todo));
  } catch (error) {
    console.error("Error : ", error.message);
    res.status(500).json(new apiError(error.message || "Server Issue", 500));
  }
});

const changeTaskStatus = asyncWrapper(async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(404).json(new apiError("Id is Missing", 404));
      throw new apiError("Id is Missing", 404);
    }
    const { Status } = req.body;

    if (!Status) {
      res.status(404).json(new apiError("Status is Missing", 404));
      throw new apiError("Status is Missing", 404);
    }

    const newTodo = await Todo.findByIdAndUpdate(
      id,
      {
        $set: {
          Status: Status,
        },
      },
      {
        new: true,
      }
    );

    if (!newTodo) {
      res.status(500).json(new apiError("Failed To Update", 500));
      throw new apiError("Failed to Update", 500);
    }

    res
      .status(202)
      .json(new apiResponse(202, "Task Status Changed Successfully", newTodo));
  } catch (error) {
    console.error("Error : ", error.message);
    res.status(500).json(new apiError(error.message || "Server Issue", 500));
  }
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(404).json(new apiError("Id is Missing", 404));
    throw new apiError("Id is Missing", 404);
  }

  const deleteTodo = await Todo.findByIdAndDelete(id);

  if (!deleteTodo) {
    res.status(500).json(new apiError("Failed To Delete", 500));
    throw new apiError("Failed to Delete", 500);
  }

  res
    .status(200)
    .json(new apiResponse(200, "Task Deleted Successfully", deleteTodo));
});

export { addTask, editTask, changeTaskStatus, deleteTask };
