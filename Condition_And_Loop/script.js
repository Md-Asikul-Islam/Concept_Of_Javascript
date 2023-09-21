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























*** truthy or falsy value *** 











