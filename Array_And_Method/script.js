// Array কি ?? 

একই রকম অনেকগুলা ডাটা স্টোর করার জন্য আলাদা আলাদা ভ্যারিএবল না নিয়ে একটি ভ্যারিএবলের মধ্যে সবগুলাকে স্টোর করার প্রক্রিয়াকে Array বলে ।

Array কে একটা বক্স মনে করতে পারেন যেখানে একই রকম অনেকগুলা ডাটা স্টোর করা যায় । 

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

console.log(fruits.join("*"));

output : 'banana * orange * apple * mangoo * grapes'

৩। pop()
এটা সাধারনত কোন একটা Array থেকে লাস্ট ইলিমেন্ত  কে  বের করে আনতে ব্যবহার করা হয় । যেমন- 

const fruits = [ 'banana', 'orange', 'apple', 'mangoo', 'grapes'];
console.log(fruits.pop());                    // grapes
console.log(fruits);

output : [ 'banana', 'orange', 'apple', 'mangoo']
এটা মেইন Array কে পরিবর্তন করে । 

৪।  push()
এটা সাধারনত কোন একটা Array এর একদম শেষে  একটি ইলিমেন্তকে ঢুকাতে এই মেথড  ব্যবহার করা হয় । যেমন- 

const fruits = [ 'banana', 'orange', 'apple', 'mangoo', 'grapes'];
fruits.push(' lemon ')
console.log(fruits);
output : [ 'banana', 'orange', 'apple', 'mangoo', 'grapes','lemom'];
এটা মেইন Array কে পরিবর্তন করে । 

কিন্তু শেষের ইলিমেন্ত হিসেবে একাদিক ইলিমেন্ত দিলে Array এর একদম শেষে সবগুলা  ইলিমেন্ত ডুকে । এটা একটা ভ্যারিএবলে রেখে তারপর push() করলে সবার শেষে যে ইলিমেন্ত যাবে সেটা  রিটার্ন করবে । 

আবার শেষের ইলিমেন্ত হিসেবে একাদিক ইলিমেন্তকে একটা Array দিলে শেষের ইলিমেন্তটি একটা Array পাবে । 

৫। shift()
এটা সাধারনত কোন একটা Array থেকে ফার্স্ট ইলিমেন্ত  কে  বের করে আনতে ব্যবহার করা হয় । যেমন- 

const fruits = [ 'banana', 'orange', 'apple', 'mangoo', 'grapes'];
console.log(fruits.shift());
output : 'banana'
console.log(fruits);
output : [ 'orange', 'apple', 'mangoo', 'grapes'];
এটা মেইন Array কে পরিবর্তন করে । 

৬। unshift()
এটা সাধারনত কোন একটা Array এর একদম শুরুতে একটি ইলিমেন্তকে ঢুকাতে এই মেথড  ব্যবহার করা হয় । যেমন- 

const fruits = [ 'banana', 'orange', 'apple', 'mangoo', 'grapes'];
fruits.unshift(' lemon ')
console.log(fruits);
output : ['lemom' 'banana', 'orange', 'apple', 'mangoo', 'grapes'];

এটা মেইন Array কে পরিবর্তন করে । 

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

console.log(result);                             // ["Apple", "Mango"]

console.log(fruits);
output :  ['Banana', 'Orange', 'Lemon', 'Kiwi']

এটা আসলে রিটার্ন করে যেটা সে রিমুভ করে । এটা মেইন Array  কে পরিবর্তন করে ফেলে । কিন্তু আমরা যদি এমন কিছু চাই যে এটা Array এর মাঝখানে একটি ইলিমেন্তকে ঢুকাবে তবে মেইন Array কে পরিবর্তন করবে না তাহলে toSpliced() মেথড ব্যবহার করতে হবে । 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const result = fruits.toSpliced(2, 0, "Lemon", "Kiwi");
console.log(result);                          // ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
console.log(fruits);                          // ['Banana', 'Orange', 'Apple', 'Mango']

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
এটা মুলত দুইটা Array এর ইলিমেন্ত  কে একসাথে করতে ব্যবহার করা হয় । 
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren);

output : ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']

console.log(myGirls);                  // ["Cecilie", "Lone"];
console.log(myBoys);                   // ["Emil", "Tobias", "Linus"];

আমরা চাইলে এই মেথডে স্ট্রিং ও দিতে পারি । কোন ক্ষেত্রে যদি তিনটি Array  কে একসাথে করতে হয় সেক্ষেত্রে Array গুলাকে প্যারামিটারে কমা দিয়ে একটার পর একটা দিতে হবে । 

এটা মেইন Array  কে পরিবর্তন করে না জাস্ট একটা নতুন Array তৈরি করে । 

১০। delete()
Array  থেকে কোন ইলিমেন্ত ডিলিট করতে চাইলে এই মেথড ব্যবহার করতে হয়  । যেমন - 

const fruits = [ 'banana', 'orange', 'apple', 'mangoo', 'grapes'];

delete fruits[1]                // true 
console.log(fruits);
output : [ 'banana', ' ', 'apple', 'mangoo', 'grapes'];

ডিলিট না করাই উত্তম কেননা ডিলিট করলে রিটার্ন করা Array তে hole সৃষ্টি করে । আমাদের fruits নামে যে Array আছে তার ১ নাম্বার ইনডেক্স থাকা ইলিমেন্ত কে ডিলিট করেছি কিন্তু ১ নাম্বার ইনডেক্স ভ্যালু না থাকলে ও এটা একটা hole সৃষ্টি করে । যেকারনে pop( )  অথবা shift() ব্যবহার করা ভালো । এখানে Array  এর length আগের মতই আছে । 

১১। sort()

এটা একটা Array  এর ইলিমেন্ত গুলাকে অ্যালফাবেটিকালি অ্যাসেন্ডিং অর্ডারে  বাঁ  ইংরেজি বর্ণের ক্রমানুসারে সাজায় 

// Ex-1 sort method for string 
const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.sort());
output : ['Apple', 'Banana', 'Mango', 'Orange']

console.log(fruits);
output :['Apple', 'Banana', 'Mango', 'Orange']

এই মেথডটা মেইন Array কে পরিবর্তন করে ফেলে । 

স্ট্রিং এর ক্ষেত্রে আমরা যেভাবে  কাজ করেছি কিন্তু নাম্বারের ক্ষেত্রে এভাবে করলে সমস্যা হতে পারে । কারন আমরা জানি এই মেথডটা Array  এর ইলিমেন্ত গুলাকে অ্যালফাবেটিকালি অ্যাসেন্ডিং অর্ডারে  বাঁ  ইংরেজি বর্ণের ক্রমানুসারে সাজায় । এখন আমরা যখন নাম্বার sort() করতে যাবো তখন জাভাস্ক্রিপ্ট নিজেই স্ট্রিং এ কনভার্ট করে তারপর অ্যাসেন্ডি করবে । যেমন - 

const number = [ 11, 20, 5, 7, 1, 2];

console.log(number.sort());
output : [1, 11, 2, 20, 5, 7]
এই সমস্যার সমাধান করতে আমরা  দ্বিতীয় এক্সাম্পলে দেখব । 


// Ex-2 sort method for number 
// ** ছোট থেকে বড় এভাবে সাজাতে **
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);
output :[1, 5, 10, 25, 40, 100]
এখানে নাম্বার সর্ট এর  ক্ষেত্রে আমরা প্যারামিটারে একটা ফাংশন  পাস করেছি যেটা রিটার্ন করে দুইটা সংখ্যার বিয়োগফল । এখানে প্রত্যেকবার দুইটা করে কম্বিনেশন করে চেক করে দেখবে পজিটিভ true হলে নেগিটিভ হলে  false দিবে । ফায়নালি অ্যাসেন্ডিং অর্ডারে ক্রমানুসারে সাজায় । 

