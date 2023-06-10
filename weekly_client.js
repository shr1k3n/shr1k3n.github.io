

function swapToWeekly() {
    let modalFooter = document.getElementById('modalfooter');
    modalFooter.innerHTML = '<button type="button" class="btn btn-success" onclick="exportWeeklyToCSV()">Export CSV</button><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>'
    let pageContainer = document.getElementById('pagecontainer');
    pageContainer.innerHTML = ' <div style="width: 100%; text-align: center; padding-top: 10%"> <p class="pageHeader"> Weekly Budgeting </p> </div> <div class="containerTop"> <div style="height: 40%; width: 30%; padding-right: 5%;"> <button class="btn import_csv btn-sq-responsive" style="display: block; height: 100%; width: 100%;" onclick="" type="button"><i style="padding-top: 5%;" class="fa-solid fa-file-csv fa-3x"></i> <p style="font-weight: bold; font-size: 15pt; padding-top: 10px !important;">Import CSV</p></button> <input type="file" name="csv" accept=".csv"> </div> <div style="height: 40%; width: 30%;padding-left: 5%;"> <button class="btn enter_manually btn-sq-responsive" style="display: block; height: 100%; width: 100%;" onclick="weeklyEntry()" type="button"><i style="padding-top: 5%" class="fa-solid fa-pen-to-square fa-3x"></i> <p style="font-weight: bold; font-size: 15pt; padding-top: 10px !important;">Enter Manually</p></button> </div> </div>'
}


function weeklyEntry(){
    let pageContainer = document.getElementById('pagecontainer');
    pageContainer.innerHTML = ' <div class="manualQuestionsBox"> <div> <div id="monthlyincomeheader" class="alert alert-success" role="alert"><p class="alert-heading manualInputAlertText">What is your weekly income?</p></div> <div class="input-group mb-4"><label class="input-group-text" for="weeklyincome">Weekly Income &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="weeklyincome" type="number" class="form-control form-control-lg"></div> </div> <div> <div id="savingsincomeheader" class="alert alert-primary" role="alert"><p class="alert-heading manualInputAlertText">How much would you like to save? (monthly)</p></div> <div class="input-group mb-4"><label class="input-group-text" for="savings">Savings &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="savings" type="number" class="form-control form-control-lg"></div> </div> <div> <div id="carexpenses" class="alert alert-danger" role="alert"><p class="alert-heading manualInputAlertText">Car Expenses (monthly)</p></div> <div class="input-group mb-4"><label class="input-group-text" for="carpayment">Car Payment &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="carpayment" type="number" class="form-control form-control-lg"></div> <div class="input-group mb-4"><label class="input-group-text" for="carinsurance">Car Insurance &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="carinsurance" type="number" class="form-control form-control-lg"></div> <div class="input-group mb-4"><label class="input-group-text" for="carrepairs">Car Repairs &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="carrepairs" type="number" class="form-control form-control-lg"></div> </div> <div> <div id="housingexpenses" class="alert alert-danger" role="alert"><p class="alert-heading manualInputAlertText">Housing Expenses (monthly)</p></div> <div class="input-group mb-4"><label class="input-group-text" for="rent">Rent &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="rent" type="number" class="form-control form-control-lg"></div> <div class="input-group mb-4"><label class="input-group-text" for="electric">Electric &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="electric" type="number" class="form-control form-control-lg"></div> <div class="input-group mb-4"><label class="input-group-text" for="wifi">Wi-Fi &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="wifi" type="number" class="form-control form-control-lg"></div> </div> <div> <div id="subscriptionexpenses" class="alert alert-danger" role="alert"><p class="alert-heading manualInputAlertText">Subscriptions (Monthly)</p></div> <div id="subscriptionscontainer" style="width: 100%;"> </div> <div style="width: 100%; text-align: center; padding-bottom: 10px;"> <i class="fa-solid fa-circle-plus fa-3x" onclick="addSubscriptionWeekly()"></i> </div> </div> <div> <div id="weeklyexpenses" class="alert alert-danger" role="alert"><p class="alert-heading manualInputAlertText">Weekly Expenses</p></div> <div class="input-group mb-4"><label class="input-group-text" for="cargas">Gas &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="cargas" type="number" class="form-control form-control-lg"></div> <div class="input-group mb-4"><label class="input-group-text" for="groceries">Groceries &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="groceries" type="number" class="form-control form-control-lg"></div> <div class="input-group mb-4"><label class="input-group-text" for="dining">Dining &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="dining" type="number" class="form-control form-control-lg"></div> <div class="input-group mb-4"><label class="input-group-text" for="entertainment">Entertainment &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="entertainment" type="number" class="form-control form-control-lg"></div> </div> <div> <div id="otherexpenses" class="alert alert-danger" role="alert"><p class="alert-heading manualInputAlertText">Loans (monthly)</p></div> <div class="input-group mb-4"><label class="input-group-text" for="studentloans">Student Loans &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="studentloans" type="number" class="form-control form-control-lg"></div> <div class="input-group mb-4"><label class="input-group-text" for="creditloans">Credit Card Loans &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="creditloans" type="number" class="form-control form-control-lg"></div> <div class="input-group mb-4"><label class="input-group-text" for="otherloans">Other Loans &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="otherloans" type="number" class="form-control form-control-lg"></div> </div> <div style="width: 100%; text-align: center;"> <button type="button" class="btn btn-lg btn-success" data-bs-toggle="modal" data-bs-target="#viewCalculationsModal" onclick="calculateWeekly()">Calculate</button> </div> </div>'
}

