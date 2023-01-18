const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541"
  });

  conn.on("connect", () => {
    console.log("Wow we're connected to the game server!")
  });

  conn.on("connect", () => {
    console.log("Name: MCD");
  });


  conn.on("data", (data) => {
    console.log(data);
  });
  


  conn.setEncoding("utf8");

  return conn;

};

module.exports = connect;
