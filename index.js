//same keys and values
const createInstructor = (firstName, lastName) => {
    return {
        firstName, lastName
    };
}

//computed property names
var favoriteNumber = 42;

var instructor = {
    firstName: "Colt", 
    [favoriteNumber] : "That's my favorite!"
};

//object methods
var instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

  //create animal function
const createAnimal = (species, verb, noise) => {
    let animal = {
        species,
        noise,
        [verb]() {
            console.log(this.noise)
        }
    }

    return animal;
}