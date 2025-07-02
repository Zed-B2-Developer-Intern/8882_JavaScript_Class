//let and const are block scoped
//var is function scoped

//var a = undefined

console.log(a)       //undefined

console.log(b)      //reference error

if(true) {
    //const b

    const b = "block scoped meaning that it hoisted inside this if block only"

    var a = "function scoped meaning that it hoisted on the top of the function"
}