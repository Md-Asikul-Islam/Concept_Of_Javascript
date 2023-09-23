জাভাস্ক্রিপ্ট ভ্যালু গুলোকে দুইভাগে ভাগ করেছে । যথা-

## Fixed values
Fixed values কে বলা হয় Literals 
## Variable values 
Variable values কে ভ্যারিয়েবল বলা হয় । 



// ** string **


let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);

output
26

এখানে length হল string এর built in  একটা property যেটার সাহায্যে আমরা একটা string কত গুলা character আছে সেটা জানতে পারি inculding space মানে হল space  সহ কাউন্ত করে  । 

// **Escape Character**

let text = "We are the so-called \"Vikings\" from the north.";
console.log(text);

স্পেশাল  Character শো করতে তার আগে একটা ব্যাক স্লাশ দিতে হয় । 

ধরেন কোন ক্ষেত্রে যদি এমন হয় একটা স্ট্রিং নিতে হবে এবং তার ভিতরে কিছু ওয়ার্ডকে স্পেশাল করার জন্য ডাবল বাঁ সিঙ্গেল কোটেশন ব্যবহার করা লাগছে । এখন আমরা জানি জাভাস্ক্রিপ্ট ডাবল কোটেশন এর ভিতরে আবার কোটেশন দেওয়া যাবে না তাহলে এরর আসবে । এই সমস্যা সলভ করতে Escape Character বাঁ স্পেশাল  Character শো করতে তার আগে একটা ব্যাক স্লাশ দিতে হয় । 


//***string as object **

// Ex-1

// let x = "John";       
এটা হচ্ছে স্ট্রিং এর লিটারেল সিনটেক্স  । 

// let y = new String("John");       // it's like a object 
আমরা জানি স্ট্রিং কে  অবজেক্ট কন্সট্রাকটর আকারে লিখা যায় । new String() এটা হচ্ছে স্ট্রিং এর অবজেক্ট কন্সট্রাকটর ফাংশন । 

// console.log(x == y);            // true 
// console.log(x === y);          // false 


// Ex-2
// let x = new String("John");
// let y = new String("John");

// console.log(x == y);
// console.log(x === y);

// output 
// false
// false 

// দুইটা অবজেক্ট কে আসলে তুলনা করা যায় না এই জন্য  false রিটার্ন করে ।

//***string   Method  ***

const a = { 
  name : " Bangladesh ", 
  dist : 64,
};

আমরা জানি অবজেক্ট এর মেথড এবং প্রপারটি  থাকে , যেহেতু অবজেক্ট রেফারেন্স ডাটা টাইপ তাই আমরা বাইরে থেকে অবজেক্ট এর প্রপারটি এক্সেস করতে পারি । যেমন -

console.log(a.name);
output 
Bangladesh 

const s = " Bangladesh "

console.log(s.length);                // 12


কিন্তু একটা স্ট্রিং এর ডাটা টাইপ প্রিমিটিভ হওয়ার পরেও এর মেথড এবং প্রপারটি  থাকে , এটার কারন হল 
এখানে জাভাস্ক্রিপ্ট কোড এক্সিকিউট হওয়ার সময় দেখবে যে এর মধ্যে length প্রপারটি আছে কিনা সেখানে না পেলে তার প্যারেন্ট স্ট্রিং কন্সট্রাকটর এর কাছে যাবে সেখানে length প্রপারটি কাজ ডিফাইন করা আছে । 



১। slice(start, end )

এই মেথড টা মূলত  স্ট্রিং এর একটা পার্ট রিটার্ন করে । এই মেথড টা দুইটা প্যারামিটার নেয় , 
প্রথম প্যারামিটার বলতে হবে কত নাম্বার ইনডেক্স  থেকে শুরু হবে । 
দ্বিতীয় প্যারামিটার বলতে হবে কত নাম্বার ইনডেক্স এ শেষ  হবে । 

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);

output : 
Banana 

২। subStrig(start, end )

এই মেথড টা মূলত  স্ট্রিং এর একটা পার্ট রিটার্ন করে । এই মেথড টা দুইটা প্যারামিটার নেয় , 
প্রথম প্যারামিটার বলতে হবে কত নাম্বার ইনডেক্স  থেকে শুরু হবে । 
দ্বিতীয় প্যারামিটার বলতে হবে কত নাম্বার ইনডেক্স এ শেষ  হবে । 

slice()  এবং  subString() এদের মধ্যে মুল পার্থক্য হল subStrig(start, end ) শুধু  নেগেটিভ ভ্যালু নেয় না । 


৩। subStr()

এই মেথড টা মূলত  স্ট্রিং এর একটা পার্ট রিটার্ন করে । এই মেথড টা দুইটা প্যারামিটার নেয় , 
প্রথম প্যারামিটার বলতে হবে কত নাম্বার ইনডেক্স  থেকে শুরু হবে । 
দ্বিতীয় প্যারামিটার বলতে হবে যেখান থেকে শুরু হয়েছে তারপর আর কত লেন্থ পর্যন্ত যাবে ।


ইনডেক্স শুরু হবে সবসময় ০ থেকে 

লেন্থ  শুরু হবে সবসময় ১ থেকে 

৪। replace()

ধরেন আপনার আগের একটা স্ট্রিং আছে সেটা পরিবর্তন করে নতুন স্ট্রিং দিতে চাচ্চি সেক্ষেত্রে এই মেথড ব্যবহার করব । যেমন - 

let str = " I love sakina "

let zarina = str.replace("sakina", " zarina ")
console.log(zarina);

প্রথম প্যারামিটার বলতে হবে কোন অংশ পরিবর্তন করব সেটুকু স্ট্রিং আকারে দিতে হবে  ।  চাইলে সম্পূর্ণ ও পরিবর্তন করা  যাবে । 
দ্বিতীয় প্যারামিটার বলতে হবে পরিবর্তন করে নতুন কি দিব সেটা স্ট্রিং আকারে দিতে হবে  ।

৫।  charAt()
ধরেন একটা স্ট্রিং থেকে কোন একটা ক্যারেক্টার কে নিতে হবে এই ক্ষেত্রে এই মেথড ব্যবহার করতে হবে । 
let str = "I love sakina"
let result = str.charAt(4)
এখানে প্যারামিটারে বলে দিতে হবে যে কত ইনডেক্স নাম্বার  ক্যারেক্টার  নিবে । 

console.log(result);
৬।  concat()
দুইটা স্ট্রিং কে জোড়া লাগাতে এই মেথড টা ব্যবহার করা হয় । 

let text1 = " Why do you work with computer always ?? "
let text2 = " Because I am learn to full stack web development "
let result = text1.concat(text2)
console.log(result);

এখানে যেই টেক্সট কে জোড়া লাগাবেন তাকে প্যারামিটার হিসেবে পাঠাবেন । 

৭।  endsWith()

