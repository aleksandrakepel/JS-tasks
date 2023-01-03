
// 0. С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

let str = '';

for (let a = 1; a < 10; a++) {
  str += a;    
}

console.log(str);


//1. Нарисуйте пирамиду, как показано ниже только у вашей пирамиды должно быть 12 рядов:

let str2 = '';
for (let i = 0; i < 12; i++) {
	str2 = str2 + 'x';
	console.log(str2);
}


//2.  С помощью двух вложенных циклов нарисуйте следующую пирамидку:

for (let i = 1; i < 10; i++) {
  let str3 = '';

	for (let j = 1; j <= i; j++) {
    str3 = str3 + i; 
    console.log(i);
	}
}

//or

for (let i = 1; i < 10; i++) {

  for ( let j = 1; j <= i; j++) {
    console.log(i);
  }
}


//3. Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:

let str4 = '';
for (let i = 0; i < 5; i++) {
	str4 = str4 + 'xx';
	console.log(str4);
}


//4.   Пирамидка с цифрами

let str5 = '';
for (let i = 1; i < 10; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i);
  }
}


// 4.  Пирамидка с цифрами

for (let i = 1; i < 10; i++) {

  for ( let j = 1; j <= i; j++) {
    console.log(i);
  }
}


//5. Напишите функцию goThroughArray(list), которая проходится по массиву и выводит каждый элемент.

let arr22 = [1, 2, 3, 4, 5]

arr22.forEach(function goThroughArray(list) {
    console.log(list);
  });


//6. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

let arr7 = ['a', 'b', 'c'];
let arr8 = [1, 2, 3];
let arr9 = arr7.concat(arr8)

console.log(arr9);


//7. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

let arr6 = ['a', 'b', 'c'];
arr6.push(1, 2, 3);

console.log(arr6);


//8. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

let arr1 = [1, 2, 3, 4, 5];

arr1.splice(1, 2);

console.log(arr1);


//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

let arrOne = [1, 2, 3, 4, 5];
let arrTwo = arrOne.splice(1, 3);

console.log(arrTwo);


//10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let arr2 = [1, 2, 3, 4, 5];

arr2.splice(3, 0, 'a', 'b', 'c');

console.log(arr2);


//11.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let arr3 = [1, 2, 3, 4, 5];

arr3.splice(1, 0, 'a', 'b')
arr3.splice(6, 0, 'c');
arr3.splice(8, 0, 'e');

console.log(arr3);


//12. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

let arr4 = [3, 4, 1, 2, 7];
arr4.sort();
console.log(arr4);
// or 
// console.log(arr4.sort());


//13. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

let obj = {js:'test', jq: 'hello', css: 'world'};

let arr5 = Object.keys(obj)

console.log(arr5)

// or
// console.log(Object.keys(obj));


//14. Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл. 

let str6 = '123456';

let result = str6.split('').reverse().join('');

console.log(result);

// or 
// console.log(str6.split('').reverse().join(''))


//15. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения

let str8 = "java"; 

let newStr8 = str8[0].toUpperCase() + str8.slice(1);

console.log(newStr8);


//16. Проверьте, что строка начинается на http://.

let str9 = "http://javascript";

if (str9.substr(0, 7) == 'http://') {
	console.log('yes');
} else {
	console.log('no');
}

//17. Проверьте, что строка заканчивается на .html

let str10 = "javascript.html";

if (str10.substr(-5) == '.html') {
	console.log('yes');
} else {
	console.log('no');
}

//18. Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.


let arr11 = [1, 2, 3, 4];

if (arr11.includes(5)) {
  console.log('yes');
} else {
	console.log('no');
}

// or

let flag = false;
for (i = 0; i < arr11.length; i++) {
	if (arr11[i] == '5') {
		flag = true; 
		break;
	}
}

if (flag === true) {
	console.log('yes');
} else {
	console.log('no');
}


//19. Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. 
//То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. 
//Если число не делится - выведите 'false', а если делится - выведите 'true'.

let number1 = 31;
let flag2 = false; 

for (i = 2; i < number1; i++) {
  if (number1 % i === 0) {
    flag2 = true;
    break;
  }
}

