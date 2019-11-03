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


const createEmployeeRecord = (arg) => {
    return {
        firstName: arg[0],
        familyName: arg[1],
        title: arg[2],
        payPerHour: arg[3],
        timeInEvents: [],
        timeOutEvents: []
    }
  }
  
  const createEmployeeRecords = (array) => {
      return array.map(name => createEmployeeRecord(name))
  }

  
  const createTimeInEvent = function(time) {
    let details = time.split(" ")
    this.timeInEvents.push({type: "TimeIn", hour: parseInt(details[1], 10), date: details[0] })
      
     return this
  }

  const createTimeOutEvent = function(time) {
    let details = time.split(" ")
    this.timeOutEvents.push({type: "TimeOut", hour: parseInt(details[1], 10), date: details[0] })
    return this
  }

  const hoursWorkedOnDate = function(date) {
    let inTime = this.timeInEvents.find((event) => event.date === date)
    let outTime = this.timeOutEvents.find((event) => event.date === date)
    return (outTime.hour - inTime.hour)/100
  }
  
  const  wagesEarnedOnDate = function(date)  {
    const hoursWorked = hoursWorkedOnDate.call(this,date)
    return hoursWorked * this.payPerHour
}

const findEmployeeByFirstName = (src_rec,firstname) => {
  
    return src_rec.find(rec => rec.firstName === firstname)
    
  }

  let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}




  