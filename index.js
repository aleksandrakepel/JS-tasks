let num = prompt('Переменная а равна?', '');
if (num > 0 && num < 5) {
  alert( 'Верно!' );
} 
else {
  alert( 'Неверно!' );
}

let num2 = prompt('Переменная а равна?', '');
let showPositive = +num2 + 7;
let showNegative = num2 / 10;
if (num2 == 0 || num2 == 2) {
  alert(showPositive);
} 
else {
  alert(showNegative);
}

let numa = prompt('Переменная а равна?', '');
let numb = prompt('Переменная b равна?', '');
let showPositiveSum = +numa + +numb;
let showNegativeSum = numa - numb;
if (numa <= 1 && numb >= 3) {
alert(showPositiveSum);
} else {
alert(showNegativeSum);
};

let numa2 = prompt('Переменная а равна?', '');
let numb2 = prompt('Переменная b равна?', '');
if (numa2 > 2 && numa2 < 11 || numb2 >= 6 && numb2 < 14 ) {
  alert( 'Верно!' );
} 
else {
  alert( 'Неверно!' );
}
