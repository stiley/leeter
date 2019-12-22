"use strict";
/**
 * Simple function that replaces characters in the given string to create what is called a leet
 * in this implementation the following replacements are done.
 * a -> 4, e -> 3, i -> 1, o -> 0,
 * s -> 5, t -> 7 ,b -> 5, D ->5
 * NOTE that the comparisons are case in-sensitive so 'A' and 'a' are treated the same and replaced with 4 etc..
 *
 * @param stringToBeConverted - the string to be converted to the leet
 * @returns {string}
 */
exports.convertToLeet = function(stringToBeConverted) {
    let convertedString = "";

    if(stringToBeConverted) {
        convertedString = stringToBeConverted
            .replace(/[a]/gi, '4')
            .replace(/[e]/gi, '3')
            .replace(/[i]/gi, "1")
            .replace(/[o]/gi, "0")
            .replace(/[s]/gi, "5")
            .replace(/[t]/gi, "7")
            .replace(/[D]/g, "5")
            .replace(/[b]/g, "5")
    }
    console.log(`Converted ${stringToBeConverted}   ==>   ${convertedString}`)
    return convertedString;
};

//[1,3,4,5,6,9]

exports.findNumbers = function(arrayOfNums, targetSum){
    let sum=0;
    for(let count=0; count<arrayOfNums.length; count++){
        for(let idx2=count+1; idx2<arrayOfNums.length; idx2++){
            sum =arrayOfNums[count] + arrayOfNums[idx2];
            if(sum == targetSum) {
                console.log(`Found ints to add to target ${arrayOfNums[count]} and ${arrayOfNums[idx2]}`)
                return [ arrayOfNums[count], arrayOfNums[idx2]];
            }
        }
    }
    return "Sorry";
}


/**
 *
 * @param numerator
 * @param denominator
 */
exports.psuedoDivision = function(numerator, denominator) {
    let returnVal;
    let newNumerator = Math.abs(numerator);
    let newDenom = Math.abs(denominator);

    if(newNumerator === newDenom){
        returnVal = 1;
    }
    else if(newNumerator < newDenom){
        returnVal = 0;
    }
    else{ // lets try division
        let count = 1;
        let done = false;
        let currentAnswer = newNumerator - newDenom;
        // console.log(`currentAnswer=${currentAnswer}`)
        // console.log("---"+currentAnswer)
        while(!done){
            count +=1;
            currentAnswer -= newDenom;
            // console.log(`currentAnswer=${currentAnswer}`)
            if(currentAnswer < 0){
                console.log(`done`)
                count -=1;
                done = true;
            }
        }
        returnVal = count;
    }
    // deal with possibly negative numbers
    if(numerator < 0 || denominator < 0)
    {
        returnVal *=-1;
    }

    return returnVal;
};


// findNumbers([1,3,4,5,6],13)
// console.log("here")