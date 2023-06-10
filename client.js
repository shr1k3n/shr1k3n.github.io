

function swapToMonthly() {
    let modalFooter = document.getElementById('modalfooter');
    modalFooter.innerHTML = '<button type="button" class="btn btn-success" onclick="exportMonthlyToCSV()">Export CSV</button><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>'
    let pageContainer = document.getElementById('pagecontainer');
    pageContainer.innerHTML = ' <div style="width: 100%; text-align: center; padding-top: 10%"> <p class="pageHeader"> Monthly Budgeting </p> </div> <div class="containerTop"> <div style="height: 40%; width: 30%; padding-right: 5%;"> <button class="btn import_csv btn-sq-responsive" style="display: block; height: 100%; width: 100%;" onclick="" type="button"><i style="padding-top: 5%;" class="fa-solid fa-file-csv fa-3x"></i> <p style="font-weight: bold; font-size: 15pt; padding-top: 10px !important;">Import CSV</p></button> <input type="file" name="csv" accept=".csv"> </div> <div style="height: 40%; width: 30%;padding-left: 5%;"> <button class="btn enter_manually btn-sq-responsive" style="display: block; height: 100%; width: 100%;" onclick="monthlyEntry()" type="button"><i style="padding-top: 5%" class="fa-solid fa-pen-to-square fa-3x"></i> <p style="font-weight: bold; font-size: 15pt; padding-top: 10px !important;">Enter Manually</p></button> </div> </div>'
}


function monthlyEntry(){
    let pageContainer = document.getElementById('pagecontainer');
    pageContainer.innerHTML = '  <div class="manualQuestionsBox"> <div> <div id="monthlyincomeheader" class="alert alert-success" role="alert"><p class="alert-heading manualInputAlertText">What is your monthly income?</p></div> <div class="input-group mb-4"><label class="input-group-text" for="monthlyincome">Monthly Income &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="monthlyincome" type="number" class="form-control form-control-lg"></div> </div> <div> <div id="savingsincomeheader" class="alert alert-primary" role="alert"><p class="alert-heading manualInputAlertText">How much would you like to save? (Monthly)</p></div> <div class="input-group mb-4"><label class="input-group-text" for="savings">Savings &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="savings" type="number" class="form-control form-control-lg"></div> </div> <div> <div id="carexpenses" class="alert alert-danger" role="alert"><p class="alert-heading manualInputAlertText">Car Expenses (Monthly)</p></div> <div class="input-group mb-4"><label class="input-group-text" for="carpayment">Car Payment &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="carpayment" type="number" class="form-control form-control-lg"></div> <div class="input-group mb-4"><label class="input-group-text" for="carinsurance">Car Insurance &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="carinsurance" type="number" class="form-control form-control-lg"></div> <div class="input-group mb-4"><label class="input-group-text" for="carrepairs">Car Repairs &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="carrepairs" type="number" class="form-control form-control-lg"></div> </div> <div> <div id="housingexpenses" class="alert alert-danger" role="alert"><p class="alert-heading manualInputAlertText">Housing Expenses</p></div> <div class="input-group mb-4"><label class="input-group-text" for="rent">Rent &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="rent" type="number" class="form-control form-control-lg"></div> <div class="input-group mb-4"><label class="input-group-text" for="electric">Electric &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="electric" type="number" class="form-control form-control-lg"></div> <div class="input-group mb-4"><label class="input-group-text" for="wifi">Wi-Fi &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="wifi" type="number" class="form-control form-control-lg"></div> </div> <div> <div id="subscriptionexpenses" class="alert alert-danger" role="alert"><p class="alert-heading manualInputAlertText">Subscriptions (Monthly)</p></div> <div id="subscriptionscontainer" style="width: 100%;"> </div> <div style="width: 100%; text-align: center; padding-bottom: 10px;"> <i class="fa-solid fa-circle-plus fa-3x" onclick="addSubscription()"></i> </div> </div> <div> <div id="otherexpenses" class="alert alert-danger" role="alert"><p class="alert-heading manualInputAlertText">Weekly Expenses</p></div> <div class="input-group mb-4"><label class="input-group-text" for="cargas">Gas &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="cargas" type="number" class="form-control form-control-lg"></div> <div class="input-group mb-4"><label class="input-group-text" for="groceries">Groceries &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="groceries" type="number" class="form-control form-control-lg"></div> <div class="input-group mb-4"><label class="input-group-text" for="dining">Dining &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="dining" type="number" class="form-control form-control-lg"></div> <div class="input-group mb-4"><label class="input-group-text" for="entertainment">Entertainment &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="entertainment" type="number" class="form-control form-control-lg"></div> </div> <div style="width: 100%; text-align: center;"> <button type="button" class="btn btn-lg btn-success" data-bs-toggle="modal" data-bs-target="#viewCalculationsModal" onclick="calculateMonthly()">Calculate</button> </div> </div>'
}

let subscriptionIDs = [];
let subscriptionIterator = 0;

