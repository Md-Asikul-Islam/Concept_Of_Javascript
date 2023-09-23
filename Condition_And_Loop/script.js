// *** Booleans *** 
জাভাস্ক্রিপ্ট এ বুলিয়ান হচ্ছে এমন একটা ডাটা টাইপ যার ভ্যালু সবসময় হয় true অথবা false রিটার্ন করবে । যেমন- 

let value1 = true ;
let value2 = false ;

console.log(value1);                     // true
console.log(value2);                     // false
console.log(typeof(value1));             // boolean
console.log(typeof(value2));             // boolean

এখন ভ্যারিএবলের ভ্যালু যদি স্ট্রিং আকারে দেওয়া হয় । সিঙ্গেল কোটেশন বাঁ ডাবল কোটেশনে রাখা হলে - 

let value1 = "true" ;
let value2 = 'false ';

console.log(value1);                     // true
console.log(value2);                     // false
console.log(typeof(value1));             // string
console.log(typeof(value2));             // string

জাভাস্ক্রিপ্ট এ বুলিয়ান ডাটা টাইপ কেস সেন্সিটিভ ।

// Ex -1 will give true value as output :

console.log(Boolean(1));                          // true
শুন্য বাদে যেকোনো নাম্বার জাভাস্ক্রিপ্ট এ বুলিয়ান ডাটা টাইপ true রিটার্ন করবে । 
console.log(Boolean(10));                          // true
console.log(Boolean(10.13));                       //true
console.log(Boolean(-10));                         // true
console.log(Boolean("true"));                      // true
console.log(Boolean(3 * 2 + 1.11));                // true
console.log(Boolean(1 < 2));                       // true

// Ex -2 will give false value as output :

console.log(Boolean(0));                       // false
console.log(Boolean(-0));                      // false
console.log(Boolean(" "));                     // false
console.log(Boolean(undefined));               // false
console.log(Boolean(false));                   // false
console.log(Boolean(NaN));                     // false
console.log(Boolean(1 > 3));                   // false


// Ex -3 

let v1 = true ;                             // it's called litaral syntax

let v2 = new Boolean(true)                  // it's called object constructor syntax

console.log( v1 == v2);                         // true
console.log( v1 === v2);                        // false


// *** comparision operator *** 

আমরা এর আগেই জেনেছি যে comparision operator এর ভিত্তি  হবে  বুলিয়ান ডাটা টাইপ ।

- প্রিমিটিভ টাইপ দুইটা ভ্যারিএবলের মধ্যে তুলনা করতে পারব যার রেজাল্ট হবে true  অথবা  false । এখন এই প্রিমিটিভ ডাটা গুলার তুলনা করার জন্য comparision operator ব্যবহার করা হয় । 
- রেফারেন্স টাইপ ডাটা দুইটা অ্যাঁরে, দুইটা অবজেক্ট দুইটা ফাংশন কে তুলনা করা যায় না । যেকারনে এদের তুলনায় সবসময় false রিটার্ন করে । 

let m = 5; 
let x = 5 ; 
let y = 8 ; 
let z = "5" ; 

// ১। Equal value 
console.log(x == y);                     // false
console.log(x == z);                     // true

এখানে শুধু দুইটা ভ্যারিএবলের ভ্যালু চেক করবে । ভ্যালু দুইটা সমান হলে true রিটার্ন করবে না হলে false রিটার্ন করবে । 

// ২।  	not equal

console.log(x != y);                     // false


এখানে শুধু দুইটা ভ্যারিএবলের ভ্যালু চেক করবে । ভ্যালু দুইটা সমান না হলে true রিটার্ন করবে । 

// ৩। Equal value  and type 

console.log(x === m);                     // true
console.log(x === z);                     // false
এখানে শুধু দুইটা ভ্যারিএবলের ভ্যালু এবং ডাটা টাইপ চেক করবে । প্রথম ক্ষেত্রে ভ্যালু এবং ডাটা টাইপ সেইম হওয়াতে true রিটার্ন করছে । কিন্তু দ্বিতীয় ক্ষেত্রে ভ্যালু সমান হলেও ডাটা টাইপ ভিন্ন যে কারনে false রিটার্ন করেছে । 
x  এর ডাটা টাইপ নাম্বার 
z  এর ডাটা টাইপ স্ট্রিং

// ৪।  	not equal value or not equal type

console.log( x !== m);                     // false
console.log( x !== z);                     // true
console.log( x !== y);                     // true
এখানে শুধু দুইটা ভ্যারিএবলের ভ্যালু এবং ডাটা টাইপ চেক করে দেখবে যে সমান নয় কি না ?? 

সমান হলে false রিটার্ন করবে ।
সমান না হলে true রিটার্ন করবে ।

