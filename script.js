// Create a Shelter class with empty array of pets
class Shelter {
  constructor() {
    this.pets = [];
  }
  // Create function to add pets to the shelter array
  addPet(pet) {
    this.pets.push(pet);
  }
  // Create function to display the current pets in Shelter
  // Use getInfo() function from Cat and Dog classes to display
  showAllPets() {
    for (let i = 0; i < this.pets.length; i++) {
      let currentPet = this.pets[i];
      currentPet.getInfo();
    }
  }
  // Create function to remove pet from array if 1+ adoption requests
  giveAwayForAdoption() {
    for (let i = 0; i < this.pets.length; i++) {
      let currentPet = this.pets[i];
      if (currentPet.adoptionRequests > 0) {
        console.log(`${currentPet.name} found a home!`);
        this.pets.splice(i, 1);
      }
    }
  }
}

// Create Pet class
class Pet {
  constructor(name, age, adoptionRequests) {
    this.name = name;
    this.age = age;
    this.adoptionRequests = adoptionRequests;
  }
  // Create adopt function to increase adoption requests
  adopt() {
    this.adoptionRequests++;
    console.log(
    `${this.name} has ${this.adoptionRequests} adoption request!`);
  }
}

// Create Cat class
class Cat extends Pet {
  constructor(name, age, adoptionRequests) {
    super(name, age, adoptionRequests);
    this.personality = "I like playing hard to get XD";
  }
  // Create getInfo function to display attributes
  getInfo() {
    console.log(`${this.name}, ${this.age}yo, ${this.personality}`);
  }
}

// Create Dog class
class Dog extends Pet {
  constructor(name, age, adoptionRequests) {
    super(name, age, adoptionRequests);
    this.personality = "I'm loyal and affectionate <3";
  }
  // Duplicate getInfo function from Cat class
  getInfo() {
    console.log(`${this.name}, ${this.age}yo, ${this.personality}`);
  }
}

// Create instance of Shelter, Dog, and Cat
const shelter = new Shelter();
const mikan = new Cat("mikan", 2, 0);
const marco = new Dog("marco", "10", "0");

// Put mikan and marco in the shelter
shelter.addPet(mikan);
shelter.addPet(marco);

// Display the pets in the shelter
shelter.showAllPets();
// >> mikan, 2yo, I like playing hard to get XD
// >> marco, 10yo, I'm loyal and affectionate <3

// Create an adoption request for mikan
mikan.adopt();
// >> mikan has 1 adoption request!

// Send mikan to the new adoptee
shelter.giveAwayForAdoption();
// >> mikan found a home!

// Display the new list of pets
shelter.showAllPets();
// >> marco, 10yo, I'm loyal and affectionate <3 
