var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var coffee = new Gpio(26, 'out'); //use GPIO pin 4, and specify that it is output

function startCoffee() { //function to start blinking
  coffee.writeSync(1);
}


function endCoffee() { //function to stop blinking
  coffee.writeSync(0); // Turn coffee off
  coffee.unexport(); // Unexport GPIO to free resources
  console.log("Coffee machine cleaned!");
}

function brewCoffee(){
    startCoffee();
    setTimeout(endCoffee, 5000); //stop blinking after 5 seconds
}

module.exports = brewCoffee;