// **  বড়  থেকে ছোট এভাবে সাজাতে **

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
console.log(points);
output :[100, 40, 25, 10, 5, 1]


// ** একটা Array  থেকে ইলিমেন্ত গুলার মধ্যে Max এবং Min  ভ্যালু  বের করতে - **

// ** Max value **
const points = [40, 100, 1, 5, 25, 10];
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
console.log(myArrayMax(points));

output : 100

// ** Min value ** 

const points = [40, 100, 1, 5, 25, 10];
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
console.log(myArrayMin(points));

output : 1

// EX-3 Arry of Object for sort()
// with number 
const cars = [
  {
    type :  " Volvo",
    year :  2016,
  },
  {
    type :  " Saab",
    year :  2001,
  },
  {
    type :  " BMW",
    year :  2010,
  },
]

const result = cars.sort((a, b) => {
  return a.year - b.year ;
})

console.log(result);

// with string 
const cars = [
  {
    type :  " Volvo",
    year :  2016,
  },
  {
    type :  " Saab",
    year :  2001,
  },
  {
    type :  " BMW",
    year :  2010,
  },
]

const result = cars.sort((a, b) => {
  const x = a.type.toLowerCase();
  const y = b.type.toLowerCase();

  if (x < y) {
    return -1 ;
  }
  else if(x > y){
    retunr 1 ;
  }
  else{
    return 0 
  }
})

console.log(result);

এইটা মেইন Array কে পরিবর্তন করে ফেলে । কিন্তু আমরা যদি চাই যে মেইন Array পরিবর্তন না করে সর্ট করতে তাহলে toSorted()

১২। reverse()

প্রথমে একটা Array কে sort() করে  অর্থাৎ এটা একটা Array  এর ইলিমেন্ত গুলাকে অ্যালফাবেটিকালি অ্যাসেন্ডিং অর্ডারে  বাঁ  ইংরেজি বর্ণের ক্রমানুসারে সাজায় এরপর এটাকে জাস্ট ডিসেন্ডিং করে দিবে । 
// Ex-1 reverse method for string 

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits);
output : ['Banana', 'Orange', 'Apple', 'Mango']

console.log(fruits.sort());
output : ['Apple', 'Banana', 'Mango', 'Orange']

console.log(fruits.reverse());
output : ['Orange', 'Mango', 'Banana', 'Apple']

// Ex-2 reverse method for number

const number = [1, 2, 3, 4, 5, 6];

console.log(number.reverse());                      // [6, 5, 4, 3, 2, 1]
console.log(number);                                // [6, 5, 4, 3, 2, 1]

এই মেথডটা মেইন Array কে পরিবর্তন করে ফেলে । তাই আমরা যদি এমন কিছু চাই যে আমার ইলিমেন্ত গুলাকে ডিসেন্ডিং অর্ডারে সাজাবে কিন্তু মেইন Array কে পরিবর্তন করবে না তাহলে toReversed() মেথডটা ব্যবহার করব । 

const number = [1, 2, 3, 4, 5, 6];

console.log(number.toReversed());
output :[6, 5, 4, 3, 2, 1]
console.log(number);
output :[1, 2, 3, 4, 5, 6];

১৩। forEach()
এই মেথড মুলত ব্যবহার করা হয় একটা Array এর প্রতিটা ইলিমেন্তকে ইটারেট করতে , এখন এই মেথডটা প্যারামিটার হিসেবে একটা ফাংশন নিবে এবং সেই ফাংশন আবার তিনটা প্যারামিটার নিবে । 

প্রথম প্যারামিটার নিবে value
দ্বিতীয় প্যারামিটার নিবে আগের ভ্যালু হিসেবে যাওয়া ইলিমেন্ত এর  index
তৃতীয়  প্যারামিটার নিবে  পুরো  array কেই নিবে 

const numbers = [45, 4, 9, 16, 25];

