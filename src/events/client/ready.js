const Event = require("../../struct/templates/Event")

module.exports = class extends Event {
  constructor() {
    super("ready");
  }

  exec(client) {
    console.log(`Logged in as ${client.user.tag}`);
  }
};