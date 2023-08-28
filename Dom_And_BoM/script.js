//   *****  D O M ******

// DOM হচ্ছে document object model 

// D = HTML page is a document  অর্থাৎ  HTML এর সম্পূর্ণ page কে ডকুমেন্ট বলে ।


// O = HTML elements are object অর্থাৎ  এই index.html page এ যে HTML element গুলা থাকে যেমন - <body></body> , <div></div>,  <head></head> ইত্যাদি এরা প্রত্যেকটি  একেকটা জাভাস্ক্রিপ্ট অবজেক্ট । এদের ও জাভাস্ক্রিপ্ট 

// অবজেক্ট এর মত  property  এবং  method থাকে  ।



// M = HTML tree structure is the model অর্থাৎ  HTML page টা একটা tree এর মত করে সাজানো হয়েছে,  যেখানে সবার উপরে থাকে window Object বাঁ global Object এরপর  document, html, head, title, body  ইত্যাদি থাকে । 

// Dom দিয়ে যে কাজ গুলা করা যায় -

// ১। নতুন element তৈরি করা ।

// ২। আগের কোন element রিমুভ করা ।

// ৩। আগের কোন element মডিফাই করা ।

// ৪।   attribute মডিফাই করা, অ্যাড করা, রিমুভ করা  ।

// ৫। স্টাইলং অ্যাড করা, রিমুভ করা, মডিফাই করা। 

// ৬। পেজে ইভেন্ট তৈরি করা , যে এরকম কিছু ঘটলে পেজের উপর নির্দিষ্ট অ্যাকশন পারফর্ম করা ।

// ৭। নির্দিষ্ট কোন element এর উপর   ইভেন্ট  তৈরি করা , যে এই element এর উপর এমন কিছু ঘটলে আমরা ঐ 

// অ্যাকশন নিতে চাই ।


// C R U D = create Read Update and Delete অর্থাৎ আমরা  Dom দিয়ে তৈরি করা , রিড করা , আপডেট করা , ডিলিট  এই কাজ গুলা খুব সহজে করতে পারব । 

// console.dir( ) করলে ঐ অবজেক্টের নাড়ি ভুঁড়িসহ জানা যাবে অর্থাৎ সব কিছু দেখা যাবে । যেমন - console.dir(document ) করলে এর সব   property  এবং  method দেখা যাবে ।

// console.log(typeof()) করলে ডাটা টাইপ জানা যাবে । যেমন - console.log(typeof(document))


// *****   ইলিমেন্ত সিলেক্ট করা  *******




// <!-- 
// **** ইলিমেন্ত সিলেক্ট করার জন্য  ***** - 


// ১। আইডি দিয়ে সিলেক্ট করা - 


    // <div id="box1" class="box" data-atr="box1" data-extra="attrToRemove">
    //           <h4>Box 1</h4>
    // </div>

//     --  document.getElemetById('') এখানে সরাসরি আইডি দিতে হবে যেমন -

// আমাদের এইচটিএমএল পেইজে id = box1 ইলিমেন্ত কে সিলেক্ট করতে হলে অর্থাৎ   <div id="box1" class="box" data-atr="box1" data-extra="attrToRemove"> ইলিমেন্ত টা কে ধরতে হলে -

// আমরা দুই ভাবে পারব । 

//     document.getElemetById('box1') 
      
      //  document.querySelector('#box1')


//  ২। সি এস এস সিলেক্টর আইডি অথবা ক্লাস দিয়ে করা -    
   

//  --  document.querrySelector('') এখানে সি এস এস সিলেক্টর আইডি অথবা ক্লাস দিতে হবে। 
 
//       
//     ** আইডির জন্য ---   

//     এখানে  <div id="box1" class="box" data-atr="box1" data-extra="attrToRemove"> আইডি টি সিলেক্ট  এভাবে  করতে হবে ।

//     document.querrySelector('#box1')


//     **  ক্লাস এর জন্য ---

//     এখানে    <div id="box1" class="box" data-atr="box1" data-extra="attrToRemove"> ইলিমেন্ত টি সিলেক্ট  এভাবে  করতে হবে ।

      // document.getElementsByClassName('box')    এখানে box নামে যত গুলা ক্লাস আছে সবগুলা সিলেক্ট হবে ।

//     document.querrySelector('.box')   এখানে box নামে যত গুলা ক্লাস আছে  তাদের মধ্যে প্রথম টা সিলেক্ট হবে 

