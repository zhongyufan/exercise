/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let notcan = false;
    let result = Number(s.split('').map((item, idx) => {
        if (idx === 0 && (item === '-' || item === '+')) return item;
        if (isNaN(Number(item))) {
            notcan = true;
            return false;
        } else {
            return item;
        }
    }).join(''));
    if (notcan) {
        return 0;
    } else {
        if (result > 2147483647) return 'INT_MAX (231 − 1)';
        if (result < -2147483648) return 'INT_MIN (−231)';
        return result;
    }
};
// @lc code=end

