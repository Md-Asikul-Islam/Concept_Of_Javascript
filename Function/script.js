// ***  জাভাস্ক্রিপ্ট ফাংশন   ***

// ফাংশন হল পুনঃ ব্যবহার যোগ্য একটি কোড গ্রুপ যা পরিবর্তীতে প্রোগ্রামের প্রয়োজনে যে কোন জায়গায় invoke বাঁ  call করে ব্যবহার করা যায় । 

// ১ । Regular function -

// function adder(a, b){
//     return a + b ;
// }

// console.log(adder(5, 6))             // output              11

//  ফাংশন বডিতে  কোন কিছু রিটার্ন না করলে বাই ডিফলট এটা undefined থাকে ।  এটা জানা খুব  গুরুত্বপূর্ণ কেননা ফাংশন বডি  এক্সপেক্ট  করে আপনি রিটার্ন হিসেবে কিছু একটা দিবেন । 


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

// Higher Order function - 

 // একটা ফাংশন যখন এক বাঁ একাধিক ফাংশনকে আর্গুমেন্ট হিসেবে  নেয় ।   
//                             অথবা  
//                রিটার্ন হিসেবে আরেকটা  ফাংশনকে  নেয়  । 
  
//                             অথবা   

// দুইটাই করে তখন সেই  ফাংশনটা কেই  Higher Order function বলে । যেমন - 

// আর আর্গুমেন্টে  পাস হওয়া সেই  ফাংশনকে  callback function বলে । 

// // Callback function কে Higher Order function এর প্যারামিটার  হিসেবে পাস করা হয়েছে । 
// function callbackFunction(){
//   console.log('I am  a callback function');
// }

// higher order function -
// function higherOrderFunction(func){
//   console.log('I am higher order function')
//   func()
// }

// higherOrderFunction(callbackFunction);

// এটা মূলত ক্লিন এবং রিডঅ্যাঁবল কোড লেখার জন্য বেশি ব্যবহার করা হয় । 

// বিভিন্ন built in অ্যারে মেথড Map(), slice(), filter(), reduce() এই গুলা Higher Order function । 

// এখন আমরা দেখব Higher Order function কেন ব্যবহার করা হয় । 

// Ex - 1 

// const numbers = [1, 2, 3, 4]; 

// মনে করি  আমার কাছে একটা numbers  অ্যারে আছে ইলিমেন্তর ভ্যালু ডাবল হবে এরকম একটা নতুন অ্যাঁরে তৈরি করতে হবে । 


//  without Higher Order function  --

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


// আমার কাছে একটা অবজেক্ট আছে, এবং প্রতিটি খেলোয়ারের গড় বের করব ।

// without Higher Order function -


//  const playerAvg = [];
 
//  for(let i = 0; i < players.length; i++){
//   if(players[i].avg >= 37){
//    playerAvg.push(players[i])
//   }
// }

// console.log(playerAvg);


// with Higher Order function

// const playerAvg = players.filter((player) => {
//    player.avg >= 37 
// })

// console.log(playerAvg)


// ৮। callback function - 


//  callback function কেন ব্যবহার করব এটা বুঝতে হলে সিনক্রোনাস এবং অ্যাসিনক্রোনাস বিহেবিয়ার ভালো করে বুঝতে হবে । 

//  সিনক্রোনাস = জাভাস্ক্রিপ্ট বাই ডিফলট সিনক্রোনাস সিংগেল থ্রেড  প্রোগ্রামিং ল্যাঙ্গুয়েজ । এটা উপর থেকে নিচের দিকে লাইন বাই লাইন কোড রিড কর । জাভাস্ক্রিপ্ট ও বাই ডিফল্ট এভাবে কাজ করে থাকে। সে একসাথে অনেক গুলা কাজ  করতে পারে না  তাই তার এই ব্যবহারকে সিঙ্ক্রোনাস ব্লকিং ব্যবহারও বলে । যেমন - 

// const processOrder = (customer) => {
//   console.log(`Process order for customer 1`);
//   for (let i = 0; i < 1000000000; i++) {
//     const arr = [];
//     const random = Math.random() * i;
//     arr.push(random);
//   }
//   console.log(`order processed for customer 1`);                            // output   
// };
// console.log(`take order for customer 1`); 
// processOrder();
// console.log(`completed order for customer 1`);


