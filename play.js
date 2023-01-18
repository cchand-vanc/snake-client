const connect = require("./client");

console.log('Connecting ...');

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const stdin = process.stdin;

const handleUserInput = function () {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }    
  })};



connect();
setupInput();