// Array কি ?? 

একই রকম অনেকগুলা ডাটা স্টোর করার জন্য আলাদা আলাদা ভ্যারিএবল না নিয়ে একটি ভ্যারিএবলের মধ্যে সবগুলাকে স্টোর করার প্রক্রিয়াকে Array বলে ।


Array লিখার বিভিন্ন নিয়ম - 

// ১। Litaral syntax
এটা চাইলে একলাইনে অথবা মাল্টিলাইনেও লিখা যায় । 

const cars = ['saab', 'volbo', 'bmw', 'marcedes'];

                  অথবা 

const cars = [
  'saab',
  'volbo',
  'bmw',
  'marcedes'
];


// ২। Emty Array 

একটা Emty Array  নিয়ে তার মধ্যে ইলিমেন্ত পুশ করা । 

const cars = [] ;

cars[0] = 'saab'
cars[1] = 'volvo'
cars[2] =  'bmw'

৩। new keyword 

এইভাবে Array লিখা ঠিক না , আমরা সাধারনত এইভাবে Array লিখব না এটা ওয়েব পেইজকে slow করে ফেলে । 


const cars = new Array('saab', 'volvo', 'bmw', 'marcedes');

Array এর ইনডেক্স মূলত শুন্য থেকে শুরু হয় (0, 1, 2, 3, 4, ......) এইভাবে চলতে থাকে । 

// ** একটা সম্পূর্ণ Array এক্সেস করতে চাইলে ** 

const cars = ['saab', 'volbo', 'bmw', 'marcedes'];

console.log(cars);

output : ['saab', 'volbo', 'bmw', 'marcedes']; 

// ** একটা Array এর যেকোনো ইলিমেন্ত এক্সেস করতে চাইলে ** 


const cars = ['saab', 'volbo', 'bmw', 'marcedes'];

console.log(cars[0]);                      //  saab
console.log(cars[1]);                      //  volvo
console.log(cars[2]);                      //  bmw

// ** একটা Array এর যেকোনো ইলিমেন্ত পরিবর্তন বাঁ রিপ্লেস  করতে চাইলে ** 

const cars = ['saab', 'volbo', 'bmw', 'marcedes'];

cars[0] = " Rangerover "

console.log(cars);
output :
['Rangerover', 'volbo', 'bmw', 'marcedes'];


// ** একটা Array এর length বের করতে চাইলে ** 

const cars = ['saab', 'volbo', 'bmw', 'marcedes'];

console.log(cars.length);
output : 4
এটা একটা  Array এর কতগুলা ইলিমেন্ত আছে সেটা রিটার্ন করে । 

// ** একটা Array এর লাস্ট ইলিমেন্ত বের করতে চাইলে ** 

const cars = ['saab', 'volbo', 'bmw', 'marcedes'];

console.log(cars[cars.length -1]);

output : ' bmw '

** Array এক প্রকার অবজেক্ট এবং Array এর ইলিমেন্ত গুলাও অবজেক্ট হতে পারে । 



// **** Array Method ****


১। toString()
এটা সাধারনত একটা Array কে স্ট্রিং এ কনভার্ট করতে ব্যবহার করা হয় । যেমন - 

const fruits = [ 'banana', 'orange', 'apple', 'mangoo', 'grapes'];

console.log(fruits.toString());

output : 'banana, orange, apple, mangoo, grapes'

২। join()
এটা সাধারনত স্ট্রিং ইলিমেন্ত গুলাকে আলাদা করতে ব্যবহার করা হয় । আমরা যেমন একই ধরনের জিনিসকে আলাদা করতে কমা ব্যবহার করি এটাও ঠিক তেমন যা দিয়ে আলাদা করব তাই এই মেথডে পাস করে দিব  - 

const fruits = [ 'banana', 'orange', 'apple', 'mangoo', 'grapes'];

console.log(fruits.join(*));

output : 'banana * orange * apple * mangoo * grapes'

৩। pop()
এটা সাধারনত কোন একটা Array থেকে লাস্ট ইলিমেন্ত  কে  বের করে আনতে ব্যবহার করা হয় । যেমন- 

const fruits = [ 'banana', 'orange', 'apple', 'mangoo', 'grapes'];
console.log(fruits.pop());                    // grapes
console.log(fruits);

output : [ 'banana', 'orange', 'apple', 'mangoo']

৪।  push()
এটা সাধারনত কোন একটা Array এর একদম শেষে  একটি ইলিমেন্তকে ঢুকাতে এই মেথড  ব্যবহার করা হয় । যেমন- 