let subscriptionIDsWeekly = [];
let subscriptionIteratorWeekly = 0;

function addSubscriptionWeekly(){
    let subscriptionsContainer = document.getElementById('subscriptionscontainer');
    subscriptionIteratorWeekly ++;
    console.log(subscriptionIteratorWeekly)

    subscriptionIDsWeekly.push('subscription' + subscriptionIteratorWeekly);
    console.log(subscriptionIDsWeekly)
    let newDivElement = document.createElement("div");
    newDivElement.setAttribute("id", "row" + subscriptionIteratorWeekly + "");
    newDivElement.innerHTML = '<div id="row' + subscriptionIteratorWeekly + '" class="input-group mb-4"><label class="input-group-text" for="subscription' + subscriptionIteratorWeekly + '"><select class="form-select" id="comingFromBins"> <option selected>-</option> <option>Disney +</option> <option>Hulu</option> <option>Amazon Prime</option> <option>HBO Max</option> <option>Netflix</option> <option>WordPress</option> <option>Phone Bill</option> <option>Spotify</option> <option>Xbox Game Pass</option> <option>Other</option> </select> &nbsp;&nbsp;&nbsp;<b>$</b></label> <input id="subscription' + subscriptionIteratorWeekly + '" type="number" class="form-control form-control-lg"><i id="remove' + subscriptionIteratorWeekly + '" style="padding-left: 5px; color: #ff0000;" class="fa-solid fa-circle-minus fa-3x" onclick="removeSubscriptionWeekly(this)"></i></div>'
    subscriptionsContainer.appendChild(newDivElement)
}

function removeSubscriptionWeekly(removeid){

    let removeElementID = removeid.id;

    let subscriptionIteration = removeElementID.replace('remove', '');
    subscriptionIDsWeekly = subscriptionIDsWeekly.filter(item => item !== "subscription" + subscriptionIteration)
    console.log(subscriptionIDsWeekly)

    let divToRemoveId = 'row' + subscriptionIteration;
    console.log(divToRemoveId)

    let divToRemove = document.getElementById(divToRemoveId)

    divToRemove.remove()


    console.log(subscriptionIteration)

}

let weeklyLeftoverArr = [];
let monthlyDataArr = [];
let weeklyDataArr = [];
let weeklyBills = [];
let monthlyBreakDownHeaders = [];
let monthlyBillBreakDown = [];

let dataArray = [
    ['Monthly Savings', 'Monthly Income', 'Monthly Expenses'],
    monthlyDataArr,
    ['Weekly Income', 'Weekly Put Away', 'Weekly Checkings'],
    weeklyDataArr,
    ['Weekly Expenses:'],
    ['Gas', 'Groceries', 'Dining', 'Entertainment'],
    weeklyBills,
    weeklyLeftoverArr,
    monthlyBreakDownHeaders,
    monthlyBillBreakDown
]


