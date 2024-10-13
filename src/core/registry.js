const UserService = require("./services/user_service");

const UserRepository = require("./repositories/user_repo");

const RegisterServices = (app) => {
    const repos = {
        user: new UserRepository()
    }
    app.Services = {
        UserService: new UserService(repos),
    }
}

module.exports = RegisterServices;