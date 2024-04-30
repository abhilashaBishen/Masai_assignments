
function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
  }
  
  // Adding methods to the prototype of Vehicle
  Vehicle.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h`);
  };
  
  Vehicle.prototype.brake = function() {
    this.speed -= 10;
    console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} km/h`);
  };
  
  Vehicle.prototype.refuel = function() {
    console.log(`${this.brand} ${this.model} is refueling.`);
  };
  
  // Car constructor function inheriting from Vehicle
  function Car(brand, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
  }
  
  // Inherit prototype methods from Vehicle
  Car.prototype = Object.create(Vehicle.prototype);
  
  // Adding additional method for Car
  Car.prototype.honk = function() {
    console.log("Honk! Honk!");
  };
  
  // Airplane constructor function inheriting from Vehicle
  function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
  }
  
  // Inherit prototype methods from Vehicle
  Airplane.prototype = Object.create(Vehicle.prototype);
  
  // Adding additional method for Airplane
  Airplane.prototype.takeOff = function() {
    console.log(`${this.brand} ${this.model} is taking off.`);
  };
  
  // Creating instances of Car and Airplane
  const myCar = new Car("Toyota", "Corolla", 0, "Petrol", 4);
  const myAirplane = new Airplane("Boeing", "747", 0, "Jet Fuel", 4, true);
  
  // Test methods
  myCar.accelerate();
  myCar.brake();
  myCar.refuel();
  myCar.honk();
  
  myAirplane.accelerate();
  myAirplane.brake();
  myAirplane.refuel();
  myAirplane.takeOff();