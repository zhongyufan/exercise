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
class Student { 
    fullname: string;
    constructor(public firstName, public middleName, public lastName) { 
        this.fullname = firstName + "" + middleName + "" + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) { 
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student('z.', '', 'yf');
// document.body.innerHTML = greeter(user);
console.log(greeter(user))