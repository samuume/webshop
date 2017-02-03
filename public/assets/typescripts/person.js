var Person = (function () {
    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Person.prototype.fullname = function () {
        return this.firstname + " " + this.lastname;
    };
    return Person;
}());
var me = new Person('Tony', 'Chen');
console.log(me);
