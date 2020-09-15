var nums = [1, 2, 2, 5, 7];

var findDuplicate = function (nums) {
    let res = 0;
    nums.map((item, key, arr) => {
        if (arr.indexOf(item) !== key) {
            res = item;
        }
        return false;
    });
    return res;
};
findDuplicate(nums);