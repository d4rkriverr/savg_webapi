const express = require("express");
const UserController = require("./endpoints.js");

const BuildUserModule = (app, uri) => {
    const ctl = new UserController(app.Services)
    const router = express.Router()

    router.post('/auth', ctl.UserLogin);
    router.post('/create', ctl.UserCreate);
    router.post('/info', ctl.UserInfo);

    app.Router.use(uri, router)
}
module.exports = BuildUserModule;