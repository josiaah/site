const { findNested } = require("../helpers/Util"),
    Discord = require('discord.js');

module.exports = class EventManager {
    constructor(options = {}) {
        this.dir = options.dir;
        this.client = options.client;

        this.events = new Discord.Collection();
    }

    load() {
        const files = findNested(this.dir, '.js')
        for (const file of files) {
            const evnt = new (require(file))()
            if (!evnt.run || !evnt.name) continue

            this.client.on(evnt.name, evnt.run.bind(null, this.client))

            this.events.set(evnt.name, evnt)
        }

        return { message: 'Successfully loaded events', status: 200 }
    }
}