জাভাস্ক্রিট এ সব ধরেনের ডাটা টাইপে অবজেক্ট রিপ্রেজেনটেশন থাকায় বলা হয় অবজেক্টকেই জাভাস্ক্রিট এর কিং । 

আমরা জানি জাভাস্ক্রিট সব ধরেনের ডাটা টাইপকে অবজেক্ট আকারে চিন্তা করা যায় । 


**  যখন new keyword দিয়ে  Booleans  লিখা হয় তখন এটাকে একটা অবজেক্ট আকারে চিন্তা করা যায়
**  যখন new keyword দিয়ে  Number লিখা হয় তখন এটাকে  একটা অবজেক্ট আকারে চিন্তা করা যায়
**  যখন new keyword দিয়ে  String লিখা হয় তখন এটাকে  একটা অবজেক্ট আকারে চিন্তা করা যায়
** Dates  সবসময় এটা একটা অবজেক্ট
** Maths সবসময় এটা একটা অবজেক্ট
** Regular expressions সবসময় এটা একটা অবজেক্ট
** Arrays সবসময় এটা একটা অবজেক্ট 
** Functions সবসময় এটা একটা অবজেক্ট
** Objects সবসময় এটা একটা অবজেক্ট 

প্রিমিটিভ ভ্যালু গুলা বাদে জাভাস্ক্রিট এ যা কিছুই আছে সব অবজেক্ট । কারন হচ্ছে প্রিমিটিভ ডাটা গুলা ইমিউটেবল যেটা পরিবর্তন করা যায় না ।  

১। প্রিমিটিভ - string, number, null, undefined, boolean, symbol
প্রিমিটিভগুলো ইমিউট্যাবল, তার মানে হচ্ছে এগুলো আমরা তৈরি করার পরে আর চেইঞ্জ করতে পারি না । যখন আমরা এই গুলা লিটারেল সিনটেসক্স লিখি তখন এদের প্রোপার্টি এবং মেথড থাকে না । 

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

// *** create a object ***

// ১। Litaral Syntax
## অবজেক্ট এর ভিতরে name- value পেয়ার আকারে থাকে যেখানে name কে প্রোপার্ট বা  কি বলে 
## অবজেক্ট এর ভিতরে প্রোপার্টি হিসেবে কোন ফাংশন থাকলে তাকে মেথড বলে । 

const person = {
  name : " sakib ", 
  age  : 35,
  type : " Al-Rounder" 
}

// ২।  new Object() 

const person = new Object()
person.name = " sakib"
person.age = 35
person.type = " Al-Rounder " 

// ৩। Emty Object

const person = {}
person.name = " sakib"
person.age = 35
person.type = " Al-Rounder " 

// *** Difference between  Proto and Prototype ***

জাভাস্ক্রিট এ আমরা অবজেক্টকে তিনভাবে লিখতে পারি । এখন আমরা একটা Emty Object নিয়ে তার মধ্যে বিভিন্ন প্রোপার্টি এবং মেথড অ্যাড করব । 

let person = {};
person.name = " jasim" ;
person.age = 33 ;
person.eat = function () {
console.log('person is eating ');
}
person.sleep = function () {
console.log('person is sleeping ');
}
এখন রিয়েল লাইফে কোন লারজার এপ্লিকেশনে আমরা অসংখ্য অবজেক্ট তৈরি করব । সেক্ষেত্রে আমরা এভাবে না করে একটা অবজেক্ট কাঠামো বানাতে পারি । যেই কাঠামো ব্যবহার করে বাঁ কপি করে আমরা অবজেক্ট গুলা তৈরি করব  যেমন - 

function Person(name, age) {
let person = {};
person.name = name ;
person.age = age ;
person.eat = function () {
  console.log('person is eating ');
}
person.sleep = function () {
  console.log('person is sleeping ');
}
return person ;
}

let sakib = Person("sakib", 35);
let tamim = Person("tamim", 35);

কিন্তু এখানেও একটা সমস্যা আছে রিয়েল লাইফ কোন লারজার এপ্লিকেশনে আমরা অসংখ্য অবজেক্ট তৈরি করব । এখানে এই অবজেক্ট গুলাতে কোন মেথড অ্যাড করতে গেলে সেটা ঐ কাঠামোতে অ্যাড করতে হবে সেটা আবার সব অবজেক্টকে কপি হয়ে আসবে । এখন একই জিনিস বার বার কপি হওয়াতে মেমোরিতে জায়গা বেশি লাগবে । এই সমস্যা সমাধান করতে আমরা - মেথড গুলা যে গুলা শেয়ার করা যায় সেগুলা একটা কমন অবজেক্টকে নিয়ে যেতে হবে । 

let personMethod = {
  eat() {
    console.log('person is eating ');
  },
  sleep() {
    console.log('person is sleeping ');
  },
  play() {
    console.log('person is playing ');
  }
}
function Person(name, age) {
  let person = {};
  person.name = name ;
  person.age = age ;
  person.eat = personMethod.eat ;
  person.sleep = personMethod.sleep ;
  person.play = personMethod.play ;
  return person ;
  }
  
