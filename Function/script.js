// ***  জাভাস্ক্রিপ্ট ফাংশন   ***

// ফাংশন হল পুনঃ ব্যবহার যোগ্য একটি কোড গ্রুপ যা পরিবর্তীতে প্রোগ্রামের প্রয়োজনে যে কোন জায়গায় invoke বাঁ  call করে ব্যবহার করা যায় । 

// ১ । Regular function -

// function adder(a, b){
//     return a + b ;
// }

// console.log(adder(5, 6))             // output              11

//  ফাংশন বডিতে  কোন কিছু রিটার্ন না করলে বাই ডিফলট এটা undefined থাকে ।  এটা জানা খুব  গুরুত্বপূর্ণ কেননা ফাংশন বডি এক্সপেক্ত করে আপনি রিটার্ন হিসেবে কিছু একটা দিবেন । 


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

// higher order function
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

//  একটা ফাংশন কে যখন আমরা  অন্য আরেকটা  ফাংশনের আর্গুমেন্ট হিসেবে পাস করি  তখন সেই আর্গুমেন্টে যাওয়া ফাংশন  টা কেই  callback function বলে । 

// function print(callback) {  
//   callback();
// }

// print(() => { console.log(' This is callback function ') }); 

// আমরা জানি ফাংশনের প্যারামিটারে  অন্য একটা ফাংশনকে পাস করা যায় এবং বাইরের ফাংশনে ভিতরের ফাংশনকে বাঁ  প্যারামিটারে পাস করা ফাংশনকে  কল করা যায় । 

// এখানে print( ) এ পাস করা অ্যারো ফাংশনকে প্রথম callback রিসিভ করবে এরপর বাইরের ফাংশনে কল করে দিবে । 

//  callback function কেন ব্যবহার করব এটা বুঝতে হলে সিনক্রোনাস এবং অ্যাসিনক্রোনাস বিহেবিয়ার ভালো করে বুঝতে হবে । 

//  সিনক্রোনাস = জাভাস্ক্রিপ্ট বাই ডিফলট সিনক্রোনাস সিংগেল থ্রেড  প্রোগ্রামিং ল্যাঙ্গুয়েজ । এটা উপর থেকে নিচের দিকে লাইন বাই লাইন কোড রিড কর । জাভাস্ক্রিপ্ট ও বাই ডিফল্ট এভাবে কাজ করে থাকে। সে একসাথে অনেক গুলা কাজ এক সাথে  করতে পারে না  তাই তার এই ব্যবহারকে সিঙ্ক্রোনাস ব্লকিং ব্যবহারও বলে । 

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



// অ্যাসিনক্রোনাস = জাভাস্ক্রিপ্ট যেহেতু সিঙ্গেল থ্রেড প্রোগ্রামিং ল্যাঙ্গুয়েজ তাই সে যখন দেখবে কোন কোড এক্সকিশন করতে সময় লাগবে,  বড় লুপ, আজাক্স কল আছে, কোন সারভার থেকে ডাটা লোড করতে হবে কিনা ??   । এরকম হলে জাভাস্ক্রিপ্ট এ  কাজটি নিজে করে না ব্রাউজারে রান টাইমে ওয়েব অ্যাপিআই নামে একটা বস্তু থাকে তার কাছে দিয়ে দেয়। যখনই দেখে এখানে কিছু সময় লাগতেছে তখনই এটা ওয়েব অ্যাপিআই তে চলে যায় সেখানে কাজ শেষ করে প্রসেস করে তার পর এটা কে পাঠায় দে কলব্যাক কিউতে । এবার আসি কলব্যাক কিউতে যখন আমাদের সকল কোড রান করা শেষ কল স্টেক ফাঁকা হয়ে যায় তখন এ কলব্যাক কিউ থেকে ইভেন্ট লুপের চালু হবার মাধ্যমে সবার প্রথমে যেটা আছে সেটাকে কল স্টেক এ পাঠায় কল স্টেক সেখান থেকে তারপর অই কোডটি রান হয়।


// const processOrder = (customer) => {
//   console.log(`Process order for customer 1`);
//   setTimeout(() => {
//     console.log(`order processed for customer 1`);
//   }, 2000);
// };
// console.log(`take order for customer 1`);                                                      // output
// processOrder();                                                                                 take order for customer 1 ✔
// console.log(`completed order for customer 1`);                                                  Process order for customer 1 ✔
//                                                                                                 completed order for customer 1 ❌
//                                                                                                 order processed for customer 1 ❌


