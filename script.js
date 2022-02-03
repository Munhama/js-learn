let money,
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let firstAnswer =
            prompt("Введите обязательную статью расходов в этом месяце", ""),
            secondAnswer = prompt("Во сколько обойдется?", "");

        if (typeof (firstAnswer) === 'string' &&
            typeof (firstAnswer) != null &&
            typeof (secondAnswer) != null &&
            firstAnswer != '' &&
            secondAnswer != '' &&
            firstAnswer.length < 50) {
            appData.expenses[firstAnswer] = secondAnswer;
        } else {
            i--;
        }
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let answer = prompt("Статья необязательных расходов?", "");
        if (typeof (answer) === 'string' && 
        typeof (answer) != null && 
        answer != '' && 
        answer.length < 50) {
            appData.optionalExpenses[i+1] = answer;
        } else {
            i--;
        }
    }
}
chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = +(appData.budget / 30).toFixed(1);

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Ошибка!");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?", "");

        appData.mounthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.mounthIncome);
    }
}
checkSavings();

console.log(appData);