//     document.querrySelectorAll('.box')  এখানে box নামে যত গুলা ক্লাস আছে সবগুলা সিলেক্ট হবে ।

  


    //  একই নামে একাদিক ক্লাস থাকলে এক্ষেত্রে সবগুলা ক্লাসের মধ্যে প্রথম ক্লাসটাই  
     
    //  সিলেক্ট করবে । কিন্তু সবগুলা ক্লাস সিলেক্ট করতে চাইলে - document.
     
    //  querySelectorAll('.box') দিতে হবে ।

    // এটার আউটপুট একটা নোডলিস্ট যেটা দেখতে অনেকটা অ্যারের মত কিন্তু অ্যারে না । 
    
    // অ্যারেতে কনভারট করতে হলে- 

    // let oneList = document.querySelectorAll('.one');
    // let oneArray = Array.prototype.slice.call(oneList) ;


//  ৩। ট্যাগ নেইম দিয়ে সিলেক্ট করা - 

//  **  document.getElementsByTagName() এখানে সরাসরি  ট্যাগ নেম দিতে হবে  -


// document.getElementsByTagName("h4") এখানে সবগুলা  h4 সিলেক্ট হবে । যদি কোন ক্ষেত্রে একটাই ইলিমেন্ত থাকে তাহলে সেটাই শুধু সিলেক্ট হবে । 

// document.querySelectorAll('div')  এখানে  সব গুলা div  সিলেক্ট হবে

// document.querySelector('div')  এখানে  সব গুলা div এর মধ্যে শুধু মাত্র প্রথম টা  সিলেক্ট হবে

    // ৪। Attribute দিয়ে সিলেক্ট করা - 

  // <div id="box1" class="box" data-atr="box1" data-extra="attrToRemove">
  //      <h4>Box 1</h4>
  // </div>

    // document.querySelector('[data-atr="box1"]') এখানে শুধু  box1 ইলিমেন্ত টাই  সিলেক্ট হবে ।

    // একাদিক হলে - 


    // document.querySelectorAll("[data-atr = 'box1']",  "[data-extra = 'atrToRemovee']")

    // ৫। সুডো-ক্লাস দিয়ে সিলেক্ট করা - 
           
    //   <div id="box4" class="box" data-atr="box4">
    //     <h4>Box 4</h4>
    //     <ul>
    //       <li>About this document</li>
    //       <li><a href="#">JavaScript DOM Manipulation</a></li>
    //       <li><a href="#">Learn With Zonayed</a></li>
    //     </ul>
    // </div>


    //    document.querySelector('li:first-child');

    //    document.querySelector('li:last-child');
            
        // একাদিক সিলেক্ট করতে চাইলে  - 

   //     document.querySelectorAll('li:first-child, li:last-child');

          


//   ৬। প্যারেন্ট থেকে চাইল্ড  সিলেক্ট করা - 

//   আমরা চাইলে প্যারেন্ট element থেকে চিলড্রেনে যেতে পারি 


    // <div id="box3" class="box" data-atr="box3">
    //   <h4>Box 3</h4>
    //   Lorem ipsum <strong>dolor sit</strong>
    //   <p class="box3-paragraph">amet, <em>consectetur</em> adipisicing elit, <strong>sed do eiusmod</strong> tempor incididunt ut labore et dolore magna aliqua</p>
    // </div>
    // <div id="box4" class="box" data-atr="box4">
    //   <h4>Box 4</h4>
    //   <ul>  
    //       <li>About this document</li>
    //       <li><a href="#">JavaScript DOM Manipulation</a></li>
    //       <li><a href="#">Learn With Zonayed</a></li>
    //   </ul>
    // </div>

    //   let parentElement = document.getElementById('box3');

    //   parentElement.childNodes;   এখানে চিলড্রেন ছাড়া ও  কিছু টেক্সট থাকে ।

    //   parentElement.children;  এখানে শুধু চিলড্রেন থাকে 

      //  parent.children[1]
      //  parent.chilNodes[1]


    //   *** চাইল্ড থেকে চাইল্ড  সিলেক্ট করা - 

      //  let parentElement = document.getElementById('box4')
       

    //   parentElement.children[1].children[0]

    // **** ডিসেনডেন্ত আকারে চাইল্ড সিলেক্ট করা- 


    // দাদা থেকে ছেলে থেকে নাতি থেকে পুতি  এভাবে যাওয়া যায়, এখন আমি চাচ্চি

    // *** দাদা থেকে নাতিতে যাব ডিরেক্ট -

    //  const grandParent = document.querySelector('#box4');

      // const nati = grandParent.querySelectorAll('li')

      // console.log(nati)

      // *** নাতি  থেকে দাদা তে  যাব ডিরেক্ট -

      // const nati = document.querySelector('.asik');

      // const grandParent = nati.closest('box4')

      // ** পাশাপাশি ভাই থেকে ভাই - 

      // const grandParent = document.querySelector('#box4');
      // const parent = grandParent.children[0];
      // const parentBrother = parent.nextElementSibling ;
      // const parentBrother1 = parent.previousElementSibling ;


      // console.log(parentBrother)


    //  যেকোনো চাইল্ড সিলেক্ট করা - 

    //  let firstChild = document.querySelector(".asik: first-child");
    //  let lastChild = document.querySelector(".asik: last-child");
    //  let anyChild = document.querySelector(".asik: nth-child(2)");




    // সব গুলা চাইল্ড নাকি ইমিডিয়েট  চাইল্ড গুলা সিলেক্ট করতে -

    // আমরা চাচ্চি তিন নাম্বার বক্সের সব গুলা <strong></strong> কে ধরতে 

    // document.querySelectorAll("#box3 strong")

    // আমরা চাচ্চি তিন নাম্বার বক্সের ইমিডিয়েট   <strong></strong> কে ধরতে 

    // document.querySelectorAll("#box3 >strong")





