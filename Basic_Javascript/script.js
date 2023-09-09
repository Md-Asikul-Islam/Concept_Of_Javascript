

// *** variable concept *** 


ভ্যারিঅ্যাবল হচ্ছে ভ্যালু রাখার জায়গা বাঁ কনটেইনার । 

জাভাস্ক্রিপ্ট এ ভ্যারিঅ্যাবল তিনভাবে লিখতে হয়  যথা - 

// ১ । var - keyword
// ## declaration and Assign 

 var x = 5 ;

 এটাকে ভেঙ্গে লিখা যায় -

 var x ;   এটাকে  ভ্যারিঅ্যাবল declaration  বলে  ।
 x = 5 ;  এটাকে ভ্যারিঅ্যাবল এ ভ্যালু  Assign  করা বলে ।

 এটি  Hoisted হয় । 
 এর কোন ব্লক স্কোপ(Block scope)  নেই । ব্লক স্কোপেও  এটি গ্লোবাল স্কোপের মত কাজ করে । 

// ## Redeclaration and ReAssign 

ধরেন আমাদের কোড ইডিটরের গ্লোবাল স্কোপে একটা ভ্যারিঅ্যাবল লিখেছি - সেটা হল 

var x = 5 ; 
এখন আমরা চাইলে  এর ক্ষেত্রে   -Redeclare and ReAssign করতে পারব । 

var x = 6 ; 
এটাকে ভেঙ্গে লিখা যায় -

var x ;            এটাকে  ভ্যারিঅ্যাবল Redeclaration  বলে  ।

x = 6 ;           এটাকে ভ্যারিঅ্যাবল এ ভ্যালু  ReAssign  করা বলে ।


// ২। let - keyword 
//  ## declaration and Assign 

let x = 5 ;

এটাকে ভেঙ্গে লিখা যায় -

let  x ;   এটাকে বলে ভ্যারিঅ্যাবল declaration  করা ।
x = 5 ;   এটাকে বলে ভ্যারিঅ্যাবল এ ভ্যালু  Assign  করা ।

এটি  Hoisted হয় না । 
এর  ব্লক স্কোপ(Block scope)  আছে । ব্লক স্কোপের  বাইরে এটিকে এক্সেস করা যায় না  । 

// ## Redeclaration and ReAssign 

ধরেন আমাদের কোড ইডিটরের গ্লোবাল স্কোপে একটা ভ্যারিঅ্যাবল লিখেছি - সেটা হল 

let x = 5 ; 
এখন আমরা চাইলে এর ক্ষেত্রে   -Redeclare করতে পারব না কিন্তু  ReAssign করতে পারব  । 

// Redeclare
// let  x = 6 ;              Identifier 'x' has already been declared

এখানে এরর আসছে ভ্যারিঅ্যাবল কে Redeclare করা যাচ্ছে না । 
// ReAssign 

let x ;
x = 5 ;
x = 6 ;
console.log(x ); করলে দেখা যাবে যে আউটপুট আসবে 6
ভ্যারিঅ্যাবল এ ভ্যালু ReAssign  করলে আগের ভ্যালু এক্সেস করা যাবে না । 



// ৩।  const - keyword 
 const x = 5 ;
এটাকে ভেঙ্গে লিখা যায় না । 

একই নামে ভ্যারিঅ্যাবল Redeclaration  করা যাবে না । 
ভ্যারিঅ্যাবল  এর ভ্যালু  Re Assign  করা যাবে না  ।

এটি Hoisted হয় না  । 
এর  ব্লক স্কোপ(Block scope)  আছে । ব্লক স্কোপের  বাইরে এটিকে এক্সেস করা যায় না  । 




***  Scope in javascript ****

স্কোপ হচ্ছে একটা নির্দিষ্ট এরিয়া পর্যন্ত বিস্তৃত বাঁ একটা সীমাবদ্ধ জায়গার মধ্যে কোন একটা জিনিস কাজ করে ।

