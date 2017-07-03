// global console

/*
** ============ Syntax ==============
*/
    // some vars
var x = 10,
    y = 20,
    z = 100;
    name = "drmas",
    Name = "issam",
    firsName = "Asmail",
    theLastName = "ALfadil";

// simplon function
document.getElementById('test').innerHTML = name;

// condition
if (x + y === 40){
  console.log("Good");
} else {
  console.log("bad");
}

/*
** ========== Variables ===============
** Start With Letters, Underscore, $
** var = avasript Variables keyword
** myPrice = Variable name
** ( = ) = Assignment opertaor
** 100 = Variable Value
*/
var mainPrice = 450,
    mySmallDiscount = 50,
    myMediumDiscount = 100,
    myBigDiscount = 250;

document.getElementById("price").innerHTML = mainPrice;
document.getElementById("product1").innerHTML = mainPrice - mySmallDiscount; // 450 - 50 = 400
document.getElementById("product2").innerHTML = mainPrice - myMediumDiscount; // 450 - 100 = 350
document.getElementById("product3").innerHTML = mainPrice - myBigDiscount; // 450 - 250 = 200


// =========== data Type ====================
/*
** Boolean: True, False
*/
// check if the product Has Discount or
// true = yes has Discount
// false = no it Has no Discount

var hasDiscount = false; // False Has No Discount

  if (hasDiscount === true){
    var dataType = 350; // if Has Discount
  } else {
    var dataType = 450; // if Has No Discount
  }
  document.getElementById('data-type').innerHTML = dataType;

/*
** Array: ["facebook.com", "Yourube.com", "google.com"]
*/
var socialWebsites = ["facebook.com", "Yourube.com", "google.com"];
document.getElementById('social-Websites').innerHTML = socialWebsites[2];

/*
** Object: {firsName: "drmas", lastNmae: "Issam"}
*/
var myinfo = {firsName: "drmas", lastNmae: "Issam"};
document.getElementById('my-info').innerHTML = myinfo.firsName;

/*
** String: "JavaScript"
*/
var MyName = "drmas issam 'Hello' \"Scpie\"";
document.getElementById('my-name').innerHTML = MyName;

/*
** Number: 27
*/
var myAge = 27;
document.getElementById('my-age').innerHTML = myAge;

/*
** ============ Concatention ================
*/
var myName = "Issam",
    MyAge = 27,
    MyCountry = "Soudan";

document.getElementById('con-catention').innerHTML =
"<span style=\"color:red\"> My Name is </span>: " + "<span style='color:green'>" + myName + "</span>" + "<br>" +
"My Age Is: " + myAge + "<br>" +
"My Country IS: " + MyCountry;

/*
** ========= OutPut =============
** Alert
** document.write
** console/log
*/
var myName = "IssamDrmas",
    myAge = 27,

myDiv = document.getElementById('out-put');
// aler(drmas);
// console.log("drmas");
//document.write("Hello My Name Is " + myName + " And My Age Is " + Myage);
myDiv.innerHTML = "Hello My Name Is " + myName + " And My Age Is " + myAge;

/*
** Operators
** we use +, -, *, / and %
*/
var x = 100,
    y = 200,
    z = y + y; // z = 100 + 200 = 300
document.getElementById("operators").innerHTML = z;
var myCounter = 1;
/* alert(myCounter++); */

/*
** Conditions
** If, Else if, Else conditions
*/
var ticketPrice = 2000; // ticket price Variable

if(ticketPrice < 1500){ // if the ticket cheaper than 1000
  document.getElementById("conditions").innerHTML = ("Yes its cheap"); // display message that its cheap
} else if (ticketPrice == 2000){ // if the ticket price is 2000
  document.getElementById("conditions").innerHTML = ("Yes its good Price");
} else {
  document.getElementById("conditions").innerHTML = ("No its Expensive"); // display message that its Expensive
}
/*
var yourAge = prompt("Whats Your Age?");

if (yourAge < 18){
  document.getElementById("conditions").innerHTML =
  "Sorrry Your Age is " + yourAge + " You Are Not Allowed Here";
} else {
  document.getElementById("conditions").innerHTML =
  "Hello Your Age is " + yourAge + " You Are Welcome Here";
}
*/

