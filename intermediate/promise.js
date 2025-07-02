//a 'promise' is a special object in js that can do I/O process efficiently without halting whole process

const promise = new Promise((res, rej) => {
    setTimeout(() => { res("promise returned value") }, 3000)
})

promise.then(result => console.log(result))

console.log("hello world");