const fruits = [ 'banana', 'orange', 'apple', 'mangoo', 'grapes'];
fruits.push(' lemon ')
console.log(fruits);
output : ['lemom' 'banana', 'orange', 'apple', 'mangoo', 'grapes'];


৫। shift()
এটা সাধারনত কোন একটা Array থেকে ফার্স্ট ইলিমেন্ত  কে  বের করে আনতে ব্যবহার করা হয় । যেমন- 

const fruits = [ 'banana', 'orange', 'apple', 'mangoo', 'grapes'];
console.log(fruits.shift());
output : 'banana'
console.log(fruits);
output : [ 'orange', 'apple', 'mangoo', 'grapes'];

৬। unshift()
এটা সাধারনত কোন একটা Array এর একদম শুরুতে একটি ইলিমেন্তকে ঢুকাতে এই মেথড  ব্যবহার করা হয় । যেমন- 

const fruits = [ 'banana', 'orange', 'apple', 'mangoo', 'grapes'];
fruits.unshift(' lemon ')
console.log(fruits);
output : ['lemom' 'banana', 'orange', 'apple', 'mangoo', 'grapes'];


৭। splice()
এটা সাধারনত কোন একটা Array এর মাঝখানে একটি ইলিমেন্তকে ঢুকাতে এই মেথড  ব্যবহার করা হয় । আমরা এর আগে যেগুলা মেথড ব্যবহার করেছি সবগুলা ছিল একটা Array এর শুরু বাঁ শেষে কিন্তু এখন আমরা মাঝখানে কাজ করব । এই মেথড মুলত তিনটি প্যারামিটার নেয় । 

প্রথম প্যারামিটারে বলতে হবে যে কত নাম্বার লেন্থ বাঁ পজিশন থেকে অ্যাড করব । 
দ্বিতীয় প্যারামিটারে বলতে হবে যে কতগুলা ইলিমেন্ত রিমুভ  করব । 
তৃতীয় প্যারামিটারে বলতে হবে কি কি  ইলিমেন্ত অ্যাড করব । 

// Ex-1  without remove
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const result = fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);

output: ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']

// Ex-2 using remove 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const result = fruits.splice(2, 2, "Lemon", "Kiwi");

console.log(fruits);

output :  ['Banana', 'Orange', 'Lemon', 'Kiwi']

এটা আসলে রিটার্ন করে যেটা সে রিমুভ করে । এটা মেইন Array  কে পরিবর্তন করে । 

৮। slice()
এই মেথড টা মুলত দুইটা প্যারামিটার নিবে - 

প্রথম প্যারামিটারে বলতে হবে যে কত নাম্বার লেন্থ বাঁ পজিশন থেকে শুরু করব । 
দ্বিতীয় প্যারামিটারে বলতে হবে যে কত নাম্বার লেন্থ বাঁ পজিশন শেষ   করব । 

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

console.log(citrus);                // ['Orange', 'Lemon']
console.log(fruits);                //  ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']

এটা নতুন একটা  Array  তৈরি করে । মেইন  Array কে পরিবর্তন করবে না । 


৯। concat()
এটা মুলত দুইটা Array  কে একসাথে করতে ব্যবহার করা হয় । 
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren);

আমরা চাইলে এই মেথডে স্ট্রিং ও দিতে পারি । কোন ক্ষেত্রে যদি তিনটি Array  কে একসাথে করতে হয় সেক্ষেত্রে Array গুলাকে প্যারামিটারে কমা দিয়ে একটার পর একটা দিতে হবে । 

এটা মেইন Array  কে পরিবর্তন করে না জাস্ট একটা নতুন Array তৈরি করে । 
১০। delete()
Array  থেকে কোন ইলিমেন্ত ডিলিট করতে চাইলে এই মেথড ব্যবহার করতে হয়  । যেমন - 

const fruits = [ 'banana', 'orange', 'apple', 'mangoo', 'grapes'];

delete fruits[1]                // true 
console.log(fruits);
output : [ 'banana', ' ', 'apple', 'mangoo', 'grapes'];

ডিলিট না করাই উত্তম কেননা ডিলিট করলে রিটার্ন করা Array তে hole সৃষ্টি করে । আমাদের fruits নামে যে Array আছে তার ১ নাম্বার ইনডেক্স থাকা ইলিমেন্ত কে ডিলিট করেছি কিন্তু ১ নাম্বার ইনডেক্স ভ্যালু না থাকলে ও এটা একটা hole সৃষ্টি করে । যেকারনে pop( )  অথবা shift() ব্যবহার করা ভালো । এখানে Array  এর length আগের মতই আছে । 







