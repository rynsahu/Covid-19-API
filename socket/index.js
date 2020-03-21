module.exports = (io) => {
  io.on('connection', socket => {
      console.log("We have a new connection");

      //On join
      socket.on("join", (user) => {
          console.log(`${user.username} connected..`);
      });

      // On disconnect
      socket.on('disconnect', (user) => {
          console.log("user disconnected..");
      });
  })
};