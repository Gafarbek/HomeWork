

const div = document.querySelector('div')
const black = document.querySelector('.black')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

function handleClick(elem, color) {
    elem.onclick = () =>  {
        div.style.backgroundColor = color;
    }
}

handleClick(black, 'black')
handleClick(red, 'red')
handleClick(yellow, 'yellow')
handleClick(green, 'green')