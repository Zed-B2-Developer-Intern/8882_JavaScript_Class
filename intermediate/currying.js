function add(a) {
    return function(b){
        return a + b
    }
}

const result = add(5)(2)

console.log(result);