/*
** Conditional Operators
** >, <, >= and <=
** ( = ) Assignment opertaor
** ( == ) Comparison opertaor compare Value
** ( === ) identical opertaor compare data type + Value
*/
var myPrice = 50,   // Data type <= Number
    drmas   = "50"; // data type <= String
if (drmas === 50){  // data type <= Number
  document.getElementById("cond-oper").innerHTML = "Good";
} else {
  document.getElementById("cond-oper").innerHTML = "Bad";
}

/*
** Logical opertaor
** ( ! ) Not Equal
** ( != ) ! not = Equal (not Equal)
** ( !== ) Not identical
** ( && ) And
** ( || ) Or
*/
var age = 32,
    name = "drmas",
    address = "paris";
if (age === 32 && // if tha age value data type = 32 then true
   name == "drmas" && // if tha name value and data type = drmas tne true
   address == "paris"){ // if the address value and data type = paris then true
  document.getElementById("Logi-oper").innerHTML = "Good Your Name is " + name;
} else{
  document.getElementById("Logi-oper").innerHTML = "Bad";
}

/*
** Function = Function keyword in JavaScript
**
*/
function sayHi() {
  "use strict"

  var myName = "Drmas";
  if (myName === "drmas"){
  alert("Hello " + myName + " You are Welcome");
} else {
  alert("Hello " + myName + " You are not Welcome");
}
}

/*
** function return
**
*/
function myAgeInHours() {
  var myAge = 27;
  return myAge * 365 * 24;
}
var hoursCalc = myAgeInHours();
document.getElementById("func-return").innerHTML = "Your Age In Days = " + hoursCalc + " Hours";

/*
** function Parameters
**
*/
function sayHello(firstName, middleName, lastNmae) {
  "use strict"

  return "Hello " + firstName + " " + middleName + " " + lastNmae + " How are you today";
}

document.getElementById("func-paramer").innerHTML = sayHello("Issam", "drmas", "Abdallah");

/*
**  function Advanced and Self Invoke
**
*/
/*
(function sayWecome() {
alert("Welcime to my Website");
})();
*/
function convertUsdToRiyal() {
var amount = document.getElementById("func-self").value,
    result = amount * 3.75; // 100 * 3.75 = 375

messageamount = document.getElementById("messageamount");

if (amount === ""){ // Amount can(t be empty)
  messageamount.innerHTML = "<span style='color:red'>This filed can't be empty</span>";
} else if (isNaN(amount)){ // Amount Must Be numbers
  messageamount.innerHTML = "This Filed Accept numbers only";
} else if (amount === "0"){ // Amount Can't Be 0
  messageamount.innerHTML = "The Value Must Not Be 0";
}
else if (amount < 0){ // Amount can't be Negative
  messageamount.innerHTML = "The Value Must Not Be Negative Number";

} else if (amount > 100000){ // Amount Can't Be More then 1000000
  messageamount.innerHTML = "The Value Can't Be More then 100000";
}

else {
  messageamount.innerHTML = amount + " Dollar is Worth " + result + " Riyal";
}
}


/*
** Switch (expression){ case x: code to excute break;
** case x: code to excute break; default code to excute }
**
*/
function funSwitch() {

var season = document.getElementById("case-break").value;

switch (season){
  case "winter":
  document.getElementById("switch").innerHTML = ("Winter is Cold");
  break;

  case "summer":
  document.getElementById("switch").innerHTML = ("Summer is Too Hot");
  break;

  case "stumun":
  document.getElementById("switch").innerHTML = ("Autumn is very Good");
  break;

  case "spring":
  document.getElementById("switch").innerHTML = ("Spring is Amazing");
  break;

  default:
  document.getElementById("switch").innerHTML = ("<span style='color:red'> You Didn't Enter A Season Name </span>");
  break;

}
}


