'use strict';


//1. creo un ciclo che genera numeri da 1 a 100

let i = 0;
let div = '';
let h2 = '';

for (let i = 1; i < 101; i++) {
    console.log (i);
   }

   const divBox = document.createElement('div');
   divBox.classList.add(box);

   const divNum = document.createElement('h2');
   divNum.classList.add(box-num);
   divBox.append(divNum);

//2. creo variabile per ul nel HTML
const ul = document.querySelector('ul.list');
const li = document.createElement('li');
let fizzBuzz = i % 15;
let fizz = i % 3;
let buzz = 1 % 5;

//2. SE il numero è divisibile per 3 allora stampo "Fizz" al posto del numero
   //Altrimenti SE il numero è divisibile per 5 allora stampo "Buzz" al posto del numero
   //Altrimenti SE il numero è divisibile per 3 e per 5 allora "stampo" FizzBuzz al posto del numero

   if (i % 15 === 0) {
    console.log("FizzBuzz");
    divBox.classList.add('FizzBuzz')
    h2.append('FizzBuzz');

   } else if (i % 3 === 0) {
    console.log('Fizz');
    divBox.classList.add('Fizz');
    h2.append('Fizz');

   } else if (i % 5 === 0) {
    divBox.classList.add('Buzz');
    console.log('Buzz');
    li.append('Buzz');

   } else {
    console.log(i);
    h2.append(i);
   }

   li.addEventListener('cklick', function() {
    let fizzBuzz = i % 15;
    console.log ('FizzBuzz');
   }
   
   )