// ৭। প্যারেন্ট এর প্যারেন্ট সিলেক্ট করা - 

{/* <div class="boxes">
        <div id="box1" class="box" data-atr="box1" data-extra="attrToRemove">
          <h4>Box 1</h4>
        </div>
        <div id="box2" class="box" data-atr="box2">
          <h4>Box 2</h4>
        </div>
        <div id="box3" class="box" data-atr="box3">
          <h4>Box 3</h4>
          Lorem ipsum <strong>dolor sit</strong>
          <p class="box3-paragraph">amet, <em>consectetur</em> adipisicing elit, <strong>sed do eiusmod</strong> tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div id="box4" class="box" data-atr="box4">
          <h4>Box 4</h4>
          <ul>  
            <li class="asik" >About this document</li>
            <li class="asik"><a href="#">JavaScript DOM Manipulation</a></li>
            <li class="asik"><a href="#">Learn With Zonayed</a></li>
          </ul>
        </div>
   </div>
 */}



//  let items = document.querySelector(".asik");

//  let grandParent = items.parentElement.parentElement

//  console.log(grandParent)



// ৮।  একাদিক ইলিমেন্ত সিলেক্ট করা -

// <div id ='main-div' atr = 'dash' dxr-atr=" dash-vai ">
//     <ul class="content">
//          <li>asik</li>
//          <li> rayhan</li>
//          <li> 
//             <span id ="span" > name</span>
//             <span> address</span>
//             <li></li>
//             <li></li>
//             <li></li>
//          </li>
//          <li> raisul</li>
//     </ul>
// </div>

// let content = document.querySelector(' #box1 , .box  li, span');

// console.log(content)







// *******        ইলিমেন্ত নিয়ে খেলা করা -      ********

//  ১। একদম নতুন ইলিমেন্ত তৈরি করা এবং টেক্সট, এইচটিএমএল  ডুকানো   -

//  *****   document.createElement() একটি নতুন  ইলিমেন্ত তৈরি করতে এই মেথড ব্যবহার করা হয় ।



// let newParagraph = document.createElement('p');   এখানে  পারাগ্রাফ ইলিমেন্ত তৈরি করা হয়েছে । 

 

// let newDiv = document.createElement('div');   এখানে  ডিব  ইলিমেন্ত তৈরি করা  হয়েছে ।

// ****** ইলিমেন্ত ভিতরে টেক্সট ডুকানো - 


    //  ইলিমেন্তের ভিতরে টেক্সট দুই ভাবে ডুকানো যায় ।


    //      ## textContent
    //      ## innerText

//  let nameOfAsik =newParagraph.textContent =' his name is ' + ' Asikul islam'

//  এখানে এইচটিএমএল ইলিমেন্ত  যেভাবে দেখাবে সেটাই আউটপুটে আসবে ।

//  let nameOfAsikul =newParagraph.innerText = 'his name is ' + ' Asikul islam '

//  এখানে ব্রাউজার যেভাবে দেখাবে সেটাই আউটপুটে আসবে ।
 

//  ইলিমেন্তের  ভিতরে এইচটিএমএল ইলিমেন্ত  ডুকানো - 

  // newDiv.innerHTML = `<p> Dom manupulation is so funny ! </p>`

//   এখানে অবশ্যই খেয়াল রাখতে হবে এইচটিএমএল যাতে স্ট্রিং আকারে থাকে । 

