let connection;
// setup interface to handle user input from stdin

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};


const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }
     if (key === '\u0077') {
      connection.write("Move: up")
    }  
     if (key === '\u0061') {
      connection.write("Move: left")
    } 
     if (key === '\u0073') {
      connection.write("Move: down")
    } 
     if (key === '\u0064') {
      connection.write("Move: right")
    } 
  };


  module.exports = { setupInput }