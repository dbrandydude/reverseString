/* jshint esversion: 6 */
'use strict';

const reverseString = (string) => {
    if (string !== '') {
        let chars = string.split('');
        let reverseArray = chars.reverse();
        let reverseStr = reverseArray.join('');

        if (string === reverseStr) {
            return true;
        } else {
            return reverseStr;
        }
    } else {
        return null;
    }
};
