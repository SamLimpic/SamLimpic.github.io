//#region CONST VARIABLES
const mother = new Audio('./assets/mother2.wav')

let show = false

let helloInt = setInterval(() => {
    flash('hello', 300)
}, 1200);

const header = document.getElementById('header')
const headerName = document.getElementById('header-name')
const headerIcon = document.getElementById('header-icon')
const contactIcon = document.getElementById('contact-icon')
const cardRow = document.getElementById('card-row')
const footer = document.getElementById('footer')
const footerText = document.getElementById('footer-text')
const footerText1 = document.getElementById('footer-text-1')
const footerText2 = document.getElementById('footer-text-2')
const footerIcon = document.getElementById('footer-icon')
const card = Array.from(document.getElementsByClassName('card'))
const cardBody = Array.from(document.getElementsByClassName('card-body'))
const cardTitle = Array.from(document.getElementsByClassName('card-title'))
const cardSubtitle = Array.from(document.getElementsByClassName('card-subtitle'))
const cardText = Array.from(document.getElementsByClassName('card-text'))
const star = Array.from(document.getElementsByClassName('star'))
const fullStack = Array.from(document.getElementsByClassName('full-stack'))
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
    dragon: {
        title: "Dragon's Den",
        subtitle: 'Vue3 - SCSS - Node.js - MongoDB',
        text: 'A scheduling app for Dungeons & Dragons games at BattleMage Brewery'
    },
    bug: {
        title: 'Bug Catcher',
        subtitle: 'Vue3 - SCSS - Node.js - MongoDB',
        text: 'A mock message board to post, comment on, and release bugs'
    },
    bill: {
        title: 'Bill Boards',
        subtitle: 'Vue3 - SCSS - Node.js - MongoDB',
        text: 'A task manager inspired by Trello, utilizing Fill Murray to its upmost'
    },
    smith: {
        title: 'Master Smith',
        subtitle: 'Javascript - CSS',
        text: 'A task-list blacksmith simulator utilizing custom art assets'
    }
    // miner: {
    //     title: 'Dungeoneer',
    //     subtitle: 'Javascript - CSS',
    //     text: 'A click-counting adventure utilizing custom art assets'
    // }
}
//#endregion

function helloWorld(str, num) {
    mother.play()
    // @ts-ignore
    document.getElementById('start').disabled = true
    document.getElementById('start').classList.add('disable')
    document.getElementById('skip').classList.add('hidden')
    let message = document.getElementById('hello')
    setTimeout(() => {
        clearInterval(helloInt)
        message.classList.remove('code-text')
        message.classList.add('text-black')
        for (let i = 0; i < str.length; i++) {
            setTimeout(() => {
                if (message.innerText[0] == '_') {
                    message.innerText = ''
                }
                message.innerText += str[i]
            }, num / 2 * i);
        }
    }, num * 10);
    setTimeout(() => {
        document.getElementById('intro').classList.add('code-text')
        document.getElementById('start').classList.add('hidden')
        setTimeout(() => {
            load(num / 5)
        }, num);
    }, (num * str.length) + num * 12);
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
            setTimeout(() => {
                if (message.innerText[0] == '_') {
                    message.innerText = ''
                }
                message.innerText += str[i]
            }, num * i);
        }
    }, num * 12);
    setTimeout(() => {
        document.getElementById('intro').classList.add('code-text')
        document.getElementById('start').classList.add('hidden')
        setTimeout(() => {
            reloadPage()
        }, num);
    }, (num * str.length) + num * 22);
}

function flash(id, num) {
    let elem = document.getElementById(id)
    elem.classList.remove('text-black')
    elem.classList.add('code-text')
    setTimeout(() => {
        elem.classList.remove('code-text')
        elem.classList.add('text-black')
    }, num * 2)
}

function message(id, str, num) {
    let message = document.getElementById(id)
    for (let i = 0; i < str.length; i++) {
        setTimeout(() => {
            message.innerText += str[i]
        }, num * i);
    }
    setTimeout(() => {
        message.innerText = str.replaceAll('_', ' ')
    }, (num * str.length));
}