// ৫।  	greater than

console.log( y > x);                      // true
console.log( x > y );                     // false

// ৬।  	less than

console.log( y < x);                      // false
console.log( x < y )                     // true


// ৭। greater than or equal to
console.log( y >= x);                      // true
console.log( x >= y );                     // false

// ৮।  	less than or equal to

console.log( y <= x);                      // false
console.log( x <= y );                     // true


// *** Bitwise operator *** 




//***  Logical Operator *** 
// ১। Logical AND Operator

const a = true, b = false;
const c = 4;

console.log(a && a);                               // true
console.log(a && b);                               // false

console.log((c > 2) && (c < 2));                   // false

এই ক্ষেত্রে সবগুলা  শর্তই সত্য থাকলে রিটার্ন করবে  true অন্যথায় রিটার্ন করবে  false । 

// ২।  Logical OR Operator

const a = true, b = false, c = 4;

console.log(a || b);                                  // true
console.log(b || b);                                  // false
console.log((c>2) || (c<2));                          // true

এই ক্ষেত্রে যেকোনো একটি  শর্ত সত্য থাকলে রিটার্ন করবে  true অন্যথায় সবগুলা মিথ্যা থাকলে রিটার্ন করবে  false । 
কিন্তু বাম পাশে যদি falsy value থাকে সেক্ষেত্রে ডান পাশে যা থাকবে তাই রিটার্ন করবে। 

false,  0, blank, null , undefined, NaN এদেরকে falsy value বলে । 

// ৩।  Logical NOT Operator

let m = 5; 
let x = 5 ; 
let y = 8 ; 
let z = "5" ; 

console.log(!(x == y));                         // true 
console.log(!(x == m));                         // false
console.log(!(x == z));                         // false


// *** ternary operator ***

let age = 18 ; 

let type = age >= 18 ? " You are adult " : " You are child "
console.log(type);

এখানে প্রশ্নবোধক চিহ্নের আগের পার্টকে কন্ডিশন চেকিং বলে ।

-কন্ডিশন চেকিং true  হলে প্রশ্নবোধক চিহ্নের পরের অংশ রিটার্ন করবে । 
-কন্ডিশন চেকিং false  হলে কোলন চিহ্নের পরের অংশ রিটার্ন করবে । 

// *** truthy or falsy value *** 

কোন বুলিয়ান কনটেক্সটে বাঁ কন্ডিশন চেকিং এ যদি এমন হয় যে এর রেজাল্ট হয় true নয়তো false এদেরকে truthy ortruthy ভ্যালু  বলে । যেমন - 

১। false,  0, -0, "",  blank, null , undefined, NaN , 0n, document.all  এদেরকে falsy value বলে । 

২। true, "any text", শুন্য বাদে যেকোনো নাম্বার , infinity, -infinity , {}, [] এদেরকে truthy ভ্যালু বলে । 

// Ex-1

let myVar = " test "

if (myVar) {
  console.log(" i am truthy value ");
}
else{
  console.log(" i am falsy value ");
}

এখানে কন্ডিশন চেকিং এ যদি truthy ভ্যালু  পায় তাহলে প্রথম ব্লকে যাবে ,আর falsy value পায় তাহলে দ্বিতীয় ব্লকে যাবে । 

// *** Nulish Coalescing operator *** 
জাভাস্ক্রিপ্ট এ  Null এবং undefined কে একত্র করেছে এই অপারেটর তাই একে Nulish Coalescing operator বলে । 

let language ;

console.log(language ?? " javascript ");

এখানে ডাবল কুশ্চেইয়েন মার্ক কে বলা হচ্ছে Nulish Coalescing operator ।

এখন ডাবল কুশ্চেইয়েন মার্কের বাম পাশে যদি কোন ভ্যারিএবলের ভ্যালু null  অথবা undefined থাকে সেক্ষেত্রে তার ডান পাশে যা থাকবে তাই রিটার্ন  করবে । 

// **Difference between or and Nulish **
// EX-1
let language ;
language = null

console.log( language ?? " javascript");                  // javascript
console.log( language || " javascript");                  // javascript

// Ex-2

let language ;
language = NaN

console.log( language ?? " javascript");                  // NaN
console.log( language || " javascript");                  // javascript
এখানে ডাবল কুশ্চেইয়েন মার্কের বাম পাশে যদি কোন ভ্যারিএবলের ভ্যালু null  অথবা undefined না থাকাতে সেক্ষেত্রে তার বাম পাশে যা থাকবে তাই রিটার্ন করবে । এই জন্য Nulish Coalescing operator রিটার্ন করেছে NaN  কিন্তু লজিকাল অর অপারেটর ক্ষেত্রে NaN যেহেতু falsy value তাই javascript রিটার্ন করেছে । 

