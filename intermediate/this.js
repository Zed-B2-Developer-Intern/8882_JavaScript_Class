
const obj = {
    name: "Arthur Morgan",
    age: 36,
    occupation: "outlaw",
    greet() {
        console.log(`You are good man, ${this.name}`);
    }
}

//'this' keyword refers to it's object itself

obj.greet()         //You are a good man, Arthur Morgan

const another = {
    name: "Joel Miller"
}

another.greet = obj.greet

another.greet()     ////You are a good man, Joel Miller

this.name = "Jin Sakai"

objWithArrowFunc = {
    name: "Arthur Morgan",
    age: 36,
    occupation: "outlaw",
    greet: () => {
        console.log(`You are good man, ${this.name}`)//it infers 'this' keyword from lexical scoping as it is arrow function
    }
}

objWithArrowFunc.greet()

class MyClass {
    name = "Franklin"

    objWithArrowFunc = {
        name: "Arthur Morgan",
        age: 36,
        occupation: "outlaw",
        greet: () => {
            console.log(`You are good man, ${this.name}`)//'this' is infered from lexical scope which the 'name' is defined inside the class
        }
    }
}

new MyClass().objWithArrowFunc.greet()