//async function is the syntactic sugar of the promise object

async function asyncFunc() {
    const result = await new Promise(resolve => setTimeout(resolve.bind(this, "Async function"), 3000));    //halt this function and execute other functions
    console.log(result);
    console.log("this function");
}

function normalFunc() {
    console.log("Normal function");
    
}

asyncFunc()

normalFunc()        //immediatley pushed to the stack for executions after the above function halted

