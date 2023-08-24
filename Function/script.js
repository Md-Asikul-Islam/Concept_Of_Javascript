***  জাভাস্ক্রিপ্ট ফাংশন   ***

ফাংশন হল পুনঃ ব্যবহার যোগ্য একটি কোড গ্রুপ যা পরিবর্তীতে প্রোগ্রামের প্রয়োজনে যে কোন জায়গায় invoke বাঁ  call করে ব্যবহার করা যায় । 

১ । Regular function -

function adder(a, b){
    return a + b ;
}

console.log(adder(5, 6))            =              11

 ফাংশন বডিতে  কোন কিছু রিটার্ন না করলে বাই ডিফলট এটা undefined থাকে । 


২। function expresion - 

কোন একটা ফাংশন কে ভ্যারিএবলের মধ্যে স্টোর বাঁ জমা রাখলে তাকে ফাংশন এক্সপ্রেশন বলে । 

const x = function(a, b){return a + b };

x(5, 6)

এই ফাংশনের নাম না থাকায় একে Anonymous function বলে । function expresion কে call বাঁ invoke করতে হলে ,   ভ্যারিএবলের নাম দিয়ে call বাঁ invoke করতে হয় । 


function expresion সাধারনত Hoisted হয় না । 


৩। Self invoking function - 

নিজেই নিজেকে  call করে বলে , একে Self invoking বলে ।  এর সংক্ষিপ্ত নাম হল IIFE 

IIFE = imidiate invoking function expresion 

যেমন - 

console.log((function(a, b){ return a + b })(5, 6) )        =                   11


৪। Arrow function - 

Arrow function মূলত Es-6 ভার্সন থেকে আসছে । 

const x = (a, b ) => {
    return a + b 
}

  console.log(x(5, 6))


 ## এখানে প্যারামিটার পাস করা যায় । এই ফাংশনের জাভাস্ক্রিপ্ট এ সবচেয়ে বেশি । 

 ## Arrow function  এ  this এর কোন ব্যবহার নাই । 

 ##  Arrow function  Hoisted  হয় না । 

 ## Arrow function এর কোড এবং রানটাইম দুইটাই কম লাগে । 

৫। function constructor - 

 এটা জাভাস্ক্রিপ্ট এর built in একটা ফাংশন । new Function কি ওয়ার্ডের মাধ্যমে এই ফাংশনটা লিখতে হয় এই জন্য এটা কে  function constructor বলে । 


 const x = new Function("a", "b", "return a + b ");

 console.log(x(5, 6))

 এটা কখনো ব্যবহার করা উচিত নয়, এটা এভয়েড করাই ভালো । 


৬। callback function - 

 একটা ফাংশন কে যখন আমরা  অন্য আরেকটা  ফাংশনের আর্গুমেন্ট হিসেবে পাস করি এবং রিটার্ন হিসেবে একটা ফাংশন দেয় ।  তখন সেই আর্গুমেন্টে যাওয়া ফাংশন  টা কেই  callback function বলে । 

 callback function বুঝতে হলে সিনক্রোনাস এবং অ্যাসিনক্রোনাস বিহেবিয়ার ভালো করে বুঝতে হবে । 

 সিনক্রোনাস = জাভাস্ক্রিপ্ট বাই ডিফলট সিনক্রোনাস সিংগেল থ্রেড  প্রোগ্রামিং ল্যাঙ্গুয়েজ । এটা উপর থেকে নিচের দিকে লাইন বাই লাইন কোড রিড করে । 

 const one = () => {
    console.log(' This is one ')
 }

 const two = () => {
    console.log(' This is two ')
 }

 const three = () => {
    console.log(' This is three ')
 }                                       output //////

 one()                                   This is one
 two()                                   This is two
 three()                                 This is three 

 এখানে কল করার সময় যেই অর্ডারে করব আউটপুঁটে সেই ভাবে আসবে । 


অ্যাসিনক্রোনাস = জাভাস্ক্রিপ্ট যখন আজাক্স কল করা হয় অর্থাৎ অন্য কোন সারভার থেকে ডাটা লোড করে এনে ওয়েবসাইটে দেখানো হয় । তখন ডাটা লোড হতে টাইম লাগে এই সময় জাভাস্ক্রিপ্ট পরের কোড গুলা রিড করে এবং আউটপুঁটে  পরের কোড গুলা কে আগে দেখায়, এরপর লোড করা ডাটা রিড করে । এই গুলা হ্যান্ডল করার জন্য  callback function ব্যবহার করা হয়। 

const one = () => {
   console.log(' This is one ')
}

const two = () => {
   console.log(' This is two  ')
}

const three = () => {
   console.log(' This is three ')
}                                                 output //////

setTimeout(one, 3000)                               This is two
 two()                                              This is three 
 three()                                            This is one





      **   callback function   **

      const one = (two) => {
         console.log(' This is one ')
         two() ;
      }
     
      const two = () => {
         console.log(' This is two ')
      }
     
      const three = () => {
         console.log(' This is three ')
      }
       
      setTimeout(one(two),3000)
      three()

      output //////

      
      This is one
      This is two
      This is three 



     


৭। Higher Order function - 

function x(){
   console.log(' This is x men ')
}

function y(x){
   x();
}







৮। function closure 







৯। first class function 

