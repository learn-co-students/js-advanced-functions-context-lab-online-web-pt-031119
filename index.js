/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(array){
    let newObj = {}
      newObj.firstName = array[0];
      newObj.familyName = array[1];
      newObj.title = array[2];
      newObj.payPerHour = array[3];
      newObj.timeInEvents = [];
      newObj.timeOutEvents = [];
      return newObj
  }

  function createEmployeeRecords(array){
    let newArrayOfObj = []
    array.forEach(element => {
        newArrayOfObj.push(createEmployeeRecord(element))
    });
    return newArrayOfObj
}

let createTimeInEvent = function (dateStamp){

    let hour = parseInt(dateStamp.split(" ")[1]);
    let date = dateStamp.split(" ")[0];
    this.timeInEvents.push({type: "TimeIn", hour: hour, date: date })
    return this
}

let createTimeOutEvent = function (dateStamp){
    let hour = parseInt(dateStamp.split(" ")[1]);
    let date = dateStamp.split(" ")[0];
    this.timeOutEvents.push({type: "TimeOut", hour: hour, date: date })
    return this
}

let hoursWorkedOnDate = function (date){
    // console.log(this)
   let timeIn = this.timeInEvents.find(function(element){
   return element.date == date
    }).hour
    let timeOut = this.timeOutEvents.find(function(element){
    return element.date == date
    }).hour
   return (timeOut - timeIn)/100
}

let wagesEarnedOnDate = function(date){
    let payPerHour = this.payPerHour
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    return payPerHour * hoursWorked
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(array){
    let wages = []
    array.forEach(function(employee){
        wages.push(allWagesFor.call(employee))
    })
    let total = wages.reduce(function(sum, num) { 
        return sum + num; 
    })
    return total
}

function findEmployeeByFirstName(array, firstName){
    
    let object = array.find(function(employee){
     return employee.firstName = firstName
     })
     return object
    }