// **typeof operator **

// জাভাস্ক্রিপ্ট এ ভ্যারিয়েবলের ডাটা টাইপ জানতে typeof operator ব্যবহার করা হয় । যেমন-

EX-1

// let x = 5 + 5;
// let y = "5" + 5;
// let z = "Hello" + 5;

// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(z));

// output 
// number    10
// string    55
// string   hello5

// জাভাস্ক্রিপ্ট সবসময় বাম থেকে ডান দিকে কোড এক্সিকিউট করে । 
let car;
console.log(typeof(car));
output
undefined
এখানে এই ভ্যারিয়েবলের ভ্যালু undefined এবং ডাটা টাইপ undefined

EX-2

typeof "John"                           // string
typeof 3.14                             //  number
typeof NaN                              //  number
typeof false                            //  boolean
typeof [1,2,3,4]                        //  object
typeof {name:'John', age:34}            //  object
typeof new Date()                       //  object
typeof function () {}                   //  function
typeof myCar                            //  undefined
typeof null                             //  object

এখানে কনফিউসিং ডাটা টাইপ হচ্ছে একটা অ্যাঁরের ডাটা টাইপ । একটা অ্যাঁরেকে typeof [1,2,3,4] করলে এটা অবজেক্ট রিটার্ন করে । কিন্তু আমরা চাচ্চি একটা অ্যাঁরেকে চেক করে দেখতে যে এটা আসলে অ্যাঁরে কি না ?? 

function isArray(myArray) {
  return (myArray.constructor.toString().indexOf("Array") > -1) ;
}

console.log(isArray([1, 2, 3, 4]));                        // true 

                  অথবা একটু সহজ করে 

 function isArray(myArray) {
 return (myArray.constructor === Array ) ;
 }

 console.log(isArray([1, 2, 3, 4]));                        // true 

** ধরেন  ইন্টারভিউতে জিজ্ঞেস করল typeof এর ডাটা টাইপ কি ?? 

আমরা জানি ডাটা টাইপ শুধুমাত্র কোন ভ্যারিএবলের ক্ষেত্রে হয় । typeof যেহেতু একটা অপারেটর তাই একে আবার typeof করলে স্ট্রিং রিটার্ন করবে । 

console.log(typeof(typeof(5)));                              // string 

এখানে প্রথমবার যখন typeof করলে রিটার্ন করছে number । number  লিখা পরের ক্ষেত্রে আবার typeof করলে স্ট্রিং রিটার্ন করছে । 



// ** Differce between undefined and Null *** 

typeof undefined                        // undefined
typeof null                             // object

null === undefined                      // false
null == undefined                       // true 


// ** instanceof operator ***

const cars = ["Saab", "Volvo", "BMW"];

const cars = ["Saab", "Volvo", "BMW"];

console.log((cars instanceof Array));                                // true
console.log((cars instanceof Object));                                // true
console.log((cars instanceof String));                                // false
console.log((cars instanceof Number));                                // false


// **** Condition ***

// ১। if statement
এখানে ফাস্ট ব্রাকেটের ভিতরের অংশকে বলা হয় কন্ডিশন চেকিং পার্ট । আমরা জানি জাভাস্ক্রিপ্ট কন্ডিশন চেকিং এর রেজাল্ট হয় বুলিয়ান ডাটা টাইপে । 
-এটা হয়  true 
-এটা নাহয়  false 
এখন কন্ডিশন চেকিং  true  হলেই কেবলমাত্র if ব্লকে ডুকবে । 


 let age = 17 ;
 if (age < 18) {
  console.log(" You are young Boy ");
 }

যেহেতু age ভ্যারিএবলের ভ্যালু 17 যেটা 18 থেকে ছোট । এটা বুলিয়ান statement এ true রিটার্ন করে যে কারনে if ব্লকে ডুকবে এবং কনসল লগ করবে । 

// ২। if...else statement

এখানে ফাস্ট ব্রাকেটের ভিতরের অংশকে বলা হয় কন্ডিশন চেকিং পার্ট । আমরা জানি জাভাস্ক্রিপ্ট কন্ডিশন চেকিং এর রেজাল্ট হয় বুলিয়ান ডাটা টাইপে । 
-এটা হয়  true 
-এটা নাহয়  false 
এখন কন্ডিশন চেকিং  true  হলেই কেবলমাত্র if ব্লকে ডুকবে । 
আবার কন্ডিশন চেকিং false  হলে এটা else ব্লকে ডুকবে । 


 let age = 19 ;
 if (age < 18) {
  console.log(" You are young Boy ");
 }
 else{
  console.log(" You are Adult !");
 }