// তবে আমরা চাইলে এখানে ডায়নামিক ভ্যালু দিতে পারব  । 


//  ২। ইলিমেন্তে ক্লাস অ্যাড বাঁ রিমুভ করা - 


  //  ক্লাস অ্যাড করা - 

  // ক্লাস অ্যাড করার জন্য প্রথমে আগে ইলিমেন্ত তৈরি করে নিতে হবে । তারপর সেই ইলিমেন্তে ক্লাস অ্যাড করতে হবে। এখন যেহেতু আমাদের আগেই newParagraph  এবং newDiv নামে দুইটা ইলিমেন্ত তৈরি করা আছে তাই আমরা এটা নিয়েই কাজ করব । 

  // ক্লাস মূলত দুই ভাবে অ্যাড করা যায় - যথা 


  //  ## classList.add()    এই মেথড এর সাহায্যে ক্লাস অ্যাড করা হয় 
  //  ## className = " এখানে ক্লাসের নাম দিতে হবে "

// newDiv.classList.add('new-div');

// newParagrpah.className = "new-paragraph"



  //  ক্লাস মডিফাই করা - 

 // newDiv.className += 'old-new-div'


  //  ক্লাস রিমুভ  করা -   

  // classList.remove()  এই মেথড এর সাহায্যে ক্লাস রিমুভ  করা হয় । 

// newDiv.classList.remove('new-div');

// newDiv.className = newDiv.className.replace(/old-new-div$/, ` `);  এই কোড কাজ করছে না । 

// আমরা   newDiv ক্লাস নেমটা মডিফাই করেছি আর কাঙ্ক্ষিত ক্লাস নেমটা ব্লাস্ক স্পেস 

// দিয়ে আসাইন করেছি ।



//  ৩। ইলিমেন্তে অ্যাট্রিবিউট  অ্যাড বাঁ রিমুভ , মডিফাই  করা -


//    **** অ্যাট্রিবিউট  অ্যাড setAttribute() এই মেথডের সাহায্যে করা হয় । 

  // **অ্যাট্রিবিউট  অ্যাড করা -

// newDiv.setAttribute('data-attr' , ' something');

// setAttribute() দুইটা আর্গুমেন্ট নিবে অ্যাট্রিবিউট নেইম , অ্যাট্রিবিউট ভ্যালু 

//    **** অ্যাট্রিবিউট মডিফাই  setAttribute() এই মেথডের সাহায্যে করা হয় ।  মডিফাই বলতে শুধু অ্যাট্রিবিউট ভ্যালু  পরিবর্তন করা হয়। 

  // **অ্যাট্রিবিউট  মডিফাই করা -

// newDiv.setAttribute('data-attr' , 'someOtherThing');


//   **** অ্যাট্রিবিউট রিমুভ removeAttribute() এই মেথডের সাহায্যে করা হয় ।

  // **অ্যাট্রিবিউট  রিমুভ করা -


// newDiv.removeAttribute('data-attr');


// ৪। ইলিমেন্তে স্টাইল অ্যাড বাঁ রিমুভ , মডিফাই  করা -

//    **  অ্যাড করা- 

//    newDiv.style.backgroundColor = '#348454'


//    **  মডিফাই  করা- 

//    newDiv.style.backgroundColor = '#3484'

//    **   রিমুভ করা-

//    newDiv.style.backgroundColor = '' 
   
//    এখানে  রিমুভ করা বলতে ফাকা রাখা হয়েছে । 

// ৫। আগে- পরে বিভিন্ন ভাবে ইলিমেন্ত ডুকানো -

// ডোম এর ভিতরে ইলিমেন্ত ডুকাতে চাইলে যে মেথড ব্যবহার করতে হবে insertAdjacentElement("first parameter" , "second parameter")

// first parameter = কোন পজিশনে ডুকাবো সেটা  বলতে হবে - 

  //  এখানে পজিশন চারটি - 

  //    ## beforebegin
  //    ## afterbegin
  //    ## beforeend
  //    ## afterend
    

//       এখানে চাইলে 'beforebegin'
//    <ইলিমেন্ত>
//       এখানে চাইলে 'afterbegin'

//       $$$$$$$$ 

//         অন্যান্য ইলিমেন্ত 

//       $$$$$$$$
   
//       এখানে চাইলে 'beforeend'
//    </ইলিমেন্ত>
//    এখানে চাইলে 'afterend'

// second parameter = যেই ইলিমেন্ত ডুকাবো সেটা দিতে হবে ।   যেমন - 



