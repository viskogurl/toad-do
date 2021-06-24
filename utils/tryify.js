'use strict';

// A simple utility function to elimate the need
// for try-catching asyncronous function

const tryify = async (promise) => {
    try {
        const data = await promise;
        return [data, null];
    } catch (err) {
        return [null, err];
    }
}

module.exports = tryify;