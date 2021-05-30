/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let num = 0;
    var i = 0;
    for (; i < s.length; i++) {
        if (obj[s[i]] < obj[s[i + 1]]) {
            num += (obj[s[i + 1]] - obj[s[i]]);
            i++;
        } else {
            num += obj[s[i]]
        }
    }
    return num;
};
// @lc code=end

