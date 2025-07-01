//objects are just like a map with key-value pair

const obj = {
    name: "rayan",
    age: 21,
    greet() {                                                   //implicitly keyed as 'greet'
        console.log("Welcome to JS");
    }
}

console.log(obj['name']);

obj.greet()