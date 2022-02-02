let money, time;

money = prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let firstAnswer, secondAnswer;
for (let i = 0; i < 2; i++) {
    firstAnswer = 
        prompt("Введите обязательную статью расходов в этом месяце", "");
    secondAnswer = prompt("Во сколько обойдется?", "");
    appData.expenses[firstAnswer] = secondAnswer;
}

alert("Бюджет на 1 день " + appData.budget / 30);

console.log(appData);