//  processOrder() এ একটি লুপ দেওয়া হয়েছে অনেক বড়। এই কাজ টা করতে একটু সময় নিবে এখন যখন কোড গুলো লাইন বাই লাইন যাবে প্রথমে ফাংশন তো যেভাবে আছে থাকবে কারন তাকে কল করা না হলে ত কিছু করার নাই তার পর দেখুন ১০ নাম্বার লাইনে প্রথম কন্সোল করবে তার পর ফাংশন টা কল করা হলো এখন সে ফাংশন বডিতে যাবে এখানে একটা বড় নাম্বারকে গুন করে অ্যারে পুশ করার কাজটা অনেক সময় সাপেক্ষ এখানে সে ব্লক হয়ে থাকবে যতক্ষন না এটা শেষ হবে ততক্ষন যে লাস্ট কন্সোল এ যাবে না, এমন কি এই সময়টাই ইউজার কোথায় ও কোনো ক্লিক কিছুই করতে পারবে না একপ্রকার ব্রাউজার হ্যাং করে যাবে। 



// অ্যাসিনক্রোনাস = জাভাস্ক্রিপ্ট যেহেতু সিঙ্গেল থ্রেড প্রোগ্রামিং ল্যাঙ্গুয়েজ তাই সে যখন দেখবে কোন কোড এক্সকিশন করতে সময় লাগবে,  বড় লুপ, আজাক্স কল আছে, কোন সারভার থেকে ডাটা লোড করতে হবে কিনা ??   । এরকম হলে জাভাস্ক্রিপ্ট এ  কাজটি নিজে করে না ব্রাউজারে রান টাইমে ওয়েব অ্যাপিআই নামে একটা বস্তু থাকে তার কাছে দিয়ে দেয়। যখনই দেখে এখানে কিছু সময় লাগতেছে তখনই এটা ওয়েব অ্যাপিআই তে চলে যায় সেখানে কাজ শেষ করে প্রসেস করে তার পর এটা কে পাঠায় দে কলব্যাক কিউতে । এবার আসি কলব্যাক কিউতে যখন আমাদের সকল কোড রান করা শেষ কল স্টেক ফাঁকা হয়ে যায় তখন এ কলব্যাক কিউ থেকে ইভেন্ট লুপের চালু হবার মাধ্যমে সবার প্রথমে যেটা আছে সেটাকে কল স্টেক এ পাঠায় কল স্টেক সেখান থেকে তারপর অই কোডটি রান হয়।  এটাই জাভাস্ক্রিপ্ট এর অ্যাসিনক্রোনাস বিহেবিয়ার  আর   আমাদেরকে অ্যাসিঙ্ক্রোনাস ভাবে কোড লেখতে চেষ্টা করতে হবে ঠিক তেমনি তাকে প্রপার ভাবে হ্যান্ডেল করতে হবে। এখন এই অ্যাসিঙ্ক্রোনাস কোড গুলোকে তিন ভাবে মূলত দুই ভাবে হ্যান্ডেল করা যায়,

  //  ## কলব্যাক ফাংশন ( callback )
  //  ## প্রমিস ( promise .then block )
  


//  একটা ফাংশন কে যখন আমরা  অন্য আরেকটা  ফাংশনের আর্গুমেন্ট হিসেবে পাস করি  তখন সেই আর্গুমেন্টে যাওয়া ফাংশন  টা কেই  callback function বলে । 

// function print(callback) {  
//   callback();
// }

// print(() => { console.log(' This is callback function ') }); 

// আমরা জানি ফাংশনের প্যারামিটারে  অন্য একটা ফাংশনকে পাস করা যায় এবং বাইরের ফাংশনে ভিতরের ফাংশনকে বাঁ  প্যারামিটারে পাস করা ফাংশনকে  কল করা যায় । 

// এখানে print( ) এ পাস করা অ্যারো ফাংশনকে প্রথম callback রিসিভ করবে এরপর বাইরের ফাংশনে কল করে দিবে । 

// console.log('starting point ');

