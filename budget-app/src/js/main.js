let start = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countbudgetBtn = document.getElementsByTagName('button')[2],
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money,
    time;

if (budgetValue.textContent == '') {
    expensesBtn.disabled = true;
    optionalexpensesBtn.disabled = true;
    countbudgetBtn.disabled = true;
}

start.addEventListener('click', function() {
    time = new Date();
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

    appData.budget = money;
    appData.timeData = time;

    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();

    expensesBtn.disabled = false;
    optionalexpensesBtn.disabled = false;
    countbudgetBtn.disabled = false;
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let firstAnswer = expensesItem[i].value,
            secondAnswer = expensesItem[++i].value;

        if (typeof (firstAnswer) === 'string' &&
            typeof (firstAnswer) != null &&
            typeof (secondAnswer) != null &&
            firstAnswer != '' &&
            secondAnswer != '' &&
            firstAnswer.length < 50) {
            appData.expenses[firstAnswer] = secondAnswer;
            sum += +secondAnswer;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;

});

optionalexpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalexpensesItem.length; i++) {
        let answer = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = answer;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countbudgetBtn.addEventListener('click', function() {

    if (appData.budget != undefined) {

        appData.moneyPerDay = +((appData.budget - expensesValue.textContent) / 30).toFixed(1);
        daybudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Ошибка!";
        }
    } else {
        daybudgetValue.textContent = "Ошибка!";
    }

});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(', ');

    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

            appData.mounthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;

            monthsavingsValue.textContent = appData.mounthIncome.toFixed(1);
            yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

            appData.mounthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;

            monthsavingsValue.textContent = appData.mounthIncome.toFixed(1);
            yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    
};
