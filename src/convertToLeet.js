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

/**
 * Simple method that takes an array of integers and a target number
 * The goal is to find 2 numbers in the array that sum to the target number
 *
 * If two numbers are found to satisfy the requirement, they are returned and an array
 * Otherwise an empty array is returned
 * @param arrayOfNums
 * @param targetSum
 * @returns {string|*[]}
 */
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
    return [];
}


/**
 *
 * @param numerator
 * @param denominator
 */
exports.psuedoDivision = function(numerator, denominator) {
    console.log(`processing ${numerator} / ${denominator}`)
    let returnVal;
    // lets deal with numbers > 0 and deal with sign later
    let newNumerator = Math.abs(numerator);
    let newDenom = Math.abs(denominator);

    let multiplier = -1;

    if((numerator < 0 && denominator < 0) ||(numerator > 0 && denominator>0)){
        multiplier  =1
    }

    if(newNumerator === newDenom){
        returnVal = 1 * multiplier;
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
             console.log(`currentAnswer=${currentAnswer}`)
            if(currentAnswer < 0){
                console.log(`done`)
                count -=1;
                done = true;
            }
        }
        returnVal = count;
    }
    // deal with possibly negative numbers

    return returnVal*multiplier;
};
