/**
 * 1
 */
// let a: number = 10;
// async function gowait() {
//     alert('1');
// }
// console.log(a);
/**
 * 2
 */
// function greeter(person:string) { 
//     return 'Hello,' + person;
// }
// let user = 'zyf';
// document.body.innerHTML = greeter(user);
/**
 * 3
 */
// interface Person { 
//     name?: String;
//     age?: Number;
// }
// function greeter(person:Person) { 
//     return 'Hello,' + person.name + 'your age is'+person.age;
// }
// let user = {name:'zyf',age:18}
// document.body.innerHTML = greeter(user);
/**
 * 4
 */
var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullname = firstName + "" + middleName + "" + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student('z.', '', 'yf');
// document.body.innerHTML = greeter(user);
console.log(greeter(user));
