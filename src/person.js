export class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
  bio() {
    return `${this.name} is ${this.age} years old. They like ${this.interests}`;
  }
  greeting() {
    return `Hi! I'm ${this.name}`;
  }
}
