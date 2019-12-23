"use strict";

const {Given, Then, When} = require('cucumber');
const { expect, should } = require('chai');


const utils = require('../../../src/api-calls');

let searchResponse;

When('I search for the company {string}', async function (companyName) {
        searchResponse= await utils.getPatents(companyName);
});


Then('The system should indicate the company has patents as {string}', function (hasPatents) {
    let boolExpected = false;
    if(hasPatents === "true"){
        boolExpected = true;
    }
    expect(searchResponse).to.equal(boolExpected);
});


