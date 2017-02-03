class Person {
firstname: string;
lastname: string;
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}
let me = new Person('Tony', 'Chen');
console.log(me);
