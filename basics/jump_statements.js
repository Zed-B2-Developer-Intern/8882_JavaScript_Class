function printEven(arr) {
    for(let i in arr) {
        if(arr[i] % 2 != 0) {
            continue                    //ignore the current loop
        }
        else {
            console.log(arr[i]+ " ");
        }
    }
}

function isIncludes(arr, target) {
    let flag = false
    for(let i of arr) {
        if(i === target) {
            flag = true
            break                       //breaks the loop
        }
    }
    return flag
}

function isIncludes2(arr, target) {
    for(let i of arr) {
        if(i === target) {
            return true                 //terminated
        }
    }
    return false
}
