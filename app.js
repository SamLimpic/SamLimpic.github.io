let mother = new Audio('mother.wav');
mother.volume = 0.1

let helloInt = setInterval(() => {
    flash('hello', 300)
}, 1200);

const header = document.getElementById('header')
const headerName = document.getElementById('header-name')
const headerIcon = document.getElementById('header-icon')
const contact = document.getElementById('contact')
const contactIcon = document.getElementById('contact-icon')
const cardRow = document.getElementById('card-row')
const footer = document.getElementById('footer')
const footerText = document.getElementById('footer-text')
const footerIcon = document.getElementById('footer-icon')
const card = Array.from(document.getElementsByClassName('card'))
const cardBody = Array.from(document.getElementsByClassName('card-body'))
const cardTitle = Array.from(document.getElementsByClassName('card-title'))
const cardSubtitle = Array.from(document.getElementsByClassName('card-subtitle'))
const cardText = Array.from(document.getElementsByClassName('card-text'))
const star = Array.from(document.getElementsByClassName('star'))
const icon = Array.from(document.getElementsByClassName('icon'))

const cards = {
    keepr: {
        title: 'Fellowship',
        subtitle: 'Vue3 - SCSS - C# - SQL',
        text: 'A social media site populated with characters from The Lord of the Rings'
    },
    tavern: {
        title: 'The Tavern',
        subtitle: 'Vue3 - SCSS - Node.js - MongoDB',
        text: 'An interactive character-builder for Dungeons & Dragons 5th Edition'
    },
    bug: {
        title: 'Bug Catcher',
        subtitle: 'Vue3 - SCSS - Node.js - MongoDB',
        text: 'A mock message board to post, comment on, and release bugs'
    },
    bill: {
        title: 'Bill Boards',
        subtitle: 'Vue3 - SCSS - Node.js - MongoDB',
        text: 'A task manager inspired by Trello, utilizing FillMurray to its upmost'
    },
    smith: {
        title: 'Master Smith',
        subtitle: 'Javascript - SCSS',
        text: 'A task-list blacksmith simulation utilizing custom art assets'
    },
    miner: {
        title: 'Dungeoneer',
        subtitle: 'Javascript',
        text: 'A multi-stage click-counting adventure utilizing custom art assets'
    }
}

function helloWorld(str, num) {
    mother.play()
    // @ts-ignore
    document.getElementById('start').disabled = true
    document.getElementById('start').classList.add('disable')
    let message = document.getElementById('hello')
    setTimeout(() => {
        clearInterval(helloInt)
        message.classList.remove('code-text')
        message.classList.add('text-black')
        for (let i = 0; i < str.length; i++) {
            setTimeout(function () {
            if (message.innerText[0] == '_') {
                message.innerText = ''
                }
            message.innerText += str[i]
            }, num/2 * i);
    }
    }, num*10);
    setTimeout(() => {
        document.getElementById('intro').classList.add('code-text')
        document.getElementById('start').classList.add('hidden')
        setTimeout(() => {
            load(num/5)
        }, num);
    }, (num*str.length)+num*12);
}

function lame(str, num) {
    mother.play()
    // @ts-ignore
    document.getElementById('start').disabled = true
    document.getElementById('start').classList.add('disable')
    let message = document.getElementById('hello')
    setTimeout(() => {
        clearInterval(helloInt)
        message.classList.remove('code-text')
        message.classList.add('text-black')
        for (let i = 0; i < str.length; i++) {
            setTimeout(function () {
            if (message.innerText[0] == '_') {
                message.innerText = ''
                }
            message.innerText += str[i]
            }, num * i);
    }
    }, num*12);
    setTimeout(() => {
        document.getElementById('intro').classList.add('code-text')
        document.getElementById('start').classList.add('hidden')
        setTimeout(() => {
        reloadPage()
    }, num*2);
    }, (num*str.length)+num*22);
}

