//Coding challenge 5

//Step 2: create array of 3-5 emmployee objects

const employees = [
    {name: "Rusty Spoons", hourlyRate: 48.39, hoursWorked: 27},
    {name: "Hubert Cumberdale", hourlyRate: 32.74, hoursWorked: 41},
    {name: "Marjory Stewart-Baxter", hourlyRate: 24.13, hoursWorked: 49},
    {name: "Jeremy Fisher", hourlyRate: 3.75, hoursWorked: 101},
];

//console log note to test step 2
//employees.forEach(employee => console.log(`Employee Name: ${employee.name}, Hourly Rate: ${employee.hourlyRate}, Hours Worked: ${employee.hoursWorked}`));


//Step 3: Write function to calculate base pay

function calculateBasePay(hourlyRate, hoursWorked) {
    const baseHours = Math.min(hoursWorked, 40);
    return baseHours * hourlyRate; // hourly rate on hours up to and including 40
    }

//Step 4: Write a function to calculate overtime pay
function calculateOvertimePay(hourlyRate, hoursWorked) {
    const overtimeHours = Math.max(hoursWorked - 40, 0);
    return overtimeHours * hourlyRate * 1.5; // time and a half on hours over 40
    }

employees.forEach(({name, hourlyRate, hoursWorked}) => {
    const basePay = calculateBasePay(hourlyRate, hoursWorked);
    const overtimePay = calculateOvertimePay(hourlyRate, hoursWorked);
    const grossPay = basePay + overtimePay;
    

console.log(`Employee Name: ${name}, Hours: ${hoursWorked}, 
    Hourly Rate: ${hourlyRate.toFixed(2)}, Base Pay: $${basePay.toFixed(2)}, 
    Overtime Pay: $${overtimePay.toFixed(2)}, Gross Pay: ${grossPay.toFixed(2)}`);
})