function addSubscription(){
    let subscriptionsContainer = document.getElementById('subscriptionscontainer');
    subscriptionIterator ++;
    console.log(subscriptionIterator)

    subscriptionIDs.push('subscription' + subscriptionIterator);
    console.log(subscriptionIDs)
    let newDivElement = document.createElement("div");
    newDivElement.setAttribute("id", "row" + subscriptionIterator + "");
    newDivElement.innerHTML = '<div id="row' + subscriptionIterator + '" class="input-group mb-4"><label class="input-group-text" for="subscription' + subscriptionIterator + '"><select class="form-select" id="comingFromBins"> <option selected>-</option> <option>Disney +</option> <option>Hulu</option> <option>Amazon Prime</option> <option>HBO Max</option> <option>Netflix</option> <option>WordPress</option> <option>Phone Bill</option> <option>Spotify</option> <option>Other</option> </select> &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="subscription' + subscriptionIterator + '" type="number" class="form-control form-control-lg"><i id="remove' + subscriptionIterator + '" style="padding-left: 5px; color: #ff0000;" class="fa-solid fa-circle-minus fa-3x" onclick="removeSubscription(this)"></i></div>'
    subscriptionsContainer.appendChild(newDivElement)
}

function removeSubscription(removeid){

    let removeElementID = removeid.id;

    let subscriptionIteration = removeElementID.replace('remove', '');
    subscriptionIDs = subscriptionIDs.filter(item => item !== "subscription" + subscriptionIteration)
    console.log(subscriptionIDs)

    let divToRemoveId = 'row' + subscriptionIteration;
    console.log(divToRemoveId)

    let divToRemove = document.getElementById(divToRemoveId)

    divToRemove.remove()


    console.log(subscriptionIteration)

}

let monthlyArr = [];
let overallExpenses = [];
let totalLeftover = []


let monthlyDataArray = [
    ['Monthly Savings', 'Monthly Income', 'Monthly Expenses'],
    monthlyArr,
    ['Regular Monthly Expenses', 'Regular Weekly Expenses', 'Subscription Expenses'],
    overallExpenses,
    ['Total Leftover:'],
    totalLeftover
]



function calculateMonthly(){
    let finalExpenseTotal = 0;

    let monthlyIncomeValue = Number(document.getElementById('monthlyincome').value);

    let savings = Number(document.getElementById('savings').value);

    //monthly
    let carPaymentValue = Number(document.getElementById('carpayment').value);
    let carInsuranceValue = Number(document.getElementById('carinsurance').value);
    let carRepairsValue = Number(document.getElementById('carrepairs').value);
    let rentValue = Number(document.getElementById('rent').value);
    let electricValue = Number(document.getElementById('electric').value);
    let wifiValue = Number(document.getElementById('wifi').value);

    let monthlyTotal = carPaymentValue + carInsuranceValue + carRepairsValue + rentValue + electricValue + wifiValue;

    console.log("Monthly " + monthlyTotal)

    //weekly
    let carGas = Number(document.getElementById('cargas').value) * 4;
    let groceries = Number(document.getElementById('groceries').value) * 4;
    let dining = Number(document.getElementById('dining').value) * 4;
    let entertainment = Number(document.getElementById('entertainment').value) * 4;

    let weeklyTotal = carGas + groceries + dining + entertainment
    console.log("Weekly: " + weeklyTotal)

    let subscriptionTotal = 0;

    for (let i = 0; i < subscriptionIDs.length; i++) {
        let subscriptionValue = document.getElementById(subscriptionIDs[i]).value;
        subscriptionTotal += Number(subscriptionValue);
    }

    console.log("Subscriptions: " + subscriptionTotal)


    finalExpenseTotal += savings
        + carPaymentValue
        + carInsuranceValue
        + carRepairsValue
        + rentValue
        + electricValue
        + wifiValue
        + subscriptionTotal
        + carGas
        + groceries
        + dining
        + entertainment

    let monthlyLeftover = monthlyIncomeValue - finalExpenseTotal
    monthlyArr.push(savings, monthlyIncomeValue, finalExpenseTotal)
    overallExpenses.push(monthlyTotal, weeklyTotal, subscriptionTotal)
    totalLeftover.push(monthlyLeftover)

    console.log(console.log(Intl.NumberFormat('en-US').format(finalExpenseTotal)))

    let modalBodyData = document.getElementById('modaldata');

    modalBodyData.innerHTML = '<p class="calculateResultsText"><b style="color: green">Total Monthly Savings: </b>$ ' + Intl.NumberFormat('en-US').format(savings) + '</p><br><p class="calculateResultsText"><b style="color: black">Regular Monthly Expenses: </b>$ ' + Intl.NumberFormat('en-US').format(monthlyTotal) + '</p><p class="calculateResultsText"><b style="color: black">Regular Weekly Expenses: </b>$ ' + Intl.NumberFormat('en-US').format(weeklyTotal) + '</p><p class="calculateResultsText"><b style="color: black">Subscription Expenses: </b>$ ' + Intl.NumberFormat('en-US').format(subscriptionTotal) + '</p><br><br><p class="calculateResultsText"><b style="color: red">Total Monthly Expenses: </b>$ ' + Intl.NumberFormat('en-US').format(finalExpenseTotal) + '</p><br><p class="calculateResultsText"><b style="color: green">Total Monthly Leftover: </b>$ ' + Intl.NumberFormat('en-US').format(monthlyLeftover) + '</p>'

}




function exportMonthlyToCSV() {
    // const mainCSV = dataArray.map(row => row.join(',')).join('\n');
    let csvContent = "data:text/csv;charset=utf-8," + monthlyDataArray.map(e => e.join(",")).join("\n");
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
}