function flash(id, num) {
    let elem = document.getElementById(id)
    elem.classList.remove('text-black')
    elem.classList.add('code-text')
        setTimeout(function() {
            elem.classList.remove('code-text')
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
    setTimeout(() => {
        message.innerText = str.replaceAll('_', ' ')
    }, (num*str.length));
}

function load(num) {
    document.getElementById('intro').classList.add('hidden')
    remove()
    buildHeader(num)
}

function remove() {
    header.classList.remove('modern', 'bg-secondary', 'hidden')
    headerName.classList.remove('font-xxl', 'text-light', 'text-shadow')
    headerIcon.classList.remove('font-xxl', 'text-shadow', 'text-primary')
    contact.classList.remove('btn', 'btn-outline-primary', 'bg-transparent', 'border-0', 'font-xxl')
    contactIcon.classList.remove('hidden', 'text-shadow')
    headerName.innerText = ''

    document.getElementById('showtime').classList.remove('modern')
    removeCard('keepr')
    removeCard('tavern')
    removeCard('bug')
    removeCard('bill')
    removeCard('smith')
    removeCard('miner')

    footer.classList.remove('modern', 'bg-secondary')
    document.getElementById('footer-text-1').innerText = ''
    document.getElementById('footer-text-2').innerText = ''
    footerText.classList.remove('font-lg', 'text-light', 'text-center', 'text-shadow')
    footerIcon.classList.remove('text-warning')
}

function removeCard(str) {
    document.getElementById(str + '-card').classList.remove('shadow', 'bg-light', 'rounded')
    document.getElementById(str + '-card').classList.add('border-success', 'square')
    document.getElementById(str + '-body').classList.add('code-back')
    if (document.getElementById(str + '-star')) {
        document.getElementById(str + '-star').classList.remove('star', 'font-xs')
    }
    document.getElementById(str + '-icon').classList.remove('icon', 'font-xxl')
    document.getElementById(str + '-title').innerText = ''
    document.getElementById(str + '-title').classList.remove('font-xxl')
    document.getElementById(str + '-subtitle').innerText = ''
    document.getElementById(str + '-subtitle').classList.remove('text-muted', 'font-md')
    document.getElementById(str + '-text').innerText = ''
    document.getElementById(str + '-text').classList.remove('font-lg')
}

function buildHeader(num) {
    document.getElementById('skip-plus').classList.remove('hidden')
    document.getElementById('skip').classList.add('hidden')
    message('header-name', 'Sam_Limpic', num)
    const str = 'Sam_Limpic'
    setTimeout(() => {
        buildBody(num / 3, 'keepr')
    }, str.length*num);
}

function buildBody(num, str) {
    document.getElementById(str).classList.remove('hidden')
    document.getElementById(str).classList.add('code-text', 'pt-2')
    let message = document.getElementById(str + '-title')
    let text = cards[str].title.replaceAll(' ', '_')
    for (let i = 0; i < text.length; i++) {
        setTimeout(function () {
            message.innerText += text[i]
        }, num * i);
    }
    setTimeout(() => {
        message.innerText = text.replaceAll('_', ' ')
        message = document.getElementById(str + '-subtitle')
        text = cards[str].subtitle.replaceAll(' ', '_')
        for (let i = 0; i < text.length; i++) {
            setTimeout(function () {
                message.innerText += text[i]
            }, num * i);
        }
        setTimeout(() => {
            message.innerText = text.replaceAll('_', ' ')
            message = document.getElementById(str + '-text')
            text = cards[str].text.replaceAll(' ', '_')
            setTimeout(() => {
                switchBuild(num, str)
            }, num*text.length/2);
            for (let i = 0; i < text.length; i++) {
                setTimeout(function () {
                    message.innerText += text[i]
                }, num * i);
            }
            setTimeout(() => {
                message.innerText = text.replaceAll('_', ' ')
                setTimeout(() => {
                    if (document.getElementById(str + '-star')) {
                    document.getElementById(str + '-star').classList.remove('hidden')
                    document.getElementById(str + '-star').classList.add('code-text', 'star', 'font-xs')
                    }
                    setTimeout(() => {
                        document.getElementById(str + '-icon')  .classList.remove('hidden')
                        document.getElementById(str + '-icon').classList.add('code-text', 'icon', 'font-xxl')
                        setTimeout(() => {
    }, num);
    }, num);
    }, num);
    }, (num*text.length));
    }, (num*text.length));
    }, (num*text.length));
}

function switchBuild(num, str) {
    switch(str) {
        case 'keepr':
        buildBody(num, 'tavern')
            break;
        case 'tavern':
        buildBody(num, 'bug')
            break;
        case 'bug':
        buildBody(num, 'bill')
            break;
        case 'bill':
        buildBody(num, 'smith')
            break;
        case 'smith':
        buildBody(num, 'miner')
            break;
        default: buildFooter(num * 5)
    }
}

function buildFooter(num) {
    footer.classList.remove('hidden')
    footerText.classList.remove('hidden')
    setTimeout(() => {
        message('footer-text-1', 'Made_With_', num)
        const str = 'Made_With_'
        setTimeout(() => {
            footerIcon.classList.remove('hidden')
            setTimeout(() => {
                message('footer-text-2', 'By_Sam_Limpic', num)
                const str = 'By_Sam_Limpic'
                setTimeout(() => {
                    buildStyle(num*4)
    }, num*10);
    }, num);
    }, str.length * num);
    }, num);
}

function buildStyle(num) {
        setTimeout(() => {
                for (let i = 0; i < card.length; i++) {
                    setTimeout(function () {
                        card[i].classList.remove('code-text', 'border-success', 'square', 'pt-2');
                        card[i].classList.add('bg-light', 'text-dark', 'shadow', 'rounded');
                        setTimeout(function () {
                            cardBody[i].classList.remove('code-text', 'code-back');
                        }, num*i);
                    }, num*i);
                }
        setTimeout(() => {
            document.body.classList.remove('code')
        setTimeout(() => {
            header.classList.add('bg-secondary')
            headerName.classList.add('text-light')
            footer.classList.add('bg-secondary')
            footerText.classList.add('text-light')
            setTimeout(() => {
                for (let i = 0; i < card.length; i++) {
                    setTimeout(function () {
                        cardTitle[i].classList.add('font-xxl', 'modern', 'underline');
                        setTimeout(function () {
                            cardSubtitle[i].classList.add('font-md', 'modern', 'text-muted');
                            setTimeout(function () {
                                cardText[i].classList.add('font-lg', 'modern');
                                icon[i].classList.remove('code-text');
                                icon[i].classList.add('text-primary');
                            }, num/2 * i);
                        }, num/2 * i);
                    }, num/2 * i);
                }
        setTimeout(() => {
            header.classList.add('modern')
            headerName.classList.add('font-xxl')
            footer.classList.add('modern')
            footer.classList.add('text-center')
        setTimeout(() => {
            for (let i = 0; i < star.length; i++) {
                setTimeout(function () {
                    star[i].classList.remove('code-text');
                    star[i].classList.add('text-warning');
                }, num/2 * i);
            }
        setTimeout(() => {
            footerText.classList.add('font-lg')
            footerIcon.classList.add('text-warning')
            headerName.classList.add('text-shadow')
            footerText.classList.add('text-shadow')
        setTimeout(() => {
            document.getElementById('loading').classList.add('hidden')
            headerIcon.classList.remove('hidden')
            headerIcon.classList.add('font-xxl')
            headerIcon.classList.add('text-primary')
            headerIcon.classList.add('text-shadow')
        setTimeout(() => {
            document.getElementById('skip').classList.add('hidden')
            document.getElementById('skip-plus').classList.add('hidden')
            contactIcon.classList.remove('hidden')
            contact.classList.remove('hidden')
            contact.classList.add('btn', 'btn-outline-primary', 'bg-transparent', 'border-0')
        setTimeout(() => {
            contact.classList.add('font-xxl')
            contactIcon.classList.add('text-shadow')
        setTimeout(() => {
        
    }, num);
    }, num);
    }, num);
    }, star.length/2*num);
    }, num);
    }, num);
    }, card.length*num);
    }, num);
    }, num);
    }, card.length*2*num);
    }, num);
}

function skip() {
    let hidden = document.getElementsByClassName('hidden')
    while(hidden.length > 0){
    hidden[0].classList.remove('hidden');
    }
    document.getElementById('intro').classList.add('hidden')
    document.getElementById('skip').classList.add('hidden')
    document.getElementById('skip-plus').classList.add('hidden')
    document.getElementById('loading').classList.add('hidden')
    document.body.classList.remove('code')
}

window.onload = function () {
  let reload = sessionStorage.getItem("reload");
  if (reload) {
    sessionStorage.removeItem("reload");
    skip();
  }
}

function reloadPage() {
  sessionStorage.setItem("reload", "true");
  document.location.reload();
}

flash('hello', 300)