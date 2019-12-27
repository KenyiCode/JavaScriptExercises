const fibonacci = function(index) {
    if (index < 0 || !Number.parseInt(index)) return "OOPS";
    
    let fibArr = [1, 1];

    for (let i = fibArr.length; i < index; i++){
        let nextValue = fibArr[i-1] + (fibArr[i-2]);
        fibArr.push(nextValue);
    }

    return fibArr[index - 1];
}

module.exports = fibonacci