এটা মূলত একটা স্ট্রিং এর মধ্যে শেষ ওয়ার্ড খুজতে সাহায্য করে । প্যারামিটারে  ওয়ার্ডটি  দিলে সে খুজবে তার স্ট্রিং এর শেষ ওয়ার্ড  কিনা থাকলে true রিটার্ন করবে না থাকলে  false রিটার্ন করবে ।  

৮।  includes()
এটা মূলত একটা স্ট্রিং এর মধ্যে কোথাও কোন ওয়ার্ড খুজতে সাহায্য করে । প্যারামিটারে কোন ওয়ার্ড দিলে সে খুজবে তার স্ট্রিং এর মধ্যে  আছে কিনা থাকলে true রিটার্ন করবে না থাকলে  false রিটার্ন করবে ।  

৯।  indexOf()
এটা মূলত একটা স্ট্রিং এর মধ্যে কোথাও কোন ওয়ার্ড বাঁ ক্যারেক্টার  খুজতে সাহায্য করে । প্যারামিটারে কোন ওয়ার্ড দিলে সে খুজবে তার প্রথম ম্যাচ করা ওয়ার্ড বাঁ ক্যারেক্টার এর যেখান থেকে শুরু তার  ইনডেক্স দিবে । যদি সে খুজে না পায় তাহলে সে -1 রিটার্ন করবে । 

let fruits = " Apple, Orange, Banana, Grapes, Banana, Patatoo, Tomatoo"
let result = fruits.indexOf("Banana")
console.log(result);

১০। lastindexOf()

এটা মূলত একটা স্ট্রিং এর মধ্যে কোথাও কোন ওয়ার্ড বাঁ ক্যারেক্টার  খুজতে সাহায্য করে । প্যারামিটারে কোন ওয়ার্ড দিলে সে খুজবে তার শেষ ম্যাচ করা ওয়ার্ড বাঁ ক্যারেক্টার এর যেখান থেকে শুরু তার  ইনডেক্স দিবে । যদি সে খুজে না পায় তাহলে সে -1 রিটার্ন করবে । 

১১।  spilt()
আমরা যদি একটা স্ট্রিং কে অ্যাঁরে তে কনভার্ট করতে চাই তাহলে এই মেথড ব্যবহার করতে হবে । 
let text = " Hello World "
let result = text.split(", ");
spilt মানে হল ছোট ছোট পিস করা এখন আমার এই টেক্সট কে অ্যাঁরে তে কনভার্ট করবে কি দিয়ে সেটা প্যারামিটারে বলে দিতে হবে । আমরা এখানে কমা দিয়ে আলাদা করেছি । 
১২।  toUpperCase()
ধরেন আপনার আগের একটা স্ট্রিং আছে সেটা ক্যাপিটাল লেটারে আসবে । তাহলে এই মেথড ব্যবহার করতে হবে। 
let text = "Apple, Banana, Kiwi";
let result = text.toUpperCase()
console.log(result);

১৩।  toLowerCase()

ধরেন আপনার আগের একটা স্ট্রিং আছে সেটা স্মল  লেটারে আসবে । তাহলে এই মেথড ব্যবহার করতে হবে। 
let text = "Apple, Banana, Kiwi";
let result = text.toLowerCase()
console.log(result);

১৪।  trim()
এটা মূলত একটা স্ট্রিং এর মধ্যে কোথাও হোয়াইট স্পেস থাকলে সেটা কেটে ফেলে । 


// *** Template litaral syntax **** 

Template literals হল Es-6 খুবই গুরুত্বপূর্ণ একটি ফিচার যেটা  কি বোর্ডের ব্যাক টিক সাইন দিয়ে লিখি । এটা মুলত মাল্টি লাইন স্ট্রিং, স্ট্রিং এর মধ্যে ভ্যারিয়েবলের ব্যবহার, স্ট্রিং এর সাথে স্পেশাল ক্যারেক্টার ব্যবহার একসাথে করা যায় । যেমন - 

let name = " Asikul "

let templateSyntax = ` Hi, I am ${name} works at Brain station software farm `

// ** Number **
জাভাস্ক্রিপ্ট এ নাম্বার হল প্রিমিটিভ ডাটা । জাভাস্ক্রিপ্ট শুধু  একটা টাইপের নাম্বারই আছে কিন্তু অন্যান্য প্রোগ্রামিং ল্যাঙ্গগুয়েজ এ একাদিক নাম্বার থাকে  । 

let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals 

পাওয়ার আকারে বাঁ এক্সপনেন্ত করে লিখা যায় । 
let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123 

জাভাস্ক্রিপ্ট নাম্বার সবসময় ৬৪ বিটে ফ্লোটিং আকারে আসে । 
জাভাস্ক্রিপ্ট পূর্ণ সংখার ক্ষেত্রে সর্বচ্চো ১৫ ডিজিট দশমিক সংখার ক্ষেত্রে ১৭ ডিজিট পর্যন্ত হিসেব রাখতে পারে । 
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000 

জাভাস্ক্রিপ্ট ফ্লোটিং নাম্বার সবসময় সঠিক নাও আসতে পারে । 

let x = 0.2 + 0.1;                  // x will be  0.30000000000000004

// ** নিউমেরিক স্ট্রিং **
নাম্বার এবং স্ট্রিং এর কনকেটিনেট 
যোগের ক্ষেত্রে ঃ 
let x = 10;
let y = 20;
let z = "The result is: " + x + y;

output  
The result is: 1020
আমরা জানি স্ট্রিং আর নাম্বারের অপারেশন হলে স্ট্রিং প্রায়োরিটি পায় । কিন্তু সেটা শুধুমাত্র কনকেটিনেট  বাঁ যোগের ক্ষেত্রে অন্য সব ক্ষেত্রে আগে নাম্বারে কনভার্ট করে তারপর অপারেশন চালাবে । 


ভাগের ক্ষেত্রে ঃ
let x = "100";
let y = "10";
let z = x / y;                 //  z will be 10 

গুনের ক্ষেত্রে ঃ 
let x = "100";
let y = "10";
let z = x * y;              //  z will be 1000

বিয়োগের ক্ষেত্রে ঃ 

let x = "100";
let y = "10";
let z = x - y;                 //  z will be 90

// ** NaN - Not a Number  ** 

let x = 100 / "Apple";            // x  will be  NaN 

isNaN() 
এর মানে হল - এটা কি নাম্বার নয়  ??

let x = 100 / "Apple";
isNaN(x);               // true 

let x = 100 / "Apple";
isNaN(x);               // NaN 
NaN  জাভাস্ক্রিপ্ট এ একটি নাম্বার । 
console.log(typeof(NaN));                // number

// ** Number as a object ** 


// Ex-1

// let x =  123 ;      
এটা হচ্ছে নাম্বারের এর লিটারেল সিনটেক্স  । 

// let y = new Number(123);       // it's like a object 
আমরা জানি নাম্বার কে  অবজেক্ট কন্সট্রাকটর আকারে লিখা যায় । new Number() এটা হচ্ছে স্ট্রিং এর অবজেক্ট কন্সট্রাকটর ফাংশন । 

// console.log(x == y);            // true 
// console.log(x === y);          // false 



