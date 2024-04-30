

function Automobile(make, model, year, color, fuelType) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.fuelType = fuelType;
  }
  
  // Add methods to the prototype of Automobile
  Automobile.prototype.start = function() {
    console.log("The engine has started.");
  };
  
  Automobile.prototype.stop = function() {
    console.log("The engine has stopped.");
  };
  
  // Create a four-wheeler object using the constructor function
  const myCar = new Automobile("Tata", "Nexon", 2024, "Blue", "Petrol");
  
  // Test the inherited methods
  myCar.start(); 
  myCar.stop();