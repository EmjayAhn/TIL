// Basic Function 1

function sayHelloJS(name, age){
    console.log("Hello,", name, "I am", age, "years old");
    console.log(`Hello, ${name} I am ${age} years old`);
}

function sayReturn(name, age){
    return `Hello, ${name} I am ${age} years old`;
}

function sayCombined(name, age){
    console.log("1");
    console.log(`2`);
    return `Hello, you are${name}, ${age} olds again`;

}
sayHelloJS("Emjay", 20);

const greetings = sayReturn("Emjay", 21);
console.log(greetings);

const greetings2 = sayCombined("EMJ", 22);
console.log(greetings2);

// Basic Function 2
// 이렇게도 가능!!!

const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    multiply: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    },
    square: function(a, b){
        return a ** b;
    }
}
const plus_result = calculator.plus(5, 5);
const minus_result = calculator.minus(5, 5);
const multiply_result = calculator.multiply(5, 5);
const divide_result = calculator.divide(5, 5);
const square_result = calculator.square(5, 5);

console.log("5+5 result= ", plus_result);
console.log("5-5 result= ", minus_result);
console.log("5*5 result= ", multiply_result);
console.log("5/5 result= ", divide_result);
console.log("5^5 result= ", square_result);

/*
*
*
*   !!!! HTML SELECT !!!!
*
*
*/
// We can access the html file through 'document'
// 웹에서 우리가 Javascript로 잡는 모든 html element 는 객체화 된다!!
// DOM
console.log(document);
const title = document.getElementById("title");
console.log(title);
title.innerHTML = "CHANGED!!!!";


// Further more about DOM
console.dir(title);
title.style.color = 'red';

console.dir(document);
document.title = 'I HAVE YOU';

title_selector = document.querySelector('#title');
title_selector.innerHTML = "Again Change";
title_selector.style.color = "blue";

/*
*
*
*
*       !!! EVENTS !!!
*
*
*/

function handleResize(event){
    // console.log(event);
    console.log("I have ben resized");
}
// not window.addEventListener("resize", handleResize());
// handleResize() 이거는 지금 당장 불러!!!
// handleResize 는 Event 가 일어날때 이 function 을 불러라!!
window.addEventListener("resize", handleResize);

function handleClick(){
    title.style.color = "red";
    console.log("clicked!!");
}
title.addEventListener("click", handleClick);


/*
*
*
* if-else statement
*
*
*/
// if(condition){
//     blcok
// } else {
//     block
// }

if (5 == 5){
    console.log('hi');
} else {
    console.log('ho');
}

if ("10"===10){
    console.log("hi");
} else if ("10" === "10") {
    console.log("hello");
} else {
    console.log("ho");
}

if (20 > 5 && "emjay" === "emjay1") {
    console.log("yes");
} else {
    console.log("no");
}

const answer = prompt("This is Very Old Javascript interaction with client Agree?");
const name = prompt("What is your name?");
const age = prompt("How old are you?");
console.log(answer);
console.log(name);
if (age > 20){
    console.log("you can drink");
} else {
    console.log("you can't drink!!!");
}


