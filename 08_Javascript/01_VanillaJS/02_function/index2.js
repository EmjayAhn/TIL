const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// function handleClick() {
//     const hasClass = title.classList.contains(CLICKED_CLASS);
//     if (!hasClass) {
//         title.classList.add(CLICKED_CLASS);
//     } else {
//         title.classList.remove(CLICKED_CLASS);
//     }
// }

// 위와 같은 기능을 하는 코드
// 클래스가 있으면 추가하고 없으면 빼는 것.
function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}
init();