// const  changeAction = (chanelname) => {
//   setTimeout(() => {
//     return (`subscribe to ${chanelname}`);
//   }, 1000);
// }

// console.log(changeAction(" Roadside Coder ")); 

// console.log('Ending point ')

// console.dir(changeAction);


//  // Output :
//  starting point
//  undefined
//  Ending point 


// এখানে  changeAction() ফাংশনটা এর ভিতরে  যেহেতু  setTimeout() আছে তাই এটা  অ্যাসিঙ্কক্রনাস
// কাজ, ফাংশন কল হওয়ার সাথে সাথে এটিকে কল স্ট্যাক এ পাঠিয়ে দেয়া হয়েছে ।  setTimeout এর ভিতর
// থেকে value return করলেও  ফাংশনটা কোন কিছু রিটার্ন করছে না , আমরা  জানি একটা ফাংশন কোন
// কিছু রিটার্ন না করেলে বাই ডিফলট undefined রিটার্ন করে   । কিন্তু এর আগেই function call করাতে
// যেহেতু console এ undefined print করে ফেলেছে তাই আর setTimeout এর text console এ দেখাতে
// পারছে না । 

// **  Solve the problem with callback - ***


// console.log('starting point');

// const changeAction = (chanelname, callback) => {
//   setTimeout(() => {
//     callback(`subscribe to ${chanelname}`);
//   }, 1000);
// }

//  changeAction("Learn with Sumit", (message) => {
//   console.log(message);
// });

// console.log('Ending point');


// Output 
//  starting point
//  subscribe to learn with sumit youtube chanel 
//  Ending point 



// একটা ফাংশন কে যখন আমরা  অন্য আরেকটা  ফাংশনের আর্গুমেন্ট হিসেবে পাস করি  তখন সেই 
// আর্গুমেন্টে যাওয়া ফাংশন  টা কেই  callback function বলে এবং  বাইরের ফাংশনে ভিতরের ফাংশনকে
//  বাঁ  প্যারামিটারে পাস করা ফাংশনকে  কল করতে হয়  । এখন কল করার সময় আমরা আর্গুমেন্ট হিসেবে 
// পাস করেছি callback(`subscribe to ${chanelname}`) এইটাকে অ্যাঁরো ফাংশনের প্যারামিটারে এক্সেস 
// করতে পারবে । এখানে প্যারামিটার হল message 


//  ## একটা callback function এর দুটি বৈশিষ্ট্য থাকবে - 

//  1- একটা ফাংশনকে  অন্য আরেকটা  ফাংশনের আর্গুমেন্ট হিসেবে পাস করতে হবে । 
//  2- বাইরের ফাংশনে ভিতরের ফাংশনকে কল করতে হয় । 


// এখানে changeAction(arg-1, arg-2) দ্বিতীয় আর্গুমেন্টে একটা অ্যাঁরো ফাংশন পাস করা হয়েছে , সেই 
// ফাংশনটা callback নামে  রিসিভ করবে এবং বাইরের ফাংশন  changeAction( ) বডিতে যে নামে অ্যাঁরো 
// ফাংশন রিসিভ করবে সেই নামে  কল করে দিবে । 

// *** callback chain  *** 


// console.log(" starting point ");

// const  importantAction = (chanelName, callback) => {
//   setTimeout(() => {
//     callback(` Subscribe to ${chanelName} Youtube chanel .`);
//   }, 500);
// }

// const  likeTheVidio = (vidio, callback) => {
//   setTimeout(() => {
//     callback(` please like and comment   ${vidio} playlist`);
//   }, 1000);
// }

// const  shareTheVidio = (vidio, callback) => {
//   setTimeout(() => {
//     callback(` if you are good at ${vidio} Then you will learn Advance  Topic `);
//   }, 800);
// }

// const message = importantAction(" Learn with sumit", (message) => {
//   console.log(message);
//   likeTheVidio(" Think in a javascript", (message) => {
//     console.log(message);
//     shareTheVidio("javascript" , (message) => {
//       console.log(message)
//     })
//   })
// })

// console.log("Ending point");


// *** callback hell *** 

// console.log(" starting point ");

