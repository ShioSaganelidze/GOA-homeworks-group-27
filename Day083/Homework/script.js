function updateTime() {
    let timer = new Date();
    document.getElementById('time').innerHTML = timer.toLocaleTimeString();
    
}

setInterval(updateTime, 100);