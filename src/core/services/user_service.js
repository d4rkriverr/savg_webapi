const utils = require("../utils");

class UserService {
    repos;
    constructor(repos) { this.repos = repos }

    Authenticate = (username, password) => {
        const user = this.repos.user.GetOneByUsername(username)
        if (user == null)
            return { success: false, message: "invalid credentials" }
        if (user.password != password) {
            return { success: false, message: "invalid credentials" }
        }
        let token = utils.GenerateTokenFromUser(user)
        return { success: true, payload: token }
    }
}

module.exports = UserService;