জাভাস্ক্রিপ্ট এ তিন ধরনের স্কোপ আছে - 

১। Global Scope -

যেকোনো কারলি ব্রাসেসের বাইরের  এরিয়াকে গ্লোবাল স্কোপ বলে । 

var x = 4 ;                           // global scope    

let x = 5 ;                          // global scope  

const x = 6  ;                        // global scope  

২। Function Scope -

কোন একটা ফাংশনের বডিকে Function Scope বলে - 

function A() {
    var x = 3;                       // function scope 
}

আমরা ফাংশন বডির বাইরে যেকোনো জায়গায় var লিখলে সেটা কোড ইডিটরের সব জায়গায় এক্সেস পাবে কিন্তু ফাংশন বডির ভিতরে কোন ভ্যারিঅ্যাবল বাইরে এক্সেস করা যাবে না । 

function A() {
    let  x = 3;                      // function scope 
}


function A() {
    const x = 3;                      // function scope 
}



৩। Block Scope -

Block Scope হচ্ছে এমন একটা এরিয়া যেটা { } কারলি ব্রাসেস মধ্যে সীমাবদ্ধ থাকে । যেমন - 

{
  const x = 2; 
}

এখন এই X এর এক্সেস শুধুমাত্র { } কারলি ব্রাসেস মধ্যে সীমাবদ্ধ থাকে , এর বাইরে X কাজ করবে না । 



{
    let x = 2;
} 

এখন এই X এর এক্সেস শুধুমাত্র { } কারলি ব্রাসেস মধ্যে সীমাবদ্ধ থাকে , এর বাইরে X কাজ করবে না । 




আমরা যদি ভ্যারিঅ্যাবল পরিবর্তন করে var নিলে ভিন্ন রকম ঘটনা ঘটবে ।
{
    var x = 3;
}
কারন আমরা জানি যখন কোন ভ্যারিঅ্যাবল
কে var কি ওয়ার্ড দিয়ে লিখি তখন এইটা গ্লোবাল স্কোপ অথবা ফাংশন  স্কোপ থাকে কিন্তু  সেটার কোন ব্লক স্কোপ থাকে না । 

যেকারনে কারলি ব্রাসেসের বাইরে X এক্সেস পাবে । 

*** Lexical scope  *** 

জাভাস্ক্রিপ্ট এ প্যারেন্ট এর সবকিছু তার চাইল্ড এক্সেস করতে পারে । সুতরাং গ্লোবাল স্কোপের সবকিছু ফাংশন স্কোপ বাঁ ব্লক স্কোপে এক্সেস করা যাবে  কিন্তু চাইল্ডের কোন কিছুতে আবার প্যারেন্ট এর এক্সেস নাই ।

var num1 = 3;
var num2 = 4;

var sum = function(){
    return num1 + num2 ;
};

console.log(sum());                           output //     7 

এখন মনে হতে পারে var num1 = 3 , var num2 = 4 এক্সেস কিভাবে লোকাল স্কোপ বাঁ ফাংশন স্কোপ পেল । আমরা তো এখানে প্যারামিটারই পাস করি নাই ।  এটাই হচ্ছে প্যারেন্ট স্কোপ থেকে লোকাল স্কোপে এক্সেস পেয়েছে । এটাকে লেক্সিকাল স্কোপিং বলে । 


// ***  Hoisting  ***

// Hoisting হচ্ছে কোন  declaration  কে টেনে উপের দিকে তোলা । 

// variable Hoisting 

