const { Client: DiscordClient, Collection } = require("discord.js");

module.exports = class DuoClient extends DiscordClient {
    constructor(...args) {
        super(...args);

        this.config = require("../config");
    }

    async login(token = null) {
        return super.login(token);
    }
}