//  আরেকটি প্রব্লেম এই ফ্লো টা ঠিক নাই এই সমস্যার সমাধান কয়েকভাবে করা যায় ।

// 1। কলব্যাক ফাংশন ( callback )
// 2। প্রমিস ( promise .then block )
// 3। অ্যাসিঙ্ক-অ্যাওয়েট ( async await )


// *** callback function **** 

//  একটা ফাংশন কে যখন আমরা  অন্য আরেকটা  ফাংশনের আর্গুমেন্ট হিসেবে পাস করি  তখন সেই আর্গুমেন্টে যাওয়া ফাংশন  টা কেই  callback function বলে । 


// const takeOrder = (customer, callbakc) => {
//   console.log(`Take order for ${customer}`);
//   callbakc(customer);
// };

// const processOrder = (customer, callback) => {
//   console.log(`processing order for ${customer }`);
 
//   setTimeout(() => {
//     console.log(`Cooking complete for ${customer}`);
//     console.log(`Order processed for${customer}`);
//     callback(customer);
//   }, 3000)
// };

// const completeOrder = (customer) => {
//   console.log(`complete order for ${customer}`)
// };

// takeOrder('customer-1', (customer) => {
//   processOrder('customer-1', (customer) => {
//      completeOrder(customer)
//   })
// });

takeOrder() ফাংশনের কলে  প্রথম আর্গুমেন্টে   customer এবং দ্বিতীয়  আর্গুমেন্টে  ফাংশন নিবে , সেই ফাংশনটা দ্বিতীয় প্যারামিটারে callbakc ফাংশন হিসেবে  রিসিভ করবে । takeOrder() বডিতে callbakc ফাংশন কল করে দিতে হবে। 

                                    // output 
                                  //  Take order for customer-1
                                  //  processing order for customer-1
                                  //  Cooking complete for customer-1
                                  //  Order processed forcustomer-1
                                  //  complete order for customer-1      


                               ***   callback hell ***
                               Problem of callback
এখন দেখুন উপরে তো যাস্ট ৩ টি স্টেপ এবং প্রতেকটি কলব্যাক এ তেমন কাজ নেই। কিছু রিয়েল লাইফে এর থেকে অনেক অনেক বড় অ্যাপ্লিকেশনে আরো অনেক callback চলে আসে এমনকি প্রত্যেক টি কলব্যাক এ অনেক কাজ থাকে তখন বোঝা যায় না কে কাকে কল কল করছে। যদি একটু দেখাইতে চাই,
takeOrder('Jhon Dou', (customer) => {
  processOrder(customer, (customer) => {
    // do another stuff
    completeOrder(customer, (customer) => {
      completeOrder2(customer, (customer) => {
        completeOrder3(customer, (customer) => {
          // can anothe code
          completeOrder4(customer, (customer) => {
            completeOrder5(customer, (customer) => {
              // can other function anything inside a arrow function
              completeOrder6(customer, (customer) => {
                completeOrder7(customer, (customer) => {
                  completeOrder8(customer);
                });
              });
            });
          });
        });
      });
    });
  });
});


যেটাকে বলা হতো কলব্যাক হেল তাই শুরুর দিকে জাভাস্ক্রিপ্ট কে অনেকে আগলি ল্যাঙ্গুয়েজ বলা হতো। এখন জাভাস্ক্রিপ্ট অনেক ডেভোলপ হয়েছে অনেককিছু একটি সিন্টেকটিক্স ওয়েতে এসেছে। আর এই হেল থেকে বাঁচার জন্য এসেছে প্রমিস (Promise) । চলুন দেখে আসি এ প্রমিস কিভাবে কাজ করে আর কিভাবে ডেভোলপার লাইফ ইজি করেছে।


  // ৯।  ***  promise  *** 
  promise- 
  প্রমিস তার কাজ অনেকটা তার নামের মতোই। যদি কোনো কাজে সাকসেস হয় তাহলেPromise.resolve() রান হবে আর যদি ফেইল হয় তাহলে Promise.rejected() রান হবে।
  চলুন একটা প্রমিস তৈরি করা যাক,

  const promise = new Promise((resolve, reject) => {
    // "Producing Code" (May take some time)
  
    resolve(); // when successful
    reject(); // when error
  });

  এখানে new Promise() দিয়ে একটি প্রমিস বানানো হলো, এখানে প্যারামিটারে আমরা যেকোনো ফাংশন নিতে পারি। আমরা অ্যারো ফাংশন নিলাম এবং এই ফাংশনের প্যারামিটারে resolve, reject মানে দুটি ফাংশন থাকবে আপনি অন্য নাম দিতে পারেন এটা হলো কনভেনশন। তার পর কন্ডিশন অনুযায়ী সত্য হলে reslove() কে আর মিথ্যা হলে reject() কে কল করবে। চলুন এই সিন্টেক্স কাজে লাগিয়ে একটা রিয়েল উদাহরন বানাই।

  const hasMeeting = false;

 const meeting = new Promise((reslove, reject) => {
  if (hasMeeting) {
    const meetingDetails = {
      name: 'Technical meeting',
      location: 'Google meet',
      time: '10:00PM',
    };
    reslove(meetingDetails);
  } else {
    const error = new Error('No meeting found');
    reject(error);
  }
});

