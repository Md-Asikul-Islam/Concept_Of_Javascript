




// *** Difference between  Proto and Prototype ***


// *** Prototype inheritance ***




// *** iterator ***


// *** Genarator ***













// *** Javascript this keyword ***

মনে করুন আপনার X, Y , Z  তিনটি  বাড়ি আছে । এখন আপনি এমন একজন লোক কে সাথে নিয়ে আপনার X নামের বাড়িতে আছেন সেই লোক বাড়ির  রঙ এর কাজ করে ।  আপনি তাকে বলতেছেন যে এই বাড়ি টি রঙ করতে হবে। এখন আপনি কিন্তু বলছেন না যে, X নামে,  এই রোড, অমুক জায়গার বাড়িটি রঙ করতে হবে। অর্থাৎ আপনি এখন যেখানে আছেন তাকে বোঝানোর জন্য আপনি এই শব্দটি ব্যবহার করেছেন  । ইংরেজিতে আমরা যাকে this বলতে পারি । আর যে লোক রঙ করবে সেই কিন্তু বুঝে যাবে এই দিয়ে এখন যেখানে আছে সেই বাড়িকেই বোঝানো হয়েছে।
জাভাস্ক্রিপ্ট এ this এভাবেই কাজ করে থাকে। জাভাস্ক্রিটে বিভিন্ন  ফাংশনে this হল   তার প্যারেন্ট অবজেক্ট কে বুঝায় ।  

জাভাস্ক্রিটে this ব্যবহারের কারন হল একটা ফাংশনকে ভিন্ন ভিন্ন অবস্থানে রি-ইউস করতে সাহায্য করে 
জাভাস্ক্রিপ্ট এ this চারটি রুল অনুযায়ী চলে। এই চারটি রুল বুঝে ফেললে কোন this কোথায়, কাকে, কোন অব্জেক্ট কে পয়েন্ট করছে তা আর বুঝতে সমস্যা হবে না।

১।  implicit binding
২।  Explicit binding
৩।  new binding।
৪।  window binding

// *** implicit binding ***
// Ex-1 : চলুন একটা সিম্পল অবজেক্ট লিখি।
const player  = {
  name: 'Shakib',
  age: 35,
  printName: function () {
    console.log(this.name);
  },
};
player.printName();
উপরের কোডে যে this ব্যবহার করা হয়েছে এখানে এই this কাকে পয়েন্ট করবে । আমরা জানি জাভাস্ক্রিট অবজেক্ট এর প্রোপার্টি হিসেবে কোন ফাংশন থাকলে  সেটাকে আমরা মেথড বলি । এখানে player অবজেক্টের  প্রোপার্টি হিসেবে  printName() নামে একটা মেথড আছে । আমরা জানি  জাভাস্ক্রিট মেথডে this হল   তার প্যারেন্ট অবজেক্ট কে বুঝায়  । যেহেতু printName() ফাংশন বাঁ মেথডের প্যারেন্ট অবজেক্ট  হল player,  তাই এখানে this বলতে player অবজেক্টেই বুঝানো হয়েছে । 

আরেকভাবে this কে বুঝা যায় , আমার  যে মেথড বাঁ ফাংশনটা আছে সেটা অবশ্যই কল কল করতে হবে । সেই মেথড বাঁ ফাংশন কলে ডট  নোটেশনের (.) এর পূর্বে ইমিডিয়েটলি অবজেক্টটি হবে  this ।

এককথায় কোন ফাংশনের ভিতরে this বলতে তার প্যারেন্ট অবজেক্ট বুঝায় । 

কিন্তু এই নিয়ম অ্যারো ()=> ফাংশন এর ক্ষেত্রে প্রযোজ্য নয়।

// EX-2 : চলুন আরেকটি ওয়েতে দেখা যাকঃ-

function printNameFunction(obj) {
  obj.printName = function () {
    console.log(`${this.name}`);
  };
}

const playerOne = {
  name: 'Sakib',
  age: 35,
};

const playrTwo = {
  name: 'Tamim',
  age: 32,
};

printNameFunction(playerOne);
printNameFunction(playerTwo);

playerOne.printName(); //output - Sakib
playerTwo.printName(); //output - Tamim

এখানেও implecit binding রুল কাজ করছে। আমরা  কল করছি printName() ফাংশনকে, তার পূর্বে . দিয়ে  একটা অবজেক্ট  আছে। এই ক্ষেত্রে printName() ফাংশন এর this হবে ডট নোটেশনের (.) এর পূর্বে ইমিডিয়েটলি অবজেক্টটি ।

// Ex-3 : Nested Object এর ক্ষেত্রে - 

