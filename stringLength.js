const stringLength = (str) => { 
    const counter =  str.length;
    if (counter > 0 && counter <= 10) {
        return counter
    }
}

module.exports = stringLength;