// Ex-2
let x = new Number(123);
let y = new Number(123);

console.log(x == y);
console.log(x === y);

// output 
// false
// false 

// দুইটা অবজেক্ট কে আসলে তুলনা করা যায় না এই জন্য  false রিটার্ন করে ।

// ** Number method  **

১। toString()
এটা একটা নাম্বার কে স্ট্রিং এ কনভার্ট করে ।

let x = 123 ;
let result = x.toString() ;
console.log(typeof(result));             //   string 

২। toExponential()
এই মেথড টা  মূলত একটা সংখ্যাকে সূচকীয় আকারে কনভার্ট করতে ব্যবহার করা হয় কিন্তু এটা  সবসময় একটা স্ট্রিং রিটার্ন করবে । 

let x = 9.656;
console.log(x.toExponential(2));
console.log(x.toExponential(4));
console.log(x.toExponential(6));

এখানে প্যারামিটারে যত সংখ্যা দিব দশমিকের পর ঠিক তত ঘর পর্যন্ত যাবে 

৩। toFixed()
এই মেথড টা  মূলত একটা সংখ্যাকে দশমিকের পর কত ঘর পর্যন্ত কাউন্ত করবে । 

let x = 9.656;
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(4));

এখন প্যারামিটারে কোন কিছু না দিলে এটা পূর্ণসংখ্যায় কনভার্ট করে ফেলবে । যদি প্যারামিটার পাস করি সেক্ষেত্রে যে নাম্বার দিব দশমিকের পর ঠিক তত ঘর পর্যন্ত রিটার্ন ভ্যালু হিসেবে একটা নাম্বার দিবে । 

৪।  toPrecision()
এই মেথড টা  মূলত একটা সংখ্যাকে টোটাল  কত ঘর পর্যন্ত কাউন্ত করবে । এখানে একটা জিনিস মনে রাখতে হবে যে এটা টোটাল বলতে একটা সংখ্যা লেন্থকে বুজানো হয়েছে । আমরা জানি একটা সংখ্যার দুইটা অংশ থাকে 
 পূর্ণাংশ - দশমিকের বাম  দিকের অংশ 
 ভগ্নাংশ - দশমিকের ডান দিকের অংশ 
এই দুইটার যোগফল হল টোটাল । 

let x = 9.656;
console.log(x.toPrecision());
console.log(x.toPrecision(2));
console.log(x.toPrecision(4));
console.log(x.toPrecision(6));

এখানে প্যারামিটার পাস না করলে আগের ভ্যালু ঠিক রাখবে । 

৫।  valueOf()

এটা জাস্ট ভ্যালু টা নাম্বার হিসেবে রিটার্ন করবে । 

৬।  Number()
এই মেথড টা প্যারামিটারে যাই কিছু পাবে সেটাকে নাম্বারে কনভার্ট করার চেষ্টা করবে না পারলে NaN [নট এ নাম্বার ] দেখাবে । 

Number(true);                    //   1

Number(false);                   //   0

Number("10");                    //  10

Number("  10");                  //  10

Number("10  ");                  //  10

Number(" 10  ");                //  10

Number("10.33");                //  10.33

Number("10,33");                //  NaN

Number("10 33");                //  NaN

Number("John");                 // NaN

৭।  parseInt()

এই মেথড টা প্যারামিটারে যাই কিছু পাবে সেটাকে পূর্ণসংখ্যায় কনভার্ট করার চেষ্টা করবে, না পারলে NaN [নট এ নাম্বার ] দেখাবে । 


parseInt(" -10");                    //  -10

parseInt("-10.33");                //  -10

 parseInt(" 10");                  //  10

 parseInt("10.33  ");                  //  10

 parseInt("10.75  ");                  //  10

 parseInt(" 10  20 30 ");                //  10

 parseInt("10 years");                //  10

 parseInt(" years 10 ");                //  NaN
 
 ৮।  parseFloat()

এই মেথড টা প্যারামিটারে যাই কিছু পাবে সেটাকে -
 
পূর্ণসংখ্যায় থাকলে রিটার্ন হিসেবে পূর্ণসংখ্যা দিবে । 
দশমিকে থাকলে রিটার্ন হিসেবে দশমিক সংখ্যা দিবে । 
জাভাস্ক্রিপ্ট রিড করতে না পারলে NaN  দিবে । 

parseFloat("10");                       // 10

parseFloat("10.33");                    // 10.33

parseFloat("10 20 30");                 // 10

parseFloat("10 years");                 // 10

parseFloat("years 10");                 // NaN 


// *** BigInt *** 
জাভাস্ক্রিপ্ট কোন নাম্বারের সর্বচ্চো নাম্বার কিভাবে বের করব ?? 

let largestNumber = Number.MAX_SAFE_INTEGER;
largestNumber += 1 ;
largestNumber += 1 ;
console.log(largestNumber);

প্রথমবার 1 যোগ করলে ভ্যালু আসছে কিন্তু দ্বিতীয়বার 1 যোগ করলে ভ্যালু আসে না এই সমস্যা Es-11 একটা ফিচার দিয়ে সলভ করেছে । 
let largestNumber = Number.MAX_SAFE_INTEGER;

largestNumber  = BigInt(largestNumber) + 1n ;
console.log(largestNumber);

console.log(10n === BigInt(10));                         // true
console.log(10n == 10);                                  // true
console.log(10n === 10);                                 // false

// ***  Dates in javscript ****
জাভাস্ক্রিপ্ট এ Date এর লিটারেল সিনটেক্স নাই । একে সবসময় অবজেক্ট কন্সট্রাকটর ফাংশন আকারে লিখা হয় । 

creating a date with constructor -
নয়ভাবে  Date অবজেক্ট  তৈরি করা যায় । 
new Date()

new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)

জাভাস্ক্রিপ্ট এ মাস কাউন্ত করে ০ থেকে ১১ পর্যন্ত ।

// ** Date getmethod **
১। getFullYear()
এই মেথড রিটার্ন হিসেবে একটা ইয়ার দেয় । যেমন - 

const d = new Date("2021-03-25");
d.getFullYear();

২। getMonth()
এই মেথড রিটার্ন হিসেবে একটা মাস  দেয় । যেমন - 
const d = new Date("2021-03-25");
d.getMonth();

জাভাস্ক্রিপ্ট এ মাসের হিসাব সবসময় ০ থেকে ১১ হয় ।  জানুয়ারি মাসের ভ্যালু ০ আবার ডিসেম্বার মাসের ভ্যালু ১১ 

৩। getDate()
এই মেথড রিটার্ন হিসেবে একটা দিনকে  দেয় যেটা একটা নাম্বার ১ থকে ৩১ মধ্যে থাকে  । যেমন - 

const d = new Date("2021-03-25");
d.getDate();

৪। getDay()