var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name);
    },
    fatherName: {
      name: 'Mr. Ali',
      printName: function () {
        console.log(this.name);
      },
    },
  };
};
const sakib = Person('Sakib', 35);
sakib.printName(); //output - Sakib
sakib.fatherName.printName(); //output - Mr. Ali

Person ফাংশনটা দুইটা প্যারামিটার নিয়েছে name এবং  age । এরপর একটা অবজেক্ট কে রিটার্ন করেছে , সেই অবজেক্টের চারটি প্রোপার্টি আছে 

প্রথম প্রোপার্টি একটা ভ্যারিঅ্যাবল 
দ্বিতীয়  প্রোপার্টি একটা ভ্যারিঅ্যাবল 
তৃতীয়  প্রোপার্টি একটা ফাংশন বাঁ মেথড 
চতুর্থ   প্রোপার্টি একটা অবজেক্ট 

Person('Sakib', 35);  ফাংশনটা যখন কল হয়েছে তখন দুইটা আর্গুমেন্ট  নিয়েছে এদেরকে প্যারামিটার রিসিভে করবে । এরপর ফাংশনটা যেহেতু একটা অবজেক্ট রিটার্ন করেছে তাই এটা যে নামে ভ্যারিঅ্যাবলে স্টোর করবে অবজেক্টের নামটাও তাই হবে । অর্থাৎ Person('Sakib', 35);  ফাংশনটা অবজেক্ট  রিটার্ন করাতে এই অবজেক্ট নাম হবে sakib । 

দেখুন এখানে কিন্তু একটু ব্যতিক্রম আছে প্রথমে যখন sakib.printName(); কল করা হয় তখন তার ইমিডিয়েট অব্জেক্ট হচ্ছে সাকিব অব্জেক্ট তাই const sakib = Person('Sakib', 35); এর name আউটপুট হবে।
কিন্তু যখন sakib.fatherName.printName(); একে কল করা হয় তখন কিন্তু আমাদের কল করা ফাংশন এর ইমিডিয়েট অব্জেক্ট হচ্ছে fatherName তাই এটা হবে this, তাই আউটপুট আসছে Mr. Ali। যদি আপনার fatherName অব্জেক্ট এ name প্রোপার্টি না থাকে তাহলে সিম্পল undefined আসবে। এটাই হচ্ছে implecit binding।

// **** Explicit binding **** 

Explicit binding এ তিনটি মেথড কাজ করে থাকে।

১।  call()
২।  apply()
৩।  bind()

// Ex-1 : call()

var printName = function () {
  console.log(this.name);
};
var player = {
  name: 'Sakib',
  age: 35,
};

এখানে আমরা চাচ্ছি printName() ফাংশন দিয়ে অবজেক্টে কল করব । যেহেতু printName() ফাংশনটা গ্লোবাল  scope আছে , তাই  আমরা this দিয়ে এক্সেস করতে পারব না । এখানে  this বলতে window বাঁ  global কে বুঝাবে । তাই গ্লোবাল  scope থাকা কোন ফাংশন দিয়ে একটা অবজেক্টকে এক্সেস করতে জাভাস্ক্রিট এর built in মেথড .call() দিয়ে করতে হবে ।  .call() ফাংশন প্রথম যে প্যারামিটার নিবে , সেটা একটা অবজেক্টে হবে । অর্থাৎ কোন অবজেক্টে দিয়ে আমি ফাংশনটা কল করব ।।
প্যারামিটার হিসেবে যেই অবজেক্টকে this করতে চাচ্ছি তাকে আমরা দিয়ে দিতে পারি ।

printName.call(sakib);

## এখন যদি printName ফাংশন এর প্যারামিটার দরকার হয় তখন কিভাবে দিবো, এটি করার জন্য call() এর সেকেন্ড প্যারামিটার যত ইচ্ছে তত ভ্যালু পাঠাতে পারি যাকে আমরা printName ফাংশন এ ব্যবহার করতে পারবো।

var printName = function (v1, v2, v3) {
  console.log(`${this.name} ${v1}, ${v2}, ${v3}`);
};
var player = {
  name: 'Sakib',
  age: 35,
};
printName.call(player, 'Handsome', 'All-rounder', 'Best Player');   //output - Sakib Handsome, All-rounder, Best Player

// Ex -2 apply()

এখন call() এর সেকেন্ড প্যারামিটার এ দেওয়া সকল ডাটা গুলো যদি একটা অ্যারে হতো তাহলে কি call() ব্যবহার করতে পারতাম - না। কারন call() অ্যারে নেয় না। সমধান হলো call() এর মতো explicit ভাবে this কে বলে দেয় এবং সেকেন্ড প্যারামিটার এ অ্যারে নেয় এমন মেথড হলো apply() ।

