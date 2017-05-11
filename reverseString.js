/* jshint esversion: 6 */
'use strict';

const reverseString = (string) => {
    if (string !== '') {
        let chars = string.split('');
        let reverse = chars.reverse().join('');

        if (string === reverse) {
            return true;
        } else {
            return reverse;
        }
    } else {
        return null;
    }
};