এই মেথড রিটার্ন হিসেবে একটা দিনকে  দেয় যেটা একটা নাম্বার ০ থকে ৬ মধ্যে থাকে  । যেমন -
getDay(); মেথড এর ভ্যালু ০ হলে রবিবার
getDay(); মেথড এর ভ্যালু ১ হলে সোমবার 
getDay(); মেথড এর ভ্যালু ২ হলে মঙ্গলবার 
getDay(); মেথড এর ভ্যালু ৩ হলে বুধবার
getDay(); মেথড এর ভ্যালু ৪ হলে বৃহস্পতিবার
getDay(); মেথড এর ভ্যালু ৫ হলে শুক্রবার 
getDay(); মেথড এর ভ্যালু ৬ হলে শনিবার 

৫। getHours()
এই মেথড রিটার্ন হিসেবে একটা ঘণ্টা  দেয় যেটা একটা নাম্বার ০ থকে ২৩ মধ্যে থাকে  । যেমন - 


৬। getMinutes()
এই মেথড রিটার্ন হিসেবে মিনিটে  একটা সময়  দেয় যেটা একটা নাম্বার ০ থকে ৫৯ মধ্যে থাকে  । যেমন - 

৭। getSeconds()
এই মেথড রিটার্ন হিসেবে সেকেন্ডে একটা সময়   দেয় যেটা একটা নাম্বার ০ থকে ৫৯ মধ্যে থাকে  । যেমন - 

৮। getMilliseconds()
এই মেথড রিটার্ন হিসেবে একটা মিলিসেকেন্ডে সময়   দেয় যেটা একটা নাম্বার ০ থকে ৯৯৯ মধ্যে থাকে  । যেমন - 

৯। getTime()
এই মেথড টা মূলত একটা সময় দেয় যেটা মিলিসেকেন্ডে হবে । আমরা প্যারামিটারে যে ডাটা দিব সেটাকে কনভার্ট করে ১৯৭০ সালের ১ জানুয়ারি থেকে ঐ সময়ের পার্থক্য মিলিসেকেন্ডে দিবে । 


// ** Date setmethod **

১। setDate()
২। setFullYear()
৩।setHours()
৪।setMilliseconds()
৫। setMinutes()
৬। setMonth()
৭। setSeconds()
৮। setTime()

//** Math Properties **
let result = Math.PI
console.log(result);

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E 

// *** Math Method ** 

১। Math.round()
এই মেথড টা মূলত সবচেয়ে কাছের পূর্ণসংখ্যায় নিয়ে যায় । 
Math.round(4.9)                // returns 5
Math.round(4.7)                // returns 5
Math.round(4.4)                // returns 4
Math.round(4.2)                // returns 4
Math.round(-4.2)                // returns -4

২। Math.ceil()
এই মেথড টা মূলত কোন একটা সংখ্যার দশমিকের পর যাই থাকুক না কেন এটা সব সময় পরবর্তি পূর্ণসংখ্যায় নিয়ে যাবে  । 

Math.ceil(4.9);                // returns 5
Math.ceil(4.7);                // returns 5
Math.ceil(4.4);                // returns 5
Math.ceil(4.2);                // returns 5
Math.ceil(-4.2);                // returns -4

৩। Math.floor()
এই মেথড টা মূলত কোন একটা সংখ্যার দশমিকের পর যাই থাকুক না কেন এটা সব সময় দশমিকের আগের  পূর্ণসংখ্যায় নিয়ে যাবে  । 
Math.floor(4.9);               // returns 4 
Math.floor(4.7);                // returns 4
Math.floor(4.4);                // returns 4
Math.floor(4.2);                // returns 4
Math.floor(-4.2);                // returns -5

৪। Math.trunc()
এই মেথড টা মূলত কোন একটা সংখ্যার দশমিকের পর যাই থাকুক না কেন সেটাকে  কেটে ফেলবে এবং আগের পূর্ণসংখ্যায় নিয়ে যাবে  । 
Math.trunc(4.9);               // returns 4 
Math.trunc(4.7);               // returns 4 
Math.trunc(4.4);               // returns 4 
Math.trunc(4.2);               // returns 4 
Math.trunc(-4.2);               // returns -4 

৫। Math.sign()
এখানে প্যারামিটারে পজিটিভ মান নিলে রিটার্ন করবে 1
এখানে প্যারামিটারে  নেগেটিভ মান নিলে রিটার্ন করবে -1
এখানে প্যারামিটারে  জিরো  মান নিলে রিটার্ন করবে  0

Math.sign(-4);               // returns 1
Math.sign(0);               // returns 0 
Math.sign(4);               // returns -1

৬। Math.pow()
এখানে দুইটা প্যারামিটার নিবে -
প্রথম প্যারামিটারে সংখ্যাটা পাবে 
দ্বিতীয় প্যারামিটারে সূচক পাবে । 
Math.pow(8, 2);                // returns 64
৭। Math.sqrt()
এটা বর্গমূল বের করে 
Math.sqrt(64);                // returns 8

৮। Math.abs()
এখানে প্যারামিটারে যাই নেই না কেন  সব সময় পজিটিভ ভ্যালু  রিটার্ন করবে । 

৯। Math.min()
Math.min(0, 150, 30, 20, -8, -200);                   // returns -200
১০। Math.max()
Math.max(0, 150, 30, 20, -8, -200);                   // returns 150



// *** type conversion ***

// জাভাস্ক্রিপ্ট একটা ডাটা টাইপ থেকে অন্য কোন ডাটা টাইপে কনভার্ট করাকেই type conversion বলে । type conversion মূলত দুইভাবে করা যায় । 
// ১। ফাংশন ব্যবহার -
// ২। অটোমেটিক বাঁ জাভাস্ক্রিপ্ট নিজেই করে । 

জাভাস্ক্রিপ্ট এর কিছু ফাংশন ব্যবহার করে আমরা কনভার্ট করব -

// ১। Strings to Numbers

console.log(Number("3.14"));                                 //  3.14
console.log(Number(Math.PI));                                //  3.1416
console.log(Number(" "));                                    //  0
console.log(Number(""));                                     //  0
console.log(Number("99 88"));                                // NaN
console.log(Number("John"));                                 // NaN

// ২। Numbers to Strings

console.log(String(100));                               // 100
console.log(String(100 + 23));                          // 123

// ৩। Dates to Numbers

let date = new Date();
console.log(Number(date));                                // 1695359113945
date.getTime()                                            // 1695359113945

// ৪। Dates to Strings
let date = new Date();
console.log(date.toString());                          // Fri Sep 22 2023 11:08:40 GMT+0600 (Bangladesh Standard Time)


// ৫। Booleans to Numbers
console.log(Number(false));                             //  0
console.log(Number(true));                              //  1 

// ৬। Booleans to Strings
String(false)      //                       "false"
String(true)       //                       "true" 


false.toString()   //                       "false"
true.toString()    //                       "true"

// ৭। Automatic Type Conversion

5 + null    // returns 5                             because null is converted to 0
"5" + null  // returns "5null"                       because null is converted to "null"
"5" + 2     // returns "52"                          because 2 is converted to "2"
"5" - 2     // returns 3                             because "5" is converted to 5
"5" * "2"   // returns 10                            because "5" and "2" are converted to 5 and 2 