/*
** Scope
** Local Scope and Global Scope
*/
var myName = "Issam"; // Global Scope
console.log(myName); // Global
function myNameFunc() {
  var myName = "Drmas"; // local Scope
  document.getElementById("scopeid").innerHTML = myName;
}
 myNameFunc();

 var x = 1;
 // Scope A
 // x is accessed from Everywhere
 function scopeFanc() {
   // Scope B
   // x is accessed from scope B + scope C
 var x = 5;
 function testChild() {
   // Scope C
   var x = 100,
      calc = x + 2; // 100 + 2 = 102
      console.log(calc);
 }
 return testChild();
 }
scopeFanc();
 console.log(x + 2); // 1 + 2 = 3

 /*
 ** Events Explain
 ** Window Onload, Onclick, Ondblclick
 */
 function changeMeClick() {
   document.getElementById("events-ex1").innerHTML = "You Clicked On The Button";
 }
 function changeMeDblClick() {
   document.getElementById("events-ex1").innerHTML = "You Double Clicked On The Button";
 }
/*
** Onkeydown, Onkeypress, Onkeyup
*/
var myInput1 = document.getElementById("input"),
    myDiv1 = document.getElementById("div1");

myInput1.onkeyup = function () {
  myDiv1.innerHTML = myInput1.value * 3.75;
};

/*
** Onmouseover, Onmouseout, Onchange
*/
var myDiv2 = document.getElementById("events-ex3");
    myDiv2.onmouseover = function () {
      myDiv2.innerHTML = "You hover me Div 2";
    };
var myInput = document.getElementById("inputChange"),
    myDiv = document.getElementById("divchange"),
    myCurrency = document.getElementById("currency");

myCurrency.onchange = function () {
  myDiv.innerHTML = "Worth " + myInput.value * myCurrency.value + " Egyptien Pound";
}

/*
** Array
** var arrayName = ["Element1", "Element2", "Element3"];
*/
var friendOne = "drmas",
    friendTwo = "Issam",
    friendThree = "Asmail",
    friendFour = "AlFadil",
    friendFive = "Abdallah";

var friends = []; // Literal way
    friends[0] = "drmas"; // 0 index
    friends[1] = "Issam"; // 1 index
    friends[2] = "Asmail";
    console.log(friends);
  document.getElementById("arr-ay").innerHTML = friends;

if (Array.isArray(friendOne)){
  console.log("Good this is array");
} else {
  console.log("No this not array");
}
/*
** Array Length
*/
var friend = [
   "drmas",
   "issam",
   "asmail",
];
console.log(friend.length); // get length
console.log(friend);
friend.length = 2; // Set Length To 2
console.log(friend);
  document.getElementById("arr-length").innerHTML = friend;

  /*
  ** Array Convert To String-
  */
  var friend = [
     "drmas",
     "issam",
     "asmail",
  ];
  console.log(friend); // this is array
  friend = friends.toString(); // convert is to String
  console.log(friend); // String

  var myDate = new Date(),
      myString = myDate.toLocaleString();
      console.log(myDate);
      console.log(myString);
document.getElementById("arr-convert").innerHTML = myString;
      friend = friends.join(" | ");
      console.log(friend);

/*
** Array Add Itms
** Push, unshift, splice, pop, shift,
** arrayName.splice(index, how many, item1, item2, item3)
** sort, reverse
** slice(Start, End);
** concat(item1, item2);
** search = indexOf("value to seach", staring index);
*/
var friends = [
   "drmas",
   "issam",
   "asmail",
   "Alfadil",
   "Abdallah",
   "Aly",
   "Esra",
   "Tago"
];
console.log(friends);
friends.splice(3, 0, "Aslam");
console.log(friends);
friends.sort();
console.log(friends);
friends.reverse();
console.log(friends);
document.getElementById("arr-item").innerHTML = friends;

