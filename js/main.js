'use strict';

//creo una variabile container per HTML, esterno per non 
//compromettere la performance del comando for
const container = document.getElementById('table');

//creo un ciclo che mostra i numeri da 1 a 100
for(let i = 1; i <= 100; i=i+1){

//creo un elemento HTML div
//creo una codizione per stampare FizzBuzz se il numero è divisibile per 3 e 5,
// stampo Fizz se il numero è divisibile per 3,
// stampo Buzz se il numero è divisibile per 5.
   
const item = document.createElement('div');
container.append(item);

   if(i % 3 === 0 && i % 5 === 0){
   console.log('FizzBuzz');
   item.append('FizzBuzz');
   // opzione inner HTML item.innerHTML = 'FizzBuzz';
   // opzione innerText item.innerText = 'FizzBuzz';

   } else if(i % 3 === 0){
      console.log('Fizz');
      item.append('Fizz');
      // opzione inner HTML item.innerHTML = 'Fizz';
      // opzione innerText item.innerText = 'Fizz';
   } else if(i % 5 === 0){
      console.log('Buzz');
      item.append('Buzz');
      // opzione inner HTML item.innerHTML = 'Buzz';
      // opzione innerText item.innerText = 'Buzz';
   } else {
   console.log(i);
   item.append(i);
   }
}

/*//1. creo un ciclo che genera ieri da 1 a 100

let i = 0;
let div = '';
let h2 = '';

for (let i = 1; i < 101; i++) {
    console.log (i);
   }
   const divBox = document.createElement('div');
   divBox.classList.add(box);

   const divi = document.createElement('h2');
   divi.classList.add(box-i);
   divBox.append(divi);

//2. creo variabile per ul nel HTML
const ul = document.querySelector('ul.list');
const li = document.createElement('li');
let fizzBuzz = i % 15;
let fizz = i % 3;
let buzz = 1 % 5;

//2. SE il iero è divisibile per 3 allora stampo "Fizz" al posto del iero
   //Altrimenti SE il iero è divisibile per 5 allora stampo "Buzz" al posto del iero
   //Altrimenti SE il iero è divisibile per 3 e per 5 allora "stampo" FizzBuzz al posto del iero

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
   )*/