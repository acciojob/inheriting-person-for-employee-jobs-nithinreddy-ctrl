// Person class definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    const message = `Hello, my name is ${this.name}, I am ${this.age} years old.`;
    console.log(message);
    document.getElementById("output").textContent = message;
  }
}

// Employee class inheriting from Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call parent constructor
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    const message = `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
    console.log(message);
    document.getElementById("output").textContent = message;
  }
}

// Example usage with buttons
document.getElementById("personBtn").addEventListener("click", () => {
  const person = new Person("Alice", 25);
  person.greet(); // Output: Hello, my name is Alice, I am 25 years old.
});

document.getElementById("employeeBtn").addEventListener("click", () => {
  const employee = new Employee("Bob", 30, "Manager");
  employee.jobGreet(); // Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
});

