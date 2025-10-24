// complete this js code
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    const greeting = `Hello, my name is ${this.name}, I am ${this.age} years old.`;
    console.log(greeting);
    displayOutput(greeting);
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    const jobGreeting = `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
    console.log(jobGreeting);
    displayOutput(jobGreeting);
  }
}

// Expose classes for Cypress tests
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
    person.greet(); // Output and display greeting

    setTimeout(() => {
      const employee = new Employee("Bob", 30, "Manager");
      employee.jobGreet(); // Output and display job greeting
    }, 1000);
  });
}
