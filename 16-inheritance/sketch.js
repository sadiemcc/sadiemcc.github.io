// OOP Inheritance demo

let speedy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // speedy = new Vehicle("lunchbox", "car");
  speedy = new Car("lunchbox");
  console.log(speedy.getName());
  console.log(speedy.getType());
}

function draw() {
  background(220);
}

class Vehicle {
  constructor(name, type){
    this.name = name;
    this.type = type;
  }

  getName(){
    return this.name;
  }

  getType(){
    return this.type;
  }
}

class Car extends Vehicle {
  constructor(name){
    super(name, "car");
  }

  getName(){
    return "This is a car called " + super.getName();
  }
}