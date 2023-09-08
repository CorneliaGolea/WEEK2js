let person = {
  name: "John",
  age: 23,
  colors: ["blue", "red", "green"],
  sayHy() {
    console.log(this.name);
  },
};

person.city = "Chester";

(person.name = "Jack"), console.log(person.name);

console.log(person["name"]);

console.log(person.colors[1]);
