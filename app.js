let hello = document.getElementById('hello')
let helloInt = setInterval(() => {
    flash('hello', 300)
}, 1200);

function flash(id, num) {
    let elem = document.getElementById(id)
    elem.classList.remove('text-black')
    elem.classList.add('text-white')
        setTimeout(function() {
            elem.classList.remove('text-white')
            elem.classList.add('text-black')
        }, num * 2)
}

function message(id, str, num) {
    let message = document.getElementById(id)
        for (let i = 0; i < str.length; i++) {
            setTimeout(function () {
                message.innerText += str[i]
            }, num * i);
        }
}


function helloWorld(str, num) {
    let message = document.getElementById('hello')
    // @ts-ignore
    document.getElementById('start').disabled = true
    document.getElementById('start').classList.add('disable')
    setTimeout(() => {
        clearInterval(helloInt)
        message.classList.remove('text-white')
        message.classList.add('text-black')
        for (let i = 0; i < str.length; i++) {
            setTimeout(function () {
            if (message.innerText[0] == '_') {
                message.innerText = ''
                }
            message.innerText += str[i]
        }, num * i);
    }
    }, num);
    setTimeout(() => {
        let flashInt = setInterval(() => {
            flash('hello', num)
        }, num * 4);
        setTimeout(() => {
            clearInterval(flashInt)
            load()
        }, num*16);
    }, (num*str.length)-num);
}

function load() {
    document.getElementById('intro').classList.add('hidden')
    document.body.classList.remove('bg-white')
    document.getElementById('showtime').classList.remove('hidden')
    document.getElementById('header').classList.remove('hidden')
    document.getElementById('footer').classList.remove('hidden')
}

flash('hello', 300)