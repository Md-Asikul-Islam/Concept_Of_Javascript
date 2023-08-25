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

আমরা ফাংশন বডির বাইরে যেকোনো জায়গায় var লিখলে সেটা কোড ইডিটরের সব জায়গায় এক্সেস পাবে । 

function A() {
    let  x = 3;                      // function scope 
}


function A() {
    const x = 3;                      // function scope 
}



৩। Block Scope -

Block Scope হচ্ছে এমন একটা এরিয়া যেটা { } কারলি ব্রাসেস মধ্যে সীমাবদ্ধ থাকে । যেমন - 

{
    let x = 2;
} 

এখন এই X এর এক্সেস শুধুমাত্র { } কারলি ব্রাসেস মধ্যে সীমাবদ্ধ থাকে , এর বাইরে X কাজ করবে না । 

{
    const x = 2; 
}

এখন এই X এর এক্সেস শুধুমাত্র { } কারলি ব্রাসেস মধ্যে সীমাবদ্ধ থাকে , এর বাইরে X কাজ করবে না । 

{
    var x = 3;
}

   
আমরা যদি ভ্যারিঅ্যাবল পরিবর্তন করে var নিলে ভিন্ন রকম ঘটনা ঘটবে । কারন আমরা জানি যখন কোন ভ্যারিঅ্যাবল 

কে var কি ওয়ার্ড দিয়ে লিখি তখন এইটা গ্লোবাল স্কোপ অথবা ফাংশন স্কোপ থাকে সেটার কোন ব্লক স্কোপ থাকে না । 

যেকারনে কারলি ব্রাসেসের বাইরে X এক্সেস পাবে । 



জাভাস্ক্রিপ্ট এ প্যারেন্ট এর সবকিছু তার চাইল্ড এক্সেস করতে পারে । সুতরাং গ্লোবাল স্কোপের সবকিছু ফাংশন স্কোপ বাঁ ব্লক স্কোপে এক্সেস করা যাবে  কিন্তু চাইল্ডের কোন কিছুতে আবার প্যারেন্ট এর এক্সেস নাই ।

var num1 = 3;
var num2 = 4;

var sum = function(){
    return num1 + num2 ;
};

console.log(sum());                           output //     7 

এখন মনে হতে পারে var num1 = 3 , var num2 = 4 এক্সেস কিভাবে লোকাল স্কোপ বাঁ ফাংশন স্কোপ পেল । আমরা তো এখানে প্যারামিটারই পাস করি নাই ।  এটাই হচ্ছে প্যারেন্ট স্কোপ থেকে লোকাল স্কোপে এক্সেস পেয়েছে । 



