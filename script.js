// Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    // EXACT output for Cypress validation
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Employee class extending Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    // Call parent constructor
    super(name, age);
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    // EXACT output for Cypress validation
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Export for Cypress test environment
if (typeof module !== "undefined" && module.exports) {
  module.exports = { Person, Employee };
}
