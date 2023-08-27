// ***  জাভাস্ক্রিপ্ট ফাংশন   ***

// ফাংশন হল পুনঃ ব্যবহার যোগ্য একটি কোড গ্রুপ যা পরিবর্তীতে প্রোগ্রামের প্রয়োজনে যে কোন জায়গায় invoke বাঁ  call করে ব্যবহার করা যায় । 

// ১ । Regular function -

// function adder(a, b){
//     return a + b ;
// }

// console.log(adder(5, 6))            =              11

//  ফাংশন বডিতে  কোন কিছু রিটার্ন না করলে বাই ডিফলট এটা undefined থাকে । 


// ২। function expresion - 

// কোন একটা ফাংশন কে ভ্যারিএবলের মধ্যে স্টোর বাঁ জমা রাখলে তাকে ফাংশন এক্সপ্রেশন বলে । 

// const x = function(a, b){return a + b };

// x(5, 6)

// এই ফাংশনের নাম না থাকায় একে Anonymous function বলে । function expresion কে call বাঁ invoke করতে হলে , ভ্যারিএবলের নাম দিয়ে call বাঁ invoke করতে হয় । 


// function expresion সাধারনত Hoisted হয় না । 


// ৩। Self invoking function - 

// নিজেই নিজেকে  call করে বলে , একে Self invoking বলে ।  এর সংক্ষিপ্ত নাম হল IIFE 

// IIFE = imidiate invoking function expresion 

// যেমন - 

// console.log((function(a, b){ return a + b })(5, 6) )        =                   11



// ৪। Arrow function - 

// Arrow function মূলত Es-6 ভার্সন থেকে আসছে । 

// const x = (a, b ) => {
//     return a + b 
// }

//   console.log(x(5, 6))


//  ## এখানে প্যারামিটার পাস করা যায় , এই ফাংশনের জাভাস্ক্রিপ্ট এ সবচেয়ে বেশি । 

//  ## Arrow function  এ  this এর কোন ব্যবহার নাই । 

//  ##  Arrow function  Hoisted  হয় না । 

//  ## Arrow function এর কোড এবং রানটাইম দুইটাই কম লাগে । 



// ৫। function constructor - 

//  এটা জাভাস্ক্রিপ্ট এর built in একটা ফাংশন । new Function কি ওয়ার্ডের মাধ্যমে এই ফাংশনটা লিখতে হয় এই জন্য এটা কে  function constructor বলে । 


//  const x = new Function("a", "b", "return a + b ");

//  console.log(x(5, 6))

//  এটা কখনো ব্যবহার করা উচিত নয়, এটা এভয়েড করাই ভালো । 



// ৬। first class function - 

// first class function হল - 

// ## একটা ফাংশনকে যদি ভারিঅ্যাঁবলের মধ্যে স্টোর করা যায় । 
// ## একটা ফাংশনকে যদি অ্যাঁরের  মধ্যে স্টোর করা যায় । 
// ## একটা ফাংশনকে যদি অবজেক্ট  এর  মধ্যে স্টোর করা যায় । 
// ## প্রয়োজন মত ফাংশন তৈরি করা যায় । 
// ##  একটা ফাংশন কে যখন   অন্য আরেকটা  ফাংশনের আর্গুমেন্ট হিসেবে নেয় । 
// ##  একটা ফাংশন কে যখন   অন্য আরেকটা  ফাংশনের বডিতে রিটার্ন করা যায়  । 

// এই বৈশিষ্ট্য গুলা থাকলে আমরা তাকে first class function বলতে পারব। 


// ৭। Higher Order function - 

// Higher Order function হল এমন একটা ফাংশন যা - 

//   এক বাঁ একাদিক  ফাংশন কে যখন   অন্য আরেকটা  ফাংশনের আর্গুমেন্ট হিসেবে নেয় । 
  
//                             অথবা  
  
//                রিটার্ন হিসেবে একটা ফাংশন দেয় । 
  
//                             অথবা   

// দুইটাই করে তখন সেই  ফাংশন  টা কেই  Higher Order function বলে । যেমন - 


// এটা মূলত ক্লিন এবং রিডঅ্যাঁবল কোড লেখার জন্য বেশি ব্যবহার করা হয় । 

// বিভিন্ন built in অ্যারে মেথড Map(), slice(), filter(), reduce() এই গুলা Higher Order function । 

// এখন আমরা দেখব Higher Order function কেন ব্যবহার করা হয় । 

// Ex - 1 

//  without Higher Order function 

// const numbers = [1, 2, 3, 4];

// const result = [];

// for(let i = 0; i < numbers.length ; i++ ){
//  result.push(numbers[i] * 2);
// }

// with Higher Order function

// const numbers = [1, 2, 3, 4];

// const result = numbers.map((number)=> {
//  return number * 2
// })

