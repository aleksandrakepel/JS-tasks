// Задача 1. 
//  Напишите функцию, которая принимает 2 числа и возвращает 1, 
// если первое число больше, чем второе; -1, если первое число меньше, чем второе, 
// и 0, если числа равны. Попробуйте реализовать эту функцию не только с помощью if...else, 
// но и с помощью тернарного оператора, и в виде стрелочной функции.   


let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число'); 

function getNumber (num1, num2) {
  if (num1 > num2)
    return 1;
  else if (num1 < num2) 
    return -1;
  else if (num1 === num2)
  return 0;
}

console.log (getNumber(num1,num2));


let num11 = prompt('Введите первое число');
let num22 = prompt('Введите второе число'); 

let number1 = (num11 > num22) ?
   () => alert ('1') :
   () => alert ('-1');

console.log (number1(num11,num22));


let a1 = prompt(abc);
let b1 = prompt(abc); 
let number = a1 > b1
  ? 1 
  : a1 < b1
    ? -1
    :0;

console.log (number);



// Задача 2
//  Напишите функцию, которая принимает 2 параметра: 
// длину и ширину прямоугольника и вычисляет его
//  площадь. Если в функцию передали 1 параметр,
//   то функция вычисляет площадь квадрата.

let length = prompt('Длина');
let width = prompt('Ширина'); 

function calculateArea(length, width) {
  if (length!='' && width!='')
  return length * width;

  else if (length!='' && width==='')
  return length * length;

  else (length==='' && width!='')  
  return width * width;
}

console.log(calculateArea(length, width));


// Задача 3
// Написать функцию, получающую на вход два числа.
//  Если оба числа чётные - функция возвращает их 
//  произведение. Если оба числа нечётные - 
//  функция возвращает их сумму. 
//  Если одно из чисел чётное, а второе 
//  нечётное - функция возвращает это нечётное 
//  число.

let a = prompt ('');
let b = prompt ('');

function calculateValue(a, b) {
  if(a % 2 && b % 2) { 
    return +a + +b;
  } else if(a % 2 || b % 2) { 
      if(a % 2) { 
        return a;
      }
  } else {
    return a * b;
  }
}

console.log(calculateValue(a,b));


// Задача 4
// Написать функцию, которая принимает 1 аргумент 
// (возраст пользователя) и возвращает boolean значение  
// - можно ему на сайт или нет.( если 18 и больше лет)

function verifyAge(age) {
  return age >= 18 ? true : false;
  }

let age = prompt('Укажите Ваш возраст');

if ( verifyAge(age) ) {
  alert('Вам разрешен доступ на сайт');
} else {
  alert('Вам запрещен доступ на сайт');
}


// Задача 5
// Написать функцию, которая принимает 3 аргумента, 
// если 1 аргумент true. - то складывать 2 и 3 аргумент ,
//  если 1-ый аргумент false  - вычитать 2 и 3 аргументы

let a2 = true; 
let b2 = 4;
let c2 = 3;

function calculateValue(a2, b2, c2) {
  if(a2 === true) { 
     return +b2 + +c2;
   } else {
     return b2 - c2;
   }
 }

console.log(calculateValue(a2,b2,c2));



// Задача 6
// Написать функцию, которая принимает 1 аргумент 
// (кол-во итераций цикла)  и выводит на страницу 
// столько красных кругов



function insertCircle(amount) {
  console.log('inside the function amount--', amount);
  
  for (let i = 0; i < amount; i++) {  
  document.write('', i + 1);

  let div = document.createElement('div');
  div.className = "circle-red";
  document.body.append(div); }
}

insertCircle(4);



// Задача 1. Напишите функцию, которая принимает 
// произвольное количество аргументов в виде строк 
// и выводит их через пробел с помощью 
// document.write() в тело html-документа. 
// Например, функция  showWords
// ("I've", "been", "learning", "JavaScript", "for",
//  "a", "month") должна вывести фразу "I've been
//   learning JavaScript for a month".

function showWords () {
  let sum = "",
  str = "";
  console.log(arguments);

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    str += arguments[i] + ",";
  }

  str=str.slice(0,-1);
  return sum;
};

document.write(showWords("I've" + " " + "been" + " " +  "learning" + " " +  "JavaScript" + " " + "for" + "a" + " " + "month"));


// Задача 2. Напишите функцию, которая принимает произвольное
//  количество аргументов в виде однозначных чисел и возвращает 
//  1 многозначное число. Например, функция с именем complexDigit() 
//  при вызове  complexDigit(3,6,7) 
// вернет число 367, а complexDigit(1,9, 4, 8,3) вернет число 19483.

function complexDigit () {
  let sum = '',
  str = "" ;
  console.log(arguments);

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    str += arguments[i] + ",";
  }

  str=str.slice(0,-1);
  return str+"="+sum;
};

console.log(complexDigit('3', '6', '7'));
document.write('Сумма чисел ' + complexDigit('3', '6', '7') + '<br>');

console.log(complexDigit('1', '9', '4', '8', '3'));
document.write('Сумма чисел ' + complexDigit('1', '9', '4', '8', '3'))