// const message = importantAction(" Learn with sumit", (message) => {
//   console.log(message);
//   likeTheVidio(" Think in a javascript", (message) => {
//     console.log(message);
//     shareTheVidio("javascript" , (message) => {
//       console.log(message)
//       shareTheVidio("javascript" , (message) => {
//         console.log(message)
//         shareTheVidio("javascript" , (message) => {
//           console.log(message)
//           shareTheVidio("javascript" , (message) => {
//             console.log(message)
//             shareTheVidio("javascript" , (message) => {
//               console.log(message)
//             })
//           })
//         })
//       })
//     })
//   })
// })

// console.log("Ending point");

// যেটাকে বলা হতো কলব্যাক হেল তাই শুরুর দিকে জাভাস্ক্রিপ্ট কে আগলি ল্যাঙ্গুয়েজ বলা হতো। এখন 
// জাভাস্ক্রিপ্ট অনেক ডেভেলপ   হয়েছে অনেককিছু একটি সিন্টেকটিক্স ওয়েতে এসেছে। আর এই হেল থেকে 
// বাঁচার জন্য এসেছে প্রমিস (Promise) । চলুন দেখে আসি এ প্রমিস কিভাবে কাজ করে আর কিভাবে 
// ডেভোলপার লাইফ ইজি করেছে।


// *** creating promise *** 

// const promise = new Promise((resolve, reject) => {
//   // "Producing Code" (May take some time)

//   resolve(); // when successful
//   reject(); // when error
// });


// *** promise calling  ***

// console.log("starting point")

// const promise  = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = true ;
//     if(result) resolve(" subscribed to learn with sumit ")
//     else reject(new Error("why aren't subscribed to learn with sumit "))
//   }, 2000);
// })
// console.log("Ennding point");
// promise
// .then((res) => {console.log(res)})
// .catch((err) => {console.log(err)})



// *** callback with promise   ***

// const  importantAction = (chanelName) => {
//  return new Promise((resolve, reject)=> {
//    setTimeout(() => {
//      resolve(` Subscribe to ${chanelName} Youtube chanel .`)
//    }, 500)
//  })

// }

// const  likeTheVidio = (vidio) => {
//  return new Promise((resolve, reject)=> {
//    setTimeout(() => {
//      resolve( ` please like and comment  ${vidio} box .` )
//    }, 300)
//  })
// }

// const  shareTheVidio = (vidio) => {
//  return new Promise((resolve, reject)=> {
//    setTimeout(() => {
//      resolve(` if you are good at ${vidio} then you will learn advance topics.`)
//    },800)
//  })
// }

// importantAction(" Learn with Sumit")
//  .then((res)=> {
//   console.log(res)
//   likeTheVidio("description")
//   .then((res)=> {
//     console.log(res);
//     shareTheVidio("javascript")
//     .then((res)=> {
//       console.log(res)
//     })
//   })
// })
//  .catch((err) => {console.log(err)})


// *** promise chaining *** 
// importantAction("Learn with sumit")
// .then((res) => {
//   console.log(res)
//   return likeTheVidio("description")
// })
// .then((res)=> {
//   console.log(res)
//   return shareTheVidio("javascript")
// })
// .then((res) => {
//   console.log(res)
// })
//  .catch((err) => {console.log(err)})


// ********* promise combinators ******** 
// *** promise.all() ***

// Promise.all([
//   importantAction("Learn with sumit"),
//   likeTheVidio("read more  below the description"),
//   shareTheVidio("javascript")
// ]).then((res)=>{
//   console.log(res)
// }).catch((err) => {
//   console.error("Error : Promise Failed ", err)
// })

// Promise.all()  আমরা তখনই ব্যবহার করব যখন সব গুলা Promise fullfiled  বাঁ resolve() হবে । কিন্তু একটা Promise Rejected হলে সব গুলার ভ্যালু Error আসবে । Promise.all() সবসময় আর্গুমেন্ট হিসেবে অ্যারে অফ কালেকশন গ্রহন করে যা সমান্তরাল ভাবে এক্সিকিউট করে । 


// *** promise.race() ***
// Promise.race([
//   importantAction("Learn with sumit"),
//   likeTheVidio("description"),
//   shareTheVidio("javascript")
// ]).then((res)=>{
//   console.log(res)
// }).catch((err) => {
//   console.error("Error : Promise Failed ", err)
// })

