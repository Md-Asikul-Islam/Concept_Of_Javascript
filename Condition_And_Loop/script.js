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

// *** for loop *** 
loop  ব্যবহার করা হয়  মূলত কারলি ব্রাসেস বাঁ সেকেন্ড ব্রাকেটের ভিতরের কোড ব্লকটাকে বার বার  এক্সিকিউট করতে । ধরেন আমার একটা একটা কাজ দশবার করতে হবে এখন আমি কি দশবার সেইম কোডটাই লিখব ?? না 
এই ব্লকের মধ্যে যে কোড আছে সেটা বার বার এক্সিকিউট করতে for loop ব্যবহার করা হয় । 


## Without loop
এখন আমি চাচ্চি কনসল টা পাচবার প্রিন্ট করতে তাহলে আমাকে এভাবে লিখতে হবে ।
একই কাজ আমাকে বার বার  করতে হয়েছে , এই রকম রিপিটেড কাজ করতে  loop ব্যবহার করা হয় । 

let name = "John Doe";
console.log("Hi, my name is " + name);
console.log("Hi, my name is " + name);
console.log("Hi, my name is " + name);
console.log("Hi, my name is " + name);
console.log("Hi, my name is " + name);
output : 
Hi, my name is John Doe 
Hi, my name is John Doe 
Hi, my name is John Doe 
Hi, my name is John Doe 
Hi, my name is John Doe 


// ## With loop

for (var i = 0; i < 5; i++) {
  let name = "John Doe";
  console.log("Hi, my name is " + name);
}
output : 
Hi, my name is John Doe    
Hi, my name is John Doe 
Hi, my name is John Doe 
Hi, my name is John Doe 
Hi, my name is John Doe 

for loop এর কারলি ব্রাসেসের বাইরে প্রথমবন্ধনীর ভিতরে তিনটি এক্সপ্রেশন থাকে -

১। প্রথম এক্সপ্রেশন বলতে হয় loop এর স্টার্ট পয়েন্ট   ।

২। দ্বিতীয় এক্সপ্রেশনে কন্ডিশন চেকিং করা হয় true হলে loop এর ভিতরে ডুকবে false হলে loop থেকে বের হয়ে আসবে । 

৩। তৃতীয় এক্সপ্রেশন বলতে হয় প্রত্যেকটা ইটারেশনে ভ্যালু বাড়বে অথবা কমবে । 

// Ex-1

const cars = ["A", "B", "C", "D", "E"];

for (let i = 0; i < array.length; i++) {
console.log(i);
  
}

এই loop টা কিভাবে কাজ করছে দেখা যাক , 

প্রথমে i = 0 থেকে loop স্টার্ট হবে এরপর   এই ভ্যালুর  কন্ডিশন চেকে true হলে loop এর ভিতরে ডুকবে  false হলে loop থেকে বের হয়ে আসবে । 
যেহেতু আমার cars অ্যাঁরের লেংথ হল ৫ তাই ০ লেংথ থেকে ছোট হলে loop এর ভিতরে ডুকবে এবং কোড ব্লকে যেটা থাকবে সেটা প্রিন্ট করবে । এরপর i এর ভ্যালু ১ বাড়িয়ে i = 1 করবে । এভাবে ইটারেশন  চলতে থাকবে । 

০ < ৫   এই কন্ডিশন true তাই loop এর ভিতরে ডুকবে এবং  ০ প্রিন্ট করবে । এরপর i এর ভ্যালু ১ বাড়িয়ে দিবে । 
১ < ৫   এই কন্ডিশন true তাই loop এর ভিতরে ডুকবে এবং  ১ প্রিন্ট করবে । এরপর i এর ভ্যালু ১ বাড়িয়ে দিবে । 
২ < ৫   এই কন্ডিশন true তাই loop এর ভিতরে ডুকবে এবং  ২ প্রিন্ট করবে । এরপর i এর ভ্যালু ১ বাড়িয়ে দিবে । 
৩ < ৫   এই কন্ডিশন true তাই loop এর ভিতরে ডুকবে এবং  ৩ প্রিন্ট করবে । এরপর i এর ভ্যালু ১ বাড়িয়ে দিবে । 
৪ < ৫   এই কন্ডিশন true তাই loop এর ভিতরে ডুকবে এব ৪ প্রিন্ট করবে । এরপর i এর ভ্যালু ১ বাড়িয়ে দিবে । 
৫ < ৫   এই কন্ডিশন false তাই loop এর ভিতর থেকে বের হয়ে আসবে । 


// *** for in loop ***

জাভাস্ক্রিপ্ট যদি আমাদের অবজেক্ট নিয়ে কাজ করতে হয় , অবজেক্টের প্রপার্টি এবং ভ্যালু গুলা এক্সেস করতে চাইলে for in loop ব্যবহার করতে হবে । 

const person = {
  fname: "Jonh",
  lname: "Doe",
  age  : 25
}

// Ex-1 

for (const x in person) {
 console.log(x);
}
এখানে প্রত্যেকটা loop  এ  X  হবে একটা প্রপার্টি -

