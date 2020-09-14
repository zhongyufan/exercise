// 类&面向对象
// 面向对象的基本特性｛多态、继承、封装｝

// 类的优点
// 1、降低维护成本
// 2、使代码高度复用
// 3、扩充方便灵活
// 4、降低设计成本
// 5、使用简单
// ...

// oop - 面向对象开发
// 核心 - 封装

// 通过函数封装是属于面向过程的封装
// 例如
// (function () {
//     function move() {
//         console.log(1);
//     }
//     move();
// })();
// (() => {
//     ((move) => console.log(1))();
// })();

// 类 -> 工厂（例如你像汽车工厂说你需要一个红色的特斯拉，那么工厂就会生产你个特斯拉对象给你，而你不用管这个特斯拉是怎样来的，电池从哪儿来，车身从哪儿来，都不用管）

// class Model3Car {
//     // 构造函数 - （工厂中接头人）
//     constructor(color, Autopilot) {
//         // 造车的过程
//         this.color = color;
//         this.Autopilot = Autopilot;

//         this.speed = 0;
//     }
//     // 加速
//     speedUp() {
//         this.speed += 1;
//     }
// }
// // 实例化
// const car = new Model3Car('red', false);
// console.log(car);
// console.log(car.speed);
// car.speedUp();
// console.log(car.speed);

// ---------------------------------------------------------------------

// 多态 -> 同一个接口，不同对象有不同表现

// class的特性
// 1、静态属性与静态方法
// 2、getter 与 setter
// 3、类表达式
// 4、name属性与new.target属性
// 5、在ES5中模拟类

// 1、静态属性与静态方法
// -不会被类实例所拥有的属性与方法，只是类自身拥有
// -只能通过类调用

// static关键字 静态方法 （可以用来放默认值）
// class Car {
//     constructor() {
// 静态属性
//         Car.totalCar += 1;
//         this.speed = 0;
//     }
//     speedUp() {
//         this.speed += 1;
//     }
//     static repair(car) {
//         console.log('我现在要修的是：', car);
//     }
// }

// Car.repair('1号车'); // 静态方法只能这样访问
// new Car().repair('1号车'); // (intermediate value).repair is not a function

// const car = new Car();
// car.checker(); Car.checker(); // 这两个同名不会冲突，一个是实例的方法，一个是静态方法

// 静态方法
/* 
class Person {
    static format(programmer) {
        programmer.haveGirlFriend = true;
        programmer.hair = true;
    }
}

class Programmer {
    constructor() {
        this.haveGirlFriend = false;
        this.hair = false;
    }
}

const programmer = new Programmer();
console.log(programmer);

Person.format(programmer);
console.log(programmer);
*/

// 类表达式
/* 
    const Person = class P {
        constructor() {
            // 里面是可以访问到 P 类名
            console.log(P);
            // 等于本身
            console.log(P === Person); // true
            // 这样有个好处，无论Person怎么改名字都能获得a
            P.a = 1;
            console.log('我是歌手');
        }
    }
    new Person();
    // 外面是无法访问 P 这个类名的
    console.log(Person.a);
    // console.log(P); // P is not defined
*/

// 自执行类
// const Person1 = new class P{
// new class P{
//     constructor(){
//         console.log('我是歌手哈哈哈哈');
//     }
// }();

// getter setter
// 类似于给属性提供钩子
// 在获取属性值和设置属性值的时候做一些额外的事情

// ES5 getter/setter
// 1、在对象字面量中
/* 
    const obj = {
        // name: '',
        // 这样设置会造成内存泄露，来回调用name()
        // get name() {
        //     return this.name;
        // },
        // set name(val) {
        //     this.name = val;
        // }
        _name: '',
        get name() {
            return this._name;
        },
        set name(val) {
            this._name = val;
        }
    }
    console.log(obj.name = 2);
*/

// 2、Object.defineProperty
/* 
    var obj = {
        _name: ''
    };
    Object.defineProperty(obj, 'name', {
        // value: 19, // 这里的值是不可以被遍历到
        // enumerable:true  // 只有设置了这个才可以被枚举
        get: function () {
            console.log('正在访问name');
            return this._name;
        },
        set: function (val) {
            console.log('正在修改name');
            this._name = val;
        }
    });
    obj.name = 10;
    console.log(obj.name);
*/

// ES6
/* 
    class Person {
        constructor() {
            this._name = '';
        }
        get name() {
            console.log('正在访问name');
            return this._name;
        }
        set name(val) {
            console.log('正在修改name');
            this._name = val;
        }
    }
    const person = new Person();
    person.name =10;
    console.log(person.name);
*/

// name / new.target
// class Car {
//     constructor() {
//         console.log(new.target); // 取决于 new 后面的类 -> new Car();
//     }
// }
// new Car();