meeting
.then((res) => {
  console.log(JSON.stringify(res));
})
.catch((err) => {
  console.log(err.message)
})

এবার আসি এই প্রমিসকে কিভাবে ব্যবহার করব? চলুন দেখা যাক
promise
  .then((res) => {
    // if reslove
    // get reslove data in res
  })
  .catch((err) => {
    // if reject
    // get reject error data in err
  });

  দেখুন কোনো মিটিং নাই false তাই reject কল হচ্ছে।
দেখুন এখানে যদি অনেক গুলো স্টেপ থাকত তাহলে আমরা .then দিয়ে ব্যবহার করতে পারতাম।
meeting
  .then((res) => {
    console.log(JSON.stringify(res));
  })
  .then(() => {
    console.log(`do any stuff`);
  })
  .then(() => {
    console.log(`do any stuff`);
  })
  .catch((err) => {
    console.log(err.message);
  });

  এখন এই .then & .catch ও কিন্তু অতটাও ফ্রেন্ডলি না। বড় অ্যাপ্লিকেশনে একটি .then ব্লকে অনেক অনেক কোড থাকতে পারে এর ফলে আমার ব্লক গুলো অর্ডার ফ্লো কন্ট্রোল করা একটু কঠিন হতে পারে। তাই আমারদের জন্য ভাল হয় যদি আমার অ্যাসিঙ্ক্রোনাস কাজ গুলো সিঙ্ক্রোনাস ভাবে লিখে হ্যান্ডেল করতে পারি। লাকিলি জাভাস্ক্রিপ্ট এখন তা করা যাচ্ছে আর এখানে আসে অ্যাসিঙ্ক-অ্যাওয়েট ( async await ) । চলুন জেনে আসি এর সমপর্কে।
অ্যাসিঙ্ক-অ্যাওয়েট ( async await )
চলুন একটা সিম্পল ফাংশন নিই
function friendlyFunc() {
  return `Hello`;
}
console.log(friendlyFunc()); // output - Hello
এখন ফাংশনটিকে যদি Promise করতে চাই তাহলে আমরা return Promise.resolve('Hello'); করতে পারি কিন্তু যদি আমরা ফাংশন এর পূর্বে async কিওয়ার্ড টা ব্যবহার করি তাহলে এটা একটি প্রমিস রিটার্ন করবে।
async function friendlyFunc() {
  return `Hello`;
}
console.log(friendlyFunc()); // output - Promise - { 'Hello' }
কিন্তু আমরা যেকোনো ফাংশন কেউ async কিওয়ার্ড দিবো না । সেই ফাংশন অ্যাসিঙ্ক্রোনাস ভাবে কাজ করে অথবা কোনো ডাটা কে ফেচ করে ডাটা আনার কাজ করে তার ফাংশন এর পূর্বে আমরা এই async কিওয়ার্ড টা দিব। এখন আমরা ত পূর্বে Promise পেলে তাকে .then দিয়ে হ্যান্ডেল করতাম এখন এখানে, যেখানে অ্যাসিঙ্ক্রোনাস কাজ টা হবে তার পূর্বে await কিওয়ার্ডটি ব্যবহার করতে হবে। তাহলে ডাটা টি আশার আগ পর্যন্ত অপেক্ষা করবে ডাটা আসলে তারপর কোডে যাবে। চলুন উপরের আমাদের তৈরি করা meeting অ্যান্ড addTocalender প্রমিস গুলো কে এবার async await দিয়ে হ্যান্ডেল করতে পারি কি না।
const hasMeeting = true;

