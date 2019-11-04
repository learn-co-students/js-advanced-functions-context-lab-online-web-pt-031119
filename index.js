/* Your Code Here */
function createEmployeeRecord(source){
    let employee = {
        firstName: source[0],
        familyName: source[1],
        title: source[2],
        payPerHour: source[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return employee;
}

function createEmployeeRecords(employees){
    let employeeArray = [];
    employees.forEach(function(employee){
      employeeArray.push(createEmployeeRecord(employee));
    });
    return employeeArray;
}

function createTimeInEvent(timeIn){
    let dateIn = timeIn.split(' ')[0];
    let hourIn = timeIn.split(' ')[1];
    let timeEntryIn = {
      type: 'TimeIn',
      date: dateIn,
      hour: parseInt(hourIn,10)
    };
    this.timeInEvents.push(timeEntryIn);
    return this;
}

function createTimeOutEvent(timeOut){
    let dateOut = timeOut.split(' ')[0];
    let hourOut = timeOut.split(' ')[1];
    let timeEntryOut = {
        type: 'TimeOut',
        date: dateOut,
        hour: parseInt(hourOut,10)
    };
    this.timeOutEvents.push(timeEntryOut);
    return this;
}

function hoursWorkedOnDate(date){
    let foundTimeIn = this.timeInEvents.find(function(element){
        return element.date === date;
    });
    
    let foundTimeOut = this.timeOutEvents.find(function(element){
        return element.date === date;
    });
    
    let timeWorked = (foundTimeOut.hour - foundTimeIn.hour)/100;
    
    return timeWorked;
}

function wagesEarnedOnDate(date){
    let numHoursWorked = hoursWorkedOnDate.call(this,date);
    let wages = this.payPerHour * numHoursWorked;
    return wages;
}

function calculatePayroll(employees){
    let totalWages = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
    employees.forEach(function(element){
      totalWages.push(allWagesFor.call(element));
    })
    return totalWages.reduce(reducer);
}

function findEmployeeByFirstName(empList,firstName){
    let employee = empList.find(function(element){
        return element.firstName === firstName;
    })
    return employee;
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}