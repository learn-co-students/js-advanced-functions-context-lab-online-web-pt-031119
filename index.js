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


//takes in an array containing four elements,
//first name, last name, title, and pay per hour
//Loads Array elements into corresponding Object properties.
//Additionally, initialize empty Arrays on the properties
//timeInEvents and timeOutEvents
function createEmployeeRecord(array) {
  return {firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}



//takes in an Array of Arrays
//returns an array of objects
//Converts each nested Array into an employee record using
//createEmployeeRecord and accumulates it to a new Array

// (employee) => {
//   return xxxx
// }

function createEmployeeRecords(array) {
  return array.map(function(employee) {
    return createEmployeeRecord(employee)
  })
}

//Argument(s)
// A date stamp ("YYYY-MM-DD HHMM"), where time is expressed in 24-hour standard
// Returns
// The record that was just updated
// Behavior
// Add an Object with keys:
// type: Set to "TimeIn"
// hour: Derived from the argument
// date: Derived from the argument

// const [title, firstName, lastName] = 'Sir Woody BarksALot'.split(' ')
//use destructuring to create timeIn and dateStamp
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


// Argument(s)
// A date stamp ("YYYY-MM-DD HHMM"), where time is expressed in 24-hour standard
// Returns
// The record that was just updated
// Behavior
// Add an Object with keys:
// type: Set to "TimeOut"
// hour: Derived from the argument
// date: Derived from the argument

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

  // return this.timeOutEvents.push(timeOutCard)
}

// Argument(s)
// A date of the form "YYYY-MM-DD"
// Returns
// Pay owed
// Behavior
// Using hoursWorkedOnDate, multiply the hours by the record's
// payRate to determine amount owed. Amount should be returned as a number.

function wagesEarnedOnDate(date) {
  // let amountOwed = date.hoursWorkedOnDate()*2
}

// hoursWorkedOnDate
// Argument(s)
// A date of the form "YYYY-MM-DD"
// Returns
// Hours worked, an Integer
// Behavior
// Given a date, find the number of hours elapsed
// between that date's timeInEvent and timeOutEvent

function hoursWorkedOnDate(date) {
  //why are we passing in a date argument
  let lastTimeIn = this.timeInEvents[-1]
  let lastTimeOut = this.timeOutEvents[-1]

  console.log(lastTimeIn)
  console.log(lastTimeOut)

  return lastTimeOut - lastTimeIn
}


//
// allWagesFor
// Argument(s)
// None
// Returns
// Sum of pay owed to all employees for all dates, as a number
// Behavior
// Using wagesEarnedOnDate, accumulate the value of
// all dates worked by the employee in
// the record used as context. Amount should be returned as a number.
//  HINT: You will need to find the available dates somehow....

function calculatePayroll() {

}

function findEmployeeByFirstName() {

}
