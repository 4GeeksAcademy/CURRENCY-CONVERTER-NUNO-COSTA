// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


const fromEuroToDollar = function(euro){
    let dollar = euro * 1.2;
    return dollar;
}


const fromDollarToYen = function(dollar){
    let yen = dollar * 146.18;
    return yen;
}

const fromYenToPound = function(yen){
    let pound = yen * 0.0054;
    return pound;
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};