// ৮। Automatic String Conversion

// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"




// **  Set ** 
// create a set 
সেট এর কন্সট্রাকটর ফাংশনে একটা অ্যাঁরে পাস করতে হবে । সেটের কোন লিটারেল সিনটেক্স নাই । 
সেট হচ্ছে ইউনিক কালেকশন  অফ ভ্যালু । 
const letters = new Set(["a", "b", "c"]);

// ** property ** 
১। এই প্রপারটি রিটার্ন করে একটা সেট  এ কত গুলা এলিমেন্ত আছে । 
letters.size;
// method
১ । add()
সেটের ভ্যালু অ্যাড করতে এই মেথড ব্যবহার করা হয় । যেমন - 
// Create a Set
const letters = new Set();
// Create Variables
const a = "a";
const b = "b";
const c = "c";
// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);

২। forEach()
এই মেথড টা মুলত লুপ করতে ব্যবহার করা হয় । আমরা জানি এই মেথড প্যারামিটার হিসেবে একটা ফাংশন নেয় । 
// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
letters.forEach (function(value) {
  text += value;
})

৩। values()
এই মেথড টা মুলত একটা ইটারেটর অবজেক্ট দেয় । 

const letters = new Set(["a","b","c"]);

console.log(letters.values());

সে একটা সেট ইটারেটর অবজেক্ট দিচ্ছে । সে এমন একটা অবজেক্ট দিচ্ছে যে অবজেক্ট টা লুপ করা যায় । 

// **** Map ***** 
ম্যাপ  এর কন্সট্রাকটর ফাংশনে একটা অ্যাঁরে পাস করতে হবে এবং কি ভ্যালু পেয়ার করে পাস করতে হয় । 
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

আমরা জানি অবজেক্ট এর  কি - ভ্যালু পেয়ার থাকে সেখানে অবজেক্টএর কি গুলা শুধু স্ট্রিং হয় । কিন্তু ম্যাপ এর কি-ভ্যালু পেয়ারে কি এর ডাটা টাইপ যে কোন কিছু হতে পারে । 
// ** property ** 
১। এই প্রপারটি রিটার্ন করে একটা সেট  এ কত গুলা এলিমেন্ত আছে । 
fruits.size;

// ** Method *** 

১। set()
এই মেথড ব্যবহার করা হয় বাইরে থেকে ভ্যালু পুশ করতে -
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits);

২। get()
এই মেথড ব্যবহার করা হয় কোন প্রপারটির ভ্যালু বের  করতে , ধরেন "apples" প্রপারটির ভ্যালু বের করব   -

fruits.get("apples");    // Returns 500

৩। delete()
কোন প্রপারটি ডিলিট করতে এই মেথড ব্যবহার করা হয় । 

fruits.delete("apples");

৪। has() 
এই মেথড টা ব্যবহার করা হয় কোন কি আছে কি না সে টা জানার  জন্য - 

এটা true অথবা false  রিটার্ন করে । 
fruits.has("apples");

৫। forEach()
এই মেথড টা মুলত লুপ করতে ব্যবহার করা হয় । আমরা জানি এই মেথড প্যারামিটার হিসেবে একটা ফাংশন নেয় । 
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})

৬। entries() 
সে একটা সেট ইটারেটর অবজেক্ট দিচ্ছে । সে এমন একটা অবজেক্ট দিচ্ছে যে অবজেক্ট টা লুপ করা যায় । 
// List all entries
let text = "";
for (const x of fruits.entries()) {
  text += x;
}
// *** variable concept *** 


// ভ্যারিঅ্যাবল হচ্ছে ভ্যালু রাখার জায়গা বাঁ কনটেইনার । 

// জাভাস্ক্রিপ্ট এ ভ্যারিঅ্যাবল তিনভাবে লিখতে হয়  যথা - 

// ১ । var - keyword
// ## declaration and Assign 

//  var x = 5 ;

//  এটাকে ভেঙ্গে লিখা যায় -

//  var x ;   এটাকে  ভ্যারিঅ্যাবল declaration  বলে  ।
//  x = 5 ;  এটাকে ভ্যারিঅ্যাবল এ ভ্যালু  Assign  করা বলে ।

//  এটি  Hoisted হয় । 
//  এর কোন ব্লক স্কোপ(Block scope)  নেই । ব্লক স্কোপেও  এটি গ্লোবাল স্কোপের মত কাজ করে । 

// ## Redeclaration and ReAssign 

// ধরেন আমাদের কোড ইডিটরের গ্লোবাল স্কোপে একটা ভ্যারিঅ্যাবল লিখেছি - সেটা হল 

// var x = 5 ; 
// এখন আমরা চাইলে  এর ক্ষেত্রে   -Redeclare and ReAssign করতে পারব । 

// var x = 6 ; 
// এটাকে ভেঙ্গে লিখা যায় -

// var x ;            এটাকে  ভ্যারিঅ্যাবল Redeclaration  বলে  ।

// x = 6 ;           এটাকে ভ্যারিঅ্যাবল এ ভ্যালু  ReAssign  করা বলে ।


// ২। let - keyword 
//  ## declaration and Assign 

// let x = 5 ;

// এটাকে ভেঙ্গে লিখা যায় -

// let  x ;   এটাকে বলে ভ্যারিঅ্যাবল declaration  করা ।
// x = 5 ;   এটাকে বলে ভ্যারিঅ্যাবল এ ভ্যালু  Assign  করা ।

// এটি  Hoisted হয় না । 
// এর  ব্লক স্কোপ(Block scope)  আছে । ব্লক স্কোপের  বাইরে এটিকে এক্সেস করা যায় না  । 

// ## Redeclaration and ReAssign 

// ধরেন আমাদের কোড ইডিটরের গ্লোবাল স্কোপে একটা ভ্যারিঅ্যাবল লিখেছি - সেটা হল 

// let x = 5 ; 
// এখন আমরা চাইলে এর ক্ষেত্রে   -Redeclare করতে পারব না কিন্তু  ReAssign করতে পারব  । 

// Redeclare
// let  x = 6 ;              Identifier 'x' has already been declared

// এখানে এরর আসছে ভ্যারিঅ্যাবল কে Redeclare করা যাচ্ছে না । 
// // ReAssign 

// let x ;
// x = 5 ;
// x = 6 ;
// console.log(x ); করলে দেখা যাবে যে আউটপুট আসবে 6
// ভ্যারিঅ্যাবল এ ভ্যালু ReAssign  করলে আগের ভ্যালু এক্সেস করা যাবে না । 



// ৩।  const - keyword 
//  const x = 5 ;
// এটাকে ভেঙ্গে লিখা যায় না । 

// একই নামে ভ্যারিঅ্যাবল Redeclaration  করা যাবে না । 
// ভ্যারিঅ্যাবল  এর ভ্যালু  Re Assign  করা যাবে না  ।