{/* <html lang="en" dir="ltr"><head>
    <meta charset="utf-8">
    <title>Selecting Elements - JavaScript DOM Manipulation</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="wrapper">
      <div class="boxes">
        <div id="box1" class="box" data-atr="box1" data-extra="attrToRemove">
          <h4>Box 1</h4>
        </div>
        <div id="box2" class="box" data-atr="box2">
          <h4>Box 2</h4>
        </div>
        <div id="box3" class="box" data-atr="box3">
          <h4>Box 3</h4>
          Lorem ipsum <strong>dolor sit</strong>
          <p class="box3-paragraph">amet, <em>consectetur</em> adipisicing elit, <strong>sed do eiusmod</strong> tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div id="box4" class="box" data-atr="box4">
          <h4>Box 4</h4>
          <ul>
            <li>About this document</li>
            <li><a href="#">JavaScript DOM Manipulation</a></li>
            <li><a href="#">Learn With Zonayed</a></li>
          </ul>
        </div>
      </div>
    </div>
    <script src="script.js" charset="utf-8"></script>
</body>
</html>

 */}

//  আমরা চাচ্চি box1 ইলিমেন্ত তার আগে-পরে নতুন ইলিমেন্ত ডুকাতে । এইজন্য ইলিমেন্ত কে সর্ব প্রথম ধরে নিতে হবে । 

// let box1 = document.getElementById('box1');

//  let newDiv = document.createElement("div")
// newDiv.innerText = 'this is div'
// let newParagraph = document.createElement("p")
// newParagraph.innerText = 'this is paragraph'
// let newList = document.createElement("li")
// newList.innerText = 'this is list'
// let newSpan = document.createElement("span")
// newSpan.innerText = 'this is span '

// box1.insertAdjacentElement("beforebegin", newdiv);

// box1.insertAdjacentElement("afterbegin", newParagraph);

// box1.insertAdjacentElement("beforeend", newList);

// box1.insertAdjacentElement("afterend", newSpan);


// ৬। ইলিমেন্ত এক জায়গা থেকে অন্য জায়গায় নিয়ে যাওয়া - 

// *** একটা ইলিমেন্তকে  অন্য আরেকটা ইলিমেন্তে্র শেষের দিক থেকে বাঁ লাস্ট চাইল্ড বানাতে দুটি  মেথড ব্যবহার করা হয়। 


  // ## apendChild()  এখানে অবশ্যই একটা এইচটিএমএল ইলিমেন্ত দিতে হবে , এখানে টেক্সট ডুকানো যায় না । 
  // ## apend()   এখানে টেক্সট ডুকানো যায় ।  এখানে মাল্টিপল এইচটিএমএল ইলিমেন্ত ডুকানো যায় । 

// let box1 = document.getElementById('box1');


// box1.appendChild(newDiv);

// box1 এর লাস্ট চাইল্ড হবে newDiv

// ***  একটা ইলিমেন্তকে  অন্য আরেকটা ইলিমেন্তে্র শুরুর  দিক থেকে বাঁ ফাস্ট  চাইল্ড বানাতে এই মেথড ব্যবহার করা হয়। box1.insertBefore(firstParamite, secondParamiter)

// fistParamiter = যে ইলিমেন্ত অ্যাড করব সেটা দিতে হবে ।

// secondParamiter = যে ইলিমেন্তের  আগে/চাইল্ড হিসাবে অ্যাড করব সেটা দিতে হবে । 

// box1 এর ফাস্ট চাইল্ড হবে newDiv

// let box1h4 = document.querySelector("#box1>h4") চাইল্ড হিসেবে অ্যাড করতে এভাবে দিতে হবে। 

// box1.insertBefore(newDiv, box1h4)
 

// ৭। ইলিমেন্ত রিমুভ করা - 

//     ** একটা ইলিমেন্তের আগের ইলিমেন্ত রিমুভ করা - 

//     এটা করতে previousSibling  ব্যবহার  করতে হবে যেমন -

//     newParagraph.previousSibling.remove()

//     ** একটা ইলিমেন্তের পরের  ইলিমেন্ত রিমুভ করা - 

//     এটা করতে nextSibling  ব্যবহার  করতে হবে যেমন -

//     newParagraph.nextSibling.remove()

//     ** প্যারেন্ট ইলিমেন্ত দিয়ে চাইল্ড ইলিমেন্ত রিমুভ করা- 

//     box1.childNodes[1].remove()

//     ** ইলিমেন্ত সরাসরি  রিমুভ করা- 

//     document.getElementById('box3').remove()





// *****      ইভেন্ট ফায়ার           ******



// ১। কমন ডোম ইভেন্ট -

