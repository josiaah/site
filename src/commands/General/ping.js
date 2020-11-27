const Command = require("../../structures/Command");

module.exports = class Ping extends Command {

    constructor(client) {
        super(client, {
            name: "ping",
            aliases: ["pong"],
            description: "Shows bot ping"
        });
    }

    async run(message, args) {
        const initial = message.createdTimestamp;

        message.channel.send("Pinging...")
            .then(m => {
                const latency = m.createdTimestamp - initial;

                return m.edit(`Pong! Took \`${latency}ms\`.`);
            });
    }
}