// 语法糖
// function Car() {
//     // if(!(this instanceof Car)){
//     //     throw Error('必须使用new关键字调用Car');
//     // }
//     // // 相比下，更简单
//     // if (new.target !== Car) {
//     //     throw Error('必须使用new关键字调用Car');
//     // }
// }
// Car();

// ---------------------------------------------------------------------------

// 在ES5中模拟类
// 构造函数

// class Car{
//     constructor(){
//     }
// }

// 以上为ES6的方式，以下是ES5的方式，不过class的底层还是用了ES5的原理

// function Car() {  }
// new Car();

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// console.log(new Person('xiaoming', 12));
// 当用new关键字调用函数的时候 发生了什么 为什么会获得一个新的对象
// 1、创建一个空的对象
// 2、把构造函数的prototype属性 作为空对象的原型
// 3、this赋值为这个空对象
// 4、执行函数
// 5、如果函数没有返回值 则返回this[返回之前那个空对象]

/* 
    function Constructor(fn, args) {
        var _this = Object.create(fn.prototype);
        var res = fn.apply(_this, args);
        return res ? res : _this;
    }
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.say = function () {
        console.log('我叫' + this.name);
    }
    var person = Constructor(Person, ['张三', 12]);
    // 这里的Constructor相当于new
    // var person = new Person('李四', 14);
    console.log(person);
    console.log(person.say());
*/

// ---------------------------------------------------------------------------

// 继承

// 继承可以让子类获得父类的方法 属性
// 可以扩充 增加新的方法 属性等

// 父类（基类） - 被继承的类
// 子类 - 继承后的类

// extends 关键字
/* 
    class Human {
        constructor(name, age, sex, hobby) {
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.hobby = hobby;
        }
        desc() {
            const {
                name,
                age,
                sex,
                hobby
            } = this;
            console.log(`我叫${name},性别${sex}，爱好${hobby}，今年${age}岁`);
        }
        eat() {
            console.log('吧唧吧唧');
        }
    }
    // 通过使用extends去继承父类，再通过super传递父的参数
    class FEEngineer extends Human {
        constructor(name, age, sex, hobby, skill, salary) {
            super(name, age, sex, hobby); // 相当于父类的构造函数
            this.skill = skill;
            this.salary = salary;
        }
        say(){
            console.log(this.skill.join(','));
        }
    }
    const feer = new FEEngineer(
        'zhangsan',
        '21',
        'girl',
        'games',
        ['es6', 'vue', 'react', 'jquery'],
        '100K');

    const app = new Human('zhong','22','*','sleep');
    app.desc();
*/
// super
// 1、作为父类构造函数调用 ^ 上面有使用到
//    1、非静态方法中访问super -> 父类原型
//    2、在静态方法中访问super -> 父类
// 2、作为对象的方式调用（不太常见）

// 在调用super 父亲的 this 始终是子类的 this

// ---------------------------------------------------------------------------

// 多态
// 同一接口 在不同情况下做不一样的事情
// 相同的接口 不同的表现

// 接口本身只是一组定义 实现都是在类里面
// 需要子类去实现的方法

/* 
    class Human{
        say(){
            console.log('我是人');
        }
    }
    class Man extends Human{
        // 如果子类没有say 方法，那么将会使用父类的say方法，因此父类的say方法可以充当错误报警
        say(){
            super.say(); // 指向父类的原型
            console.log('我是男人');
        }
    }
    class Woman extends Human{
        say(){
            super.say(); // 指向父类的原型
            console.log('我是女人');
        }
    }
    // 将父类的say给覆盖了，这样就实现了多态
    new Man().say(); 
    new Woman().say();
*/

// 重载 (类似于行为判断) 比如说如果没有这个东西就要怎么做
// class SimpleCalc {
//     addCalc(...args) {
//         if (args.length === 0) {
//             return this.zero();
//         }
//         if (args.length === 1) {
//             return this.onlyOneArgument(args);
//         }
//         return this.add(args);
//     }
//     zero() {
//         return 0;
//     }
//     onlyOneArgument() {
//         return args[0];
//     }
//     add(args) {
//         return args.reduce((a, b) => a + b, 0);
//     }
// }

// ---------------------------------------------------------------------------

// ES5继承的实现？

// 原型
// 1、利用构造函数
// function P() {
//     this.name = 'parent';
//     this.say = function () {
//         console.log('好的好的！一定来');
//     }
// }
// P.prototype.test = function () { // 如果不将C的原型绑定到P上，那么将无法访问
//     console.log('我是一个test方法');
// }
// function C() {
//     P.call(this); // 继承父元素
//     this.name = 'child';
//     this.age = 11;
// }
// C.prototype = new P(); // 将原型进行绑定
// var child = new C();
// child.say();