// Promise.race() যখন কোন  Promise fullfiled অথবা  Rejected হবে   এটা শুধুমাত্র প্রথম Promise
//  টা রিটার্ন করবে । যেই Promise টা আগে কল হবে সেটাই রিটার্ন করবে ।


// *** promise.allSettled() ***
// Promise.allSettled([
//   importantAction("Learn with sumit"),
//   likeTheVidio("description"),
//   shareTheVidio("javascript")
// ]).then((res)=>{
//   console.log(res)
// }).catch((err) => {
//   console.log(err)
// })
// Promise.allSettled() যখন কোন  Promise fullfiled অথবা  Rejected হবে তখন এটা একটা অ্যারে 
// রিটার্ন করে 

// *** promise.any () ***
// Promise.any([
//   importantAction("Learn with sumit"),
//   likeTheVidio("description"),
//   shareTheVidio("javascript")
// ]).then((res)=>{
//   console.log(res)
// }).catch((err) => {
//   console.log(err)
// })

// Promise.any() যখন কোন  Promise fullfiled অথবা  Rejected হবে   এটা শুধুমাত্র প্রথম Promise
//  টা রিটার্ন করবে । যেই Promise টা আগে কল হবে সেটাই রিটার্ন করবে ।

// *** Async/Await  ***
// const result = async () => {
//   const message1 = await importantAction(" Learn with Sumit")
//   const message2 = await likeTheVidio(" description")
//   const message3 = await shareTheVidio(" javascript")

//   console.log(message1, message2, message3);
// }
// result();

// *** try / catch ****


// const result = async () => {
// try {
//   const message1 = await importantAction(" Learn with Sumit")
//   const message2 = await likeTheVidio(" description")
//   const message3 = await shareTheVidio(" javascript")

//   console.log(message1, message2, message3);
// } catch (error) {
//   console.error("Promises Failed " , error);
// }
// }
// result();

// এরর হ্যান্ডলিং এর জন্য try / catch ব্যবহার করা হয় এভাবে এরর হ্যান্ডলিং করা অনেক সহজ । 

// Ex- 1  :  output 

// console.log("start");
// const promise1 = new Promise((resolve,reject) => {
//   console.log(1);
//   resolve(2);
// })
// promise1
// .then((res) => {
//   console.log(res);
// })

// console.log("End");

// ## output : 
// start
// 1
// End 
// 2


// জাভাস্ক্রিপ্ট সবসময় সিনক্রনাস কোড আগে এক্সিকিউট করে তারপর অ্যাঁসিঙ্কক্রনাস কোড । 
// প্রথম start প্রিন্ট করবে এরপর যদিও  console.log(1);  promise এর ভিতরে কিন্তু এটা সিঙ্কক্রনাস 
// হওয়াতে এটা প্রিন্ট করবে । এরপর resolve(2); অ্যাঁসিঙ্কক্রনাস এই জন্য এটা পরে প্রিন্ট করবে তার
//  আগে console.log("End");

// Ex- 2  :  output- 

// console.log("start");
// const promise1 = new Promise((resolve,reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// })
// promise1
// .then((res) => {
//   console.log(res);
// })

// console.log("End");

//   or 


// console.log("start");
// const promise1 = new Promise((resolve,reject) => {
//   console.log(1);
//   console.log(3);
// })
// promise1
// .then((res) => {
//   console.log("Result" + res);
// })

// console.log("End");

// output : 
// start 
// 1
// 3
// End

// এখানে .then() ব্লকে ডুকবে না কারন হল promise1 ভিতরে কোন কিছু resolve() করা হয় নাই । 

// Ex- 3  :  output

// console.log("start");

// const fn = () => 

// new Promise((resolve,reject) => {
//   console.log(1);
//   resolve("success");
// });
// console.log("middle");

// fn().then((res) => {
//   console.log(res);
// })

// console.log("End ");


// output :
// start
// middle
// 1
// End 
// success

// যেহেতু fn() এরপর  console.log("middle");আছে তাই এটা আগে প্রিন্ট করবে । 

// Ex- 4  :  output
// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
 
// }

