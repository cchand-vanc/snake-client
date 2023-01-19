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
     if (key === 'w') {
      connection.write("Move: up")
    }  
     if (key === 'a') {
      connection.write("Move: left")
    } 
     if (key === 's') {
      connection.write("Move: down")
    } 
     if (key === 'd') {
      connection.write("Move: right")
    } 
    if (key === 'f') {
      connection.write("Say: NAGINI, EAT!")
    }
  };


  module.exports = { setupInput }