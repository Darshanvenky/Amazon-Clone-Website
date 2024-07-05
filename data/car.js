/*class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
    //this.speed = carDetails.speed;
  }

  displayInfo() {
    console.log(`brand: ${this.#brand}  model: ${this.#model}  speed: ${this.speed} km/hr trunkInfo: ${this.isTrunkOpen}`);
  }

  go() {

    if (this.isTrunkOpen === true) {
      this.speed = 0;
    } else {
      this.speed +=5;
    }
    

    if (this.speed > 200) {
      this.speed = 200;
    }
  }
  

  break() {
    this.speed -=5;

    if (this.speed < 0) {
      this.speed = 0;
    }
  }


  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;

  }

}



class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    this.speed += this.acceleration;
    if (this.speed > 300) {
      this.speed =300;
    }
  }

  openTrunk() {
    console.log('Race cars do not have a trunk.');
  }

  closeTrunk() {
    console.log('Race cars do not have a trunk.');
  }


}

const raceCar1 = new RaceCar(
  {
    brand: 'Mercedes',
    model: 'F1',
    acceleration: 20
  }
); 

console.log(raceCar1);
raceCar1.go();
raceCar1.go();
raceCar1.displayInfo();
raceCar1.go();
raceCar1.go();
raceCar1.go();
raceCar1.go();
raceCar1.displayInfo();
raceCar1.openTrunk();
raceCar1.break();
raceCar1.displayInfo(); */











 /* const car1 = new Car(
{
  brand: 'Toyota',
  model: 'Corolla',
  //speed: 115
}
);


const car2 = new Car(
  {
    brand: 'Tesla',
    model: 'Model 3',
    //speed: 180
  }
);

console.log(car1);
console.log(car2);

car1.go();
car2.go();

car1.go();
car2.break();

car1.break();
car2.break();

car1.go();
car1.go();
car1.go();
car1.go();

car2.go();
car2.go();
car2.go();
car2.go();
//car2.go();

car1.openTrunk();
car1.go();
car1.closeTrunk();
car1.go();
car1.go();


car2.openTrunk();
car2.go();
console.log(car2.closeTrunk());
car2.go();



console.log(car1.displayInfo());
console.log(car2.displayInfo()); */


