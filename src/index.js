////////////////////////////////////////////
/////         Create Discord App       /////
////////////////////////////////////////////

require("dotenv").config();

const Client = require("./structures/Client");
const client = new Client();

client.login(client.config.TOKEN);