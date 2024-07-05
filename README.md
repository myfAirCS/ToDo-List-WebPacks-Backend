Sure, here's a sample `README.md` for your To-Do List project using Webpack, Express, and MongoDB:

```markdown
# To-Do List Web Application

This is a full-stack To-Do List web application built with HTML, CSS, JavaScript, Webpack, Express, and MongoDB. The application allows users to register, log in, add, update, and delete tasks. It also uses JWT for authentication and authorization.

## Features

- User Registration and Login
- Add, Update, and Delete Tasks
- JWT-based Authentication and Authorization
- Secure cookie handling
- Responsive Design

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Build Tool**: Webpack

## Project Structure

```
.
├── Backend
│   ├── controllers
│   │   ├── users.controller.js
│   │   ├── todos.controller.js
│   ├── middlewares
│   │   ├── auth.middleware.js
│   ├── models
│   │   ├── users.model.js
│   │   ├── todos.model.js
│   ├── routes
│   │   ├── users.routes.js
│   │   ├── todos.routes.js
│   ├── utils
│   │   ├── apiError.js
│   │   ├── asyncWrapper.js
│   │   ├── apiResponse.js
│   ├── app.js
│   ├── server.js
│   ├── index.js
├── Public
│   ├── dist
│   ├── src
│   │   ├── assets
│   │   ├── pages
│   │   ├── styles
│   │   ├── utils
│   ├── index.html
├── .prettierrc
├── package.json
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
└── README.md
```

## Setup and Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB (installed and running)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/myfAirCS/ToDo-List-WebPacks-Backend.git
cd ToDo-List-WebPacks-Backend
```

2. Install dependencies:

```sh
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string

JWT_SECRET_ACCESS=your_jwt_access_secret
JWT_SECRET_ACCESS_EXPIRY=time

JWT_SECRET_REFRESH=your_jwt_refresh_secret
JWT_SECRET_REFRESH_EXPIRY=time

```

4. Build the frontend assets using Webpack:

```sh
npm run build
```

5. Start the server:

```sh
npm start
```

### Running in Development Mode

To run the application in development mode with hot-reloading:

```sh
npm run dev
```

## API Endpoints

### User Routes

- **POST /api/v1/user/register**: Register a new user
- **POST /api/v1/user/login**: Log in a user
- **POST /api/v1/user/logout**: Log out a user (secured route)

### Todo Routes

- **POST /api/v1/todo/addtask**: Add a new task (secured route)
- **PATCH /api/v1/todo/updatetask/:_id**: Update a task (secured route)
- **DELETE /api/v1/todo/deletetask/:_id**: Delete a task (secured route)
- **GET /api/v1/todo/:id/gettasks**: Get tasks for a user (secured route)

## Usage

1. Register a new user using the registration form on the frontend.
2. Log in with the registered user credentials.
3. Add tasks using the input field and manage them (update status, delete) through the interface.
4. The application uses JWT for authentication and stores tokens in secure cookies.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests.

## License

This project is licensed under the MIT License.
```

Make sure to update the placeholders like `your-username` and `your_mongodb_connection_string` with your actual GitHub username and MongoDB connection string, respectively. Additionally, you might want to customize the project description and other details to better fit your specific implementation and preferences.