// আমাদের ডোমে কমন কিছু  ইভেন্ট আছে যেমন - 

//   ##  onchange : ইলিমেন্তে কোন ধরনের পরিবর্তন আসলে এই  ইভেন্ট ঘটবে । আমরা যখন ফর্মের ইনপুট ফিল্ড ডাটা দেই , তখন সেই ইনপুট ফিল্ডের ভ্যালু চেঞ্জ হয় । সেই চেঞ্জর সময়  এই ইভেন্টটা কাজ করে । 


//   ##  onclick :  ইলিমেন্তের উপর ক্লিক করলে এই ইভেন্ট ঘটবে । 


//   ##  onmouseover:  খালি পয়েন্টার কাঙ্ক্ষিত ইলিমেন্তের উপর নিলেই এই ইভেন্টটা ঘটবে । 


//   ##  onmouseout : কোন কাঙ্ক্ষিত  ইলিমেন্ত  থেকে মাউসের  পয়েন্টার সরালেই  এই ইভেন্টটা ঘটবে ।


//   ##  onkeydown : কি বোর্ডের কোন কি চাপলে এই ইভেন্ট টা ঘটবে । 


//   ##  onload : ব্রাউজার ইলিমেন্ত লোড শেষ করলেই এই ইভেন্টটা ঘটবে ।   

//   এই ইভেন্ট গুলা আমরা দুই ভাবে হ্যান্ডল করতে পারি --




//   প্রথমত - ইনলাইন স্টাইলে অ্যাটরিবিউট আকারে ইভেন্ট হ্যান্ডল করতে পারি । যেমন-  আমাদের ডকুমেন্ট বক্স ৪ এর প্রথ লিস্ট আইটেমে সরাসরি ক্লিক ইভেন্ট লাগাতে চাই ।

//   <li onclick="alert(' This document is created by north foundation ')"> About this document</li>



//   দ্বিতীয়ত - একটা ফাংশন আলদা লিখে সেটা অন ক্লিক ইভেন্টে কল হবে সেটা ও  বলে দিতে পারি । এক্ষেত্রে ফাংশন টা অবশ্যই Script.js ফাইলে লিখতে হবে । 

//   function showAlert() {
//     alert('This document is created by north foundation ')
//   }
//   এখন লিস্ট আইটেমের অন ক্লিক ইভেন্টে ফাংশনটা কল করে দিতে হবে । 

//   <li  onclick='showAlert()' >About this document</li>



//   *** ইলিমেন্ত সিলেক্ট করে সেই ইলিমেন্ত ইভেন্ট লাগানো - 

//   আমাদের বক্স ১ একটা বাটন আছে বাটনে একটা ইভেন্ট লাগাবো প্রথমে বাটন টা সিলেক্ট করে নেই । 
//   const btn = document.getElementById('btn-click-me');
//   btn.onclick = function () {
//     console.log('Button was clicked ');
//   }

//   আমরা চাইলে  এইরকম ইলিমেন্ত সিলেক্ট করে নিয়ে  সব ধরনের ইভেন্ট এ কাজ করতে পারি । 


// ২।   ইভেন্ট  লিসেনার -

// একসাথে অনেক গুলা ইভেন্ট নিয়ে কাজ করতে চাইলে সেই মেথড হচ্ছে addEventListener(paramiter-1, paramiter-2) 

// paramiter-1 : এখানে বলে দিতে হবে কোন ইভেন্ট টা কাজ করবে যেমন - ক্লিক, মাউসওভার,  মাউসডাউন ইতাদি । 
// paramiter-2 : এখানে ইভেন্ট এর জন্য ফাংশনটা লিখতে হবে, ফাংশন অন্য কোথাও লিখা থাকলে শুধু ফাংশন নেম দিতে হবে । 

// const box1 = document.getElementById('box1');

// box1.addEventListener('click' , function(){
//   console.log('Button was clicked ')
// })


// ৩। ইভেন্ট মডিফাই করা -

  //  ইভেন্ট বাবলিং - 

//  প্যারেন্ট এবং চাইল্ড ইলিমেন্ত এ  যদি ইভেন্ট লাগানো থাকে সেক্ষেত্রে আমরা চাইল্ড ইলিমেন্ত এর ইভেন্ট রান করালে প্যারেন্ট এলিমেন্ত ইভেন্ট অটোমেটিক রান করবে । অর্থাৎ এখানে নিচ থেকে উপরে বাঁ চাইল্ড থেকে প্যারেন্টে যাবে ।   এটা ইভেন্ট এর ডিফলট আচরন, এটাকে ইভেন্ট বাবলিং বাঁ বাঁবল  আপ বলে । 
 

