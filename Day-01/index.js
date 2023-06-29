var a;
console.log(a);
// undefined

console.log(typeof a);
// undefined

var a=100;
console.log(a);
// 100
console.log(typeof a);
// number

var a=1000.200;
console.log(a);
// 1000.2
console.log(typeof a);
// number

a=1; // declaration without using any keyword is a bad practice because it makes the variable global
console.log(a);
// 1
console.log(typeof a);
// number

var a=1111111111111111111;
console.log(a);
// 1111111111111111200
console.log(typeof a);
// number

var a="Yash";
console.log(a);
// Yash
console.log(typeof a);
// string

var a = 'Yash';
console.log(a);
// Yash
console.log(typeof a);
// string

var a='A';
console.log(a);
// A
console.log(typeof a);
// string

var a=`Yash`;
console.log(a);
// Yash
console.log(typeof a);
// string

var a="Let's do it ";
console.log(a);
// Let's do it
var a= `hgdjksghjkdfgkdh
ghsdkj
Hjgghdkjfghkd`;
console.log(a);
// hgdjksghjkdfgkdh
// ghsdkj
// Hjgghdkjfghkd
// 'hgdjksghjkdfgkdh\nghsdkj\nHjgghdkjfghkd'

var a=10;
console.log(a);
// 10
var b=20;
console.log(b);
// 20
console.log("A is "+a+" And B is "+b);
// A is 10 And B is 20
console.log(`A is ${a} and B is ${b}`);
// A is 10 and B is 20

var a = 10;
console.log(a);
// 10
var b = "20";
console.log(b);
// '20'
console.log(typeof a);
// number
console.log(typeof b);
// string
var b = "10";
console.log(b);
// 10
console.log(a==b); // loosely comparision
// true
console.log(a===b); // strict comparision
// false
console.log(10 + "10");
// 1010

console.log(10 + parseInt("10"));
// 20
console.log(10 + parseFloat("10.30"));
// 20.3
console.log(10  + Number("10"));
// 20

console.log(typeof Number);
// function
console.log(typeof parseInt);
// function
console.log(10 - "10")
// 0
console.log("Yash" + " Vardhan");
// Yash Vardhan
console.log("Yash" - " Vardhan");
// NaN
console.log(10 - undefined);
// NaN
console.log(undefined + undefined);
// NaN
console.log(typeof NaN);
// number
var e = undefined + 10;
console.log(e);
// NaN
console.log(isNaN(e)?0:e);
// 0
var e = 10/0;
console.log(e);
// Infinity

console.log(typeof e);
// number
console.log(isFinite(e));
// false
console.log(isFinite(e)?e:0);
// 0
var att = true;
console.log(typeof att);
// boolean
console.log(att + 10);
// 11
console.log(true + true - false);
// 2
console.log(true + "hi");
// truehi

var a = Number.MAX_SAFE_INTEGER;
console.log(a);
// 9007199254740991
console.log(++a);
// 9007199254740992
console.log(++a);
// 9007199254740992
console.log(++a);
// 9007199254740992
console.log(++a);
// 9007199254740992
console.log(typeof a);
// number
var a= 9007199254740992n;
console.log(a);
// 9007199254740992n
console.log(typeof a);
// 'bigint'

// console.log(a + 1111);
// Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
//     at <anonymous>:1:3
// (anonymous)

console.log(a + 1111n);
// 9007199254742103n
var a=BigInt("53454354353453534534534");
console.log(a);
// 53454354353453534534534n
console.log(typeof BigInt);
// function
var t;
console.log(typeof t);
// undefined

var t =5;
console.log(typeof t);
// number
var t = null;
console.log(t);
// null
console.log(typeof t);
// object

var r = 100;
var w = [10,20,30,40,50];
console.log(w);
// [10, 20, 30, 40, 50]
var d = w;

console.log(d[0]);
// 10
console.log(w[0]);
// 10 
d[0] = 11111;
console.log(d[0]);
// 11111
console.log(w[0]);
// 11111

console.log(w);
// [11111, 20, 30, 40, 50]
console.log(w);
// [11111, 20, 30, 40, 50]
var w = null;
console.log(w);
// null
console.log(typeof w);
// object
console.log(w);
// null
console.log(d);
// [11111, 20, 30, 40, 50]
console.log(Symbol());
// Symbol()
console.log(Symbol() === Symbol());
// false
var obj = {};
console.log(typeof obj);
// object
var arr = [10,20,30];
console.log(typeof obj);
// object
console.log(typeof arr);
// object
console.log(arr instanceof Array);
// true
console.log(Object);
// ƒ Object() { [native code] }
console.log(Array);
// ƒ Array() { [native code] }
console.log(arr instanceof Array);
// true