"use strict";

const {Given, Then, When} = require('cucumber');
require('chai').should();
const leeter = require('../../../src/convertToLeet.js');

let target;

When('I convert {string} to a leet', function (stringToBeConverted) {
    target = leeter(stringToBeConverted);
});

Then('the converted phrase should match {string}', function(expectedResult){
    target.should.equal(expectedResult);
});
