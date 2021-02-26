"use strict";
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showAge() {
        if (this.age > 10) {
            return console.log(this.age + 10);
        }
        return console.log(this.age);
    }
    shoName() {
        if (this.name === 'Alex') {
            console.log('hell asadsadyea');
        }
    }
}
let user = new Human('Alex', 29);
console.log(user);
user.showAge();
user.shoName();
