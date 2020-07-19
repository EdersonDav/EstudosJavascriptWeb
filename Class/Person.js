class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }
  greetns() {
    console.log(`Hello, how are you? My name is ${this.name}, I'm ${this.age} years old`)
  }
}

module.exports = Person