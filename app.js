const express = require("express");
const http = require("http");
const socket = require("socket.io");

//App
const app = express();
const server = http.createServer(app);
const io = socket(server);

//Routes
require("./routes")(app);
require("./socket")(io);

//PORT
const PORT = process.env.PORT || 3050;

//Server
server.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}...`);
});
