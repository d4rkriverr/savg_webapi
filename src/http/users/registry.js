const express = require("express");
const UserController = require("./endpoints.js");
const validateToken = require("../middlware.js");

const BuildUserModule = (app, uri) => {
    const ctl = new UserController(app.Services)
    const router = express.Router()

    router.post('/auth', ctl.UserLogin);
    router.post('/create', validateToken(app.database), ctl.UserCreate);
    router.post('/info', validateToken(app.database), ctl.UserInfo);

    app.Router.use(uri, router)
}
module.exports = BuildUserModule;