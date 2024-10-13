
const express = require('express');
const bodyParser = require('body-parser');

const BuildUserModule = require("./http/users/registry.js");
const RegisterServices = require('./core/registry.js');

class App {
    app = {};
    port = 3000;

    constructor(port) {
        this.port = port;
        this.app.Router = express()
        this.app.Router.use(bodyParser.json())

        this.buildServices()
        this.buildModules()
    }

    buildModules = () => {
        BuildUserModule(this.app, '/api/v1/users')
    }

    buildServices = () => {
        RegisterServices(this.app)
    }

    execute = () => {
        this.app.Router
            .listen(this.port, () => console.log(`[!] Server running on http://localhost:${this.port}`))
    }
}
module.exports = App;