numbers.forEach((value, index, array)=> {
  console.log(value)
  console.log(index);
  console.log(array);
  console.log("-----------");
});


১৪। Map()
এই মেথড মুলত ব্যবহার করা হয় একটা Array এর প্রতিটা ইলিমেন্তকে ইটারেট করতে , এখন এই মেথডটা প্যারামিটার হিসেবে একটা ফাংশন নিবে এবং সেই ফাংশন আবার তিনটা প্যারামিটার নিবে ।  এই মেথডটা  একটা নতুন  Array রিটার্ন করবে কিন্তু আগের  Array কে পরিবর্তন করবে না । 

প্রথম প্যারামিটার নিবে value
দ্বিতীয় প্যারামিটার নিবে আগের ভ্যালু হিসেবে যাওয়া ইলিমেন্ত এর  index
তৃতীয়  প্যারামিটার নিবে  পুরো  array কেই নিবে 

const numbers = [45, 4, 9, 16, 25];

const result = numbers.map((value, index, array)=> {
return value * 2
});

console.log(result);

output : [90, 8, 18, 32, 50]



১৫। filter()

এই মেথড মুলত ব্যবহার করা হয় একটা Array এর প্রতিটা ইলিমেন্তকে ইটারেট করতে , এখন এই মেথডটা প্যারামিটার হিসেবে একটা ফাংশন নিবে এবং সেই ফাংশন আবার তিনটা প্যারামিটার নিবে ।  এই মেথডটা  একটা নতুন  Array রিটার্ন করবে কিন্তু আগের  Array কে পরিবর্তন করবে না । 

প্রথম প্যারামিটার নিবে value
দ্বিতীয় প্যারামিটার নিবে আগের ভ্যালু হিসেবে যাওয়া ইলিমেন্ত এর  index
তৃতীয়  প্যারামিটার নিবে  পুরো  array কেই নিবে 

const numbers = [45, 4, 9, 16, 25];
const result = numbers.filter((value, index, array) => {
return value > 16 
})
console.log(result);

output : [45, 25]

১৬। reduce()
এই মেথড মুলত ব্যবহার করা হয় একটা Array এর প্রতিটা ইলিমেন্তকে ইটারেট করতে , এখন এই মেথডটা প্যারামিটার হিসেবে একটা ফাংশন নিবে এবং সেই ফাংশন আবার চারটা  প্যারামিটার নিবে ।  এই মেথডটা  একটা নতুন  Array রিটার্ন করবে কিন্তু আগের  Array কে পরিবর্তন করবে না । 
প্রথম প্যারামিটার নিবে prevValue
দ্বিতীয় প্যারামিটার নিবে currentValue
তৃতীয় প্যারামিটার হিসেবে আগের ভ্যালু হিসেবে যাওয়া ইলিমেন্ত এর  currentIndex
চতুর্থ  প্যারামিটার হিসেবে পুরো  array কেই নিবে 
// Ex-1
const numbers = [45, 4, 9, 16, 25];
const result = numbers.reduce((prevValue, currentValue, currentIndex, array) => {
  console.log(prevValue);
  console.log("----------");
return prevValue + currentValue ; 
},)
console.log(result);
প্রতিবার ইটারেট করার সময় আগের স্টেপের ভ্যালুটা prevValue মনে রাখে । 
প্রথম স্টেপে prevValue এর ভ্যালু হবে শুন্য । আমরা চাইলে আগে থেকেই প্রথম স্টেপে total এর ভ্যালু কত হবে সেটা reduce() এর সেকেন্ড প্যারামিটারে বলে দিতে পারি । 

// EX-2

const numbers =[1, 2, 3, 4, 5, 6, 7];

const sum = numbers.reverse((prevValue, currentValue) => {
  return prevValue + currentValue ;
}, 0)
console.log(sum);                                 // 21 