// এটি Hoisted হয় না  । 
// এর  ব্লক স্কোপ(Block scope)  আছে । ব্লক স্কোপের  বাইরে এটিকে এক্সেস করা যায় না  । 




// ***  Scope in javascript ****

// স্কোপ হচ্ছে একটা নির্দিষ্ট এরিয়া পর্যন্ত বিস্তৃত বাঁ একটা সীমাবদ্ধ জায়গার মধ্যে কোন একটা জিনিস কাজ করে ।

// জাভাস্ক্রিপ্ট এ তিন ধরনের স্কোপ আছে - 

// ১। Global Scope -

// যেকোনো কারলি ব্রাসেসের বাইরের  এরিয়াকে গ্লোবাল স্কোপ বলে । 

// var x = 4 ;                           // global scope    

// let x = 5 ;                          // global scope  

// const x = 6  ;                        // global scope  

// ২। Function Scope -

// কোন একটা ফাংশনের বডিকে Function Scope বলে - 

// function A() {
//     var x = 3;                       // function scope 
// }

// আমরা ফাংশন বডির বাইরে যেকোনো জায়গায় var লিখলে সেটা কোড ইডিটরের সব জায়গায় এক্সেস পাবে কিন্তু ফাংশন বডির ভিতরে কোন ভ্যারিঅ্যাবল বাইরে এক্সেস করা যাবে না । 

// function A() {
//     let  x = 3;                      // function scope 
// }


// function A() {
//     const x = 3;                      // function scope 
// }



// ৩। Block Scope -

// Block Scope হচ্ছে এমন একটা এরিয়া যেটা { } কারলি ব্রাসেস মধ্যে সীমাবদ্ধ থাকে । যেমন - 

// {
//   const x = 2; 
// }

// এখন এই X এর এক্সেস শুধুমাত্র { } কারলি ব্রাসেস মধ্যে সীমাবদ্ধ থাকে , এর বাইরে X কাজ করবে না । 



// {
//     let x = 2;
// } 

// এখন এই X এর এক্সেস শুধুমাত্র { } কারলি ব্রাসেস মধ্যে সীমাবদ্ধ থাকে , এর বাইরে X কাজ করবে না । 




// আমরা যদি ভ্যারিঅ্যাবল পরিবর্তন করে var নিলে ভিন্ন রকম ঘটনা ঘটবে ।
// {
//     var x = 3;
// }
// কারন আমরা জানি যখন কোন ভ্যারিঅ্যাবল
// কে var কি ওয়ার্ড দিয়ে লিখি তখন এইটা গ্লোবাল স্কোপ অথবা ফাংশন  স্কোপ থাকে কিন্তু  সেটার কোন ব্লক স্কোপ থাকে না । 

// যেকারনে কারলি ব্রাসেসের বাইরে X এক্সেস পাবে । 

// *** Lexical scope  *** 

// জাভাস্ক্রিপ্ট এ প্যারেন্ট এর সবকিছু তার চাইল্ড এক্সেস করতে পারে । সুতরাং গ্লোবাল স্কোপের সবকিছু ফাংশন স্কোপ বাঁ ব্লক স্কোপে এক্সেস করা যাবে  কিন্তু চাইল্ডের কোন কিছুতে আবার প্যারেন্ট এর এক্সেস নাই ।

// var num1 = 3;
// var num2 = 4;

// var sum = function(){
//     return num1 + num2 ;
// };

// console.log(sum());                           output //     7 

// এখন মনে হতে পারে var num1 = 3 , var num2 = 4 এক্সেস কিভাবে লোকাল স্কোপ বাঁ ফাংশন স্কোপ পেল । আমরা তো এখানে প্যারামিটারই পাস করি নাই ।  এটাই হচ্ছে প্যারেন্ট স্কোপ থেকে লোকাল স্কোপে এক্সেস পেয়েছে । এটাকে লেক্সিকাল স্কোপিং বলে । 


// ***  Hoisting  ***

// Hoisting হচ্ছে কোন  declaration  কে টেনে উপের দিকে তোলা । 

// // variable Hoisting 

// নিচের কোডটি লক্ষ্য করুনঃ
// console.log(a);
// // output 'reference error'
// অর্থাৎ আমরা যদি কোনো ভেরিয়েবল কে না ডিফাইন করে তার আউটপুট দেখতে চাই তাহলে reference error পাবো । 
// var a = 'Bangladesh';
// console.log(a);
// // output 'Bangladesh'
// এটা তো আমরা জানি  একটা ভেরিয়েবলকে ডিফাইন করে তারপর তাকে কনসল লগ করি তখন তার ভ্যালু টা আমরা পাই। কিন্তু  একটা ভেরিয়েবলকে ডিফাইন করার আগেই তাকে কনসল লগ করি তখন ঘটবে ?? 
অর্থাৎ কনসল লগ করার পর  একটা ভ্যারিয়েবল  ডিফাইন করি তার আউটপুট দেখতে কেমন হবে ??
// console.log(a);
// var a = 'Bangladesh';
// // output 'undefined'
// আমরা ভেরিয়েবল কে ডিফাইন করার পূর্বে তাকে অ্যাক্সেস করার ট্রাই করি তখন আমরা undefined পাবো । 

//  এখানে থেকেই হোশটিং এর কনসেপ্ট টা আসে।
// var a; // here variable is define
// a = 'Bangladesh'; // here variable is assigne by value of 'Bangladesh'
// এখানে প্রথম যখন একটা জাভাস্ক্রিপ্ট ফাইল রিড হয় তখন কি হয় সকল ভেরিয়েবল ডিফাইন গুলো হোশটিং করে অর্থাৎ উত্তোলন করে/উপরের দিকে উঠায় নেয় এবং একটা মান আসাইন করে তা হচ্ছে undefined তাই এই কোডকে যদি একটু মডিফাই করে লিখি তাইলে বুঝতে সুবিধা হবে।
// console.log(a);
// var a = 'Bangladesh';
// // output 'undefined'
// মডিফাইড
// console.log(a);
// var a;
// a = 'Bangladesh';
// // output 'undefined'
// var a; কে উপরের দিকে নিয়ে যাবে ঠিক এই রকম
// var a;
// console.log(a);
// a = 'Bangladesh';
// // output 'undefined'
// ঠিক এইরকম টা হয়ত হয় না কিন্তু বুঝার সুবিধার্থে ধরে নেন। তারপর var a; এর ভ্যালু by default undefined সেট করে দেয় তারপর আমরা তার ভ্যালু কনসলে undefined দেখতে পাই। তারপর গিয়ে তার ভ্যালু সেট হয় Bangladesh. আমরা যদি তারপর আবার কনসোল করি তাহলে
// var a;
// console.log(a);
// a = 'Bangladesh';
// console.log(a);
// // output 'undefined'
// // output 'Bangladesh'
// এই রকম দেখতে পাবো। এটাই সিম্পিলি হোশটিং বলা যায়। চলুন আর একটু জানা যাক।
// Using let
// উপরের ব্যবহৃত সকল উদাহরণ গুলো যদি let দিয়ে দেখি তাহলে কি হবে। চলুন-
// console.log(a);
// // output 'reference error'

