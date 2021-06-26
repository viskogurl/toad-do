'use strict';

// Welcome to the meat and bones of Toad-Do.
//
// Klar (German for clean or crisp) is a simple utils library
// meant to replace repetitive async-await code by condensing
// the error handling into one place.
//
// In 20 lines of code, Klar gets rid of the need for try-catching 
// asyncronous function by returning the Promise data or error in 
// an Array.

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

const resify = (res, data, error) => {
    data ? res.status(200).json({ data }) : res.status(404).json({ "errors": String(error) });
}

module.exports = { tryify, throwify, resify };