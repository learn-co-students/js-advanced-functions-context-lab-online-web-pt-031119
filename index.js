/* Your Code Here */

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


function createEmployeeRecord(array) {
  return {firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}



function createEmployeeRecords(array) {
  return array.map(function(employee) {
    return createEmployeeRecord(employee)
  })
}


function createTimeInEvent(timeStamp) {
  // let dateStamp = timeStamp.split(' ')

  let [dateStamp, timeIn] = timeStamp.split(' ')

  let timeInCard = {
    date: dateStamp,
    hour: parseInt(timeIn),
    type: "TimeIn"
  }

  this.timeInEvents.push(timeInCard)

  return this

  //create object
  //push to timeInEvent for employee
}


function createTimeOutEvent(timeStamp) {
  let [dateStamp, timeOut] = timeStamp.split(' ')
  //
   let timeOutCard = {
     date: dateStamp,
     hour: parseInt(timeOut),
     type: "TimeOut"
   }

   this.timeOutEvents.push(timeOutCard)

   return this

}


function hoursWorkedOnDate(date) {
  //why are we passing in a date argument
  //create a filter so that the time in
  //and time out will only happen if the date matches
  let lastTimeIn = (this.timeInEvents[this.timeInEvents.length - 1].hour)/100
  let lastTimeOut = (this.timeOutEvents[this.timeOutEvents.length - 1].hour)/100

  return lastTimeOut - lastTimeIn
}

// function wagesEarnedOnDate(date) {
//   // let amountOwed = date.hoursWorkedOnDate()*2
//   // return hoursWorkedOnDate() * this.payPerHour
//   let amountOwed = hoursWorkedOnDate.call(this, date)*this.payPerHour
//
//
//   return amountOwed
// }


let wagesEarnedOnDate = function(dateSought){
    let rawWage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour
    return parseFloat(rawWage.toString())
}


// Argument(s)
// Array of employee records
// Returns
// Pay owed for all dates
// Behavior
// Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee
// in the record used as context. Amount should be returned as a number.

// function calculatePayroll(array) {
//   let expenses = array.reduce(function(memo, employee) {
//     return memo + allWagesFor.call(employee)
//   }, 0)
//   return expenses
// }

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}


function findEmployeeByFirstName(array, firstNameString) {
  let matchingEmployees = array.filter(employee => employee.firstName === firstNameString)

  return matchingEmployees[0]
}

// function payrollExpense(array) {
//   let expenses = [];
//
//   array.forEach(function(employee, i) {
//     expenses.push(allWagesFor.call(this, array[i]))
//   })
//   return expenses
//   // console.log(expenses)
// }
