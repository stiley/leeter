"use strict";

const {Given, Then, When} = require('cucumber');
require('chai').should();
const division = require('../../../src/convertToLeet.js');
let target;

/**
 *
 */
When('I divide {int} by {int}', function (numerator,denominator) {
    target = division.psuedoDivision(numerator,denominator);
    console.log("--------------"+target);
});


Then('The response should be equal to {int}',function(answer){
    target.should.equal(answer);
})


