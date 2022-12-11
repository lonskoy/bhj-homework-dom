const reveal = Array.from(document.querySelectorAll('.reveal'));

function inVisible(el) {
    const { top, bottom} = el.getBoundingClientRect();
    /*console.log(top);
    console.log('Высота экрана: ' + window.innerHeight);*/

    if(top > window.innerHeight || top < 0) {
        el.className = 'reveal';
    }
    else {
        el.className = 'reveal reveal_active';
    }
}

setInterval(() => {
    inVisible(reveal[0]);
    inVisible(reveal[1]);

}, 1000);