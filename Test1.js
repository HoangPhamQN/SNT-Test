// example
let f = () => {
    let d = new Date(); // current time
    return d.getMilliseconds() % 2 == 0; // => true or false
};

let retry = (f, wait, option) => {
    let temp = f();
    let max = option.max;

    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < wait);

    if (max == null) {
        if (temp == true) return true;
        else return retry(f, wait, option);
    } else {
        if (max < 0) return false;
        else {
            if (temp == true) return true;
            else return retry(f, wait, { max: max - 1 });
        }
    }
}

let result = retry(f, 1000, { max: 10 });
console.log(result)