// let a = 'Bangladesh';
// console.log(a);
// // output 'Bangladesh'
// এই দুইটা সেইম ।
// console.log(a);
// var a = 'Bangladesh';
// // output 'undefined'

// console.log(a);
// let a = 'Bangladesh';
// // output 'reference error'
// কনসলে আসা এরর টা দেখেন-
// দেখুন var ব্যবহার করলে আসে undefined আর let ব্যবহার করলে আসে referen error. হুম একটু ব্যতিক্রম অর্থাৎ var and let একটু ভিন্ন ওয়েতে কাজ করে both ক্ষেত্রেই হোশটিং হচ্ছে।
// let এর ক্ষেত্রে আসলে ডিক্লেরশন টা উপরে যায় কিন্তু আনডিফাইন্ড টা সেট হয় যে লাইনে let লেখা হয়েছে ঠিক অই লাইনে আর ভ্যালু টা অ্যাসাইন হয় ঠিক তার পরের লাইনে।
// console.log(a);
// let a; // here a = undefined assign
// a = 'Bangladesh'; // here a = 'Bangladesh' value assign

// // কল্পনা করে দেখলে এইরকম হবে তেমন কিছু না।
// আমার চিন্তা এবার বুঝতে পারছেন। তাই যেহেতু ভেরিয়েবলই অ্যাসাইন হচ্ছে না আমার মেমোরিতে অ্যালোকেট হচ্ছে না তাই তাকে reference error দেখাচ্ছে।
// কিন্তু আমরা যদি এভাবে লিখি
// let a;
// console.log(a);
// a = 'Bangladesh';
// // output - 'undefined'
// // এখন ভেরিয়েবল var এর মতো কাজ করছে কারন কনসোল এর পূর্বেই a এর মান undefined সেট হয়েছে।
// // Ex-1
// var LANGUAGE = 'Java';
// var language = 'JavaScript';
// function getLanguage() {
//   if (!language) {
//     var language = LANGUAGE;
//   }
//   return language;
// }
// console.log(`I love ${getLanguage()}`);
// // expected - 'I love JavaScript'
// তাহলে এখানে আমরা কি আউটপুট পেতে পারি।
// // output - 'I love Java'
// এর কারন কি? কারন হলো হোশটিং আর var কারন এত খন যাবত আমরা যা জেনেছি চলুন তা দিয়ে কল্পনা করে দেখার চেষ্টা করি কি হচ্ছে।
// var LANGUAGE = 'Java';
// var language = 'JavaScript';
// function getLanguage() {
//   if (!language) {
//     var language = LANGUAGE;
//   }
//   return language;
// }
// console.log(`I love ${getLanguage()}`);
// // expected - 'I love JavaScript'
// দেখুন এখানে var language = LANGUAGE; এটা হোশটিং হয়ে উপরে যাবে কিন্তু আবার ফাংশন কে ছেরে উপরে না কারন এখানে আবার স্কোপ আছে যে if এর উপরে যেতে পারবে সর্বোচ্চ তখন গিয়ে সেখানে সেট হবে var language = LANGUAGE; মানে 'Java' এবং দেখবে !language false তাই আর if এর ভেতরে ঢুকবে না যাবে রিটার্নে এখন ত language এর ভ্যালু চেঞ্জড মানে 'Java' তাই আমরা Java আউটপুট দেখতে পাচ্ছি।
// আর যদি let ব্যবহার করি তাহলে আমরা সঠিক আউটপুট দেখতে পাচ্ছি চলুন বর্ননা করা যাক
// let LANGUAGE = 'Java';
// let language = 'JavaScript';
// function getLanguage() {
//   if (!language) {
//     let language = LANGUAGE;
//   }
//   return language;
// }
// console.log(`I love ${getLanguage()}`);
// // expected - 'I love JavaScript'
// // output - 'I love JavaScript'
// দেখুন এখানে let language = LANGUAGE; এটা হোশটিং হয়ে উপরে যাবে কিন্তু আবার if কে ছেরে উপরে যাবে না কারন এখানে আবার let block স্কোপ আছে তাই সে if এর উপরে যেতে পারবে না তখন ভেরিয়েবল আনডিফাইন্ড আসাইন হবে if এর ভিতর সেট হবে । যদি একটু কল্পনা করে দেখার চেষ্টা করি কি হচ্ছে।
// let LANGUAGE = 'Java';
// let language = 'JavaScript';
// function getLanguage() {
//   if (!language) {
//     let language = LANGUAGE; // here language = undefined assing
//     // here language = LANGUAGE value assing
//   }
//   return language;
// }
// console.log(`I love ${getLanguage()}`);
// // expected - 'I love JavaScript'
// // output - 'I love JavaScript'
// let language = LANGUAGE; মানে 'JavaScript' এবং দেখবে !language false কারন ফাংশন স্কোপ এ language এর ভ্যালু নাই কিন্তু তার পেরেন্ট এ তো আছে তাই এটা true তাই আর if এর ভেতরে ঢুকবে না যাবে রিটার্নে এখন ত language এর ভ্যালু পেরেন্ট থেকে আসা মান মানে 'JavaScript' তাই আমরা JavaScript আউটপুট দেখতে পাচ্ছি।
// Function Hoisting
// জাভাস্ক্রিপ্ট এ faunction ও একই নিয়মে হোশটিং হয়ে থাকে
// myFunc();
// function myFunc() {
//   var language = 'JavaScript';
//   console.log(language);
// }
// // output - 'JavaScript'
// আসলে জাভাস্ক্রিপ্ট এ function ও একটি Object এটা ও মেমোরিতে অ্যালোকেট হয় কারন ফাংশন ও একটা ডেফিনেশন তাই প্রথম এ হোশটিং করে উপরে যায় মেমোরিতে অ্যালোকেট হয় তার পর এটা এক্সোকিউট হয়।
// আচ্ছা বলুন ত নিচের কোডের আউটপুট কি হবে
// myFunc();
// function myFunc() {
//   language = 'JavaScript';
//   var language;
//   console.log(language);
// }
// // output - 'undefined / 'JavaScript'
// আসলে এখানে JavaScript ই আসবে কারন কি আমাদের সেন্স এ ত language = 'JavaScript'; যেহেতু var নাই তাই গ্লোবাল এ by default একটা var language; নিবে আর আনডিফাইন্ড সেট করবে ভালো কথা। তারপর ফাংশন বডি তে এসে JavaScript ভ্যালু আসাইন হবে তারপর ত আবার var language; undefined সেট হবার কথা তাই তো কিন্তু না আমরা কি জানি var language; তো function scope তাই এটা ও তো হোশটিং হয়ে উপরে যাবে ফাংশন বডির সবার উপরে তারপর কিন্তু JavaScript ভ্যালু সেট হবে তাই কিন্তু আমরা আউটপুট ঠিকঠাক পাচ্ছি।
// কিন্তু আমার যদি জাভাস্ক্রিপ্টকে একটু অন্য ভাবে লিখি
// myFunc();
// const myFunc = function () {
//   var language = 'JavaScript';
//   console.log(language);
// };

