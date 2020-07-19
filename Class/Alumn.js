const Person = require('./Person')


class Alumn extends Person {
  constructor(name, age, turm) {
    super(name, age)
    this.turm = turm
  }

  greetns() {
    console.log(`Hello, how are you? My name is ${this.name}, I'm ${this.age} years old and my turm is ${this.turm}`)
  }
}

module.exports = Alumn