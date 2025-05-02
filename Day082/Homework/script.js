function starttimer() {
    let timebox = document.getElementById('timebox').value;
    let messagebox = document.getElementById('messagebox').value;
    let timelimit = Number(timebox);

    if (timelimit < 0) {
        alert('Please enter a valid time in milliseconds.');
        return undefined;
    }

    setTimeout(function() {
        document.getElementById('timercout').innerText = messagebox;
    }, timelimit);
}