// console.log(result)

// Ex-2
// without Higher Order function 

// const players = [
//    {
//       name : 'Shakib',
//       avg: 38.23
//    },

//    {
//     name : 'Tamim',
//     avg : 37.72
//    },

//    {
//       name : 'Mushfiq',
//       avg : 36.73
//    },
//    {
//       name : 'Mahmudullah',
//       avg : 37.12 
//    }
// ];


//  const playerAvg = [];
 
//  for(let i = 0; i < players.length; i++){
//   if(players[i].avg >= 37){
//    playerAvg.push(players[i])
//   }
// }

// console.log(playerAvg);


// with Higher Order function

// const players = [
//    {
//       name : 'Shakib',
//       avg: 38.23
//    },

//    {
//     name : 'Tamim',
//     avg : 37.72
//    },

//    {
//       name : 'Mushfiq',
//       avg : 36.73
//    },
//    {
//       name : 'Mahmudullah',
//       avg : 37.12 
//    }
// ];

// const playerAvg = players.filter((player) => {
//    player.avg >= 37 
// })

// console.log(playerAvg)


// ৮। callback function - 

//  একটা ফাংশন কে যখন আমরা  অন্য আরেকটা  ফাংশনের আর্গুমেন্ট হিসেবে পাস করি এবং রিটার্ন হিসেবে একটা ফাংশন দেয় ।  তখন সেই আর্গুমেন্টে যাওয়া ফাংশন  টা কেই  callback function বলে । 

//  callback function বুঝতে হলে সিনক্রোনাস এবং অ্যাসিনক্রোনাস বিহেবিয়ার ভালো করে বুঝতে হবে । 

//  সিনক্রোনাস = জাভাস্ক্রিপ্ট বাই ডিফলট সিনক্রোনাস সিংগেল থ্রেড  প্রোগ্রামিং ল্যাঙ্গুয়েজ । এটা উপর থেকে নিচের দিকে লাইন বাই লাইন কোড রিড করে । 

//  const one = () => {
//     console.log(' This is one ')
//  }

//  const two = () => {
//     console.log(' This is two ')
//  }

//  const three = () => {
//     console.log(' This is three ')
//  }                                       output //////

//  one()                                   This is one
//  two()                                   This is two
//  three()                                 This is three 

//  এখানে কল করার সময় যেই অর্ডারে করব আউটপুঁটে সেই ভাবে আসবে । 


// অ্যাসিনক্রোনাস = জাভাস্ক্রিপ্ট যখন আজাক্স কল করা হয় অর্থাৎ অন্য কোন সারভার থেকে ডাটা লোড করে এনে ওয়েবসাইটে দেখানো হয় । তখন ডাটা লোড হতে টাইম লাগে এই সময় জাভাস্ক্রিপ্ট পরের কোড গুলা রিড করে এবং আউটপুঁটে  পরের কোড গুলা কে আগে দেখায়, এরপর লোড করা ডাটা রিড করে । এই গুলা হ্যান্ডল করার জন্য  callback function ব্যবহার করা হয়। 

// const one = () => {
//    console.log(' This is one ')
// }

// const two = () => {
//    console.log(' This is two  ')
// }

// const three = () => {
//    console.log(' This is three ')
// }                                                 output //////

// setTimeout(one, 3000)                               This is two
//  two()                                              This is three 
//  three()                                            This is one



কিন্তু আমরা চাচ্চি প্রথমে one() ফাংশন  এরপর  two() ফাংশন তারপর     three() ফাংশন প্রিন্ট হবে । এই সমস্যা সমাধান করতে callback function ব্যবহার করতে হবে। 


//       **   callback function   **

//       const one = (callback) => {
//          console.log(' This is one ')
//          callback() ;
//       }
     
//       const two = () => {
//          console.log(' This is two ')
//       }
     
//       const three = () => {
//          console.log(' This is three ')
//       }
       
//       setTimeout(one(two),3000)
//       three()


//       এখানে  callback function হল  two() 

      
//       এখানে  Higher Order   function হল  one()

//       output //////

//       This is one
//       This is two
//       This is three 


  ***  callback hell   *** 









  ৯।  ***  promise  *** 






  
১০। function closure - 



*** closure ***


closure ভালো করে বুঝতে চাইলে গ্লোবাল স্কোপ এবং লোকাল স্কোপ সম্পর্কে জানতে হবে। 


জাভাস্ক্রিপ্ট এ প্যারেন্ট এর সবকিছু তার চাইল্ড এক্সেস করতে পারে । সুতরাং গ্লোবাল স্কোপের সবকিছু ফাংশন স্কোপ বাঁ ব্লক স্কোপে এক্সেস করা যাবে  কিন্তু চাইল্ডের কোন কিছুতে আবার প্যারেন্ট এর এক্সেস নাই ।

