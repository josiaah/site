module.exports = class Ready {

    constructor(client) {
        this.client = client;
    }

    run() {
        console.log("Bot is online!");
        this.client.user.setActivity(`DuoNodes.me`, {
        type: 'WATCHING',
        });
    }
}