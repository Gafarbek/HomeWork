const buttons = document.querySelectorAll('.plusKm button')
const parameters = document.querySelectorAll('.buttons button')
const disks = document.querySelectorAll('.disks button')
const values = document.querySelectorAll('.values h2')
const move = document.querySelector('.move h2')
const price = document.querySelector('.price h2')
const img = document.querySelectorAll('img')


const tesla = img[0]
const imgDisks = img[1]
const speed = values[0]
const temp = values[1]
const dataDisks = values[2]

let actualPrice = 89990


const minTemp = -10
const maxTemp = 40

const minSpeed = 0
const maxSpeed = 280

const minDisks = 0
const maxDisks = 24


let angle = 0
function rotate() {
    angle = (angle + 1) % 360
    imgDisks.style.transform = `rotate(${angle}deg)`
    requestAnimationFrame(rotate)
}

rotate()

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = Number(button.getAttribute('data-kilometer'))
        const pureSpeed = parseFloat(speed.textContent)
        let newSpeed = pureSpeed + value

        
        if (newSpeed > maxSpeed) newSpeed = maxSpeed
        if (newSpeed < minSpeed) newSpeed = minSpeed
        
        if (newSpeed !== pureSpeed) {
            speed.textContent = (`${newSpeed} км/ч`)
            
            const pureMove = parseFloat(move.textContent)
            const newMove = pureMove - value * 2
            
            move.textContent = `${newMove}км`

            imgDisks.style.display = 'none'
            tesla.style.display = 'block'
        }
        
    })
})

parameters.forEach((degree) => {
    degree.addEventListener('click', () => {
        const tempers = Number(degree.getAttribute('data-value'))
        const pureTemp = parseFloat(temp.textContent)      
        let newTemp = pureTemp + tempers
        
        if (newTemp > maxTemp) newTemp = maxTemp
        if (newTemp < minTemp) newTemp = minTemp
        
        if (newTemp !== pureTemp) {
            temp.textContent = (`${newTemp}°`)

            const pureTemp = parseFloat(move.textContent)
            const newTemps = pureTemp - tempers * 2
            
            move.textContent = `${newTemps}км`

            imgDisks.style.display = 'none'
            tesla.style.display = 'block'
        }
    })
})

disks.forEach((disk) => {
    disk.addEventListener('click', () => {
        const size = Number(disk.getAttribute('data-value'))
        const pureDisks = parseFloat(dataDisks.textContent)      
        let newDisks = pureDisks + size
        
        imgDisks.style.display = 'block'
        tesla.style.display = 'none'
        
        let width = imgDisks.clientWidth
        let height = imgDisks.clientHeight

        
        if (newDisks > maxDisks) newDisks = maxDisks
        if (newDisks < minDisks) newDisks = minDisks
        
        if (newDisks !== pureDisks) {
            dataDisks.textContent = (`${newDisks}`)

            const newSize = size > 0 ? 10 : -10
            
            imgDisks.style.width = width + newSize + 'px'
            imgDisks.style.height = height + newSize + 'px'
            
           actualPrice += size > 0 ? 1000 : -1000
           actualPrice = Math.max(0, actualPrice)
           let priceString = actualPrice.toString()

           price.textContent =  `$${priceString.slice(0, 2)}, ${priceString.slice(2)}`
        }
    })
})