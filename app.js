function once(fn) {
    let done = false;
    return (...args) => {
        if (!done) {
            done = true;
            fn(...args)
        }

    }
}

// this is the test version that required no extra variables (2.1)
function onceAfter(fn, after) {
    return (...args) => {
        fn(...args);
        fn = (...args) => after(...args);
    }
}

function thisManyTimes(fn, n) {
    let count = 0;
    return (...args) => {
        if (count < n) {
            count++;
            return fn(...args);
        }
    }
}

// (2.2) write an alternating function with tests. This implementation is ugly as hell though.
function alternate(fn, otherFn) {
    let returnFunc = 1;
    return (...args) => {
        switch (returnFunc) {
            case 1:
                returnFunc = 2;
                return fn(...args);
            case 2:
                returnFunc = 1;
                return otherFn(...args);
        }
    }
}

let poop = alternate(() => {
    console.log("test1")
}, () => {
    console.log("test2")
});

poop();
