let startButton = document.getElementById('start'),
    cancelButton = document.getElementById('cancel'),
    plusButtonIncome = document.querySelector('.income').getElementsByTagName('button')[0],
    plusButtonExpenses = document.querySelector('.expenses').getElementsByTagName('button')[0],
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeInput = document.querySelectorAll('.additional_income-item'),
    additionalExpensesInput = document.querySelector('.additional_expenses-item'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0], //???
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItem = document.querySelector('.expenses-items'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItem = document.querySelector('.income-items'),
    incomeItems = document.querySelectorAll('.income-items'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    periodAmount = document.querySelector('.period-amount'),
    periodSelect = document.querySelector('.period-select'),
    targetAmount = document.querySelector('.target-amount');

let appDataDefault = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    incomeMonth: 0,
}
let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    incomeMonth: 0,

    start: function () {
        this.budget = +salaryAmount.value;
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.showResult();
    },
    showResult: function() {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
    },
    addExpensesBlock: function() {
        let newExpensesItem = expensesItems[0].cloneNode(true);

        expensesItem.parentNode.insertBefore(newExpensesItem, plusButtonExpenses);

        expensesItems = document.querySelectorAll('.expenses-items');

        if (expensesItems.length === 3) {
            plusButtonExpenses.style.display = 'none';
        }
    },
    addIncomeBlock: function() {
        incomeItems = document.querySelectorAll('.income-items');
        let newIncomeItem = incomeItems[0].cloneNode(true);
        for (var elem of newIncomeItem.children) {
            elem.value = '';
        }
        incomeItem.parentNode.insertBefore(newIncomeItem, plusButtonIncome);

        incomeItems = document.querySelectorAll('.income-items');

        if (incomeItems.length === 3) {
            plusButtonIncome.style.display = 'none';
        }
    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let expensesTitle = item.querySelector('.expenses-title').value,
                expensesAmount = item.querySelector('.expenses-amount').value;
            if (expensesTitle.value !== '' && expensesAmount.value !== '') {
                appData.expenses[expensesTitle] = expensesAmount;
            }
        });
    },
    getAddExpenses: function() {
        let addExpenses = additionalExpensesInput.value.split(',');
        for(var i = 0; i < addExpenses.length; i++) {
            addExpenses[i] = addExpenses[i].slice(0,1).toUpperCase() + addExpenses[i].slice(1);
        }
        appData.addExpenses = addExpenses;
    },
    getIncome: function() {
        incomeItems.forEach(function(item){
            let incomeTitle = item.querySelector('.income-title').value,
                incomeAmount = item.querySelector('.income-amount').value;
            if (incomeTitle.value !== '' && incomeAmount.value !== '') {
                appData.income[incomeTitle] = incomeAmount;
            }
        });
        for (var key in this.income) {
            this.incomeMonth += +this.income[key];
        }
    },
    getAddIncome: function() {
        additionalIncomeInput.forEach(function(item){
            if(item.value !== '') {
                appData.addIncome.push(item.value.trim());
            }
        });
        for(var i = 0; i < this.addIncome.length; i++) {
            this.addIncome[i] = this.addIncome[i].slice(0,1).toUpperCase() + this.addIncome[i].slice(1);
        }
    },
    getBudget: function() {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    },
    getExpensesMonth: function(){
        for (var key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
        }
    },
    getTargetMonth: function() {
        return targetAmount.value / this.budgetMonth;
    },
    calcPeriod: function() {
        return this.budgetMonth * periodSelect.value
    },
    reset: function() {
        for (var key in appDataDefault) {
            this[key] = appDataDefault[key];
        }
        this.start();
    },
    getStatusIncome: function() {
        if (appData.budgetDay >= 800) {
            console.log('Высокий уровень дохода');
        } else if (appData.budgetDay >= 300) {
            console.log('Средний уровень дохода');
        } else if (appData.budgetDay >= 0) {
            console.log('Низкий уровень дохода');
        } else if (appData.budgetDay < 0) {
            console.log('Что то пошло не так');
        }
    },
    getInfoDeposut: function(){
        if(appData.deposit) {
            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            } while(isNaN(appData.moneyDeposit) || appData.moneyDeposit == '' || appData.moneyDeposit == null);
            do {
                appData.percentDeposit = prompt('Какой годовой процент?', '10');
            } while(isNaN(appData.percentDeposit) || appData.percentDeposit == '' || appData.percentDeposit == null);
        }
    },
};

