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

function createEmployeeRecord(info) {
	const employee = {
		firstName: info[0],
		familyName: info[1],
		title: info[2],
		payPerHour: info[3],
		timeInEvents: [],
		timeOutEvents: []
	}
	return employee
}

function createEmployeeRecords(info) {
	let records = info.map(function(e) {
		return createEmployeeRecord(e)
	})
	return records
}

function createTimeInEvent(date_string) {
	let [date, hour] = date_string.split(" ")
	let timeIn = {
		type: "TimeIn",
		date: date,
		hour: parseInt(hour, 10)
	}
	this['timeInEvents'].push(timeIn)
	return this
}

function createTimeOutEvent(date_string) {
	let [date, hour] = date_string.split(" ")
	let timeOut = {
		type: "TimeOut",
		date: date,
		hour: parseInt(hour, 10)
	}
	this['timeOutEvents'].push(timeOut)
	return this
}

function hoursWorkedOnDate(date) {

	let date_timeOut = this['timeOutEvents'].find(function(element) {
		return element['date'] === date
	})

	let date_timeIn = this['timeInEvents'].find(function(element) {
		return element['date'] === date
	})

	return (date_timeOut.hour - date_timeIn.hour)/100
}

function wagesEarnedOnDate(date) {
	return hoursWorkedOnDate.call(this, date) * this['payPerHour']
}

function findEmployeeByFirstName(srcArray, firstName) {
	let employee = srcArray.find(function(element) {
		return element['firstName'] === firstName
	})
	return employee
}

function calculatePayroll(employees) {
	let wages = employees.reduce(function(total, employee) {
		debugger
		return total + allWagesFor.call(employee)
	}, 0)
	return wages
}