নিচের কোডটি লক্ষ্য করুনঃ
console.log(a);
// output 'reference error'
অর্থাৎ আমরা যদি কোনো ভেরিয়েবল কে না ডিফাইন করে তার আউটপুট দেখতে চাই তাহলে সরাসরি আমরা একটা এরর পাবো এটায় তো স্বাভাবিক।
var a = 'Bangladesh';
console.log(a);
// output 'Bangladesh'
এটা তো আমরা জানি  একটা ভেরিয়েবলকে ডিফাইন করে তারপর তাকে কনসল লগ করি তখন তার ভ্যালু টা আমরা পাই। কিন্তু  একটা ভেরিয়েবলকে ডিফাইন না করে তারপর তাকে কনসল লগ করি তখন ঘটবে ?? 
console.log(a);
var a = 'Bangladesh';
// output 'undefined'
আমরা ভেরিয়েবল কে ডিফাইন করার পূর্বে তাকে অ্যাক্সেস করার ট্রাই করি তখন আমরা একটা এরর পাবো তা হচ্ছে undefined
 এখানে থেকেই হোশটিং এর কনসেপ্ট টা আসে।
var a; // here variable is define
a = 'Bangladesh'; // here variable is assigne by value of 'Bangladesh'
এখানে প্রথম যখন একটা জাভাস্ক্রিপ্ট ফাইল রিড হয় তখন কি হয় সকল ভেরিয়েবল ডিফাইন গুলো হোশটিং করে অর্থাৎ উত্তোলন করে/উপরের দিকে উঠায় নেয় এবং একটা মান আসাইন করে তা হচ্ছে undefined তাই এই কোডকে যদি একটু মডিফাই করে লিখি তাইলে বুঝতে সুবিধা হবে।
console.log(a);
var a = 'Bangladesh';
// output 'undefined'
মডিফাইড
console.log(a);
var a;
a = 'Bangladesh';
// output 'undefined'
var a; কে উপরের দিকে নিয়ে যাবে ঠিক এই রকম
var a;
console.log(a);
a = 'Bangladesh';
// output 'undefined'
ঠিক এইরকম টা হয়ত হয় না কিন্তু বুঝার সুবিধার্থে ধরে নেন। তারপর var a; এর ভ্যালু by default undefined সেট করে দেয় তারপর আমরা তার ভ্যালু কনসলে undefined দেখতে পাই। তারপর গিয়ে তার ভ্যালু সেট হয় Bangladesh. আমরা যদি তারপর আবার কনসোল করি তাহলে
var a;
console.log(a);
a = 'Bangladesh';
console.log(a);
// output 'undefined'
// output 'Bangladesh'
এই রকম দেখতে পাবো। এটাই সিম্পিলি হোশটিং বলা যায়। চলুন আর একটু জানা যাক।
Using let
উপরের ব্যবহৃত সকল উদাহরণ গুলো যদি let দিয়ে দেখি তাহলে কি হবে। চলুন-
console.log(a);
// output 'reference error'

let a = 'Bangladesh';
console.log(a);
// output 'Bangladesh'
এই দুইটা সেইম ।
console.log(a);
var a = 'Bangladesh';
// output 'undefined'

console.log(a);
let a = 'Bangladesh';
// output 'reference error'
কনসলে আসা এরর টা দেখেন-
📷 1
দেখুন var ব্যবহার করলে আসে undefined আর let ব্যবহার করলে আসে real error. হুম একটু ব্যতিক্রম অর্থাৎ var and let একটু ভিন্ন ওয়েতে কাজ করে both ক্ষেত্রেই হোশটিং হচ্ছে।
let এর ক্ষেত্রে আসলে ডিক্লেরশন টা উপরে যায় কিন্তু আনডিফাইন্ড টা সেট হয় যে লাইনে let লেখা হয়েছে ঠিক অই লাইনে আর ভ্যালু টা অ্যাসাইন হয় ঠিক তার পরের লাইনে।
console.log(a);
let a; // here a = undefined assign
a = 'Bangladesh'; // here a = 'Bangladesh' value assign

