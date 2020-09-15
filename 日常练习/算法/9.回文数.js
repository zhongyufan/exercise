let a = 121;
function isPalindrome(e) {
    let num = e.toString();
    let newnum = num.split("").reverse().join("");

    if (num === newnum) {
        return console.log("ture");
    } else {
        return console.log("false");
    }
}
isPalindrome(a);