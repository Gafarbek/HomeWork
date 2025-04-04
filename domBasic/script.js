const div = document.querySelector('.macimg')
const div2 = document.querySelector('.macimg2')
const button = document.querySelector('.click')
const button2 = document.querySelector('.click2')
const white = document.querySelector('.description p')

const originalPrice = document.querySelector('.price')
const price = document.querySelectorAll('.prace button')





//Первоначальный вид типо
const originalText = white.textContent
const originalButton2Background = button2.style.backgroundColor
const originalButton2TextColor = button2.style.color
const originalButtonBackground = button.style.backgroundColor
const originalButtonTextColor = button.style.color
const org = parseFloat(originalPrice.textContent.replace('$', '').replace(',', ''))


price.forEach(button => {
    button.addEventListener('click', () => {
    
        price.forEach(btn => btn.style.borderColor = '#CFE7FF')
        button.style.borderColor = '#0071E3'
    
        const value = parseFloat(button.getAttribute('data-value'))

        const total = org + value
        const totalString = total.toString()
        const orgTotal = totalString[0] + ',' + totalString.slice(1)

        originalPrice.textContent = `$${orgTotal}`
    })
})

button2.addEventListener('click', () => {
    div.style.display = 'none'
    div2.style.display = 'block'
    white.textContent = 'Space Gray'
    button2.style.backgroundColor = '#0071E3'
    button2.style.color = 'white'
    button.style.backgroundColor = '#CFE7FF'
    button.style.color = '#797979'
})

button.addEventListener('click', () => {
    div.style.display = 'block'
    div2.style.display = 'none'
    white.textContent = originalText
    button2.style.backgroundColor = originalButton2Background
    button2.style.color = originalButton2TextColor
    button.style.backgroundColor = originalButtonBackground
    button.style.color = originalButtonTextColor
})