১৭। every()
এই মেথড মুলত ব্যবহার করা হয় একটা Array এর প্রতিটা ইলিমেন্তকে ইটারেট করতে , এখন এই মেথডটা প্যারামিটার হিসেবে একটা ফাংশন নিবে এবং সেই ফাংশন আবার তিনটা প্যারামিটার নিবে ।  এই মেথডটা  একটা শর্তের উপর ভিত্তি করে সবগুলা ইলিমেন্তকে ইটারেট করবে এরপর সব কন্ডিশন true হলে রিটার্ন হিসেবে true দিবে । যদি একটি কন্ডিশনও  fasle  হয় তবে রিটার্ন হিসেবে fasle দিবে । 

প্রথম প্যারামিটার নিবে value
দ্বিতীয় প্যারামিটার নিবে আগের ভ্যালু হিসেবে যাওয়া ইলিমেন্ত এর  index
তৃতীয়  প্যারামিটার নিবে  পুরো  array কেই নিবে 

const numbers = [45, 4, 9, 16, 25];

const result = numbers.every((value, index, array)=> {
return value > 18;
});

console.log(result);                         // fasle

১৮। some()
এই মেথড মুলত ব্যবহার করা হয় একটা Array এর প্রতিটা ইলিমেন্তকে ইটারেট করতে , এখন এই মেথডটা প্যারামিটার হিসেবে একটা ফাংশন নিবে এবং সেই ফাংশন আবার তিনটা প্যারামিটার নিবে ।  এই মেথডটা  একটা শর্তের উপর ভিত্তি করে সবগুলা ইলিমেন্তকে ইটারেট করবে এরপর একটা কন্ডিশন true হলে রিটার্ন হিসেবে true দিবে । যদি সবগুলা কন্ডিশন  fasle  হয় তবে রিটার্ন হিসেবে fasle দিবে । 

প্রথম প্যারামিটার নিবে value
দ্বিতীয় প্যারামিটার নিবে আগের ভ্যালু হিসেবে যাওয়া ইলিমেন্ত এর  index
তৃতীয়  প্যারামিটার নিবে  পুরো  array কেই নিবে 

const numbers = [45, 4, 9, 16, 25];

const result = numbers.every((value, index, array)=> {
return value > 18;
});

console.log(result);                         // true

১৯। indexOf()
এই মেথডটা একটা Array এর মধ্যে যেকোনো ইলিমেন্তের ইনডেক্স নাম্বার বের করতে ব্যবহার করা হয় । যেমন - 
অ্যারের একটা ইলিমেন্ত "Orange" এর ইনডেক্স বের করব । 

const fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log( fruits.indexOf("Orange"));

output : 1 

২০। lastIndexOf()

এই মেথডটা একটা Array এর মধ্যে ম্যাচ করা  ইলিমেন্ত গুলার মধ্যে শেষের দিকে যেটা থাকবে তার ইনডেক্স নাম্বার বের করতে ব্যবহার করা হয় । যেমন - ধরেন 
অ্যারের একটা ইলিমেন্ত "Orange" এর ইনডেক্স বের করব । এখন একাদিক "Orange" থাকলেও, সবার শেষে যেই "Orange" থাকবে তার ইনডেক্স রিটার্ন করবে । 

const fruits = ["Apple", "Orange", "Apple"," lemon", "pineapple", "Orange" "Mango"];
console.log( fruits.lastIndexOf("Orange"));

output : 5

২১। includes()
এই মেথডটা দেখবে এই ইলিমেন্তটা  একটা Array এর মধ্যে আছে কিনা ?? 
যদি থাকে তাহলে রিটার্ন হিসেবে  true দিবে । 
যদি না থাকে তাহলে রিটার্ন হিসেবে false দিবে । 
const fruits = ["Apple", "Orange", "Apple"," lemon", "pineapple", "Orange" "Mango"];
console.log( fruits.includes("Orange"));

