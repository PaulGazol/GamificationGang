'use strict'
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "100");
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-04-13");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "100");
    }
}
 
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i=0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
    
        if ( (typeof(a)) === 'string' && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && a.length < 50) {
        
            console.log("done");
    
            appData.expenses [a] = b;
        } else {
            console.log("bad result");
            i--
        };
    };
}

chooseExpenses();

// let i=0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");

//     if ( (typeof(a)) === 'string' && typeof(a) != null && typeof(b) != null
//     && a != '' && b != '' && a.length < 50) {
//     console.log("done" + i);
//     appData.expenses [a] = b;
//     i++;
// } else {
    
// };
// };

// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");

//     if ( (typeof(a)) === 'string' && typeof(a) != null && typeof(b) != null
//     && a != '' && b != '' && a.length < 50) {
//     console.log("done" + i);
//     appData.expenses [a] = b;
//     i++
//     } else {

//     };
// } while (i < 2);

function detectDayBudget() {
    appData.MoneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.MoneyPerDay);
    
}

detectDayBudget();

function detectLevel() {
    if (appData.MoneyPerDay < 100) {
        console.log("Минимальный уровень достатка")
    } else if (appData.MoneyPerDay > 100 && appData.MoneyPerDay <2000) {
        console.log("Средний уровень достатка")
    } else if (appData.MoneyPerDay > 2000 ) {
        console.log("Зажиточный уровень достатка")
    } else {
        console.log("ЗАшибка")
    };
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt ("Какова сумма накоплений?"),
            percent = +prompt ("Под какой процент?");
        
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i=0; i < 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?", "");
    
        if ( (typeof(questionOptExpenses)) === 'string' && typeof(questionOptExpenses) != null 
            && questionOptExpenses != '' && questionOptExpenses.length < 50) {
        
            appData.optionalExpenses [i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        } else {
            console.log("bad result");
            i--
        };
    };
}

chooseOptExpenses();