const meeting = new Promise((reslove, reject) => {
  if (hasMeeting) {
    const meetingDetails = {
      name: 'Technical meeting',
      location: 'Google meet',
      time: '10:00PM',
    };
    reslove(meetingDetails);
  } else {
    const error = new Error('No meeting found');
    reject(error);
  }
});

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calender);
};

async function myMeeting() {
  const meetingDetails = await meeting;
  const calender = await addToCalender(meetingDetails);
  console.log(calender);
}
myMeeting();
// output - Technical meeting has been scheduled on Google meet at 10:00PM
অর্থাৎ আমরা এবার একই কাজ সুন্দর ভাবে লাইন বাই লাইন করতে পারছি।
এখানে দেখুন আমরা একটা ফাংশন নিলাম myMeeting() নামে এখানে আমাদের তৈরি করা প্রমিস গুলো কে লিখব কিন্তু আমাদের প্রমিস ফাংশন গুলো এখানে তেমন কিছু নাই যে একটু সময় নিবে। কিন্তু রিয়েল লাইফে অ্যাপিআই কল করলে তা একটু সময় নিবে তাই এটা অ্যাসিঙ্ক্রোনাস কাজ এখানে একটু ওয়েট করতে হবে তাই এখানে যে ফাংশন প্রমিস রিটার্ন করবে, যেটা অ্যাসিঙ্ক্রোনাস কাজ তার পূর্বে await লিখতে হবে এখন await লিখতে পুরা ফাংশন টা async হতে হবে তাই myMeeting() পূর্বে async দিতে হয়েছে।
এখন awit meeting থেকে পাওয়া ডাটাকে আমরা meetingDetails এ রাখলাম। এখন addToCalender একটা ফাংশন যা প্রমিস রিটার্ন করে এবং প্যারামিটার আকারে meetingDetails নেয়। আমার addToCalender কে await রেখে কল করে পূর্বে পাওয়া meetingDetails কে পাস করে দিলাম। এখন আমাদের addToCalender ফাংশন তো লেখাই আছে সে meetingDetails নিয়ে একটা calender দিবে তারপর myMeeting() থেকে calender কে কন্সোল করে দিলাম। তারপর সবার শেষে myMeeting() টাকে কল করে দিলাম। আমাদের কোড ঠিক ঠাক ভাবে কাজ করছে।
এখন এখানে আমরা এরর কন্ট্রোল করব। এর জন্য আমরা try catch ব্যবহার করতে পারি। যেখানে অ্যাসিঙ্ক্রোনাস কাজ গুলো থাকবে তাদের কে try {} ব্লকে রেখে দিবো। তার পর catch () {} ব্লকে আমরা এরর হলে কি হবে তা হ্যান্ডেল করতে পারি। চলুন কোডে দেখি নি।
const hasMeeting = false;

const meeting = new Promise((reslove, reject) => {
  if (hasMeeting) {
    const meetingDetails = {
      name: 'Technical meeting',
      location: 'Google meet',
      time: '10:00PM',
    };
    reslove(meetingDetails);
  } else {
    const error = new Error('No meeting found');
    reject(error);
  }
});

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calender);
};

async function myMeeting() {
  try {
    const meetingDetails = await meeting;
    const calender = await addToCalender(meetingDetails);
    console.log(calender);
  } catch (err) {
    console.log(err.message);
  }
}
myMeeting();
// output - No meeting found


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


১৬। Recursion - 

যখন একটা কোন ফাংশন নিজের বডি ভিতরে নিজেকে কল করে দেয় তখন এই ঘটনাকে  Recursion  বলে । 
যেমন - 

let myFunc = () => {
  myFunc(); 
};

Ex-1 

ধরেন একটা সিরিজ নাম্বারের যোগফল বের করতে হবে । সেটা ফর লুপ দিয়ে  বের করব -

1 + 2 + 3 + ......+ n

let total = 0 
let n = 100 

for(let i = 1; i <= 100 ; i++){
  total += i ;
}

ধরেন একটা সিরিজ নাম্বারের যোগফল বের করতে হবে । সেটা রিকারশন ফাংশন দিয়ে  বের করব -


function sum(n){
  if(n === 0){
    return 0;
  }
  else{
    return sum(n - 1) + n ;
  }
  
}

console.log(sum())

এভয়েড করাই ভালো কেননা রিকারশন ফাংশন এক্সকিশন টাইম বেশি লাগে । 