২২। find()
এই মেথড মুলত ব্যবহার করা হয় একটা Array এর প্রতিটা ইলিমেন্তকে ইটারেট করতে , এখন এই মেথডটা প্যারামিটার হিসেবে একটা ফাংশন নিবে এবং সেই ফাংশন আবার তিনটা প্যারামিটার নিবে ।  এই মেথডটা  ঐ Array এর মধ্যে খুজে দেখবে ভ্যালুটা আছে কিনা ?? যদি থাকে তাহলে ম্যাচ করা প্রথম ভ্যালুটাকে রিটার্ন করবে । 

প্রথম প্যারামিটার নিবে value
দ্বিতীয় প্যারামিটার নিবে আগের ভ্যালু হিসেবে যাওয়া ইলিমেন্ত এর  index
তৃতীয়  প্যারামিটার নিবে  পুরো  array কেই নিবে 

const numbers = [45, 4, 9, 16, 25];

const result = numbers.find((value, index, array)=> {
return value  > 18
});

console.log(result);

output : 45
// Ex-1

class Student {
  constructor(name, age){
    this.name = name ;
    this.age = age ;
  }
  test(){
    console.log("Hellow");
  }
  exampleFunction(){
    const array = [1, 2, 3];
    array.find(function () {
      this.test();
    }, this)
  }
}
find() এই মেথডের প্রথম প্যারামিটারে একটা ফাংশন নিতে হবে  এবং দ্বিতীয় প্যারামিটারে explicitly আমরা this কে দিতে পারব । এটা অবশ্য অ্যাঁরের অন্যান্য মেথডেও করা যায় । 


২৩। findIndex()
এই মেথড মুলত ব্যবহার করা হয় একটা Array এর প্রতিটা ইলিমেন্তকে ইটারেট করতে , এখন এই মেথডটা প্যারামিটার হিসেবে একটা ফাংশন নিবে এবং সেই ফাংশন আবার তিনটা প্যারামিটার নিবে ।  এই মেথডটা  ঐ Array এর মধ্যে খুজে দেখবে ভ্যালুটা আছে কিনা ?? যদি থাকে তাহলে ম্যাচ করা প্রথম ভ্যালুটার ইনডেক্স রিটার্ন করবে । 

প্রথম প্যারামিটার নিবে value
দ্বিতীয় প্যারামিটার নিবে আগের ভ্যালু হিসেবে যাওয়া ইলিমেন্ত এর  index
তৃতীয়  প্যারামিটার নিবে  পুরো  array কেই নিবে 

const numbers = [45, 4, 9, 16, 25];

const result = numbers.findIndex((value, index, array)=> {
return value  > 18
});

console.log(result);

output : 0

২৪। from()
এই মেথড মুলত ব্যবহার করা হয় একটা  ইটারেবল অবজেক্টকে Array তে কনভার্ট  করতে এখন প্যারামিটারে বলে দিতে হবে যে কাকে আমরা  Array বানাবো । Array.from এই Array টা একটা মাস্টার অবজেক্ট থেকে এসেছে । এটা নরমাল  অ্যাঁরে না । 

console.log(Array.from("ABCDEFG"));

output :['A', 'B', 'C', 'D', 'E', 'F', 'G']

২৫। copyWithin()

এই মেথড মুলত ব্যবহার করা হয় একটা Array কে ওভার রাইট করতে ।  এখন এই মেথডটা  তিনটা প্যারামিটার নিবে ।

প্রথম প্যারামিটার নিবে target
দ্বিতীয় প্যারামিটার নিবে আগের ভ্যালু হিসেবে যাওয়া ইলিমেন্ত এর  start
তৃতীয়  প্যারামিটার নিবে  end

বৈশিষ্ট্য -
* target অবশ্যই ভ্যালু হিসেবে কিছু না কিছু দিতে হবে । 
* start ভ্যালু হিসেবে কিছু না দিলে ডিফলট ভ্যালু 0 পাবে ।
* end  ভ্যালু হিসেবে কিছু না দিলে ডিফলট ভ্যালু 0 পাবে ।
* কখনই Array এর লেন্থ পরিবর্তন করে না ।

