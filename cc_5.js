//Coding challenge 5

//Step 2: create array of 3-5 emmployee objects

const employees = [
    {name: "Rusty Spoons", hourlyRate: 48.39, hoursWorked: 27},
    {name: "Hubert Cumberdale", hourlyRate: 32.74, hoursWorked: 41},
    {name: "Marjory Stewart-Baxter", hourlyRate: 24.13, hoursWorked: 49},
    {name: "Jeremy Fisher", hourlyRate: 3.75, hoursWorked: 101},
];

employees.forEach(employee => console.log(`Employee Name: ${employee.name}, Hourly Rate: ${employee.hourlyRate}, Hours Worked: ${employee.hoursWorked}`));


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

employees.forEach(({name, hourlyRate, hoursWorked}) => 

)

console.log()