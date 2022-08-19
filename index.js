// Task 1

let day = prompt ('В какую декаду месяца попадает число?');
if (day >= 0 && day <= 10) {
	alert('В первую декаду.');
}
if (day >= 11 && day <= 20) {
	alert('Во вторую декаду.');
}
if (day >= 21 && day <= 31) {
	alert('В третью декаду.');
}

// Task 2

let month = prompt ('В какую пору года попадает месяц?');
if (month == 1 || month == 2 || month == 12) {
	alert('Зима');
}
if (month == 3 || month == 4 || month == 5) {
	alert('Весна');
}
if (month == 6 || month == 7 || month == 8) {
	alert('Лето');
}
if (month == 9 ||month == 10 || month == 11) {
	alert('Осень');
}

// Task 3

let line = 'abcde';
if (line[0]=='a') {
    alert ('Yes');
}
else {
    alert ('No');
}


// Task 4

let line2 = '12345';
if (line2[0]=='1' || line2[0]=='2' || line2[0]=='3') {
    alert ('Yes');
}
else {
    alert ('No');
}

// Task 5

let line3 ='123';
let line3Sum = (+line3[0] + +line3[1] + +line3[2]);
alert (line3Sum);

// Task 6

let line4 = '123456';
if ((+line4[0] + +line4[1] + +line4[2]) == (+line4[3] + +line4[4] + +line4[5])) {
   alert('Yes');
} 
else {
alert('No');
}

let line5 = '333621';
if ((+line5[0] + +line5[1] + +line5[2]) == (+line5[3] + +line5[4] + +line5[5])) {
   alert('Yes');
} 
else {
alert('No');
}
