let person = {
  name: "Cornelia",
  age: "42",
  sayHi: () => {
    return "Hello my name is ${this.name}";
  },
};

console.log(person["name"]);

console.log(person.sayHi());
