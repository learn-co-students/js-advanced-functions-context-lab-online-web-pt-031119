/* Your Code Here */

function createEmployeeRecord(employeeInfoArray) {
  let employee = {
    firstName: employeeInfoArray[0],
    familyName: employeeInfoArray[1],
    title: employeeInfoArray[2],
    payPerHour: employeeInfoArray[3],
    timeInEvents: [],
    timeOutEvents: []
  };
  return employee;
}

function createEmployeeRecords(employeesInfoArray) {
  let employeesArray = employeesInfoArray.map(function(employee) {
    return createEmployeeRecord(employee);
  });
  return employeesArray;
}

function createTimeInEvent(timeStamp) {
  let date = timeStamp.split(" ")[0];
  let time = timeStamp.split(" ")[1];
  let dateAndTimeIn = {
    type: "TimeIn",
    hour: parseInt(time, 10),
    date: date
  };
  this.timeInEvents.push(dateAndTimeIn);
  return this;
}

function createTimeOutEvent(timeStamp) {
  let date = timeStamp.split(" ")[0];
  let time = timeStamp.split(" ")[1];
  let dateAndTimeOut = {
    type: "TimeOut",
    hour: parseInt(time, 10),
    date: date
  };
  this.timeOutEvents.push(dateAndTimeOut);
  return this;
}

function hoursWorkedOnDate(dateQuery) {
  let timeIn = this.timeInEvents.find(function(elem) {
    return elem.date === dateQuery;
  });
  let timeOut = this.timeOutEvents.find(function(elem) {
    return elem.date === dateQuery;
  });
  let hoursWorked = (timeOut.hour - timeIn.hour) / 100;
  return hoursWorked;
}

function wagesEarnedOnDate(dateQuery) {
  let hoursWorked = hoursWorkedOnDate.call(this, dateQuery);
  let wagesEarned = hoursWorked * this.payPerHour;
  return wagesEarned;
}

function calculatePayroll(empRecords) {
  let empWageTotals = empRecords.map(function(empObj) {
    return allWagesFor.call(empObj);
  });
  let payrollTotal = empWageTotals.reduce(function(accumulator, total) {
    return accumulator + total;
  });
  return payrollTotal;
}

function findEmployeeByFirstName(empRecords, firstName) {
  let employee = empRecords.find(function(empObj) {
    return firstName === empObj.firstName;
  });
  return employee;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function() {
  let eligibleDates = this.timeInEvents.map(function(e) {
    return e.date;
  });

  let payable = eligibleDates.reduce(
    function(memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};

// function allWagesFor(empRecord) {
//     let wageArray = empRecord.timeInEvents.map(function(timeInObj) {
//       return wagesEarnedOnDate(empRecord, timeInObj.date);
//     });
//     let wageTotal = wageArray.reduce(function(accumulator, wage) {
//       return accumulator + wage;
//     });
//     return wageTotal;
//   }
