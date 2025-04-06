const buttons = document.querySelectorAll('.plusKm button')
const parameters = document.querySelectorAll('.buttons button')
const disks = document.querySelectorAll('.disks button')
const values = document.querySelectorAll('.values h2')
const move = document.querySelector('.move h2')
const price = document.querySelector('.price h2')

const speed = values[0]
const temp = values[1]
const dataDisks = values[2]

const minTemp = -91
const maxTemp = 56

const minSpeed = 0
const maxSpeed = 280

const minDisks = 0
const maxDisks = 24

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
        }
    })
})

disks.forEach((disk) => {
    disk.addEventListener('click', () => {
        const size = Number(disk.getAttribute('data-value'))
        const pureDisks = parseFloat(dataDisks.textContent)      
        let newDisks = pureDisks + size
        
        if (newDisks > maxDisks) newDisks = maxDisks
        if (newDisks < minDisks) newDisks = minDisks
        
        if (newDisks !== pureDisks) {
            dataDisks.textContent = (`${newDisks}`)
        }
    })
})