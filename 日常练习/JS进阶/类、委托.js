// 类
function Box(long, width, height) {
    this.long = long;
    this.width = width;
    this.height = height;
}
Box.prototype.volume = function () {
    return this.long * this.width * this.height;
}

function Pen(long, width, height) {
    Box.call(this, long, width, height);
}
Pen.prototype = Object.create(Box.prototype);
Pen.prototype.print = function () {
    console.log(this.volume());
}

var box1 = new Pen(10, 10, 10);
var box2 = new Pen(20, 20, 20);

box1.print();
box2.print();

console.log('================================');

// 委托
Box = {
    init: function (long, width, height) {
        this.long = long;
        this.width = width;
        this.height = height;
    },
    volume: function () {
        return this.long * this.width * this.height;
    }
}

Pen = Object.create(Box);
Pen.print = function () {
    console.log(this.volume());
}

var box3 = Object.create(Pen);
box3.init(10, 10, 10);
var box4 = Object.create(Pen);
box4.init(20, 20, 20);

box3.print();
box4.print();