// let promise = job();

// promise 
// .then(function () {
//   console.log("success1")
// })
// .then(function () {
//   console.log("success2");
// })
// .then(function () {
// console.log("success3");
// })
// .catch(function () {
//   console.log("error1");
// })
// .then(function () {
//   console.log("success4");
// })

// output 

// error1
// success4

// .catch() ব্লকের পরে যদি চেইন আকারে যত গুলা .then() ব্লক থাকবে । .catch() ব্লকের সাথে সাথে 
// পরের  .then()  ব্লক গুলা ও এক্সিকিউট হয় । 

// Ex- 5  :  output

// function job(state) {
//  return new Promise(function (resolve, reject) {
//    if(state){
//      resolve("success")
//    }
//    else{
//      reject("eror");
//    }
   
//  });
 
// }

// let promise = job(true);

// promise 
// .then(function (data) {
//  console.log(data)
//  return job(false);
// })
// .catch(function (error) {
//  console.log(error);
//  return "Error Caught"
// })
// .then(function (data) {
//  console.log(data);
//  return job(true);
// })
// .catch(function (error) {
//  console.log(error);
// })

// Ex- 6  :  output

// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if(state){
//       resolve("success")
//     }
//     else{
//       reject("eror");
//     }
   
//   });
 
// }

// let promise = job(true);

// promise 
// .then(function (data) {
//   console.log(data)
//   return job(true);
// })
// .then(function (data) {
//   if(data !== "victory"){
//     throw "Defeat";
//   }
//   else{
//     return job(true)
//   }
 
// })
// .then(function (data) {
//   console.log(data);
// })
// .catch(function (error) {
//   console.log(error);
//   return job(false)
// })
// .then(function (data) {
//   console.log(data);
//   return job(true);
// })
// .catch(function (error) {
//   console.log(error);
//   return "Error caught"
// })
// .then(function (data) {
//   console.log(data);
//   return new Error("test");
// })
// .then(function (data) {
//   console.log("success", data.message);
 
// })
// .catch(function (data) {
//   console.log("Error", data.message);
// });


// Ex- 7  :  implement logic -

// const firstPromise = new Promise((resolve, reject) => {
//   resolve("First! ");
// });

// const secondPromise = new Promise((resolve, reject) => {
//   resolve(firstPromise);
// })

// secondPromise.then((res) => {
//   return res ;
// }).then((res) => {
//   console.log(res);
// })

// Ex- 8  :  async/await

// async function loadJson(url){
//   let response = await fetch(url);
//   if(response.status == 200){
//     let json = await response.json();
//     return json 
//   }
//   throw new Error(response.status)
// }
// loadJson(fetch('https://jsonplaceholder.typicode.com/todos/1')).catch((err) => {
//   console.log(err);
// })


// Ex- 9  :  Solve promise Recursively


// const  importantAction = (chanelName) => {
//   return new Promise((resolve, reject)=> {
//     setTimeout(() => {
//       resolve(` Subscribe to ${chanelName} Youtube chanel .`)
//     }, 500)
//   })

// }

// const  likeTheVidio = (vidio) => {
//   return new Promise((resolve, reject)=> {
//     setTimeout(() => {
//       resolve(` please like and comment the ${vidio} box .`)
//     }, 500)
//   })
// }

// const  shareTheVidio = (vidio) => {
//   return new Promise((resolve, reject)=> {
//     setTimeout(() => {
//       resolve(` if you are good at ${vidio} then you will learn advance topics.`)
//     }, 500)
//   })
// }

// function promRecurse(funcPromises) {
//   if(funcPromises.length === 0)
//   return ;
//   const currPromise = funcPromises.shift();

//   currPromise.then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//     promRecurse(funcPromises);
//   })
//   }

// promRecurse([
//   importantAction("Learn with sumit"),
//   likeTheVidio("description"),
//   shareTheVidio("javascript")
// ]);

// Ex- 10 :  promise polyfill

// function PromisePolyFill(executor) {
//   let onResolve ;
//   this.then = function (callback) {
//    onResolve = callback ;
//    return this;
//   };
//   this.catch = function (callback) {
//     return this 
//   }
//   executor
// }

