// Your code here

class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex =  sex;
    }
    
    speak() {
        return `${this.name} Says meow!`;
    }
}

class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex =  sex;
    }

    speak() {
        return `${this.name} Says woof!`;
    }
}

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex =  sex;
    }

    speak() {
        if (this.sex == "Male") { return `It's me! ${this.name}, the parrot!`; }
        else { return `${this.name} Says Squawk!`; }
    }
}