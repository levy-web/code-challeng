const prompt = require("prompt-sync")();

//prompts individual to input their marks
let marks  = +prompt("Enter your marks:")

//compares the marks entered to the grade ranks
//console logs the grade of individual
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40

if(marks>=80 && marks<=100){
    console.log("A")
}
else if(marks>=60 && marks<=79){
    console.log("B")
}
else if(marks>=50 && marks<=59){
    console.log("C")
}
else if(marks>=40 && marks<=49){
    console.log("D")
}
else if(marks>=0 && marks<=39){
    console.log("E")
}else console.log("Invalid!!!, Marks should be between 0 and 100")

// prompts to input the speed of the car

let speed = +prompt("Enter the speed:")

//speed limit set to 70 initially and points to start counting from 0

const limit = 70;
let demeritPoints = 0;

//checks if the speed is as required
//outputs ok if is less than 70
//else calculates demerit points 
//outputs demeritpoints where they are less than or equal 12
//and licence suspended where demerit points are greater than 12

if (speed<= limit){
    console.log("OK")
}else {
    demeritPoints = (speed - limit)/5
    if (demeritPoints<=12){
        console.log(`points: ${points}`)
    }
    else(console.log(`Licence suspended, ${points} points`))
    
}

//function that prompts individuals to input their pay
//has a fixed monthly personal relief 
// calculates total amount to be deducted before calculating the tax

function calcSalary(personalRelief, netSalary,totalDeductions, contribitionBenefit,NHIFDeductions, NSSFDeductions, grossSalary, taxableIncome){
    let paye;
    personalRelief = +2400;
    grossSalary = +prompt("Enter your salary amount:")
    contribitionBenefit = +prompt("Contribution Benefit:")
    NHIFDeductions= +prompt("Enter NHIFDeduction:")
    NSSFDeductions= +prompt("Enter NSSFDeduction:")  

    //calculates the amount that is taxable

    
    totalDeductions = (NHIFDeductions + NSSFDeductions + personalRelief + contribitionBenefit);
    taxableIncome = grossSalary - totalDeductions;

    console.log(`your taxableIncome is ksh: ${taxableIncome}`)
    console.log(`your totalDeductions is ksh: ${totalDeductions}`)

    //calculating monthly paye(tax) 
    //depending on individuals income

    switch(true){
        case (taxableIncome<24000):
            paye = taxableIncome * 0.01;
            break;

        case (taxableIncome>=24001 && taxableIncome<= 32333):
            paye = taxableIncome * 0.25;
            break;

        case (taxableIncome>32333):
            paye = taxableIncome * 0.30;
            break;  

    }
    //deducts the tax(paye) and then returns the netsalary

    netSalary = (parseInt (taxableIncome - paye));
    console.log(`your netSalary is ksh: ${netSalary}`)
    

}
calcSalary()