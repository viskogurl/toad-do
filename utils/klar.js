'use strict';

// Welcome to the meat and bones of Toad-Do.
//
// Klar (German for clean or crisp) is a simple utils library
// meant to condense repetitive async-await code by replacing
// it with simple functions.
//
// In 15 lines of code, Klar gets rid of the need for try-catching 
// asyncronous function by returning the Promise data and error in 
// and Array.

const tryify = async (promise) => {
    try {
        const data = await promise;
        return [data, null];
    } catch (err) {
        return [null, err];
    }
}

const throwify = (error) => {
    throw new Error(error);
}

module.exports = { tryify, throwify };