// let box1 = document.querySelector('#box1').addEventListener('click', () => {
//   console('Box one is clicked ')
// })

// let btn = document.querySelector('btn-click-me').addEventListener('click', () => { 
//   console.log('button  was clicked '); 
// })



// এই বাবল আপ বন্ধ করতে চাইলে -

// btn.addEventListener('click', (event) => {
//   event.stopPropagation();
//   console.log('Button was clicked ');
// })

// এখানে হ্যান্ডলার ফাংশনে ইভেন্ট নামে একটা প্যারামিটার নিয়েছি , তারপর সেই প্যারামিটারের একটা মেথড stopPropagation() বাহহার করেছি । 


// ইভেন্ট কাপচারিং - 

//  প্যারেন্ট এবং চাইল্ড ইলিমেন্ত এ  যদি ইভেন্ট লাগানো থাকে সেক্ষেত্রে আমরা চাইল্ড ইলিমেন্ত এর ইভেন্ট রান করালে প্যারেন্ট এলিমেন্ত ইভেন্ট অটোমেটিক রান করবে । অর্থাৎ এখানে প্যারেন্ট থেকে চাইল্ড এ যাবে । এই জন্য  প্যারেন্ট এর  addEventListener() এর থার্ড প্যারামিটার true করে দিতে হবে । এটা বাই ডিফলট false থাকে । 

// let box1 = document.querySelector('#box1').addEventListener('click', () => {
//   console('Box one is clicked ')
// }, true  )

// let btn = document.querySelector('btn-click-me').addEventListener('click', () => { 
//   console.log('button  was clicked '); 
// })


  
// ৪। ইভেন্ট ডেলিগেশন - 

// একটা প্যারেন্ট ইলিমেন্তের অনেক গুলা চাইল্ড থাকতে পারে সেক্ষেত্রে,

// সবার জন্য আলদা আলদা ইভেন্ট হ্যান্ডল করাটা ঝামেলার কাজ । তাই আমরা প্যারেন্টে ইভেন্টটা হ্যান্ডল করতে পারি , যেহেতু দিন শেষে সেই চাইল্ড ইলিমেন্তের উপর ঘটে যাওয়া ইভেন্ট বাঁবল আপ করে প্যারেন্ট ইলিমেন্তেই আসবে । 

// যেমন- বক্স ৪ এ তিনটা লিস্ট আইটেম আছে এখন সবাইকে আলদা আলদা ইভেন্ট দিয়ে হ্যান্ডল না করে একটা ইভেন্ট দিয়ে হ্যান্ডল করব । হ্যান্ডলার ফাংশনে আমরা যে ইভেন্ট প্যারামিটার নিয়েছি এটা একটা জাভাস্ক্রিপ্ট অবজেক্ট এর target নামক মেথডে id ডিটেক্ত করা যায় । এখানে যেই ইলিমেন্ত ক্লিক করব তার  id ডিটেক্ত করবে । 


//     let box4 = document.getElementById('box4');
    
//     box4.addEventListener('click', (event) => {
//       if(event.target.tagName === 'Li') {
//         console.log('clicked on a list item ')
//       }
//       else{
//         console.log('nothing else !')
//       }
//     })


// এভাবে বাবল আপ হওয়া ইভেন্টকে কাপচার করে হ্যান্ডল করার প্যাটার্ন কে মুলত ইভেন্ট ডেলিগেশন বলে । 


// part - 2  code with kashi = youtube chanel




// <html lang="en" dir="ltr">
//   <head>
//   <meta charset="utf-8">
//   <title>Events - JavaScript DOM Manipulation</title>
//   <link rel="stylesheet" href="style.css">
// </head>
// <body>
//  <div id="grandparent" class="grandparent">
//     <div class="parent" id="parent">
//         <div class="child" id="child"> 
//            Event deligation 
//         </div>
//     </div>
//  </div>

// <script>

   
//    document.getElementById('grandparent').addEventListener('click', (event) => {
    
//     if(event.target.id === 'child'){
//         console.log('child was clicked ')
//     }
//     else if(event.target.id === 'parent'){
//         console.log('parent was clicked ')
//     }
//     else if(event.target.id = 'grandparent'){
//         console.log('grandparent was clicked ')
//     }
// })


// </script>


// </body>
// </html>



// ৫। Debounce - 
  
