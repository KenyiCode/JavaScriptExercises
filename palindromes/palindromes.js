const palindromes = function(str) {
    let loweredStr = str.toLowerCase().replace(/[\s!.,?]/g,'');

    if (loweredStr.length % 2 == 0){
        return evenPal(loweredStr);
    }
    
    return oddPal(loweredStr);


}

function oddPal(str){
    const midpoint = (str.length /2) - 0.5;
    let firstComparison = str.split("", midpoint + 1);
    let secondComparison = [];

    for (let i = str.length; i > midpoint; i--){
        secondComparison.push(str.charAt(i - 1));
    }

    if (JSON.stringify(firstComparison) == JSON.stringify(secondComparison))    return true;
    
    return false;

}

function evenPal(str){
    const midpoint = str.length / 2;
    let firstComparison = str.split("", midpoint);
    let secondComparison = [];

    for (let i = str.length; i > midpoint; i--){
        secondComparison.push(str.charAt(i - 1));
    }

    if (JSON.stringify(firstComparison) == JSON.stringify(secondComparison))    return true;

    return false;

}

module.exports = palindromes
