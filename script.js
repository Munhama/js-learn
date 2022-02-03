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
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце", ""),
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = +(appData.budget / 30).toFixed(1);

        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка!");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");

            appData.mounthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.mounthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let answer = prompt("Статья необязательных расходов?", "");
            if (typeof (answer) === 'string' &&
                typeof (answer) != null &&
                answer != '' &&
                answer.length < 50) {
                appData.optionalExpenses[i + 1] = answer;
            } else {
                i--;
            }
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход?", "");
        if (typeof (items) === 'string' &&
            typeof (items) != null &&
            items != '') {
            appData.income = items.split(', ');
            appData.income.push(prompt("Точно всё?", ""));
            appData.income.sort();
        } else {
            appData.chooseIncome();
        }

        console.log("Способы доп. заработка: ");
        appData.income.forEach(function (item, i, arr) {
            console.log([i + 1] + ": " + item);
        });
    },
};

console.log("Наша программа включает в себя данные : ");
for (let key in appData) {
    console.log(key);
}