

function longx(string) {
    let exes = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'x') {
            exes++;
        }
        if (string[i] !== 'x') {
            exes === exes;
        }
    }
    return exes;
}

console.log(longx('asdxxxjdixxiij'))