const Command = require("../../structures/Command");

module.exports = class Suspend extends Command {

    constructor(client) {
        super(client, {
            name: "suspend",
            aliases: ["disable"],
            description: "Suspend a server."
        });
    }

    async run(message, args, app) {
        if (args.length > 0) {
            let arg;
            let found = false;
            if (args.length == 1) {
                arg = args[0];
            } else {
                arg = args.join(' ');
            }
            let isNum = /^-?[\d.]+(?:e-?\d+)?$/.test(arg);
            app.getAllServers().then((res) => {
                if (!isNum) {
                    for (let i = 0; i < res.length; i++) {
                        if (res[i].attributes.name == arg) {
                            arg = res[i].attributes.id;
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        return message.reply(
                            `Server **${arg}** was not found!`
                        );
                    }
                }
                app.suspendServer(arg).then((res) => {
                    const embed = new MessageEmbed()
                        .setTitle(res)
                        .setTimestamp();
                    message.channel.send(embed);
                });
            });
        } else {
            message.reply('Server not found. Provide ID and the Name.');
        }
    }
}