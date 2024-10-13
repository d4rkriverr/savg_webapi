const crypto = require('crypto');
const utils = require("../utils");

class UserService {
    repos;
    constructor(repos) { this.repos = repos }

    Authenticate = async (username, password) => {
        const user = await this.repos.user.GetOneByUsername(username)
        if (user == null)
            return { success: false, message: "invalid credentials" }
        const hashedPassword = crypto.createHash('md5').update(password).digest('hex')
        if (hashedPassword != user.password)
            return { success: false, message: "invalid credentials" }
        let token = utils.GenerateTokenFromUser(user)
        const r = await this.repos.user.UpdateAccessToken(user.id, token)
        if (r == null) return { success: false, message: "internal error" }
        return { success: true, payload: token }
    }
    
    NewUser = async (username, password, role) => {
        const user = await this.repos.user.GetOneByUsername(username)
        if (user != null) return { success: false, message: "username already in use" };
        const hashedPassword = crypto.createHash('md5').update(password).digest('hex')
        const r = await this.repos.user.CreateUser({ username, password: hashedPassword, role })
        return r;
    }
}

module.exports = UserService;