const createEmployeeRecord = (dataArray) => {
    let employeeRecord = {
        firstName: dataArray[0],
        familyName: dataArray[1],
        title: dataArray[2],
        payPerHour: dataArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord 
}

const createEmployeeRecords = (dataArray) => {
    return dataArray.map(function(element) {
        return createEmployeeRecord(element)
    })
}

const createTimeInEvent = function(dateTime) {     
    const array = dateTime.split(' ')
    let date = array[0]
    let hour = parseInt(array[1], 10)
    
    const timeEvent = {
        type: "TimeIn",
        hour: hour,
        date: date 
    }
    this.timeInEvents.push(timeEvent)
    return this   
}

const createTimeOutEvent = function(dateTime) {
    const array = dateTime.split(' ')
    let date = array[0]
    let hour = parseInt(array[1], 10)
    
    const timeEvent = {
        type: "TimeOut",
        hour: hour,
        date: date
    }
    this.timeOutEvents.push(timeEvent)   
    return this  
}

const hoursWorkedOnDate = function(dateArg) {
    let timeIn = getHour(this.timeInEvents, dateArg)
    let timeOut = getHour(this.timeOutEvents, dateArg)
    const hoursWorked = (timeOut - timeIn) / 100 
    return hoursWorked 
}

const getHour = (timeEvent, dateArg) => {
    for (const element of timeEvent) {
        if (dateArg === element.date) {
            return element.hour 
        }
    }
}

const wagesEarnedOnDate = function(dateArg) {
    let hoursWorked = hoursWorkedOnDate.call(this, dateArg)
    let payOwed = hoursWorked * this.payPerHour
    return payOwed 
}

const findEmployeeByFirstName = (recordsArray, firstName) => {
    for (const element of recordsArray) {
       return firstName === element.firstName ? element : undefined  
    }
}      

const calculatePayroll = (recordsArray) => {
    return recordsArray.reduce(function(memo, element) {
        return memo + allWagesFor.call(element)
    }, 0)     
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

// const allWagesFor = (recordObj) => {
//     const dates = recordObj.timeInEvents.map(element => element.date)
//     const allWages = dates.reduce(function(memo, element) {return memo + wagesEarnedOnDate(recordObj, element)}, 0)
//     return allWages 
// }