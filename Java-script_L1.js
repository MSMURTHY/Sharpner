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
const tasksJSON =JSON.stringify(tasks);
console.log(tasksJSON);

//lopps
//for loop
for(let i= 0; i < 10; i++) {
    console.log(i);
    console.log('For Loop Number: ${i}');   
}
//while loop
let i =0;
while(i<10) {
    console.log('While loop number: ${i}');
    i++;
}
for(let i= 0; i< tasks.length; i++) {
    console.length(tasks[i].text);
}

//forEach , map, filter

tasks.forEach(function(task)){
    console.log(task.text);
};
//map 
const taskText = tasks.map(funtion(task)){
   return task.text;

};
console.log(taskText);

//filters
const taskText = tasks.filter(funtion(task){
    return task.text;

});

const taskCompleted = tasks.filter(function(task){
    return taskCompleted.isCompleted === true;
});
console.log(taskCompleted);
//maps
const taskCompleted = tasks.filter(function(task){
    return taskCompleted.isCompleted === true;
}).map(funtion(task){
    return task.text;
});
console.log(taskCompleted);

// conditionals 
//if
const  x =10;
const y  = 4;
if (x < 5 || y< 10) {
    console.log('x is more than 5 or y is more than 10');
}
else if (x >10){
    console.log('x  is grater than 10');
}
else {
    console.log('x is less than 10');
}

//ternary operations ? true or nottrue
const x = 12;
const color = x>8 ? 'red' : 'orange';
console.log(color);

const x = 15;
const color = x<12 ? 'red': 'blue';

switch(color){
   case 'red':
   console.log('color is red');
   break;
   case 'blue':
   console.log('color is blue'); 
    break; 
    default:
        console.log('color is NOT red or blue');
    break;    
}
//function
function addNums(num1 =1 , num2 +1){
    console.log(num1 + num2);
}
addNums();
function addNums(num1 =1 , num2 +1){
    return num1 + num2;
}
// another method in function 
console.log(addNUms(5,5));

const addNums = (num1 =1 , num2= ) => console.log(num1 + num2);
console.log(addNUms(5,5));

//***** */ Object oriented programming   -----> constructive function
function Person(fristName, lastName, dob) {
    this.firstName = firstName;
    this.firstNamelastName = lastName;
    this.dob = new Date(dob); 
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return '${this.firstname} ${this.lastName}';
    }
}
//prototype code only ... this is for data initiate  through function 
Person.prototype.getBirtYear = function(){
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function(){
    return '${this.firstName} ${this.lastName};
}
// Instantiate object
const person1 = new Person('Murthy', 'mathala' , '06-06-1997');
const person2 = new Person('Priya' , 'reddi' , '06-06-2018');

console.log(person1.dob.getFullYear());
console.log(person2.getBirthYear());
console.log(person2.getFullName());

//classes , it is also same as indicating functions
class Person {
    constructor(firstName, lastName, dob);
    this.firstName  = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
getBirthYear(){
    return this.dob.getFullYear();
}

getFullName(){
    return '${this.firstName} ${this.lastName}';
}
const person1 = new Person('Murthy', 'mathala' , '06-06-1997');
const person2 = new Person('Priya' , 'reddi' , '06-06-2018');

console.log(person2.getFullName());
console.log(person1);

// Selectors 
// window object
console.log(window); // many functions for api and document  and properties and many library is there in the window 

// Single Element Selectors
console.log(document.getElementById('my-form')); 
console.log(document.querySelector('container'));
const form = document.getElementById('my-form');
//console.log(form);

//Multiselectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementByClassName('.item'));
console.log(document.getElementByTagName('li'));
// slecting from HTML 
const items = document.querySelectorAll('.item');
items.forEach(item) => console.log(item);

// Manipulating 
const.ul = document.querySelector('.items');

/*ul.remove;
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';*/

const btn = document.querySelector('.btn');
btn.style.background = 'red';

//manipulate user interface 
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
});

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form')
    .getElementByClassName.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items');
    .lastElementChild.innerHTML = '<h1>Hello</h1>';
    //console.log('click');
});