var workFriends = [
    "Ihab",
    "Amani",
    "Kother",
    "gehen"
];
var allFriends = friends.concat(workFriends);
console.log(allFriends);
var specialFriend = friends.indexOf("Esra");
console.log(specialFriend);
console.log(friends[specialFriend]);
document.getElementById("arr-all").innerHTML = "My friends are:" + friends;
document.getElementById("arr-spec").innerHTML =
"My special Friends are: " + "<span style='color:red'>" + friends[specialFriend] + "</span>";

/*
** String Methods
** typeof, toString,
** Locate a string.
** Syntax: indexOf(Value, Strart Position) // default = 0
** Syntax: lastIndexOf(Value, Strart Position) // default = 0
** Syntax: Search(Value);
** Syntax: Split(separator, limit);
** Syntax: Slice(start, End);
** Syntax: SubStr(Start, length);
** Syntax: Substring(start, End);
** Syntax: charAt(index);
** Syntax: charCodeAt(index);
** Syntax: replace(value, new value);
** Syntax: string.fromCharCode(Num1, Num2, Num3);
** Syntax: concat(string, string, string, string);
** Convert Letters. Syntax: myName.toLowerCase(); and ToUpperCase();
** Syntax: myName.trim(); and Link();
** Syntax: Chain. tostring().replace(/0/g, 1).split(""); Take All Tags
*/

var myString = "I Love \\JavaScript\\";
console.log(myString);
console.log(typeof (myString));
console.log(myString.length);
document.getElementById("string-meth").innerHTML = myString;

var myNumber = 100;
console.log(myNumber);
console.log(typeof (myNumber));

var myNewNumber = myNumber.toString();
console.log(myNewNumber);
console.log(typeof (myNewNumber));

var myMainString = "I Love JavaScript And Php";
    mySplittedString = myMainString.split(" ", 3);
    console.log(myMainString);
    console.log(mySplittedString);

var myMainString = "I Love JavaScript And Php";
    mySubString = myMainString.substr(6, 10);
    console.log(mySubString);
    console.log(typeof (mySubString));

var myString = "I Love JavaScript Too Much ";
    myChar = myString.charAt();
    console.log(myString);
    console.log(myChar);

var myString = "I Love JavaScript Too Much javaScript is Very Fun";
    myReplace = myString.replace(/JavaScript/gi, "PHP");
    console.log(myString);
    console.log(myReplace);

var myMessage = String.fromCharCode(79, 115, 97, 109, 97);
console.log(myMessage);

var myString = "I LOVE JS",
    mySmallstring = myString.toLowerCase();
    console.log(myString);
    console.log(mySmallstring);

/*
** For Loop Syntax
** for (initialzation; condition; final expression){// Statement}
** initialzation: executed before the loop once
** condition: define the condition to run the loop
** final expression: executed everytime the code run
*/
var friends = ["drmas", "issam", "asmail", "Alfadil"];
var i;
for (i = 0; i < friends.length; i++){
  console.log(friends[i]);
  document.getElementById("for-loop").innerHTML = friends[2];
}

/*
** For In loop Syntax
** for (Variable in object){ if (object.hasownproperty(Variable){ // Statement })}
*/

var myCar = {
  colour: "red",
  type: "sedan",
  price: "50,000",
  model: "2017"
};
console.log(myCar.model);

var prop;
for (prop in myCar){
 if (myCar.hasOwnProperty(prop)){
   console.log(prop + ": " + myCar[prop]);
 document.getElementById("for-in").innerHTML = (prop + ": " + myCar[prop]);
 }
}