function calculateWeekly(){
    let finalExpenseTotal = 0;

    let weeklyIncomeValue = Number(document.getElementById('weeklyincome').value);
    let monthlyIncomeValue = weeklyIncomeValue * 4;

    let savings = Number(document.getElementById('savings').value);

    let weeklySavings = (Math.round(10 * savings)/10)/4

    //monthly
    let carPaymentValue = Number(document.getElementById('carpayment').value);
    let carInsuranceValue = Number(document.getElementById('carinsurance').value);
    let carRepairsValue = Number(document.getElementById('carrepairs').value);
    let rentValue = Number(document.getElementById('rent').value);
    let electricValue = Number(document.getElementById('electric').value);
    let wifiValue = Number(document.getElementById('wifi').value);
    let studentLoansValue = Number(document.getElementById('studentloans').value);
    let creditLoans = Number(document.getElementById('creditloans').value);
    let otherLoans = Number(document.getElementById('otherloans').value);

    let loansTotal = studentLoansValue + creditLoans + otherLoans

    let carPaymentWeekly = (Math.round(10 * carPaymentValue)/10)/4;
    let carInsuranceWeekly = (Math.round(10 * carInsuranceValue)/10)/4;
    let carRepairsWeekly = (Math.round(10 * carRepairsValue)/10)/4;

    let rentWeekly = (Math.round(10 * rentValue)/10)/4;
    let electricWeekly = (Math.round(10 * electricValue)/10)/4;
    let wifiWeekly = (Math.round(10 * wifiValue)/10)/4;

    let studentLoansWeekly = (Math.round(10 * studentLoansValue)/10)/4;
    let creditLoansWeekly = (Math.round(10 * creditLoans)/10)/4;
    let otherLoansWeekly = (Math.round(10 * otherLoans)/10)/4;


    //weekly
    let carGas = Number(document.getElementById('cargas').value);
    let groceries = Number(document.getElementById('groceries').value);
    let dining = Number(document.getElementById('dining').value);
    let entertainment = Number(document.getElementById('entertainment').value);

    let weeklyTotal = carGas + groceries + dining + entertainment

    let carGasMonthly = Number(document.getElementById('cargas').value) * 4;
    let groceriesMonthly = Number(document.getElementById('groceries').value) * 4;
    let diningMonthly = Number(document.getElementById('dining').value) * 4;
    let entertainmentMonthly = Number(document.getElementById('entertainment').value) * 4;

    // let weeklyTotal = carGas + groceries + dining + entertainment
    // console.log("Weekly: " + weeklyTotal)
    //
    let subscriptionTotal = 0;

    for (let i = 0; i < subscriptionIDsWeekly.length; i++) {
        let subscriptionValue = document.getElementById(subscriptionIDsWeekly[i]).value;
        subscriptionTotal += Number(subscriptionValue);
    }

    console.log(subscriptionTotal)

    let subscriptionsWeekly = (Math.round(10 * subscriptionTotal)/10)/4;

    let weeklyPutAway = 0;

    weeklyPutAway += weeklySavings
        + carPaymentWeekly
        + carInsuranceWeekly
        + carRepairsWeekly
        + subscriptionsWeekly
        + rentWeekly
        + electricWeekly
        + wifiWeekly
        + studentLoansWeekly
        + creditLoansWeekly
        + otherLoansWeekly


    let weeklyAfterPutAway = weeklyIncomeValue - weeklyPutAway;


    let leftOverWeekly = weeklyAfterPutAway - weeklyTotal

    weeklyLeftoverArr.push('Weekly Leftover:', leftOverWeekly)

    finalExpenseTotal += savings
        + carPaymentValue
        + carInsuranceValue
        + carRepairsValue
        + rentValue
        + electricValue
        + wifiValue
        + subscriptionTotal
        + carGasMonthly
        + groceriesMonthly
        + diningMonthly
        + entertainmentMonthly
        + loansTotal

        monthlyDataArr.push(savings, monthlyIncomeValue, finalExpenseTotal)
        weeklyDataArr.push(weeklyIncomeValue, weeklyPutAway, weeklyAfterPutAway)
        weeklyBills.push(carGas, groceries, dining, entertainment)

        if(Boolean(weeklySavings)) {
            monthlyBreakDownHeaders.push('weeklySavings')
            monthlyBillBreakDown.push(weeklySavings)
        }
        if(Boolean(carPaymentWeekly)) {
            monthlyBreakDownHeaders.push('carPaymentWeekly')
            monthlyBillBreakDown.push(carPaymentWeekly)

        }
        if(Boolean(carInsuranceWeekly)) {
            monthlyBreakDownHeaders.push('carInsuranceWeekly')
            monthlyBillBreakDown.push(carInsuranceWeekly)

        }
        if(Boolean(carRepairsWeekly)) {
            monthlyBreakDownHeaders.push('carRepairsWeekly')
            monthlyBillBreakDown.push(carRepairsWeekly)

        }
        if(Boolean(subscriptionsWeekly)) {
            monthlyBreakDownHeaders.push('subscriptionsWeekly')
            monthlyBillBreakDown.push(subscriptionsWeekly)

        }
        if(Boolean(rentWeekly)) {
            monthlyBreakDownHeaders.push('rentWeekly')
            monthlyBillBreakDown.push(rentWeekly)

        }
        if(Boolean(electricWeekly)) {
            monthlyBreakDownHeaders.push('electricWeekly')
            monthlyBillBreakDown.push(electricWeekly)

        }
        if(Boolean(wifiWeekly)) {
            monthlyBreakDownHeaders.push('wifiWeekly')
            monthlyBillBreakDown.push(wifiWeekly)

        }
        if(Boolean(studentLoansWeekly)) {
            monthlyBreakDownHeaders.push('studentLoansWeekly')
            monthlyBillBreakDown.push(studentLoansWeekly)

        }
        if(Boolean(creditLoansWeekly)) {
            monthlyBreakDownHeaders.push('creditLoansWeekly')
            monthlyBillBreakDown.push(creditLoansWeekly)

        }
        if(Boolean(otherLoansWeekly)) {
            monthlyBreakDownHeaders.push('otherLoansWeekly')
            monthlyBillBreakDown.push(otherLoansWeekly)
        }

        console.log(dataArray)



    //
    // let monthlyLeftover = monthlyIncomeValue - finalExpenseTotal

    console.log(console.log(Intl.NumberFormat('en-US').format(finalExpenseTotal)))

    let modalBodyData = document.getElementById('modaldata');

        modalBodyData.innerHTML = '<p class="calculateResultsText"><b style="color: green">Monthly Savings: </b>$ ' + Intl.NumberFormat('en-US').format(savings) + '</p><p class="calculateResultsText"><b style="color: green">Monthly Income: </b>$ ' + Intl.NumberFormat('en-US').format(monthlyIncomeValue) + '</p><p class="calculateResultsText"><b style="color: green">Weekly Income: </b>$ ' + Intl.NumberFormat('en-US').format(weeklyIncomeValue) + '</p><p class="calculateResultsText"><b style="color: red">Monthly Expenses Total: </b>$ ' + Intl.NumberFormat('en-US').format(finalExpenseTotal) + '</p><br><b class="calculateResultsText" style="color: dodgerblue">Monthly Expenses Broken Down Weekly: </b><br><p class="calculateResultsText"><b style="color: black">Save Weekly: </b>$ ' + Intl.NumberFormat('en-US').format(weeklySavings) + '</p><p class="calculateResultsText"><b style="color: black">Car Payment Weekly: </b>$ ' + Intl.NumberFormat('en-US').format(carPaymentWeekly) + '</p><p class="calculateResultsText"><b style="color: black">Car Insurance Weekly: </b>$ ' + Intl.NumberFormat('en-US').format(carInsuranceWeekly) + '</p><p class="calculateResultsText"><b style="color: black">Car Repairs Weekly: </b>$ ' + Intl.NumberFormat('en-US').format(carRepairsWeekly) + '</p><p class="calculateResultsText"><b style="color: black">Rent Weekly: </b>$ ' + Intl.NumberFormat('en-US').format(rentWeekly) + '</p><p class="calculateResultsText"><b style="color: black">Electric Weekly: </b>$ ' + Intl.NumberFormat('en-US').format(electricWeekly) + '</p><p class="calculateResultsText"><b style="color: black">WiFi Weekly: </b>$ ' + Intl.NumberFormat('en-US').format(wifiWeekly) + '</p><p class="calculateResultsText"><b style="color: black">Subscriptions Weekly: </b>$ ' + Intl.NumberFormat('en-US').format(subscriptionsWeekly) + '</p><p class="calculateResultsText"><b style="color: black">Student Loans Weekly: </b>$ ' + Intl.NumberFormat('en-US').format(studentLoansWeekly) + '</p><p class="calculateResultsText"><b style="color: black">Credit Loans Weekly: </b>$ ' + Intl.NumberFormat('en-US').format(creditLoansWeekly) + '</p><p class="calculateResultsText"><b style="color: black">Other Loans Weekly: </b>$ ' + Intl.NumberFormat('en-US').format(otherLoansWeekly) + '</p><p class="calculateResultsText" style="color: red;"><b>Put Away Each Paycheck:&nbsp;&nbsp;$&nbsp;-</b>' + Intl.NumberFormat('en-US').format(weeklyPutAway) + '</p><br><p class="calculateResultsText"><b style="color: yellow">Money Into Checkings: </b>$ ' + Intl.NumberFormat('en-US').format(weeklyAfterPutAway) + '</p><br><p class="calculateResultsText"><b style="color: green">Money Leftover Weekly: </b>$ ' + Intl.NumberFormat('en-US').format(leftOverWeekly) + '</p>'

}


function exportWeeklyToCSV() {
    // const mainCSV = dataArray.map(row => row.join(',')).join('\n');
    let csvContent = "data:text/csv;charset=utf-8," + dataArray.map(e => e.join(",")).join("\n");
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
}