const language = ["javascript", "python","Ruby", "c++", "Rust", "C#" ];
console.log(language.copyWithin(3, 1, 2));

output : ['javascript', 'python', 'Ruby', 'python', 'Rust', 'C#']

উপরের Array তে start এবং  end এর মাঝখানে যত ইলিমেন্ত আছে সবগুলা কপি করে target এ বসিয়ে দিবে কিন্তু Array এর লেন্থ মেইন Array এর সমান থাকবে । যদি ইলিমেন্ত বেশি হয় সেক্ষেত্রে লাস্টের ইলিমেন্ত গুলা বাদ পড়বে । 
২৬। flat()
নেসটেড Array কে একটা Array তে কনভার্ট করতে এই মেথড ব্যবহার করা হয় । 
let numbers = [1, 2, 3, 4, [5, 6], 7];
console.log(numbers.flat());

output: [1, 2, 3, 4, 5, 6, 7]

২৭।  fill()

এই মেথড মুলত ব্যবহার করা হয় একটা Array কে ওভার রাইট করতে ।  এখন এই মেথডটা  তিনটা প্যারামিটার নিবে ।

প্রথম প্যারামিটার নিবে value
দ্বিতীয় প্যারামিটার নিবে আগের ভ্যালু হিসেবে যাওয়া ইলিমেন্ত এর  start
তৃতীয়  প্যারামিটার নিবে  end
const array = [1, 2, 3, 4];

console.log(array.fill(0, 2, 4));

output :[1, 2, 0, 0]

console.log(array.fill(5, 1));

output :[1, 5, 5, 5]
console.log(array.fill(6));
output :[6, 6, 6, 6]

২৮। entries()

২৯। keys()

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const keys = fruits.keys()

console.log(keys);

এটা একটা Array ইটারেটর রিটার্ন করে । 

৩০। values()

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const values = fruits.values()

console.log(values);

এটা একটা Array ইটারেটর রিটার্ন করে । 

৩১। with()
এই মেথড মুলত ব্যবহার করা হয় একটা Array এর কোন ইলিমেন্তকে  ওভার রাইট করতে ।  এখন এই মেথডটা দুইটা  প্যারামিটার নিবে ।


প্রথম প্যারামিটার নিবে index
দ্বিতীয় প্যারামিটার নিবে value

const number = [ 1, 2, 3, 4, 5, 6 ]

const result = number.with(1, 400);

console.log(result);                         // [1, 400, 3, 4, 5, 6]

console.log(number);                         // [1, 2, 3, 4, 5, 6]

এটা মেইন Array কে পরিবর্তন করে না । 

// *** spread operator ***

const numbers = [ 1, 2, 3, 4, 5, 6 ]

const newNumbers = [...numbers, 7, 8, 9, 10]

// *** imutably copy *** 

const numbers = [ 1, 2, 3, 4, 5, 6 ] 

const arrayNum = [...numbers]

// case1

const number1 = [1, 2, 3];
const number2 = [4, 5, 6];

const number = [...number1, ...number2];


// case-2 object

const myObj1 = {
  x : 1,
  y : 2,
}
const myObj2 = {
  a : 1,
  b : 2,
}

console.log({
  ...myObj1,
  ...myObj2,
});

// *** Array destructuring ***

const numbers = [1, 2, 3, 4, 5, 6];

const [a, b] = numbers ;

console.log(a, b);                       // 1, 2

আমরা চাচ্চি a = 2 এবং b =  6 করতে 

const [, a, , , b] = numbers ;

// *** Nested Array ** 

const numbers = [1, 2, [3, 100, 500], 4, 6];

const [, , [, a, b]] = numbers;

console.log(a, b);

// *** value swaping ** 

var a = 1 ;
var b = 2 ;

// old way 

var temp = a ;
a = b ;
b = temp ;

console.log(a, b);                // 2, 1 

// new way 

[b, a]  = [a, b]
console.log(a, b);                // 2, 1 

