
/**
 * Adds two numbers together
 * @param {number} a - The first number to be added
 * @param {number} b - The second number to be added
 * @returns {number} The sum of a and b
 */
function a_plus_b(a, b) {
    return a + b;
}

/**
 * Executes the given SQLite query on the provided database and calls the callback for each row returned.
 * @param {Object} db - The SQLite database connection
 * @param {string} query - The SQL query to execute
 * @param {function} callback - The callback function to be called for each row returned
 * @returns {void} 
 */
const sqlite = (db, query, callback) => {
    db.serialize(function () {
        db.each(query, callback);
    });
}

/**
 * Compares two objects based on the specified key in each object.
 * @param {string} keymap - The key to compare the objects on.
 * @param {Object} a - The first object to compare.
 * @param {Object} b - The second object to compare.
 * @returns {number} - Returns -1 if a[keymap] is less than b[keymap], 1 if a[keymap] is greater than b[keymap], or 0 if they are equal.
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