"use strict";

/**
 * Parses a JSON value
 *
 * @param {string} value
 *
 * @return {number|boolean|null|string}
 */
function parseJsonValue(value) {
    if (value.match(/^[-+]?\d+$/)) {
        return parseInt(value);
    }

    if (value.match(/^[-+]?\d*\.\d+$/)) {
        return parseFloat(value);
    }

    if (value.match(/^true$/i)) {
        return true;
    }

    if (value.match(/^false$/i)) {
        return false;
    }

    if (value.match(/^null$/i)) {
        return null;
    }

    return value;
}

module.exports = {
    parseJsonValue,
};
