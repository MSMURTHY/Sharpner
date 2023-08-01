//console.dir(document);   contrl + K C ( Dummy) Rebcak code same option 
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title)
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent ="Hello";
// console.log(document.forms[0]);
// console.log(document.links);
//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innertext = 'Goodbye';
// console.log(headerTitle.innertext);
// headerTitle.innerHTML ='<h3>Hello</h3>';
//headerTitle.style.borderBottom = 'solid '3px #000';
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'ground Nuts';
tems[1].textContent = 'bold';
items[1].computedStyleMap.backgroundColor = 'yellow';

//gives error 
//items.style.backgroundColor = '#f4f4f4';

for(var i= 0; i < items.length; i++){
    items[i].computedStyleMap.backgroundColor = '#f4f4f4';
}

// GetElementsByTagName //
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'ground Nuts';
li[1].style.frontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

for(var i= 0; i < items.length; i++){
    li[i].computedStyleMap.backgroundColor = '#f4f4f4';
}

// QuerySelector // CSS define js DOM
var header = document.querySelector('#main-header');
header.style.boarderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND";

var item = document.querySelector('.list-group-item');
items.style.color = 'red';

var lastItem = document.querySelector('.list-group-item');
items.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item');
items.style.color = 'coral';

// QueryselectorAll//

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-chiild(odd');

for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}