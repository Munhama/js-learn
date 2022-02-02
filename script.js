let money, time;

money = +prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

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

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка!");
}

console.log(appData);