// কল্পনা করে দেখলে এইরকম হবে তেমন কিছু না।
আমার চিন্তা এবার বুঝতে পারছেন। তাই যেহেতু ভেরিয়েবলই অ্যাসাইন হচ্ছে না আমার মেমোরিতে অ্যালোকেট হচ্ছে না তাই তাকে reference error দেখাচ্ছে।
কিন্তু আমরা যদি এভাবে লিখি
let a;
console.log(a);
a = 'Bangladesh';
// output - 'undefined'
// এখন ভেরিয়েবল var এর মতো কাজ করছে কারন কনসোল এর পূর্বেই a এর মান undefined সেট হয়েছে।
// Ex-1
var LANGUAGE = 'Java';
var language = 'JavaScript';
function getLanguage() {
  if (!language) {
    var language = LANGUAGE;
  }
  return language;
}
console.log(`I love ${getLanguage()}`);
// expected - 'I love JavaScript'
তাহলে এখানে আমরা কি আউটপুট পেতে পারি।
// output - 'I love Java'
এর কারন কি? কারন হলো হোশটিং আর var কারন এত খন যাবত আমরা যা জেনেছি চলুন তা দিয়ে কল্পনা করে দেখার চেষ্টা করি কি হচ্ছে।
var LANGUAGE = 'Java';
var language = 'JavaScript';
function getLanguage() {
  if (!language) {
    var language = LANGUAGE;
  }
  return language;
}
console.log(`I love ${getLanguage()}`);
// expected - 'I love JavaScript'
দেখুন এখানে var language = LANGUAGE; এটা হোশটিং হয়ে উপরে যাবে কিন্তু আবার ফাংশন কে ছেরে উপরে না কারন এখানে আবার স্কোপ আছে যে if এর উপরে যেতে পারবে সর্বোচ্চ তখন গিয়ে সেখানে সেট হবে var language = LANGUAGE; মানে 'Java' এবং দেখবে !language false তাই আর if এর ভেতরে ঢুকবে না যাবে রিটার্নে এখন ত language এর ভ্যালু চেঞ্জড মানে 'Java' তাই আমরা Java আউটপুট দেখতে পাচ্ছি।
আর যদি let ব্যবহার করি তাহলে আমরা সঠিক আউটপুট দেখতে পাচ্ছি চলুন বর্ননা করা যাক
let LANGUAGE = 'Java';
let language = 'JavaScript';
function getLanguage() {
  if (!language) {
    let language = LANGUAGE;
  }
  return language;
}
console.log(`I love ${getLanguage()}`);
// expected - 'I love JavaScript'
// output - 'I love JavaScript'
দেখুন এখানে let language = LANGUAGE; এটা হোশটিং হয়ে উপরে যাবে কিন্তু আবার if কে ছেরে উপরে যাবে না কারন এখানে আবার let block স্কোপ আছে তাই সে if এর উপরে যেতে পারবে না তখন ভেরিয়েবল আনডিফাইন্ড আসাইন হবে if এর ভিতর সেট হবে । যদি একটু কল্পনা করে দেখার চেষ্টা করি কি হচ্ছে।
let LANGUAGE = 'Java';
let language = 'JavaScript';
function getLanguage() {
  if (!language) {
    let language = LANGUAGE; // here language = undefined assing
    // here language = LANGUAGE value assing
  }
  return language;
}
console.log(`I love ${getLanguage()}`);
// expected - 'I love JavaScript'
// output - 'I love JavaScript'
let language = LANGUAGE; মানে 'JavaScript' এবং দেখবে !language false কারন ফাংশন স্কোপ এ language এর ভ্যালু নাই কিন্তু তার পেরেন্ট এ তো আছে তাই এটা true তাই আর if এর ভেতরে ঢুকবে না যাবে রিটার্নে এখন ত language এর ভ্যালু পেরেন্ট থেকে আসা মান মানে 'JavaScript' তাই আমরা JavaScript আউটপুট দেখতে পাচ্ছি।
Function Hoisting
জাভাস্ক্রিপ্ট এ faunction ও একই নিয়মে হোশটিং হয়ে থাকে
myFunc();
function myFunc() {
  var language = 'JavaScript';
  console.log(language);
}
// output - 'JavaScript'
আসলে জাভাস্ক্রিপ্ট এ function ও একটি Object এটা ও মেমোরিতে অ্যালোকেট হয় কারন ফাংশন ও একটা ডেফিনেশন তাই প্রথম এ হোশটিং করে উপরে যায় মেমোরিতে অ্যালোকেট হয় তার পর এটা এক্সোকিউট হয়।
আচ্ছা বলুন ত নিচের কোডের আউটপুট কি হবে
myFunc();
function myFunc() {
  language = 'JavaScript';
  var language;
  console.log(language);
}
// output - 'undefined / 'JavaScript'
আসলে এখানে JavaScript ই আসবে কারন কি আমাদের সেন্স এ ত language = 'JavaScript'; যেহেতু var নাই তাই গ্লোবাল এ by default একটা var language; নিবে আর আনডিফাইন্ড সেট করবে ভালো কথা। তারপর ফাংশন বডি তে এসে JavaScript ভ্যালু আসাইন হবে তারপর ত আবার var language; undefined সেট হবার কথা তাই তো কিন্তু না আমরা কি জানি var language; তো function scope তাই এটা ও তো হোশটিং হয়ে উপরে যাবে ফাংশন বডির সবার উপরে তারপর কিন্তু JavaScript ভ্যালু সেট হবে তাই কিন্তু আমরা আউটপুট ঠিকঠাক পাচ্ছি।
কিন্তু আমার যদি জাভাস্ক্রিপ্টকে একটু অন্য ভাবে লিখি
myFunc();
const myFunc = function () {
  var language = 'JavaScript';
  console.log(language);
};
// output - check picture
📷 2
তাহলে কি হলো এখানে আবার ব্যতিক্রম কেনো। কোনোই ব্যতিক্রম না যেহেতু এখানে ফাংশন কে ভেরিয়েবল এ ডিফাইন করা হয়েছে আবার const দিয়ে তাই এখানে কল্পনা করলে এমন হবে
const myFunc; // not allocate here
myFunc();
const myFunc = undefined ; myFunc = function () {
  var language = 'JavaScript';
  console.log(language);
};
// output - so reference error
Summary
হোশটিং তেমন কিছুই না একটা জাভাস্ক্রিপ্ট ফাইল রিড করার সময় সকল প্রকার ডিফাইন গুলো সবার উপরে হোশটিং/উত্তলন হয় কিন্তু এখানে function var let and const এর তিনটায় কিছু টা পার্থক্য লক্ষ্য করা যায়। var আর function এ যার যার স্কোপ এর সবার উপরে ডিফল্ট ভ্যালু undefined সেট হয় এবং পরবর্তীতে তার ভ্যালু অই লাইনে আসাইন হয়। আর let and const এর ক্ষেত্রে অই লাইনে undefined সেট হয় এবং ভ্যালু আসাইন হয়। আর function কে যদি ভেরিয়েবল let and const দিয়ে ডিক্লেয়ার করা হয় তাহলে অই লাইনে undefined সেট হয়। আর সাধারন function দিয়ে তৈরি করলে গ্লোবালি রেফারেন্স পাই তাই ফাংশন কল হয়। কিন্তু var ব্যবহার করলে আনডিফাইন্ড আশার কথা কিন্তু না। তা কেন নিচে লক্ষ্য করুন।
myFunc();
var myFunc = function () {
  var language = 'JavaScript';
  console.log(language);
};
//output - Uncaught TypeError: myFunc is not a function
এখানে undefined আশার কথা কিন্তু এরর আসছে কেন? কারন আমার তো () কল করছি। myFunc এর ভ্যালু undefined তো তা ত আর ফাংশন না তাই তাকে কল করলে ত not a function এরর ই আসবে




