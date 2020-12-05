const { Client: DiscordClient } = require("discord.js"),
    { resolve } = require("path"),
    EventManager = require("../managers/Event"),
    mongoose = require("mongoose");

module.exports = class Bot extends DiscordClient {
    constructor(options = {}) {
        super(options);

        this.token = options.token;
        this.config = options.config;
        this.database = options.database;

        this.embed = require("./Embed");
        this.util = require("../helpers/Util");

        this.evnt = new EventManager({
            dir: resolve("src/events/"),
            client: this,
        });
    }

    async login(options = {}) {
        this.connect();
        this.evnt.load();
        if (options.login) this.login(this.token);
        console.log("Successfully Logged In.");
    }

    async connect() {
        await mongoose.connect(this.database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to Mongoose Database.")
    }
}