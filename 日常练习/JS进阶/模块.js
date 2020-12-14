// 模块
function module() {
    var something = "cool";
    var another = [1, 2, 3];

    function dosomething() {
        console.log(something);
    }

    function doanother() {
        console.log(another.join("!"));
    }

    return {
        dosomething: dosomething,
        doanother: doanother
    }
}

var foo = module();
foo.dosomething();
foo.doanother();

var boo = module();
boo.dosomething();
boo.doanother();

// 单例
var fooSingle = (function module() {
    var something = "cool";
    var another = [1, 2, 3];

    function dosomething() {
        console.log(something);
    }

    function doanother() {
        console.log(another.join("!"));
    }

    return {
        dosomething: dosomething,
        doanother: doanother
    }
})();
fooSingle.dosomething();
fooSingle.doanother();

function cool() {
    setTimeout(function () { }.bind(this))
}