// তাহলে কি হলো এখানে আবার ব্যতিক্রম কেনো। কোনোই ব্যতিক্রম না যেহেতু এখানে ফাংশন কে ভেরিয়েবল এ ডিফাইন করা হয়েছে আবার const দিয়ে তাই এখানে কল্পনা করলে এমন হবে
// const myFunc; // not allocate here
// myFunc();
// const myFunc = undefined ; myFunc = function () {
//   var language = 'JavaScript';
//   console.log(language);
// };
// // output - so reference error
// Summary
// হোশটিং তেমন কিছুই না একটা জাভাস্ক্রিপ্ট ফাইল রিড করার সময় সকল প্রকার ডিফাইন গুলো সবার উপরে হোশটিং/উত্তলন হয় কিন্তু এখানে function var let and const এর তিনটায় কিছু টা পার্থক্য লক্ষ্য করা যায়। var আর function এ যার যার স্কোপ এর সবার উপরে ডিফল্ট ভ্যালু undefined সেট হয় এবং পরবর্তীতে তার ভ্যালু অই লাইনে আসাইন হয়। আর let and const এর ক্ষেত্রে অই লাইনে undefined সেট হয় এবং ভ্যালু আসাইন হয়। আর function কে যদি ভেরিয়েবল let and const দিয়ে ডিক্লেয়ার করা হয় তাহলে অই লাইনে undefined সেট হয়। আর সাধারন function দিয়ে তৈরি করলে গ্লোবালি রেফারেন্স পাই তাই ফাংশন কল হয়। কিন্তু var ব্যবহার করলে আনডিফাইন্ড আশার কথা কিন্তু না। তা কেন নিচে লক্ষ্য করুন।
// myFunc();
// var myFunc = function () {
//   var language = 'JavaScript';
//   console.log(language);
// };
// //output - Uncaught TypeError: myFunc is not a function
// এখানে undefined আশার কথা কিন্তু এরর আসছে কেন? কারন আমার তো () কল করছি। myFunc এর ভ্যালু undefined তো তা ত আর ফাংশন না তাই তাকে কল করলে ত not a function এরর ই আসবে

// *** primitive vs Reference ***

// Javascript :  Pass by value & Pass by reference


এ দুটি জিনিস জানবার আগে আমাদের জানতে হবে যে  জাভাস্ক্রিপ্ট এ ডেটা টাইপকে দুইভাগে ভাগ করা হয় -

১। প্রিমিটিভ - string, number, null, undefined, boolean, symbol
প্রিমিটিভগুলো ইমিউট্যাবল, তার মানে হচ্ছে এগুলো আমরা তৈরি করার পরে আর চেইঞ্জ করতে পারি না ।

আমরা যখন কোনো ভ্যারিয়েবল তৈরি করি তখন আসলে কি হয়? আসলে র‍্যাম বা মেমরি তে নির্দিষ্ট এড্রেস এ ডেটা টা সেভ হয় বা জায়গা দখল করে রাখে, ভ্যারিয়েবল নেইম টা আসলে জায়গাটার নাম । সকল প্রোগ্রামিং ল্যাঙ্গগুয়েজ এই ব্যাপারটা একই রকম। প্রোগ্রামিং এর ভাষায় একে  মেমরি এলোকেটেড করা বলে ।  প্রিমিটিভ ভ্যালু গুলো  সাধারণত stack এ এলোকেটেড করে । 

// var a = 5 ;
// var b = a ;

// a = 6 ;
// console.log(a);
// console.log(b);

// output            expected behaviour
// 6
// 5

var a = 5 ; হল stack এ একটা a নামে জায়গা এলোকেটেড করে 5 কে রাখে । আবার যখন var b = a ; লিখি ঠিক তখন মেমরিতে  b  নামে নতুন  জায়গা এলোকেটেড করে  সেখানে 5 কে রাখে ।  এখানে var b = a মানে হল a এবং b মেমোরিতে আলাদা জায়গা এলোকেটেড হবে জাস্ট a থেকে b  ভ্যালু টা কপি করে তার জায়গায় রাখবে  । 



// ২। নন প্রিমিটিভ[রেফারেন্সে] - objects, arrays, functions, Date ... etc

আমরা জানি জাভাস্ক্রিপ্ট প্রত্যেকটা রেফারেন্সে ভ্যালু একটা মাস্টার অবজেক্ট থেকে আসে । তাই আমরা বলতে পারি সকল রেফারেন্সে ভ্যালুই অবজেক্ট । 
 নন প্রিমিটিভগুলো মিউট্যাবল মানে এগুলো তৈরি করার পর চেঞ্জ করা যায়।
 নন প্রিমিটিভ ভ্যালু গুলো  সাধারণত  Heap  এ এলোকেটেড করে । Heap হল মেমোরিতে একটা রেনডম জায়গা ।


// var x = {
//   name : "sakib"
// }

// var y = x ;

// a.name = " Tamim "

// console.log(a);
// console.log(b);

// // output 
//  Tamim                      unexpected behaviour
//  Tamim

var x = { name : "sakib }  এখানে  x অবজেক্ট টা Heap এ  একটা ব্লক তৈরি করবে সেই ব্লকের অ্যাড্রেসটাকে একটা পয়েন্টার ডিটেক্ত করে রাখবে । আবার যখন  var y = x ; করছি তখন Heap এ আরেকটা নতুন পয়েন্টার তৈরি করবে যেটা আগের ব্লকের অ্যাড্রেসকেই ডিটেক্ত করবে । যে কারনে var x = { name : "sakib }   অবজেক্ট  এর property change করলে দুই জায়গায় পরিবর্তন হয় । যেহেতু   নন প্রিমিটিভগুলো মিউট্যাবল মানে এগুলো তৈরি করার পর চেঞ্জ করা যায়। কিন্তু  var x = { name : "sakib }  অবজেক্ট এর property change না করে সরাসরি আরেকটা অবজেক্ট অ্যাঁসাইন করলে ভিন্ন রকম ঘটনা ঘটবে । সেক্ষেত্রে আরেকটা নতুন ব্লক তৈরি করবে যে ব্লকটাকে অন্য পয়েন্টার ডিটেক্ত করে রাখবে । যেমন 

// var x = {
//   name : "sakib"
// }

// var y = x ;
// x = {} ;
// console.log(a);
// console.log(b);


আবার আমরা চাইলে রেফারেন্স ভ্যালু গুলা কপি করার সময় ইমিউট্যাবল  বাঁ পরিবর্তন না করে করতে পারি । সেক্ষেত্রে আমাদের কে spread operator ব্যবহার করতে হবে । যেমন - 


var language = {
  name : " javascript",
  estd : "1985", 
  library: [" React ", " vue",  "Angular"]
}

var language2 = {...language}             // immutably copy 
language.founder = " Breandon Eich "

console.log(language);
console.log(language2);




