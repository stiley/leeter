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
module.exports = function convertToLeet(stringToBeConverted) {
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
    return convertedString;
};





