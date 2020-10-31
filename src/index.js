const Server = require('./server');
const { settings } = require('./config');

const server = new Server(settings.PORT);
server.start();