// মনে করেন একটা ই- কমার্স সাইটে একটা ব্যাগ অর্ডার করবেন সেক্ষেত্রে বাটনে ক্লিক করে কার্টে অ্যাড করতে হবে, এখন যদি ইউজার ভুলে  একসাথে অনেক গুলা ক্লিক করে ফেলে তখন একি আইটেম যত গুলা ক্লিক করবে, ততগুলা সিলেক্ট হবে। 
// কিন্তু আমরা চাচ্চি ইউজার ভুলে করলেও সার্ভার রিকুয়েস্ত যাতে একবারই যায় । এই সমসা সমাধান করতে Debounce ব্যবহার করা হয়। 

                         
//                          অথবা - 

//  ইউজার যদি কোন কিছু সার্চ করতে চায়, প্রত্যেক কি আপে রেজাল্ট শো করাবে এখন কেউ যদি খুব দ্রুত টাইপ করে সেক্ষেত্রে একটু  ইন এফিসিয়েন্ত হতে পারে । সেই জন্য ইউজার চাচ্চে তিনটা বাঁ চারটা লেটার লেখার পর আপনি রিকুয়েস্তটা পাঠাবেন । 



// Debounce - এইখানে ইভেন্ট ট্রিগার হওয়ার পর ফাংশন কলটাকে একটু delay করে দেয়া হয়, delay period এর ভিতরে আবার event trigger হলে পূর্বের ফাংশন কল cancel করে আবার delay করে দেয়া হয়। মানে এইখানে event যদি delay time এর ভিতরে ট্রিগার হতেই থাকে তাহলে যতক্ষণ না event trigger delay time পর্যন্ত বন্ধ থাকে ততক্ষণ ফাংশনটি কলই হবে না, event trigger delay time cross করার পর একবারই ফাংশনটা কল হবে।
 
 


// const button = document.getElementById("button");

// // debounce handler
// function debounce(fn, delay) {
//   let timeoutId;

//   return function () {
//     if (timeoutId) {
//       clearTimeout(timeoutId); 
//     }
//     timeoutId = setTimeout(() => {
//       fn();
//     }, delay);
//   };
// }

// button.addEventListener(
//   "click",
//   debounce(function () {
//     console.log("clicked");
//   }, 500)
// );



// ৬। throttling - 

// Throttle - এইখানে একটা নির্দিষ্ট সময়ের ভিতরে সেট করে দেয়া হয় কতবার ফাংশনটি কল হবে। যদি বলে দেয়া হয় যতবারই ইভেন্ট ট্রিগার হোক না কেন ১০০ মিলি সেকেন্ডের ভিতরে ২ বার ফাংশনটি কল হবে , এক্ষেত্রে ১০০ মিলি সেকেন্ড পর পর ২ বার করে ফাংশনটি কল হতেই থাকবে যদি ইভেন্টটি ট্রিগার করতে থাকা হয় , কিন্ত ১০০ মিলি সেকেন্ডে যতবারই ইভেন্ট ট্রিগার করা হোক না কেন ২ বারের বেশি কল হবে না আবার ডিবাউন্সের মতো ইভেন্ট ট্রিগার হতে থাকলেও প্রতি ১০০ মিলি সেকেন্ড পর পর ২ বার করে ফাংশনটি কল হতে থাকবে


// ৭। ফরম ইভেন্ট -

// প্রথমে ইনপুট ফিল্ড সিলেক্ট করে রাখব 

// const input = document.querySelectorAll('input')


// এরপর আমাদের বাটন টা সিলেক্ট করে রাখব ।

// const submitBtn = document.querySelector('button[type=submit]')


// *** ইনপুট ফিল্ড চেঞ্জ ইভেন্ট -
// ইনপুট ফিল্ড এ কোন রকম  চেঞ্জ  আসলে এই  ইভেন্ট ঘটবে  -

// input[0].addEventListener('change', () => {
//     console.log('change event on input ')
// })

// ব্রাউজারের কনসলে এই লেখা টা প্রিন্ট হবে change event on input

// ইনপুট ফিল্ডের ভ্যালু পেতে চাইলে আগের ইনপুট ফিল্ডের ইভেন্ট টা একটু মডিফাই করতে হবে -

// input[0].addEventListener('change', (event)=>{
//     console.log(event.target.value)
// })



//  ****  interview question   **** 

// what is the difference between HTMLAllCollection and NodeList ??

// HTMLCollection items can be accessed by their name, id, or index number.    এখানে নাম , আইডি, ইনডেক্স নাম্বার দিয়ে এক্সেস করা যায় । 

// NodeList items can only be accessed by their index number.      এখানে শুধুমাত্র ইনডেক্স নাম্বার দিয়ে এক্সেস করা যায়











// *************          B O M            ***************  




