var a = [10,20,30];
console.log(typeof a);
// object
console.log(a instanceof Array);
// true
console.log(typeof Array);
// function
console.log(a instanceof Object);
// true
console.log(typeof Object);
// function
console.log(Array.constructor);
// ƒ Function() { [native code] }
console.log(Object.constructor);
// ƒ Function() { [native code] }

a.push(1000);
console.log(a);
// [10, 20, 30, 1000]
a.pop();
console.log(a);
// [10, 20, 30]
a.unshift(2000);
console.log(a);
// [2000, 10, 20, 30]
a.shift();
console.log(a);
// [10, 20, 30]

console.log(a.splice(1));
// [20, 30]
console.log(a);
// [10]
a = [10,20,30,40,50];
console.log(a.splice(1,1));
// [20]
console.log(a);
// [10, 30, 40, 50]

console.log(a.splice(1,1,8888));
// [30]
console.log(a);
// [10, 8888, 40, 50]
console.log(a.splice(1,1,100,200,300));
// [8888]
console.log(a);
// [10, 100, 200, 300, 40, 50]
console.log(a.splice(1,0,7777));
// []
console.log(a);
// [10, 7777, 100, 200, 300, 40, 50]

for(var i = 0; i<a.length; i++){
    console.log(a[i]);
}
// 10
// 7777
// 100
// 200
// 300
// 40
// 50

var phones= [1111,2222,3333,4444,5555,7777,8888,222]; // array
var phoneObj = {"ram":[1111,2333], "shyam":2222}; // object
console.log(phoneObj["ram"]);
// [1111, 2333]
console.log(typeof phoneObj);
// object
console.log(phoneObj instanceof Array);
// false
console.log(phoneObj instanceof Object);
// true
console.log(phoneObj);
// {ram: Array(2), shyam: 2222}
phoneObj['ram'] = [888888,333333];
console.log(phoneObj['ram']);
// [888888, 333333]

var w = phoneObj['ram'];
console.log(w);
// [888888, 333333]
w.push(11111);
console.log(w);
// [888888, 333333, 11111]
console.log(phoneObj['ram']);
// [888888, 333333, 11111]

// var t = ...phoneObj['ram'];
// Uncaught SyntaxError: Unexpected token '...'

var t = [...phoneObj['ram']];
console.log(t);
// [888888, 333333, 11111]
console.log(phoneObj['ram']);
// [888888, 333333, 11111]
t[0]=222;
console.log(t);
// [222, 333333, 11111]
console.log(phoneObj['ram']);
// [888888, 333333, 11111]
var x = [10,20,30,40];
var y =[100,200,300];
var z = [x,y];
console.log(z);
// [Array(4), Array(3)]
console.log(z[0]);
// [10, 20, 30, 40]
console.log(z[0][0]);
// 10
var z2 = [...x,...y];
console.log(z2);
// [10, 20, 30, 40, 100, 200, 300]
console.log(z);
// [Array(4), Array(3)]

var q = {id:1001, name:'Ram'};
var q2 = {id:1002, salary:8888, bonus:1111};
var a = {"one":q,"two":q2};
console.log(a);
// {one: {…}, two: {…}}one: {id: 1001, name: 'Ram'}two: {id: 1002, salary: 8888, bonus: 1111}[[Prototype]]: Object
console.log(a['one']['name']);
// Ram
var a = {...q,...q2};
console.log(a);
// {id: 1002, name: 'Ram', salary: 8888, bonus: 1111}
console.log(a['id']);
// 1002
console.log(a.id);
// 1002
a.dept="IT";
console.log(a);
// {id: 1002, name: 'Ram', salary: 8888, bonus: 1111, dept: 'IT'}
console.log(delete a.bonus);
// true
console.log(a);
// {id: 1002, name: 'Ram', salary: 8888, dept: 'IT'}
console.log(delete a.yyyy);
// true
var dhoni = {"name":'MS', "age":42, 6:200,4:500,50:51,100:10};
console.log(dhoni.name);
// MS

// console.log(dhoni.50);
// Uncaught SyntaxError: Unexpected number

console.log(dhoni[50]);
// 51


// dhoni.number of wins=100;
// Uncaught SyntaxError: Unexpected identifier 'of'

// dhoni.["number of wins"]=100;
// Uncaught SyntaxError: Unexpected token '['

dhoni["number of wins"]=100;
console.log(dhoni);
// {4: 500, 6: 200, 50: 51, 100: 10, name: 'MS', age: 42, number of wins: 100}
console.log(dhoni['number of wins']);
// 100
var key = 'age';
console.log(dhoni.key);
console.log(dhoni[key]);
// 42
for(var key in dhoni){
    console.log(key);
}
// 4
// 6
// 50
// 100
// name
// age
// number of wins

for(var key in dhoni){
    console.log(key, dhoni[key]);
}
// 4 500
// 6 200
// 50 51
// 100 10
// name MS
// age 42
// number of wins 100

var arr = [10,20,30,40,50];
for(var element of arr){
    console.log(element);
}
// 10
// 20
// 30
// 40
// 50




function show(){
    console.log("I am the Show ");
}
show();
// I am the Show 

function show(){
    console.log("I am the Show ");
    return 100;
}
show();
// I am the Show 

disp();
function disp(){
    console.log("I am the disp ");
    return 100;
}
// I am the disp 

console.log(window);
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(typeof window);
// object

console.log(window.disp);
// ƒ disp(){
//     console.log("I am the disp ");
//     return 100;
// }

disp(); 
// I am the disp 
window.disp();
// I am the disp 


var w = [10,20];
console.log(typeof w);
// object
console.log(typeof window);
// object

console.log(w instanceof Array);
// true
console.log(window instanceof Window);
// true
console.log(window instanceof Object);
// true