let sakib = Person("sakib", 35);
let tamim = Person("tamim", 35);

এখানেও একটা  সমস্যা  আছে আমরা নতুন কোন মেথড অ্যাড করতে চাইলে সেটা personMethod লিখতে হবে এবং সেটাকে Person কাঠামোতেও রেফার করতে হবে । এটাও অবজেক্টের কাঠামোর সাইজ বড় করছে যেটা ডেভেলপার জন্য প্যারাদায়ক । এই  সমাধান করতে আমরা অবজেক্ট এর নিজস্ব বিলট ইন সিস্টেম  Object.create  ব্যবহার করব যেমন -

const captain = {
  name : "Mashrafi",
  age  : 37,
  country : " Bangladesh"
}

const player = Object.create(captain) ;
এভাবে আমরা একটা অব্জেক্টকে ইন্সটেন্স ধরে আরেকটা অবজেক্ট বানাতে পারি । এখানে captain হচ্ছে প্যারেন্ট অবজেক্ট আর player হচ্ছে চাইল্ড অবজেক্ট

let personMethod = {
  eat() {
    console.log('person is eating ');
  },
  sleep() {
    console.log('person is sleeping ');
  },
  play() {
    console.log('person is playing ');
  }
}
function Person(name, age) {
  let person = Object.create(personMethod);
  person.name = name ;
  person.age = age ;  
  return person ;
  }
  
  let sakib = Person("sakib", 35);
  let tamim = Person("tamim", 35);

মেথড গুলাকে একটা জায়গায় রাখতে কোন অবজেক্ট এর ইন্সটেন্স ব্যবহার না করে মাস্টার অবজেক্টের বিলট ইন জিনিস  prototype এর মধ্যে রাখতে পারি - 


function Person(name, age) {
  let person = Object.create(Person.prototype);
  person.name = name ;
  person.age = age ;  
  return person ;
  }

Person.prototype = { 
    eat() {
      console.log('person is eating ');
    },
    sleep() {
      console.log('person is sleeping ');
    },
    play() {
      console.log('person is playing ');
    }
}  
  
  
  let sakib =  Person("sakib", 35);
  let tamim =  Person("tamim", 35);

 ***  prototype হচ্ছে একটা প্রোপার্টি অফ ফাংশন যেটা একটা অবজেক্টকে পয়েন্ট করে রাখে । 

এখন পর্যন্ত আমরা তিনটি জিনিস শিখেছি -

১। কন্সট্রাক্টর ফাংশন তৈরি করা - Person ফাংশন এখানে কন্সট্রাক্টর ফাংশন

২। কন্সট্রাক্টর ফাংশনে কিভাবে মেথড অ্যাড করতে হয় । 

৩। Object.create()  দিয়ে কিভাবে প্যারেন্ট এর সব প্রোপার্টি চাইল্ডে নিয়ে আসতে পারি । 


  function Person(name, age) {
    // let this = Object.create(PersonWithNew.prototype);
    this.name = name ;
    this.age = age ;  
    // return this ;
    }
  
  Person.prototype = { 
      eat() {
        console.log('person is eating ');
      },
      sleep() {
        console.log('person is sleeping ');
      },
      play() {
        console.log('person is playing ');
      }
  } 


  let sakib = new Person("sakib", 35);
  let tamim = new Person("tamim", 35);

  যখন new কি-ওয়ার্ড দিয়ে ফাংশন কল করব তখন উপরে কমেন্ট করা লাইন গুলা লিখতে হবে না । জাভাস্ক্রিট নিজেই বুঝে নিবে । 

  // create a class with Object 

  class Person { 
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
    eat() {
      console.log('person is eating ');
    }
    sleep() {
      console.log('person is sleeping ');
    }
    play() {
      console.log('person is playing ');
    }
  }

  let sakib = new Person("sakib", 35);
  let tamim = new Person("tamim", 35);


// *** Prototype inheritance ***

function Person(name, age) {
  this.name = name ;
  this.age = age ;

  this.eat = function () {
console.log(`${this.name} is eating`)
  }
}

const sakib = new Person("sakib", 35)
console.log(sakib);
const tamim = new Person("tamim", 35)
console.log(tamim);

কিন্তু এখানেও একটা সমস্যা আছে রিয়েল লাইফ কোন লারজার এপ্লিকেশনে আমরা অসংখ্য অবজেক্ট তৈরি করব । এখানে এই অবজেক্ট এ কোন মেথড অ্যাড করতে গেলে সেটা ঐ কাঠামোতে অ্যাড করতে হবে সেটা আবার সব অবজেক্টকে কপি হয়ে আসবে । এখন একই জিনিস বার বার কপি হওয়াতে মেমোরিতে জায়গা বেশি লাগবে । এই সমস্যা সমাধান করতে আমরা - মেথড গুলা যে গুলা শেয়ার করা যায় সেগুলা একটা কমন অবজেক্টকে নিয়ে যেতে হবে । 