function load(num) {
    document.getElementById('intro').classList.add('hidden')
    remove()
    buildHeader(num)
}

function remove() {
    document.body.classList.add('transition-plus')
    header.classList.remove('modern', 'bg-secondary', 'hidden')
    header.classList.add('transition-plus')
    headerName.classList.remove('font-xxl', 'text-light', 'text-shadow')
    headerName.classList.add('font-md', 'transition')
    headerIcon.classList.remove('fa-anchor', 'font-xxl', 'text-shadow', 'text-primary', 'ml-2')
    headerIcon.classList.add('fa-circle-notch', 'fa-spin', 'font-xl', 'transition')
    contactIcon.classList.add('hide', 'transition')
    contactIcon.classList.remove('text-shadow', 'font-xxl')
    headerName.innerText = ''
    document.getElementById('showtime').classList.add('no-click')
    document.getElementById('showtime').classList.remove('modern')
    removeCard('keepr')
    removeCard('tavern')
    removeCard('dragon')
    removeCard('bug')
    removeCard('bill')
    removeCard('smith')
    // removeCard('miner')

    footer.classList.remove('modern', 'bg-secondary')
    footer.classList.add('transition-plus')
    document.getElementById('footer-text-1').innerText = ''
    document.getElementById('footer-text-2').innerText = ''
    footerText.classList.remove('font-lg', 'text-light', 'text-center', 'text-shadow')
    footerText.classList.add('font-xs', 'transition')
    footerIcon.classList.remove('text-warning')
}

function removeCard(str) {
    document.getElementById(str + '-card').classList.remove('shadow', 'bg-light', 'rounded')
    document.getElementById(str + '-card').classList.add('border-success', 'square')
    document.getElementById(str + '-body').classList.add('code-back')
    document.getElementById(str + '-star').classList.remove('star', 'font-xs')
    document.getElementById(str + '-star').classList.add('font-xxs', 'transition-plus')
    document.getElementById(str + '-full-stack').classList.remove('star', 'modern')
    document.getElementById(str + '-full-stack').classList.add('font-xxxs', 'transition-plus')
    document.getElementById(str + '-full-stack').innerText = ''
    document.getElementById(str + '-icon').classList.remove('icon')
    document.getElementById(str + '-title').innerText = ''
    document.getElementById(str + '-title').classList.remove('font-xxl')
    document.getElementById(str + '-title').classList.add('font-xs', 'mt-md-3', 'mt-sm-1', 'transition-plus')
    document.getElementById(str + '-subtitle').innerText = ''
    document.getElementById(str + '-subtitle').classList.remove('text-muted', 'font-md')
    document.getElementById(str + '-subtitle').classList.add('font-xxxs', 'transition-plus')
    document.getElementById(str + '-text').innerText = ''
    document.getElementById(str + '-text').classList.remove('font-lg', 'pl-4')
    document.getElementById(str + '-text').classList.add('font-xxs', 'transition-plus')
}

function buildHeader(num) {
    document.getElementById('skip-plus').classList.remove('hidden')
    document.getElementById('skip').classList.add('hidden')
    message('header-name', 'Sam_Limpic', num)
    const str = 'Sam_Limpic'
    setTimeout(() => {
        buildBody(num / 3, 'keepr')
    }, str.length * num);
}

