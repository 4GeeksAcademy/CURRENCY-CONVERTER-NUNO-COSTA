// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))


const fromEuroToDollar = function(euro){
    let dollar = euro * 1.2;
    return dollar;
}


const fromDollarToYen = function(dollar){
    let yen = dollar * 146.2;
    return yen;
}

const fromYenToPound = function(yen){
    let pound = yen * 0.0054;
    return pound;
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};