// const examplePromise = new PromisePolyFill((resolve, reject) => {
//   setTimeout(() => {
//     resolve((2))
//   },1000);
// })

// examplePromise.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// })


// Ex- 11 final project with free code camp


// ১০। function closure - 



// *** closure ***


// closure ভালো করে বুঝতে চাইলে গ্লোবাল স্কোপ এবং লোকাল স্কোপ সম্পর্কে জানতে হবে। 


// জাভাস্ক্রিপ্ট এ প্যারেন্ট এর সবকিছু তার চাইল্ড এক্সেস করতে পারে । সুতরাং গ্লোবাল স্কোপের সবকিছু ফাংশন স্কোপ বাঁ ব্লক স্কোপে এক্সেস করা যাবে  কিন্তু চাইল্ডের কোন কিছুতে আবার প্যারেন্ট এর এক্সেস নাই ।

// var num1 = 3;
// var num2 = 4;

// var sum = function(){
//     return num1 + num2 ;
// };

// console.log(sum());                           output //     7 

// এখন মনে হতে পারে var num1 = 3 , var num2 = 4 এক্সেস কিভাবে লোকাল স্কোপ বাঁ ফাংশন স্কোপ পেল । আমরা তো এখানে প্যারামিটারই পাস করি নাই ।  এটাই হচ্ছে প্যারেন্ট স্কোপ থেকে লোকাল স্কোপে এক্সেস পেয়েছে । 

// closure হচ্ছে এমন একটা ফাংশন যার লোকাল স্কোপের বাইরে অর্থাৎ গ্লোবাল স্কোপে কোন ভারিঅ্যাঁবল থাকে তার রেফারেন্স নিজের কাছে নিয়ে যেতে হয় । 

// ## Ex-1 ##

// var num1 = 3;
  

// var sum = function(){
//     var num2 = 4;
//  return function(){
//  return num1 + num2
// }
// };

// var myFunc = sum();

// console.dir(myFunc)

// ## Ex-2 ##

// function bankAccount (intialBalance){
//   var balance = intialBalance ;
//   return function(){
//     return balance;
//   }
// }

// var account = bankAccount(100000);

// console.log(account())

// এখানে অ্যানোনিমাস ফাংশন টা হচ্ছে ক্লোজার । 


// ## Ex-3 ##

// var num1 = 3;
  

// var sum = function(){
//     var num2 = 4;
//  return function(){
//  return num1 
// }
// };

// var myFunc = sum();

// console.dir(myFunc)

// ## Ex-4 ##

// var num1 = 3;
// var num2 = 4;

// var sum = function(){
//     return num1 + num2 ;
// };

// console.log(sum()); 
// console.dir(sum)

// num1 = 6;
// num2 = 7;

// console.log(sum()); 
// console.dir(sum)

// ## Ex-5 ##

// (function(){
// let num1 = 3;

// let num2 = 4;

// let sum = function(){
//   return num1 + num2 ;
// };

// console.dir(sum)
// })();



//  ## Ex-6 ##



// function stopWatch(){
//   var startTime = Date().now();

//   function getDelay(){
//     console.log(Date.now() - startTime);
//   }

//   return getDelay;
// }

// var timer = stopWatch();

// for(var i = 0; i < 10000000; i++){
//   var a = Math.random() * 1000000
// }

// timer()

// ## Ex-7 ##

// for(var i = 0; i < 3; i++){
//   setTimeout(() => {

//    console.log(i);

//   }, 3000);
//   }

//   console.log("After for loop ");


//   ## Ex-8 ##


//   let sum = () => {
//     let counter = 0 ;
//     return () => {
//       counter += 1;
//       console.log(counter)
//     };
//   };
//   let result = sum();
  
//   result()
//   result()
//   result()
//   console.dir(result)

 



// ১১। funtion curring - 
  

// Haskel Curry এর মতে মাল্টিপল প্যারামিটারের কোন ফাংশনকে ভেঙ্গে ভেঙ্গে একটা একটা প্যারামিটারের ফাংশনে কনভার্ট করা যায় সেটাকেই  curring বলে । 


// function multiply(a, b, c){
//   return a * b * c ;
// }

// console.log(multiply(5, 6, 7));


