let div1 = document.querySelector('div');
div1.addEventListener('click', function hello() {
    div1.style.transition = '1s';
    div1.style.opacity = '0';
    div1.removeEventListener('click', hello);
    let interval = setInterval(function() {
        setTimeout(function() {
            div1.style.transition = '1s';
            div1.style.opacity = '1';
            div1.addEventListener('click', hello);
        }, 1000);
        clearInterval(interval);
    }, 1000);
});