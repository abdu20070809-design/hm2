
let button = document.querySelector('#btn')

btn.onmouseenter = () => {
    let maxTop = window.innerHeight - btn.offsetHeight;
    let maxLeft = window.innerWidth - btn.offsetWidth;
    
    let randomTop = Math.floor(Math.random() *maxTop);
    let randomLeft = Math.floor(Math.random() *maxLeft);

    btn.style.top = randomTop + 'px';
    btn.style.left = randomLeft + 'px';
}