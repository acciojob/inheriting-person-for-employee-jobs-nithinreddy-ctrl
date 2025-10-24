class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Expose classes for Cypress test access
window.Person = Person;
window.Employee = Employee;

// Demo UI functionality (optional)
function displayOutput(msg) {
  const output = document.getElementById('output');
  if (output) output.textContent = msg;
}

const demoBtn = document.getElementById('demoBtn');
if (demoBtn) {
  demoBtn.addEventListener('click', () => {
    const person = new Person("Alice", 25);
    person.greet(); // Output to console for Cypress test
    displayOutput(`Hello, my name is Alice, I am 25 years old.`);

    setTimeout(() => {
      const employee = new Employee("Bob", 30, "Manager");
      employee.jobGreet(); // Output to console for Cypress test
      displayOutput(`Hello, my name is Bob, I am 30 years old, and my job title is Manager.`);
    }, 1200);
  });
}
