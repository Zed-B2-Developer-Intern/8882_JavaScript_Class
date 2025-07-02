function closure() {
    let a = 0

    return function() {
        console.log(++a)
    }
}

const func = closure()    //even though the outer function is terminated, still 'a' is closure to the inner function
                          // and 'a' is copied from stack to heap

func()          //1

func()          //2