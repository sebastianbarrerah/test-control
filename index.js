const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.defaults();
const middlewares = jsonServer.defaults();
const port = porcess.env.PORT || 3001;

server.use(middlewares);
server.use(router);

server.listen(port);
