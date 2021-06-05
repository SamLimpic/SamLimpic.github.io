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
            flash('hello', num/2)
        }, num * 3);
        setTimeout(() => {
            clearInterval(flashInt)
            load()
        }, num*12);
    }, (num*str.length)-num);
}

function load() {
    document.getElementById('intro').classList.add('hidden')
    document.body.classList.remove('bg-white')
    document.getElementById('showtime').classList.remove('hidden')
    document.getElementById('header').classList.remove('hidden')
    document.getElementById('footer').classList.remove('hidden')
}

function expand(str) {
    switch(str) {
        case str === 'keepr':
            window.open()
        break;
        case str == 'tavern':
            window.open()
            break;
        case str == 'bug':
            window.open('https://bug-catcher-vue.herokuapp.com/#/')
            break;
        case str == 'bill':
            window.open('https://bill-boards.herokuapp.com/#/')
            break;
        case str == 'smith':
            window.open('https://samlimpic.github.io/master-smith/')
            break;
        case str == 'miner':
            window.open('https://samlimpic.github.io/dungeon-miner/')
            break;
        default:
}
    
}

function skip() {
    document.getElementById('intro').classList.add('hidden')
    document.body.classList.remove('bg-white')
    document.getElementById('showtime').classList.remove('hidden')
    document.getElementById('header').classList.remove('hidden')
    document.getElementById('footer').classList.remove('hidden')
    document.getElementById('skip').classList.add('hidden')

}

flash('hello', 300)