/*
** for loop Advanced
**
*/
var i = 0;
for (;;){
  if (i > 10) break;
  console.log(i);
  i++;
}
function generateYears(Start, End) {
  var years;
document.write("<select>");
for (years = Start; years <= End; years++){
  document.write("<option value='" + years +  "'>" + years + "</option>");
}
document.write("</select>");
}
generateYears(1900, 2017); // drmas
generateYears(1950, 2020); // issam

/*
** While Syntax
** While (condition){ // Statement}
** Syntax do/ while
*/
function generateYears(Start, End) {
  var years = Start;
document.write("<select>");
while (years <= End){
  document.write("<option value='" + years +  "'>" + years + "</option>");
  years++
}
document.write("</select>");
}
generateYears(1900, 2017); // drmas
generateYears(1950, 2020); // issam
generateYears(2000, 2012); // issam

var i = 0;
do{
  document.getElementById("do-while").innerHTML = i;
  i++;
} while (i <= 10);

/*
** Loop Control
** break, Continue
*/
var i, x;
MainLoop:
for (i = 1; i < 5; i++){
ChildLoop:
  for (x = 15; x < 20; x++){
    if (x === 17){
      break MainLoop;
    }
    console.log(i + " => " + x);
    document.getElementById("loop-cont").innerHTML = (i + " => " + x);
  }
}

/*
** MATH
** Ceil Syntax: Math.ceil(x);
** Floor Syntax: Math.floor(x);
** Round Syntax: Math.round(x);
** Min, Max Syntax: Math.min(val, val, val,);
** Random Syntax: Math.random(x);
*/
var x = Math.max(100, 32, 432, 6543.34);
console.log(Math.round(x));

var x = Math.random(),
MEndPattern = 1000;
console.log(x * 20);
document.getElementById("ma-th").innerHTML = ((Math.floor(x * MEndPattern) + 1));

/*
** Regular Expression Syntax:
** /pattern/attribtes
** Search | Replce | Match | Split | Test
** attribtes List :-
** [i] => Case Insensitive
** [g] => Global Search
** [m] => Multi line Search
** [...] Search For Character
** [^...] Not Not Character
** [a-z] Range: Small Letters and Capital and Numbers and Not [^..]
** [A-g] = Range[A-Z] Range[a-g]
** [0-9a-Z] Double Range
** Quantifiers:
** Letters+ => Work Contain One Letter
** Letter {Number} => Work Contain Number of Letter
** Letter{Number, Number} => Work contain Number or Number
** Letter{Number,} => Work Contain At Least Number
 */

var string = "I Love JavaScript developper ",
    result = string.replace(/L/gi, "@");
    console.log(result);
    document.getElementById("reg-ex").innerHTML = result;

/*
** Date And Time
** Syntax: new Date(); // Print Current date & time
** new Date(Millseconds); // Print Millseconds From UTC 1 Jan 1970 00:00:00
** new Date(DateString); Can Add Date String
** new Date(year, Month, Day, [Hour, Minutes, Seconds, Millseconds])
*/
var thedate  = new Date();
console.log(thedate);

var thedate  = new Date(10000); // 10 Seconds
console.log(thedate);

var thedate  = new Date("October 25, 1984 12:20:50");
console.log(thedate);

var thedate  = new Date(1984,9,25,11,20,30,10);
console.log(thedate);

/*
** Date Format
** Full, Long, Short, Iso
** js Igonre Commas
** getdate() // day Of The Month 1-31
** getDat() // Day Of The Week 0-6
** getFullYear() // Get The Full Year
** GetHours() // Get Hours 0-59
** GetMinutes() // Get Minutes 0-59
** GetSeconds() // Get Seconds 0-59
** GetMilliseconds() Get Milliseconds 0-999
** GetTime() // Number of Milliseconds From 1970 Or Specific date
** GetTimezoneOffset() Get Def Between UTC & Your Local Time In Minutes
*/
/*
toISOstring(), toDateString(), toTimeString();
*/
var theDate = new Date(),
     theDay = theDate.getTime();
  console.log(theDate);
  document.getElementById("do-time").innerHTML = theDate;
