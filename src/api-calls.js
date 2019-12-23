
"use strict"

const axios = require('axios');

const baseURL = 'https://developer.uspto.gov/ibd-api/v1/patent/application?searchText=';

/**
 *
 * @param companyName
 * @returns {Promise<boolean>}
 */
exports.getPatents = async function(companyName){

    let hasPatents = false;
    const instance = axios.create({
        timeout: 10000,
        headers: {'Accepts': 'application/json'}
    });

    const patentSearchURL = baseURL + encodeURI(companyName);
    // console.log(patentSearchURL);
    let response;
    try{
        response = await instance.get(patentSearchURL);
        if(response.status!==200){
            console.log(`Expected response code of 200, but got ${response.status}`);
        }
        const numPatents = response.data["response"]["numFound"];
        // console.log(response.headers);
        // console.log(response.data["response"]["numFound"]);
        hasPatents = numPatents> 0 ? true:false;
    }
    catch (error) {
        console.log(`Error caught => ${error.toString()}`)
    }
    return hasPatents;
}





// getPatents("Ford motor Company")