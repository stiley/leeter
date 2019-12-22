"use strict";

const {Given, Then, When} = require('cucumber');
const { expect, should } = require('chai');


const utils = require('../../../src/convertToLeet.js');

let targetSum;
let solution=[];

/**
 *
 */
When('I pass the array os integers {string} and look for the sum of {string}', function (string_list_of_ints, target_sum) {
    let listOfINts = string_list_of_ints.split(",").map(function(num) {return parseInt(num)});
    targetSum = parseInt(target_sum);
    console.log(`Looking for target sum of ${targetSum} in ${listOfINts}`)
    // console.log(Array.isArray(listOfINts))
    solution=utils.findNumbers(listOfINts,targetSum)
    // console.log(solution)
});


Then('The system should identify the result as {string}', function (string_list_of_answer) {
    let answerList = string_list_of_answer.split(",").map(function(num) {return parseInt(num)});
    console.log(`Solution = ${solution} is type ${typeof solution}`);
    console.log(`Answer List = ${answerList} is type ${typeof answerList}`);
    console.log(answerList)
    expect(solution).to.include(answerList[0]);
    expect(solution).to.include(answerList[1]);

});
