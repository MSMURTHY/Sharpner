//console.log("Hello World");
//console.error('this is the error');
//console.warn('this is a warn');


// var, let, const
// var - globallily statetd and cnditional statements
//let - Reassaign values 
//const - directly reassign the values 

let age = 30;
age = 31;

console.log(age);

const score = 50;
console.log(score);

// Data types
// Primitive types - Directly assigned to memory , Not a resource 
// Strings, Numbers, Boolean, null, undefined

// const name = 'jhon';
// const age  = 20;
// const rank - 100;
// const isPerfect = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof x);

// Strings 

const name = 'Murthy';
const age = '25';

// concentration

console.log('my name is '+ name + 'and i am '+age);
//Templete string
const hello = my name is  ${name} and iam $ {age};

console.log(hello);

//properties in the methods 
const m = 'Hello World!';
const s = 'Design engineer, js developer, code lerner, hard worker

console.log(m.length());
console.log(m.toUpperCase());
console.log(m.toLowerCase());
console.log(m.substring(0, 5).toUpperCase());
//split 
console.log(m.split(''));
//split for 48 line
console.log(s.split(', '));


//Arrays- variables that hold the multible comments

/* multi
line
comment*/

const numbers = new Array(1,2,3,4,5,);

console.log(numbers);

const fruits = ['apples, bananas, grapes, oranges, pinapple, 10, true'];
fruits[5] = 'watermelon'; 
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'));

console.log(fruits[2]);

//objectives
const person = {
    firstName : 'Murthy',
    lastNmae: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        Village: 'MSP',
        City: 'Vizag',
        state: 'AP',
    }
}
console.log(person.firstName, person.lastName,);
console.log(person.honbbies[1]);
console.log(person.address.city);

//through the varibales
const{firtsName, lastName, address: {city}} = person;

console.log(city);

person.email = 'murthymathala6@gmail.com';
console.log(person);

//objects
const tasks = [
    {
        id: 1,
        text: 'my task is learning JS';
        isCompleted: false

    },
    {
        id: 2,
        text: 'Meeting with Vaibav';
        isCompleted: false
    },
    {
        id: 3,
        text: 'Meeting with HR';
        isCompleted: true,
    },
];
console.log(tasks);