var printName = function (v1, v2, v3) {
  console.log(`${this.name} ${v1}, ${v2}, ${v3}`);
  console.log(v);
};
var player = {
  name: 'Sakib',
  age: 35,
};

const v = ['Handsome', 'All-rounder', 'Best player'];
printName.apply(player, v); //output - Sakib Handsome, All-rounder, Best Player

// EX-3  bind()

আরেকটি কন্সেপ্ট হলো bind() এটি ও call() এর মতো কাজ করে কিন্তু পার্থক্য হলো call() কে যে ফাংশন এর সাথে ব্যবহার করা হয় তাকে কল করে দেয়। আর bind() ফাংশন কে কল করে না ফাংশন বডি কে রিটার্ন করে দেয়। তাই bind() ব্যবহার করলে তাকে আগে একটি ভেরিয়েবল এ স্টোর করতে হবে। তারপর তাকে কল করে দিতে হবে। এই হলো call() and bind() এর মধ্যে 

var printName = function (v1, v2, v3) {
  console.log(`${this.name} ${v1}, ${v2}, ${v3}`);
  console.log(v);
};
var player = {
  name: 'Sakib',
  age: 35,
};
const newFunc = printName.bind(player, 'Handsome', 'All-rounder', 'Best player');
newFunc(); //output -Sakib Handsome, All-rounder, Best Player


// **** new binding **** 


যারা আমার লেখা প্রোটোটাইপ এর আর্টিকেলটি পরেছেন তাদের এর new binding বুঝতে সুবিধা হবে। সেখানে দেখানো হয়েছিলো কিভাবে ফাংশন কন্সট্রাক্টর মাধ্যমে অবজেক্ট তৈরি করা যায়। চলুন কন্সট্রাক্টর অবজেক্ট বানাই-

function Person(name, age) {
  this.name = name;
  this.age = age;
  consolo.log(`${this.name} is ${this.age} years old`);
}

const sakib = new Person('Sakib', 35);
তখন বলেছিলাম এভাবে new দিয়ে অবজেক্ট বানানো হলে ২টি লাইন লিখতে হয় না বোঝানোর জন্য নিচে লেখা হলোঃ
function Person(name, age) {
  // let this = Object.create(null)
  this.name = name;
  this.age = age;
  consolo.log(`${this.name} is ${this.age} years old`);
  // return this
}

const sakib = new Person('Sakib', 35);
অর্থাৎ কন্সট্রাক্টর ফাংশন এ this নামেই একটি অব্জেক্ট বানাই পরে এই অব্জেক্টেই রিটার্ন করে দেয়। এবং new এই this কেই পয়েন্ট করে।

// ***  window binding  ***

চলুন প্রথমে একটি ইউসকেস বানাই।
var printName = function () {
  console.log(this.name); //output - undefined
};
var sakib = {
  name: 'Sakib',
  age: 35,
};

printName();
যদি আমরা এভাবে কল করি তাহলে কি আশার কথা। undefined কিন্তু আনডিফাইন্ড কেনো। এখানে this.name বলতে তো কিছুই নেই তাহলে ত এরর আশার কথা তাহলে এই this সাম্থিকং ইজ হেপেন তাই সে name নামে কিছু পাচ্ছে না তাই এরর না দিয়ে undefined দিচ্ছে। আচ্ছা তাহলে this কে console.log(this) করে দেখা যাক।
আমার এখানে Window অব্জেক্টকে পেয়ে যাবো। তাহলে কি বোঝা গেলো যদি উপরের চারটির মধ্যে কোনো প্রথম তিনটি কোনো রুলই গ্রহন হবে জাভাস্ক্রিট নিজে নিজে this Window কে পয়েন্ট করবে। এখন এটাকে থামাতে হলে অন্তত্য পক্ষে এরর দিয়ে সাবধান করার জন্য আমরা স্ক্রিপ এর সবার উপরে 'use strict' ব্যবহার করতে পারি। এই যে এখানে this window কে পয়েন্ট করছে এটাই হচ্ছে window binding। এটাকে সিউর হবার জন্য আমার এভাবে লিখে দেখতে পারি কাকে শো করে।
var printName = function () {
  console.log(this);
  console.log(this.name); //output - undefined
};
var sakib = {
  name: 'Sakib',
  age: 35,
};

printName();
দেখবেন কন্সলে Window কেই পাচ্ছি। এছাড়া this === window করলে true পাবো। এই ছিলো this নিয়ে সকল কন্সেপচুয়াল বেপারটা, আশা করি this নিয়ে আর কোনো সমস্যা হবে না। 💘💘