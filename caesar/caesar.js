const capitalStart = 65, capitalEnd = 90, lowerStart = 97, lowerEnd = 122;

const caesar = function(str, shift) {
    let newStr = [];
    let punctuationArr = [];
    let punctuationIndex = [];
    let punctuationRegex = /[^a-zA-Z0-9]/g;

    for (let i = 0; i < str.length; i++){
        if (punctuationRegex.test(str.charAt(i))){
            punctuationIndex.push(i);
            punctuationArr.push(str.charAt(i));
            continue;
        }
        
        let temp = str.charAt(i);

        newStr.push(codeChange(temp, shift));  
    }

    for (let i = 0; i < punctuationArr.length; i++){
        newStr.splice(punctuationIndex[i], 0, punctuationArr[i]);
    }

    let newerStr = newStr.join("");
    newerStr = newerStr.replace("%", " ");

    return newerStr;

}

function codeChange(charToShift, shift){
    let newChar = charToShift.charCodeAt(0);

    if (newChar >= capitalStart && newChar <= capitalEnd){
        if (shift >=0 ) {
            for (let i = 0; i < shift; i++){
                newChar++;
    
                if (newChar > capitalEnd) newChar = capitalStart;
            }
        }
        else {
            for (let i = 0; i > shift; i--){
                newChar--;

                if (newChar < capitalStart) newChar = capitalEnd;
            }
        }
        return String.fromCharCode(newChar);
    }
    else if (newChar >= lowerStart && newChar <= lowerEnd) {
        if (shift >=0 ) {
            for (let i = 0; i < shift; i++){
                newChar++;
    
                if (newChar > lowerEnd) newChar = lowerStart;
            }
        }
        else {
            for (let i = 0; i > shift; i--){
                newChar--;

                if (newChar < lowerStart) newChar = lowerEnd;
            }
        }
        return String.fromCharCode(newChar);
    }
    else {
        return String.fromCharCode(charToShift.charCodeAt(0));
    }
}

module.exports = caesar
