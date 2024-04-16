let btns = document.querySelectorAll('a','.btn');
let currentUrl = window.location.href;
for (let btn of btns) {
if (btn.href === currentUrl) {
btn.classList.add('active');
break;
}
}