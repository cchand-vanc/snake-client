const { IP, PORT } = require("./constants");

const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", () => {
    console.log("Wow we're connected to the game server!")
  });

  conn.on("connect", () => {
    conn.write("Name: MCD");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.setEncoding("utf8");

  return conn;

};

module.exports = { connect };

