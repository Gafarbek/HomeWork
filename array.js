function getAge(age) {
    
    if (isNaN(age) || age < 18) {
        alert ('Ты куда лезишь?')
    } else {
        alert('Добро пожаловать')
        return true;
    }

}



function task(a, b) {

    alert(`${a + b} \n ${a - b}\n ${a / b} \n ${a * b} \n ${ a ** b} \n ${a % b}`)
    
}



function max_name(name1, name2, name3) {
    
    let longName = name1
    const names = [name2, name3] 

    names.forEach(long => {
        if (long.length > longName.length) {
            longName = long
        }
    })
    
    return longName;
    
}



function min() {
    let getNum = []

    for (let num of arguments) {
        if (typeof num === 'number') {
            getNum.push(num)
        } else if (Array.isArray(num)) {
            getNum.push(...num)
        } else if (typeof num === 'object' && num !== null) {
            getNum.push(...Object.values(num))
        }
    }

    return Math.min(...getNum)
}





const user = +prompt('Сколько тебе лет?')

if (getAge(user)) {

    const v1 = parseFloat(prompt('Введите число a:'))
    const v2 = parseFloat(prompt('Введите число b:'))

    if (!isNaN(v1, v2)) {

        task(v1, v2)

    } else {
        alert('Это не число')
    }

    console.log(max_name('Alex', 'George', 'Michael'));

    console.log(min(1, 2));
    console.log(min([1, 2]));
    console.log(min({a: 1, b: 2}));
    console.log(min({a: 1, b: 2}, {a: 11, b: 12}));
}
