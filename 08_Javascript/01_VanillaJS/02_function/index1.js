// DOM FUNCTION !!!

const title = document.getElementById('title');
const BASE_COLOR = 'black';
const OTHER_COLOR = 'red';
const OTHER_COLOR1 = 'blue';

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}
function handleMouseEnter() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR1;
    } else {
        title.style.color = BASE_COLOR;
    }
}
function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
    title.addEventListener("mouseenter", handleMouseEnter);
}
init();

function handleOffline() {
    console.log("BYEBYE!!!");
}
function handleOnline(){
    console.log("WELCOME BACK!!!");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);