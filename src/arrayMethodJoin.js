'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let subSeparator = separator;

    if (separator === null) {
      subSeparator = 'null';
    }

    if (this.length === 0) {
      return '';
    } else if (this.length === 1) {
      return this.toString();
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += subSeparator;
      } else {
        result += this[i] + subSeparator;
      }
    }

    return result + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
