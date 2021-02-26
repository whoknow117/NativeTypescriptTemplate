var Human = /** @class */ (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    Human.prototype.showAge = function () {
        if (this.age > 10) {
            return console.log(this.age + 10);
        }
        return console.log(this.age);
    };
    Human.prototype.shoName = function () {
        if (this.name === 'Alex') {
            console.log('hell asyea');
        }
    };
    return Human;
}());
var user = new Human('Alex', 29);
console.log(user);
user.showAge();
user.shoName();
