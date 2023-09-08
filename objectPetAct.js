let pet = {
  name: "Champ",
  typeOfPet: "dog",
  age: "2",
  colour: "white",

  eat: () => {
    return "Champ is eating bisuits";
  },
  drink: () => {
    return "Champ is drinking water.";
  },
};

console.log(pet["name"]);
console.log(pet["typeOfPet"]);
console.log(pet["age"]);
console.log(pet["colour"]);

console.log(pet.eat());
console.log(pet.drink());