function buildBody(num, str) {
    document.getElementById(str).classList.remove('hidden')
    document.getElementById(str).classList.add('code-text', 'pt-2')
    let message = document.getElementById(str + '-title')
    let text = cards[str].title.replaceAll(' ', '_')
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            message.innerText += text[i]
        }, num * i);
    }
    setTimeout(() => {
        message.innerText = text.replaceAll('_', ' ')
        message = document.getElementById(str + '-subtitle')
        text = cards[str].subtitle.replaceAll(' ', '_')
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                message.innerText += text[i]
            }, num * i);
        }
        setTimeout(() => {
            message.innerText = text.replaceAll('_', ' ')
            message = document.getElementById(str + '-text')
            text = cards[str].text.replaceAll(' ', '_')
            setTimeout(() => {
                switchBuild(num, str)
            }, num * text.length / 2);
            for (let i = 0; i < text.length; i++) {
                setTimeout(() => {
                    message.innerText += text[i]
                }, num * i);
            }
            setTimeout(() => {
                message.innerText = text.replaceAll('_', ' ')
                message = document.getElementById(str + '-full-stack')
                text = 'Full-Stack'
                setTimeout(() => {
                    document.getElementById(str + '-star').classList.remove('hidden')
                    document.getElementById(str + '-star').classList.add('code-text', 'star', 'font-xs')
                    document.getElementById(str + '-full-stack').classList.add('code-text', 'retro')
                    setTimeout(() => {
                        for (let i = 0; i < text.length; i++) {
                            setTimeout(() => {
                                message.innerText += text[i]
                            }, num * 2 * i);
                        }
                        setTimeout(() => {
                            document.getElementById(str + '-icon').classList.remove('hidden')
                            document.getElementById(str + '-icon').classList.add('code-text', 'icon', 'font-lg')
                        }, num * text.length * 2);
                    }, num);
                }, num);
            }, (num * text.length));
        }, (num * text.length));
    }, (num * text.length));
}

function switchBuild(num, str) {
    switch (str) {
        case 'keepr':
            buildBody(num, 'tavern')
            break;
        case 'tavern':
            buildBody(num, 'dragon')
            break;
        case 'dragon':
            buildBody(num, 'bug')
            break;
        case 'bug':
            buildBody(num, 'bill')
            break;
        case 'bill':
            buildBody(num, 'smith')
            break;
        // case 'smith':
        //     buildBody(num, 'miner')
        //     break;
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
                    buildStyle(num * 4)
                }, num * 10);
            }, num);
        }, str.length * num);
    }, num);
}

function buildStyle(num) {
    setTimeout(() => {
        for (let i = 0; i < card.length; i++) {
            setTimeout(() => {
                card[i].classList.add('bg-light', 'text-dark', 'shadow', 'rounded');
                card[i].classList.remove('code-text', 'border-success', 'square', 'pt-2');
                cardBody[i].classList.remove('code-text', 'code-back');
            }, num * 1.5 * i);
        }
        setTimeout(() => {
            document.body.classList.remove('code')
            header.classList.add('bg-secondary')
            headerName.classList.add('text-light')
            footer.classList.add('bg-secondary')
            footerText.classList.add('text-light')
            setTimeout(() => {
                headerIcon.classList.add('o-1', 'o-0')
                document.getElementById('skip-plus').classList.add('fade-out')
            }, num);
            setTimeout(() => {
                for (let i = 0; i < card.length; i++) {
                    setTimeout(() => {
                        star[i].classList.add('fade-in', 'fade-out');
                        fullStack[i].classList.add('fade-in', 'fade-out')
                        setTimeout(() => {
                            cardTitle[i].classList.add('fade-in', 'fade-out');
                            fullStack[i].classList.add('text-muted', 'modern')
                            fullStack[i].classList.remove('code-text', 'font-xxxs', 'retro')
                            star[i].classList.remove('code-text');
                            star[i].classList.add('text-warning');
                            setTimeout(() => {
                                icon[i].classList.add('fade-in', 'fade-out');
                                cardSubtitle[i].classList.add('fade-in', 'fade-out');
                                cardTitle[i].classList.add('font-xxl', 'modern', 'underline');
                                cardTitle[i].classList.remove('mt-md-3');
                                setTimeout(() => {
                                    cardTitle[i].classList.remove('fade-out');
                                }, num / 2);
                                setTimeout(() => {
                                    cardText[i].classList.add('fade-in', 'fade-out');
                                    cardSubtitle[i].classList.add('font-md', 'modern', 'text-muted', 'italic');
                                    setTimeout(() => {
                                        cardSubtitle[i].classList.remove('fade-out');
                                    }, num / 2);
                                    setTimeout(() => {
                                        icon[i].classList.remove('code-text', 'font-lg');
                                        cardText[i].classList.add('font-lg', 'modern', 'pl-4');
                                        setTimeout(() => {
                                            cardText[i].classList.remove('fade-out');
                                        }, num / 2);
                                        setTimeout(() => {
                                            star[i].classList.remove('fade-out');
                                            fullStack[i].classList.remove('fade-out')
                                            setTimeout(() => {
                                                icon[i].classList.remove('fade-out');
                                            }, num / 2);
                                        }, num / 2);
                                    }, num / 2);
                                }, num / 2);
                            }, num / 2);
                        }, num / 2);
                    }, num / 1.5 * i);
                }
                setTimeout(() => {
                    headerName.classList.add('o-1', 'o-0')
                    footerText.classList.add('o-1', 'o-0')
                    setTimeout(() => {
                        header.classList.add('modern')
                        footer.classList.add('modern')
                        setTimeout(() => {
                            headerIcon.classList.add('fa-anchor', 'text-primary', 'text-shadow', 'font-xxl', 'ml-2')
                            headerIcon.classList.remove('fa-circle-notch', 'fa-spin')
                            footerIcon.classList.add('text-warning')
                            headerName.classList.add('font-xxl')
                            headerName.classList.add('text-shadow')
                            footer.classList.add('text-center')
                            footerText.classList.add('font-lg')
                            footerText.classList.add('text-shadow')
                            setTimeout(() => {
                                headerIcon.classList.remove('o-0')
                                headerName.classList.remove('o-0')
                                setTimeout(() => {
                                    footerText.classList.remove('o-1', 'o-0')
                                    contactIcon.classList.add('xxx')
                                    contactIcon.classList.remove('hide')
                                    setTimeout(() => {
                                        contactIcon.classList.remove('xxx')
                                        contactIcon.classList.add('text-shadow', 'font-xxl')
                                        document.getElementById('showtime').classList.remove('no-click')
                                        document.getElementById('skip-plus').classList.add('hidden')
                                    }, num);
                                }, num / 1.5);
                            }, num / 1.5);
                        }, num / 1.5);
                    }, num / 1.5);
                }, num * 8);
            }, num * 4);
        }, card.length * 1.5 * num);
    }, num);
}

