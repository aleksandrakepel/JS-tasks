// Задание 1 (объект чайник)

let kettle = {
  model: "SkyKettle RK-M216S",
  manufacturer: "REDMOND",
  "date of manufacture": 2021,
  "best before date": "3 years",
  "guarantee period": "18 months",
  color: "white",
  height: "30 centimeters",
  capacity: "1,7 liter",
  condition: {
    one: "isOn",
    two: "isOff",
    three: "output data",
    four: "clear data",
  },
  
  isOnOff() {
    console.log(`${this.condition.one}, ${this.condition.two}`);
  },

  outputThis() {
    console.log(`${this.condition.three}`);
  }, 

  clearеThis() {
    console.log(`${this.condition.four}`); 
  }, 
};

kettle.isOnOff();
kettle.outputThis();
kettle.clearеThis();
console.log(kettle);


// Задание 2 (класс Работник)

class Employee {
  
  constructor(firstname, lastname, rate, workDays) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.rate = rate;
    this.workDays = workDays;
  }

  getCurrentSalary() {
    return (this.rate * this.workDays);
  }
}

let worker = new Employee ('Nastya', 'Petrova', 5, 24); 
let worker2 = new Employee ('Ivan', 'Ivanov', 10, 31); 
  
console.log(worker.firstname);
console.log(worker.lastname);
console.log(worker.rate);
console.log(worker.workDays); 
console.log(worker.getCurrentSalary()); 

console.log(worker2.firstname);
console.log(worker2.lastname); 
console.log(worker2.rate); 
console.log(worker2.workDays); 
console.log(worker2.getCurrentSalary());


//Задания из видео

//let userInfo = new Object();
//let userInfo = {};

let userInfo = {
  name: "Vasia",
  age: 30,
  "likes javascript": true,
};

console.log(userInfo);
console.log(userInfo.name);
console.log(userInfo["likes javasсcipt"]);

  
let firstPart = "likes";
let userInfo1 = {
  name: "Vasia",
  age: 30,
  [firstPart + "likes javascript"]: true,
};

console.log(userInfo1["likes javasсript"]);
console.log(userInfo1[0]);
console.log(userInfo1["0"]);


let id = Symbol("id");
let userInfo2 = {
  name: "Vasia",
  age: 30,
  [id]: "Nekoe znachenie"
};

console.log(userInfo2);


let userInfo3 = {
  name: "Vasia",
  age: 30,
  address: {
    city: "Uzhgorod",
    street: "Freedom",
  }
};

console.log(userInfo3);
console.log(userInfo3.address);
console.log(userInfo3.address.city);


function makeUserInfo(name, age) {
   return {
    name,
    age,
    "likes javascript" :true,
   };
}


let user = makeUserInfo('Vasia', 30);
console.log(user);


let user1 = Object.assign({}, userInfo);
user.age = 18;

console.log(user);
 

// Задание по ссылке

const Manager = function(name, sales) {
  this.name = name;
  this.sales = sales;
};

Manager.prototype = {
  sell: function(thing) {
  this.sales += 1;
  return 'Manager ' + this.name + ' sold ' + thing;
},
  speak: function(word) {
    return this.name + ' says ' + word;
  }
};

const john = new Manager('John', 10);
const mary = new Manager('Mary', 120);

console.log(john.sales, mary.sales);
john.sell('Apple');     
mary.sell('Pomegrade');
mary.speak('Hello!');
console.log(john.sales, mary.sales);