startButton.addEventListener('click', function(e){
    if (salaryAmount.value === '') {
        e.preventDefault();
    } else {
        let startFunc = appData.start.bind(appData);
        startFunc();
        document.querySelectorAll('.data input[type=text]').forEach(function(item) {
            item.setAttribute('readonly', '');
        });
        this.hidden = true;
        cancelButton.style.display = 'block';
    }
});
cancelButton.addEventListener('click', function(e){
    e.preventDefault();
    appData.reset();
    this.style.display = 'none';
    startButton.style.display = 'block';
});
document.querySelectorAll('input[placeholder="Наименование"]').forEach(function(item){
    item.addEventListener('input', function(){
        var regexp = /[0-9A-Za-z]/gi;
        this.value = this.value.replace(regexp, '');
    });
});
periodSelect.addEventListener('input', function() {
    periodAmount.textContent = periodSelect.value;
});
plusButtonExpenses.addEventListener('click', appData.addExpensesBlock);
plusButtonIncome.addEventListener('click', appData.addIncomeBlock);
//
//
// var money;

//

//     asking: function(){
//         if(confirm('Есть ли у вас дополнительный заработок?')) {
//             var itemIncome, cashIncome;
//             do {
//                 itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксую');
//             } while(!isNaN(itemIncome) || itemIncome == '' || itemIncome == null);
//             do {
//                 cashIncome = prompt('Сколько в месяц на этом зарабатываете?', 10000);
//             } while(isNaN(cashIncome) || cashIncome == '' || cashIncome == null);
//             appData.income[itemIncome] = cashIncome;
//         }
//         var addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'на конфеты,пироги,суп,стол,машину').split(',');
//         for(var i = 0; i< addExpenses.length; i++) {
//             addExpenses[i] = addExpenses[i].toUpperCase();
//         }
//         var x = addExpenses.join();
//         console.log('Возможные расходы:' + x);
//         for(var i = 0; i < 2; i++) {
//             var itemExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'квартира');
//             var cashExpenses;
//             do {
//                 cashExpenses = +prompt('Во сколько это обойдется?', '5000');
//             } while (isNaN(cashExpenses) || cashExpenses == '' || cashExpenses == null);
//             appData.expenses[itemExpenses] = cashExpenses;
//         }
//         appData.deposit = confirm('Есть ли у вас депозит в банке?');
//     },
//     getExpensesMonth: function(){
//         for (var key in appData.expenses) {
//             appData.expensesMonth += +appData.expenses[key];
//         }
//     },
//     getBudget: function() {
//         appData.budgetMonth = appData.budget - appData.expensesMonth;
//         appData.budgetDay = Math.floor(appData.budgetMonth / 30);
//     },
//     getTargetMonth: function() {
//         return appData.mission / appData.budgetMonth;
//     },
//     getStatusIncome: function() {
//         if (appData.budgetDay >= 800) {
//             console.log('Высокий уровень дохода');
//         } else if (appData.budgetDay >= 300) {
//             console.log('Средний уровень дохода');
//         } else if (appData.budgetDay >= 0) {
//             console.log('Низкий уровень дохода');
//         } else if (appData.budgetDay < 0) {
//             console.log('Что то пошло не так');
//         }
//     },
//     getInfoDeposut: function(){
//         if(appData.deposit) {
//             do {
//                 appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
//             } while(isNaN(appData.moneyDeposit) || appData.moneyDeposit == '' || appData.moneyDeposit == null);
//             do {
//                 appData.percentDeposit = prompt('Какой годовой процент?', '10');
//             } while(isNaN(appData.percentDeposit) || appData.percentDeposit == '' || appData.percentDeposit == null);
//         }
//     },
//     calcSaveMoney: function() {
//         return appData.budgetMonth * appData.period;
//     }
// }
// appData.asking();
// appData.getInfoDeposut();
// appData.getExpensesMonth();
// appData.getBudget();
// appData.calcSaveMoney();
//
// console.log('Возможные расходы:' + appData.addExpenses);
//
// if(appData.getTargetMonth() > 0) {
//     console.log('Цель будет достигнута за ' + appData.getTargetMonth() + ' месяца.');
// } else {
//     console.log('Цель не будет достигрнута');
// }