function skip() {
    let hidden = document.getElementsByClassName('hidden')
    while (hidden.length > 0) {
        hidden[0].classList.remove('hidden');
    }
    document.getElementById('intro').classList.add('hidden')
    document.getElementById('skip').classList.add('hidden')
    document.getElementById('skip-plus').classList.add('hidden')
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

function contacts() {
    let contacts = document.getElementById('contacts')
    let row = document.getElementById('contacts-row')
    let icon = document.getElementById('contact-icon')
    let showtime = document.getElementById('showtime')
    let cardRow = document.getElementById('card-row')
    if (show) {
        contacts.classList.add('hide')
        contacts.classList.remove('show')
        row.classList.add('d-none')
        icon.classList.add('text-primary')
        icon.classList.remove('text-warning')
        showtime.classList.add('show')
        showtime.classList.remove('hide')
        cardRow.classList.remove('d-none')
        show = false
    } else {
        contacts.classList.add('show')
        contacts.classList.remove('hide')
        row.classList.remove('d-none')
        icon.classList.add('text-warning')
        icon.classList.remove('text-primary')
        showtime.classList.add('hide')
        showtime.classList.remove('show')
        cardRow.classList.add('d-none')
        show = true
    }
}

function expand(string) {
    let apps = document.getElementById('apps')
    let row = document.getElementById('apps-row')
    let app = document.getElementById(`${string}-app`)
    let showtime = document.getElementById('showtime')
    let contactIcon = document.getElementById('contact-icon')
    let appIcon = document.getElementById('app-icon')
    if (show) {
        app.classList.add('d-none')
        row.classList.add('d-none')
        apps.classList.add('hide')
        apps.classList.remove('show')
        showtime.classList.add('show')
        showtime.classList.remove('hide')
        contactIcon.classList.remove('d-none')
        appIcon.classList.add('d-none')
        show = false
    } else {
        app.classList.remove('d-none')
        row.classList.remove('d-none')
        apps.classList.add('show')
        apps.classList.remove('hide')
        showtime.classList.add('hide')
        showtime.classList.remove('show')
        contactIcon.classList.add('d-none')
        appIcon.classList.remove('d-none')
        show = true
    }
}

flash('hello', 300)