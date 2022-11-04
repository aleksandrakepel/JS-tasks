/*
//  0. Напишите функцию logAllChars(str), которая принимает str в качестве аргумента и выводит каждый символ строки в логи.
// циклы + доступ к символам через индекс

const str = 'Hello';
  
for ( i = 0; i < str.length; i++) {

  console.log(str[i]);
};




// 1. Дана строка 'frontent$developer$wow. Замените все $ на * с помощью глобального поиска и замены.  


const str = 'frontent§developer§wow'; 

const result = str.replace(/§/gi, '*');

console.log(result);

// P.S. В этом задании заменила символ $ на §.





// 2.  Напишите функцию convertStringToArray(str), которая преобразует строку в массив слов.
// trim, split


const str = 'I am learning frontend development';

const convertStringToArray = (str) => {
  return str.trim().split(" ");
};

const result = convertStringToArray(str);

console.log(result); // ['I', 'am', 'learning', 'frontend', 'development']




const str = 'I am learning frontend development';

const result = str.split(" ");

console.log(result); // ['I', 'am', 'learning', 'frontend', 'development']





// 3. Напишите функцию removeSymbols(str, length), которая возвращает подстроку, 
//состоящую из указанного количества символов.
// slice


const str = 'I am learning frontend development';

const removeSymbols = str.slice(5, 13);

console.log(removeSymbols);





// 4. Напишите функцию pasteDashesIntoString(str), которая принимает строку str в качестве 
//аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// toUpperCase, split, join


const str = 'I am learning frontend development';

const pasteDashesIntoString = (str) => {

  return str.toUpperCase().split(' ').join('-');
};

const result = pasteDashesIntoString(str);

console.log(result);




//5. Напишите функцию makeStringLowerCased(str), которая принимает строку str в качестве 
//аргумента и переводит в нижний регистр.

const str = 'I AM LEARNING FRONTEND DEVELOPMENT';

const makeStringLowerCased = (str) => {

  return str.toLowerCase();
};

const result = makeStringLowerCased(str);

console.log(result);





//6.Напишите функцию capitaliseAllWords(str), которая возвращает строку, в которой 
//каждое слово начинается с заглавной буквы.

// split, цикл, toUpperCase, join


function capitaliseAllWords() {
  const str = 'i am learning frontend development';
  let splits = str.split(" ");
  let str2 = "";

  for (let i = 0; i < splits.length; i++) {
    let name = splits[i];
    let firstLetter = name.substring(0, 1).toUpperCase();
    let restWord = name.substring(1, name.length); 
    str2 += firstLetter + restWord + " ";
  };

  console.log(str2)
};

capitaliseAllWords();





//7. Напишите функцию makeFirstLetterUpperCased(str), которая принимает строку str в качестве аргумента 
//и делает первую букву заглавной.

// обращаться к элементу через индекс


const str = 'hello';

//const makeFirstLetterUpperCased = (str) => {  
function makeFirstLetterUpperCased(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(makeFirstLetterUpperCased(str));





//8. Напишите функцию changeLetterRegister(str), которая принимает в качестве аргумента строку и
// заменяет регистр каждого символа на противоположный.  Например, если вводится «Я иЗуЧаЮ ФрОнТеНд», 
// то на выходе должно быть «я ИзУчАю ФрОнТеНд».

const str = 'heLLo';

function changeLetterRegister(str) {
  return str.charAt(0).toUpperCase() + str.charAt(1).toUpperCase() + str.charAt(2).toLowerCase() + str.charAt(3).toLowerCase() + str.charAt(4).toUpperCase()
};

console.log(changeLetterRegister(str));




const str = 'heLLo';

 function changeLetterRegister(str) {
   return str[0].toUpperCase() + str[1].toUpperCase() + str[2].toLowerCase() + str[3].toLowerCase() + str[4].toUpperCase();
 };
 
 console.log(changeLetterRegister(str));




 //9. Напишите функцию changeLetterRegister(str), которая принимает в качестве аргумента строку и 
//делает в ней все символы разного регистра по порядку. Например, если вводится «джаваскрипт», 
//то на выходе должно быть «дЖаВаСкРиПт».


 const str = 'hello';

 function changeLetterRegister(str) {
   return str[0].toUpperCase() + str[1].toLowerCase() + str[2].toUpperCase()  + str[3].toLowerCase() + str[4].toUpperCase();
 };
 
 console.log(changeLetterRegister(str));
 




 //10. Напишите функцию addZeros(num, len, sign), которая дополняет нулями до указаной длины 
//числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.


function addZeros (num, len, sign) {
  let zero = len - (num + '').length;
  numberZero = '';
    for ( ; zero > 0; zero--) {
      numberZero += 0;
    };
      
    return (sign === undefined || sign === '') ? numberZero + num + '' : sign + numberZero + num +'';
  };
  
console.log(addZeros (10, 4, '-')) 




//11. Напишите функцию compareStrings(str1, str2), которая сравнивает строки без учёта регистра символов.


function compareStrings(str1, str2) {
  let result = str1.toUpperCase() === str2.toUpperCase();
  return result; 
}

console.log(compareStrings('string', 'StRiNg')); // true 
console.log(compareStrings('JavaScript', 'JavaScriptonite')); // false
 



//12. Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз. 

// сначала реализовать черед метод repeat, потом самим через циклы


function repeatStr(str, n) {
  return str.repeat(n);
}

console.log(repeatStr('hello ', 4));




let str = '';
for (let n = 0; n < 5; n++) {
  str += 'hello '
}

console.log(str); 





//13. Напишите функцию getPathname(pathname), которая находит имя файла (подстрока после последнего символа "\" ) 
// из полного пути к файлу. сщтые pathname = "/home/user/landing/index.js";


// использовать 2 метода - разбивание по символу
// и последний элемент массива взять методом


const pathname = "/home/user/landing/index.js";

const getPathname = (pathname) => { 
  let name = pathname.split("/").pop();
  return name;
};

console.log(getPathname(pathname)); // index.js 




//14. Напишите функцию getSubstring(str, char, pos), которая возвращает часть строки, расположенную после 
//или до указанного символа char в зависимости от параметра pos.


const str = 'Javascript — синхронный язык программирования';

function getSubstring(str, char, pos) {
  if(pos=='before')
  return str.slice(0, str.indexOf(char));
};

console.log(getSubstring(str, '—', 'before')); // Javascript
console.log(getSubstring(str, 'язык', 'before')); // Javascript - синхронный  

*/
