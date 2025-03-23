const companies = [
    { id: 1, name: "Компания А", industry: "IT", employees: 150, revenue: 200000 },
    { id: 2, name: "Компания Б", industry: "Финансы", employees: 300, revenue: 500000 },
    { id: 3, name: "Компания В", industry: "Производство", employees: 500, revenue: 750000 },
    { id: 4, name: "Компания Г", industry: "Ритейл", employees: 50, revenue: 100000 },
    { id: 5, name: "Компания Д", industry: "IT", employees: 200, revenue: 300000 },
    { id: 6, name: "Компания Е", industry: "Логистика", employees: 100, revenue: 150000 }
];

// Задача 1: Отфильтровать компании, относящиеся к индустрии IT.


function it(ind) {
    for (const comp of companies) {
        
        if (comp.industry == "IT") {
            ind.push(comp)
        }
    }
}


it(industryIt = [])
console.log(industryIt);

// Задача 2: Отсортировать компании по доходу в порядке убывания.

 function rev(companies) {
    const a = companies.length
    const arr = [...companies]

    for (let i = 0; i < a -1; i++) {

        for (let j = 0; j < a -1 -i; j++) {

            if (arr[j].revenue < arr[j + 1].revenue) {

                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

            }
        }
    }
    return arr;
 }
 
 console.log(sort = rev(companies));
 


// Задача 3: Посчитать общее количество сотрудников во всех компаниях.


 function totalQuantity() {
    let total = 0
    for (let company of companies) {
        total += company.employees
    }

    return total;
 }

 
 console.log(totalQuantity());
 