var num1 = 3;
var num2 = 4;

var sum = function(){
    return num1 + num2 ;
};

console.log(sum());                           output //     7 

এখন মনে হতে পারে var num1 = 3 , var num2 = 4 এক্সেস কিভাবে লোকাল স্কোপ বাঁ ফাংশন স্কোপ পেল । আমরা তো এখানে প্যারামিটারই পাস করি নাই ।  এটাই হচ্ছে প্যারেন্ট স্কোপ থেকে লোকাল স্কোপে এক্সেস পেয়েছে । 

closure হচ্ছে এমন একটা ফাংশন যার লোকাল স্কোপের বাইরে অর্থাৎ গ্লোবাল স্কোপে কোন ভারিঅ্যাঁবল থাকে তার রেফারেন্স নিজের কাছে নিয়ে যেতে হয় । 

## Ex-1 ##

var num1 = 3;
  

var sum = function(){
    var num2 = 4;
 return function(){
 return num1 + num2
}
};

var myFunc = sum();

console.dir(myFunc)

## Ex-2 ##

function bankAccount (intialBalance){
  var balance = intialBalance ;
  return function(){
    return balance;
  }
}

var account = bankAccount(100000);

console.log(account())

এখানে অ্যানোনিমাস ফাংশন টা হচ্ছে ক্লোজার । 


## Ex-3 ##

var num1 = 3;
  

var sum = function(){
    var num2 = 4;
 return function(){
 return num1 
}
};

var myFunc = sum();

console.dir(myFunc)

## Ex-4 ##

var num1 = 3;
var num2 = 4;

var sum = function(){
    return num1 + num2 ;
};

console.log(sum()); 
console.dir(sum)

num1 = 6;
num2 = 7;

console.log(sum()); 
console.dir(sum)

## Ex-5 ##

(function(){
let num1 = 3;

let num2 = 4;

let sum = function(){
  return num1 + num2 ;
};

console.dir(sum)
})();



 ## Ex-6 ##



function stopWatch(){
  var startTime = Date().now();

  function getDelay(){
    console.log(Date.now() - startTime);
  }

  return getDelay;
}

var timer = stopWatch();

for(var i = 0; i < 10000000; i++){
  var a = Math.random() * 1000000
}

timer()

## Ex-7 ##

for(var i = 0; i < 3; i++){
  setTimeout(() => {

   console.log(i);

  }, 3000);
  }

  console.log("After for loop ");


  ## Ex-8 ##


  let sum = () => {
    let counter = 0 ;
    return () => {
      counter += 1;
      console.log(counter)
    };
  };
  let result = sum();
  
  result()
  result()
  result()
  console.dir(result)

 



১১। funtion curring - 
  

Haskel Curry এর মতে মাল্টিপল প্যারামিটারের কোন ফাংশনকে ভেঙ্গে ভেঙ্গে একটা একটা প্যারামিটারের ফাংশনে কনভার্ট করা যায় সেটাকেই  curring বলে । 


function multiply(a, b, c){
  return a * b * c ;
}

console.log(multiply(5, 6, 7));


multiply এই ফাংশনের curring ভার্সন দেখব । 

function curriedMultiply(a){
  return function(b){
    return function(c){
      return a * b *c ;
    }
  }
}

console.log(curriedMultiply(5)(6)(7))

এই ভাবে কল না করে প্রতিটা স্টেপ কে আলাদা আলাদা করে লিখতে পারি । 

let step1 = curriedMultiply(5);

console.dir(step1)

let step2 = step1(6);

console.dir(step2)

let step3 = step2(7);

console.log(step3)

এটা ব্যবহার করার কারন হচ্ছে , ধরেন একটা ই কমার্স সাইটে ডিসকাউন্ত কেম্পেইন চলতেছে । 

function discount(price, disc){
  return price - price * disc
}

let customer1Dis = discount(600, .1);
let customer2Dis = discount(700, .1);
let customer3Dis = discount(800, .1);


এই ফাংশনের curring ভার্সন দেখব  

function discount(disc){
  return (price) => {
    return price - price * disc 
  }
}

let tenPercentDis = discount(0.1);   // partial functoin 

 curring ফাংশনের যে অংশটা পুনঃরায় ব্যবহার করা হয় সেটাকেই partial functoin বলে । 



let tweentyPercentDis = discount(0.2);

let customer1Disc = tenPercentDis(600);


let customer2Disc = tenPercentDis(700);

let customer3Disc = tenPercentDis(800);


let customer4Disc = tweentyPercentDis(1400);



** curry converter function create - ** 

function curry(func){
  return function curried(...args){
  
  }
}

function sum(a, b, c){
  return a + b + c ;
}

let curriedSum = curry(sum)




১২। memoization function -





১৩।  Genrators -





১৪।  Event Loop -



১৫। Execution Context -