if (flag2 === true) {
	console.log('true');
} else {
	console.log('false');
}


//20. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'

let arr12 = [1, 2, 2, 3];

let flag1 = false;
for (i = 1; i < arr12.length; i++) {
	if (arr12[i] === arr12[i - 1]) {
		flag1 = true; 
		break;
	}
}

if (flag1 === true) {
	console.log('yes');
} else {
	console.log('no');
}


//21. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее (два цикла)

let arr13 = [];

  for (let i = 1; i < 5; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
      str += i;
    }
    arr13.push(str);
  }

console.log(arr13);
    

//22. Дан массив чисел, найдите в нем максимальное число

let arr14 = [1, 8, 9, 4, 3, 7]

const max = Math.max.apply(null, arr14);

console.log(max);
  

//23. Дан массив чисел, найдите в нем минимальное число

let arr15 = [3, 8, 9, 4, 5, 7]

const min = Math.min.apply(null, arr15);

console.log(min);
  

//24. Дан массив чисел, найдите среднее арифметическое всех чисел

let arr16 = [2, 4, 6, 8];

const average = (arr16) => {
  let result = arr16.reduce((a, b) => a + b, 0) / arr16.length;
  return result;
}  

console.log(average(arr16));


// 25.  Fill. Напишите функцию, которая заполняет новый массив предоставленным значением.

const fill = (arraySize, value) => new Array(arraySize).fill(value);

const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill));


// 26. Reverse. Напишите функцию, которая разворачивает массив в обратном порядке. 

const reverse = (array) => array.reverse();

const data1 = [1, 2, 3];
console.log(reverse(data1)); 


//27. Compact. Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.

const compact = (array) => array.filter((el) => el);

const data2 = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data2));


//28. From Pairs. Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. 
//Первое элемент массива - ключ, второй - зачение. (используем метод массива reduce)

const fromPairs = (array) => array.reduce((key, value) => {
  if (Array.isArray(value)) {
    key[value[0]] = value[1];
  }
  return key;
}, {});

const data3 = [['a', 1], ['b', 2]];
console.log(fromPairs(data3));
 

// 29. Without. Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.

const without = (array, ...args) => {
  let arr17 = [...array];

  for (i = 0; i < args.length; i++) {
    arr17 = arr17.filter((el) => el !== args[i]);
  }
  return arr17;
}

const data4 = [1, 2, 3, 1, 2];
console.log(without(data4, 1, 2));


//30. Unique. Напишите функцию, которая убирает повторяющиеся значения.

const unique = (array) => array.filter((element, id) => array.indexOf(element) === id);

const data5 = [1, 2, 1, 2, 3];
console.log(unique(data5));


//31. IsEqual. Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
// не решила сама
const isEqual = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  };

const compared = firstArray.map((el, id) => secondArray[id] === el);
return !compared.includes(false);
}

const arrr1 = [1, 2, 3, 4];
const arrr2 = [1, 2, 3, 4];
const arrr3 = [1, 2, 3, 5];
const arrr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arrr1, arrr2)); 
console.log(isEqual(arrr1, arrr3)); 
console.log(isEqual(arrr1, arrr4));


//32. Flatten. Напишите функцию, которая преобразует глубокий массив в одномерный.(рекурсия)
// не решила сама
const flatten = (array) => array.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
 
const data6 = [1, 2, [3, 4, [5]]];
console.log(flatten(data6));


//33. Chunk. Напишите функцию, которая разделяет массив на части заданного размера.