// multiply এই ফাংশনের curring ভার্সন দেখব । 

// function curriedMultiply(a){
//   return function(b){
//     return function(c){
//       return a * b *c ;
//     }
//   }
// }

// console.log(curriedMultiply(5)(6)(7))

// এই ভাবে কল না করে প্রতিটা স্টেপ কে আলাদা আলাদা করে লিখতে পারি । 

// let step1 = curriedMultiply(5);

// console.dir(step1)

// let step2 = step1(6);

// console.dir(step2)

// let step3 = step2(7);

// console.log(step3)

// এটা ব্যবহার করার কারন হচ্ছে , ধরেন একটা ই কমার্স সাইটে ডিসকাউন্ত কেম্পেইন চলতেছে । 

// function discount(price, disc){
//   return price - price * disc
// }

// let customer1Dis = discount(600, .1);
// let customer2Dis = discount(700, .1);
// let customer3Dis = discount(800, .1);


// এই ফাংশনের curring ভার্সন দেখব  

// function discount(disc){
//   return (price) => {
//     return price - price * disc 
//   }
// }

// let tenPercentDis = discount(0.1);   // partial functoin 

//  curring ফাংশনের যে অংশটা পুনঃরায় ব্যবহার করা হয় সেটাকেই partial functoin বলে । 



// let tweentyPercentDis = discount(0.2);

// let customer1Disc = tenPercentDis(600);


// let customer2Disc = tenPercentDis(700);

// let customer3Disc = tenPercentDis(800);


// let customer4Disc = tweentyPercentDis(1400);



// ** curry converter function create - ** 

// function curry(func){
//   return function curried(...args){
  
//   }
// }

// function sum(a, b, c){
//   return a + b + c ;
// }

// let curriedSum = curry(sum)




// ১২। memoization function -




// function add(x) {
//   return 10 + x ;
  
// }

// memoization ব্যবহার করা হয় কোন রিসোর্স হাংরি, সিপিও হাংরি , অনেক মেমোরি দরকার বাঁ অনেক এক্সপেনসিভ কাজ করে অথবা এপি আই থেকে ডাটা নিয়ে আসা । যেটা বার বার কল করা অনেক এক্সপেনসিভ । ধরে নিচ্চি সেই ফাংশন টা হল  add() । এখন এই ভারি কাজ   টা কোন জায়গায় সেভ করে রাখতে চাই সেটাকে বলে memoization এটা করার জন্য Higher Order function ব্যবহার করতে হবে । এখন add ফাংশনকে মনে রাখার মত বানাতে চাইলে কল করা যাবে না । আমরা আরেকটি ফাংশনে ঘুড়িয়ে আনব । 



// const memo = (func) => {
//   let cache = {}
//   return function (x) {
//     if(cache[x]){
//       console.log("result from cache");
//       return cache[x] ;
//     }
//     else{
//       console.log("calculate the result");
//       const result = func(x);
//       cache[x] = result ;
//       return result ;
//     }
//   }
// } 

// const calculate = memo(add);

// console.log(calculate(10));
// console.log(calculate(10));
// console.log(calculate(10));











// ১৩। Recursion - 

// যখন একটা কোন ফাংশন নিজের বডি ভিতরে নিজেকে কল করে দেয় তখন এই ঘটনাকে  Recursion  বলে । 
// যেমন - 

// let myFunc = () => {
//   myFunc(); 
// };

// Ex-1 

// ধরেন একটা সিরিজ নাম্বারের যোগফল বের করতে হবে । সেটা ফর লুপ দিয়ে  বের করব -

// 1 + 2 + 3 + ......+ n

// let total = 0 
// let n = 100 

// for(let i = 1; i <= 100 ; i++){
//   total += i ;
// }

// ধরেন একটা সিরিজ নাম্বারের যোগফল বের করতে হবে । সেটা রিকারশন ফাংশন দিয়ে  বের করব -


// function sum(n){
//   if(n === 0){
//     return 0;
//   }
//   else{
//     return sum(n - 1) + n ;
//   }
  
// }

// console.log(sum())

// এভয়েড করাই ভালো কেননা রিকারশন ফাংশন এক্সকিশন টাইম বেশি লাগে । 