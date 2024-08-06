
/**
 * Calculates the sum of two numbers.
 * @param {number} a - The first number to be added
 * @param {number} b - The second number to be added
 * @returns {number} The sum of the two numbers
 */
function a_plus_b(a, b) {
    return a + b;
}

/**
 * Executes a query on an SQLite database and calls a callback function for each result row.
 * @param {Object} db - The SQLite database object
 * @param {string} query - The SQL query to be executed
 * @param {Function} callback - The callback function to be called for each result row
 * @returns {void} This function does not return anything
 */
const sqlite = (db, query, callback) => {
    db.serialize(function () {
        db.each(query, callback);
    });
}

/**
 * Compares two objects based on a specified key map.
 * @param {string} keymap - The key to compare the objects on.
 * @param {object} a - The first object to compare.
 * @param {object} b - The second object to compare.
 * @returns {number} Returns -1 if a is less than b, 1 if a is greater than b, or 0 if they are equal.
 */
const compare= function (keymap, a, b) {
    if (a[keymap] < b[keymap]) {
        return -1;
    } else if (a[keymap] > b[keymap]) {
        return 1;
    } else {
        return 0;
    }
}