const chunk = (array, size) => {
  const arr18 = [];
  let index = 0;
  while (index < array.length) {
    arr18.push(array.slice(index, size + index));
    index += size;
  }
  return arr18;
}
const data7 = [1, 2, 3, 4, 5, 6, 7];
console.log(chunk(data7, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunk(data7, 3)) // [[1, 2, 3], [4, 5, 6], [7]]


//34. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. 
//Массив, конечно же, может быть произвольным.

const arr19 = [[1, 2, 3], [4, 5], [6]];
const arr20 = arr19.flat();

const sum = arr20.reduce((a, b) => a + b);

console.log(sum);


//35. Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. 
//Создайте для этого вспомогательную функцию isPositive(), 
//которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.



let arr21 = [-6, 1, -5, 2, 3];

let isPositive = (a) => {
	if (a >= 0) {
		return true;
	} else {
		return false;
	}
}

let newArr21 = [];
for (let i = 0; i <= arr21.length; i++) {
	if (isPositive(arr21[i])) {
		newArr21.push(arr21[i]);
	}
}

console.log(newArr21);



//РЕКУРСИЯ

//1. Дан массив с числами. Выведите последовательно его элементы используя рекурсию

let recursion = [1, 2, 3, 4]; 
function f1(i) {
  console.log(recursion[0]);
  recursion.splice(0, 1);
  if (recursion.length > 0) {
  f1(recursion)  
  }
}
f1();


//2. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. 
// И так, пока сумма не станет однозначным числом (9 и менее).

let number = 6131;
function f2(num) {
  let sum = arraySum(getDigits(num));
  return sum >= 1 && sum <= 9;
}



//работает!
//let number = 6131;
//function f2(number) {
//  if (number === 0) return 0;
//  return (number - 1) % 9 + 1;
//}
//console.log(f2(number));



//Алгоритмы сортировок

//1 Сортировка вставками
//Задание: есть массив [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3]
//oтсортировать по возрастанию написав алгоритм сортировки вставками.

let insert = [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3];

const insertionSort = insert => {
  for (i = 0; i < insert.length; i++) {
    let a = insert[i], j = i-1;
    while (j >= 0 && insert[j] > a) {
      insert[j+1] = insert[j]; j--;
    }
    insert[j+1] = a;  
  }  
  return insert;
} 
insertionSort(insert);

console.log(insert);


//2 Сортировка пузырьком
//Задание: есть массив [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3]
//отсортировать по возрастанию(1) и по убыванию(2) написав алгоритм сортировки пузырьком.
 
let bubble = [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3];

const bubbleSort = bubble => {
  for (i = 0; i < bubble.length-1; i++) {
    for (j = 0; j < bubble.length-1-i; j++) {
      if (bubble[j+1] < bubble[j]) {
        let a = bubble[j+1];
        bubble[j+1] = bubble[j];
        bubble[j] = a;
      }
    } 
  }  
  return bubble;
} 
bubbleSort(bubble);

console.log(bubble);



const bubbleSort2 = bubble => {
  for (i = 0; i < bubble.length+1; i++) {
   for (j = 0; j < bubble.length+1+i; j++) {
      if (bubble[j-1] < bubble[j]) {
        let a = bubble[j-1];
        bubble[j-1] = bubble[j];
        bubble[j] = a;
      }
    } 
  }  
  return bubble;
} 
bubbleSort2(bubble);

console.log(bubble);


//доп задание:
//оптимизировать алгоритм добавив флаг, отслеживающий перестановку элементов — если за очередной проход по массиву не произошло ни одной, 
//значит массив уже отсортирован. (дабы избежать лишних проходов по массиву) (будет два цикла, один в другом)

const bubbleSort3 = bubble => {
  for (i = 0, endI = bubble.length - 1; i < endI; i++) {
    let wasSwap = false;
    for (j = 0, endJ = endI - i; j < endJ; j++) {
      if (bubble[j+1] < bubble[j]) {
        let swap = bubble[j+1];
        bubble[j+1] = bubble[j];
        bubble[j] = swap;
        wasSwap = true;
      }
    } 
    if (!wasSwap) break;
  }  
  return bubble;
} 
bubbleSort3(bubble);

console.log(bubble);



//3 Бинарный поиск
//Задание: реализовать алгоритм бинарного поиска

let arr = [1, 2, 5, 7, 13, 15, 16, 18, 24, 28, 29];

function binarySearch(sortedArray, key){
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
      let middle = Math.floor((start + end) / 2);

      if (sortedArray[middle] === key) {
          return middle;
      } else if (sortedArray[middle] < key) {
          start = middle + 1;
      } else {
          end = middle - 1;
      }
  }
  return -1;
}

console.log(binarySearch(arr, 18));
