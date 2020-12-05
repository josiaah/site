require("dotenv").config();

const Bot = require("./struct/base/Client");
const config = require("./config");

const Client = new Bot({
    token: config.token,
    prefix: config.prefix,
    uri: config.database,
})

Client.login({ login: true });