প্রথমবার loop  এ  X  হবে fname
দ্বিতীয়বার  loop  এ  X  হবে lname
তৃতীয়বার  loop  এ  X  হবে  age

আবার অবজেক্টের প্রপার্টি গুলার ভ্যালু এক্সেস করতে গেলে আমরা জানি অবজেক্টনেইম ডট নোটেশন প্রপার্টনেইম দিলে ভ্যালু পাওয়া যায় । সেটা একটা অবজেক্টের ক্ষেত্রে কিন্তু এখানে আমরা অবজেক্টকে loop  করাতে এভাবে করা যাবে না । এটা অ্যাঁরের মত করে ভ্যালু গুলা এক্সেস করতে হবে । 

for (const x in person) {
  console.log(person[x]);
 }

 এখানে প্রত্যেকটা loop  এ  X  হবে একটা প্রপার্টি -

 প্রথমবার loop  এ  X এর ভ্যালু  হবে John
 দ্বিতীয়বার  loop  এ  X এর ভ্যালু  হবে Doe
 তৃতীয়বার  loop  এ  X এর ভ্যালু  হবে  25



// *** for of loop ***

জাভাস্ক্রিপ্ট যদি আমাদের অ্যাঁরে অথবা ইটারেবল অবজেক্ট  নিয়ে কাজ করতে হয় ট , একটা অ্যাঁরে বাঁ ইটারেবল অবজেক্ট এর  ইনডেক্স এবং ভ্যালু গুলা এক্সেস করতে চাইলে for of loop ব্যবহার করতে হবে । 

// EX-1 iterable object 

let a = " Mahmudulah"

for (const x of a) {
  console.log(x);
}
প্রথমবার   loop  এ  X  হবে  M
দ্বিতীয়বার  loop  এ  X  হবে  a
তৃতীয়বার  loop  এ  X  হবে  h
চতুথবার  loop  এ  X   হবে  m
পঞ্চমবার  loop  এ  X  হবে  u
ষষ্ঠবার  loop    এ  X  হবে  d
সপ্তমবার  loop  এ  X  হবে  u
অষ্টমবার  loop  এ  X  হবে  l
নবমবার  loop  এ  X  হবে  a
দশমবার  loop  এ  X  হবে  h

// *** forEach() **** 







// Ex-2 Arrray 

let a = [ 4, 5, 7, 9, 10];

for(let x of a ){
  console.log(x);
}
এখানে অ্যাঁরের ক্ষেত্রে for of loop  ভ্যালু রিটার্ন করে কিন্তু for in loop এর ক্ষেত্রে ইনডেক্স রিটার্ন করেছিল । 

প্রথমবার loop  এ  X এর ভ্যালু  হবে 4
দ্বিতীয়বার  loop  এ  X এর ভ্যালু  হবে 5
তৃতীয়বার  loop  এ  X এর ভ্যালু  হবে  7
চতুথবার  loop  এ  X  এর ভ্যালু  হবে  9
পঞ্চমবার  loop  এ  X এর ভ্যালু  হবে 10 


// *** while loop ***
for loop এর কারলি ব্রাসেসের বাইরে প্রথমবন্ধনীর ভিতরে তিনটি এক্সপ্রেশন ছিল কিন্তু while loop ক্ষেত্রে একটি এক্সপ্রেশন থাকবে শুধুমাত্র কন্ডিশনটা   -

let i = 0 ;
let text = ""
while ( i < 10 ) {
text +=  " The number is " + i ;
i++ ;
}
console.log(text);


// *** Break statement ***

একটা loop এর মধ্যে আমরা যখন Break statement টা কল করি তখন loop  থেকে বের হয়ে আসি । 

for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
} 

এখানে ১০ টি স্টেপ ছিল কিন্ত loop ভিতরে একটা কন্ডিশন আছে যেখানে i === 3 হলে Break statement টা কল হবে । যেকারনে i === 3 হলে loop টা আর চলবে না । বাকি স্টেপ  গুলা ইটারেশন হবে না Break statement টা কল হয়েছে বলে । 


// *** continue statement ***

একটা loop এর মধ্যে আমরা যখন continue statement টা কল করি তখন loop এর একটা ইটারেশন  থেকে বের হয়ে আসি । 
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
এখানে ১০ টি স্টেপ ছিল কিন্ত loop ভিতরে একটা কন্ডিশন আছে যেখানে i === 3 হলে continue statement টা কল হবে । যেকারনে i === 3 দেখলেই loop টা পরের স্টেপ এ চলে যাবে । বাকি স্টেপ  গুলা ইটারেশন হবে শুধুমাত্র যে কারনে  i === 3 স্টেপ বাদে বাকি সবগুলা প্রিন্ট হবে ।


// *** RegExp *** 

আমরা যখন কোন কিছু সার্চ করি সেক্ষেত্রে মূলত  Regular Expression ব্যবহার করা হয় । 


// ***  Debuging with chrome dev tools *** 






// *** Event Loop ***





// ***  Execution context  *** 





