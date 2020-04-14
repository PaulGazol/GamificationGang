'use strict'
let money = prompt("Ваш бюджет на месяц?", "100"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-04-13");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a2 = prompt("Во сколько обойдется?", ""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt("Во сколько обойдется?", "");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

console.log(appData.expenses);
alert(appData.budget / 30);

console.log (0 || "" || 2 || undefined || true || falsе);
alert( +"Infinity" );