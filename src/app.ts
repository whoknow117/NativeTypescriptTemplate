class Human {
    name: string;
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age

    }
    showAge () {
        if(this.age > 10) {
            return console.log(this.age + 10)
        }
        return  console.log(this.age)
    }
    shoName () {
        if(this.name === 'Alex') {
            console.log('hell asadsadyea')
        }
    }
}

let user : Human = new Human('Alex', 29);

console.log(user);

user.showAge()
user.shoName()


