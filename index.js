// Task 1

let i1 = 1;
while (i1 <= 50) {
	console.log(i1);
	i1++;
}

let i2 = 1;
while (i2 <= 50) {
	document.write(i2 + '<br>');
	i2++;
}

for (let i3 = 1; i3 <= 50; i3++) {
 document.write(i3 + '<br>');
}


// Task 2

let a1 = 1;
while (a1 <= 100) {
    console.log(a1);
    a1++;
}

let a2 = 1;
while (a2 <= 100) {
    document.write(a2 + '<br>');
    a2++;
}

for (let a3 = 1; a3 <= 100; a3++) {
     document.write(a3 + '<br>');
}


// Task 3

let b1 = 11;
while (b1 <= 33) {
    console.log(b1);
    b1++;
}

let b2 = 11;
while (b2 <= 33) {
    document.write(b2 + '<br>');
    b2++;
}

for (let b3 = 11; b3 <= 33; b3++) {
     document.write(b3 + '<br>');
}


// Task 4

let с1 = 0;
while (с1 <= 100) {
    document.write(с1 + '<br>');
    с1+=2;
}

for (let c2 = 0; c2 <= 100; c2+=2) {
  document.write(c2 + '<br>'); 
}


// Task 5

let d1 = 1;
let d2 = 0;
while (d1 <= 100) {
    document.write(d2 + '<br>');
    d2 = d2 + d1;
    d1++;
};

alert(d2);


// let d1 = 1;
// let d2 = 0;
for (let d1 = 0; d1 <= 100; d1++) {
  document.write(d2 + '<br>'); 
  d2 = d2 + d1;
};

alert(d2);


// Task 6

let n = 1000;
let num = 0;
while (n > 50) {
    num++;
    n/=2;
};

alert (n);
alert (num);