function Person(name, age) {
  this.name = name ;
  this.age = age ;

}

Person.prototype = {
eat : function () {
console.log(`${this.name} is eating`)
}
}
const sakib = new Person("sakib", 35)
console.log(sakib);
const tamim = new Person("tamim", 35)
console.log(tamim);








// *** iterator ***


// *** Genarator ***


// *** Optional chaining *** 

const language = {
  name : " javascript",
  creator : " Brendan Eich",
  library : {
    react : {
      company : "Facebook ",
    }
  }
}

আমরা যদি এই নেসটেড অবজেক্ট এর  company : "Facebook " প্রোপার্টি এক্সেস করতে চাই । তাহলে এভাবে করতে হবে । 


let company = language.library.react.company;
console.log(company);

কিন্তু এইটা সঠিক পদ্দতি না এখন যদি এই অবজেক্ট টা কোন একটা  এপি আই থেকে আসত তখন আমাকে চেক করতে হত company প্রোপার্ট আছে কিনা ?? 

let company = language && language .library && language.library.react && language.library.react.company;
console.log(company);

এভাবে ধরে  ধরে চেক করা অনেক প্যারা দায়ক । এই সমস্যা সমাধান এভাবে করতে হবে । প্রত্যেকবার একটা কুইয়শেন মার্ক দিলে জাভাস্ক্রিট নিজেই চেকিং এর কাজ করে নিবে । এতে ডেভেলপার লাইফ অনেক ইজি হবে । 

let company = language?.library?.react?.company;
console.log(company);



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

// *** solve with arrow funciton *** 
// without arrow funtion create a confusion this 
var Javascript = {
  name : "javascript ", 
  libraies: ["React", "Angular", " Vue"],
  printLibraies: function () {
    this.libraies.forEach(function (a) {
      console.log(`${this.name} loves ${a}`);
    })
  }
}

Javascript.printLibraies()
output: 
undefined loves React
undefined loves Angular
undefined loves Vue

এখানে forEach() ভিতরে যেই ফাংশনটা আছে এটা একটা কলব্যাক ফাংশন forEach() নিজেই এই ফাংশনটা কল করবে যেটা জাভাস্ক্রিট এর built in একটা মেথড ।  এখানে this বলতে  global বাঁ  window অবজেক্টকেই পাচ্ছে । 

// with arrow funtion solve the problem 

var Javascript = {
  name : "javascript ", 
  libraies: ["React", "Angular", " Vue"],
  printLibraies: function () {
    this.libraies.forEach((a) => {
      console.log(`${this.name} loves ${a}`);
    })
  }
}

Javascript.printLibraies()

output: 
Javascript loves React
Javascript loves Angular
Javascript loves Vue

অ্যারো ফাংশনে this এর কোন ব্যবহার নাই । এটা জাস্ট তার বাইরে যে ভ্যালু ছিল সেটাই বসিয়ে দেয় । 


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

// *** object technique *** 
জাভাস্ক্রিটে অবজেক্টের কি গুলো নিয়ে কাজ করতে চাইলে , ধরেন আমরা এমন একটা অব্জেক্টেই নিয়ে কাজ করব যেটা নেসটেড অবজেক্ট । এই অবজেক্ট এর সব গুলা কি বাঁ ভ্যালু গুলা অপারেশন করতে চাইলে - আগে এদেরকে অ্যারেতে কনভার্ট করতে হবে । 


const myObj = {
  name : " javascript ", 
  founder: " Brendon Eich",
  Estd : "1995", 
  Rank : 1 ,
};


let keys = Object.keys(myObj);
console.log(keys);

output :['name', 'founder', 'Estd', 'Rank']

let values = Object.values(myObj)

console.log(values);

output : [' javascript ', ' Brendon Eich', '1995', 1]

let entri = Object.entries(myObj)

console.log(entri);

output :

[
  [ "name", "javascript" ],
  [ "founder", " Bredon Eich" ],
  [ " Estd", " 1995" ],
  [ " Rank ",  1 ],
]


*** object shorthand ** 


// *** object Destructuring *** 
// EX-1 simple object
const user = {
  id : 339,
  name: "sakib",
  age : 34, 
}
আমরা চাচ্ছি name প্রোপার্টির ভ্যালুটা বের করে নিয়ে এসে একটা ভ্যারিঅ্যাবলে অ্যাসাইন করব । 
// without Destructuring

const name = user["name"];
console.log(name);                  // "sakib"
কিন্তু এইটা যদি একটা নেসটেড অবজেক্ট হইত তাহলে খবর হয়ে যাইতো । এই সমস্যা দূর করতে Destructuring ব্যবহার  করব । 

// with Destructuring

const {name} = user;
console.log(name);                  // "sakib"
const {name : title} = user ;

console.log(title);                  // "sakib"

// EX-1 Nested object

const user = {
  id : 339,
  name: "sakib",
  age : 34, 
  education: {
    degree : " Masters"
  }
}

const {education : {degree}} = user ;

console.log(degree);                // " Masters"