যেহেতু age ভ্যারিএবলের ভ্যালু 19 যেটা 18 থেকে বড় । এটা বুলিয়ান statement এ false রিটার্ন করে যে কারনে else ব্লকে ডুকবে এবং কনসল লগ করবে । 

// ৩। if...else if...else statement
এখন আমরা কন্ডিশনাল statement যদি দুইটার বেশি হয় সেক্ষেত্রে মাঝের সবগুলা else if ব্যবহার করব শুধুমাত্র লাস্টের কন্ডিশনাল statement টা else  দিয়ে শেষ করতে হবে । এটা জাভাস্ক্রিপ্টের কনভেনশন ।


let age = 19 ;
if (age < 18) {
 console.log(" You are young Boy ");
}
else if(age == 18 ){
 console.log( " Welcome Adult Zone ");
}
else if( age > 18 && age < 30){
  console.log(" You are Matured ");
}
else {
 console.log(" You are  old man !");
}



// ৪। switch

এখানে ফাস্ট ব্রাকেটের ভিতরের অংশকে বলা হয় এক্সপ্রেশন পার্ট  । আগের বার আমরা if...else if ক্ষেত্রে ফাস্ট ব্রাকেটের ভিতরে কন্ডিশনাল statement লিখতাম কিন্তু সুইচ এর ফাস্ট ব্রাকেটে সরাসরি ভ্যারিএবল বাঁ এক্সপ্রেশন দিতে হবে । 
এখন এক্সপ্রেশনের ভ্যালুর সাথে প্রত্যেকটা কেসের ভ্যালু চেক করে দেখবে, যেই কেসের সাথে ম্যাচ করবে তাকেই রিটার্ন করবে । 
// Ex- 1


let date = new Date().getDay();
console.log(date);
switch (date) {
  case 0:
  console.log("Sunday");
    break;
  case 1:
  console.log(  "Monday");
    break;
  case 2:
  console.log( "Tuesday");  
    break;
  case 3:
  console.log("Wednesday");
    break;
  case 4:
  console.log("Thursday");
    break;
  case 5:
  console.log("Friday");
    break;
  case 6:
  console.log("Saturday");
    break;
  default : console.log(" it's  Not a valid date ");  
}

আমরা জানি জাভাস্ক্রিপ্ট getDay(); মেথড সাধারনত একটা দিনকে রিটার্ন করে যার ভ্যালু সবসময় ০ থেকে ৬ হয় । 

getDay(); মেথড এর ভ্যালু ০ হলে রবিবার
getDay(); মেথড এর ভ্যালু ১ হলে সোমবার 
getDay(); মেথড এর ভ্যালু ২ হলে মঙ্গলবার 
getDay(); মেথড এর ভ্যালু ৩ হলে বুধবার
getDay(); মেথড এর ভ্যালু ৪ হলে বৃহস্পতিবার
getDay(); মেথড এর ভ্যালু ৫ হলে শুক্রবার 
getDay(); মেথড এর ভ্যালু ৬ হলে শনিবার 





// EX-2

এখানে ফাস্ট ব্রাকেটের ভিতরের অংশকে বলা হয় এক্সপ্রেশন পার্ট  ।  আমরা জানি সুইচ এর ফাস্ট ব্রাকেটে সরাসরি ভ্যারিএবল বাঁ এক্সপ্রেশন দিতে হবে  কিন্তু সুইচের কেসের ভ্যালু গুলা ইম্প্রেসিভে ভ্যালু হওয়াতে । অর্থাৎ কেসের ভ্যালু গুলা true অথবাঁ  false রিটার্ন করেছে যে কারনে এক্সপ্রেশনের ভ্যালু true অথবা  false হবে । 
# এখন এক্সপ্রেশন  যদি  true  হয় -
তখন আমার ভ্যারিএবলের সাথে যেই কেসটা ম্যাচ করে প্রথমে যে  true রিটার্ন করবে সেই কেসের কনসল লগ প্রিন্ট হবে । 
# এখন এক্সপ্রেশন  যদি   false হয় -
তখন আমার ভ্যারিএবলের সাথে যেই কেসটা ম্যাচ করে প্রথমে যে   false  রিটার্ন করবে সেই কেসের কনসল লগ প্রিন্ট হবে । 

এরপর যদি কোন কেসের সাথে ভ্যারিএবলে ম্যাচ না করে সেক্ষেত্রে default এর কনসল প্রিন্ট হবে । 




let age = 17;

switch (true) {
  case age < 18:
    console.log("You are a young Boy");
    break;
  case age === 18:
    console.log("Welcome to the Adult Zone");
    break;
  case age > 18 && age < 30:
    console.log("You are Matured");
    break;
  default:
    console.log("You are an old man!");
    break;
}



