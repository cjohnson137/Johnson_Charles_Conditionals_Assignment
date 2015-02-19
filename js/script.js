/**
 * Charles Johnson
 * Conditionals Assignment
 * Hourly Pay Calculator
 * SDI Section 1
 * February 16, 2015
 */



    // Define Pay Variables
var yourName;
var payFrequency;
var noHours;
var perHour;

var payWeekly;
var payWeeklyTotal;

var payBiWeekly;
var payBiWeeklyTotal;

var payMonthly;
var payMonthlyTotal;

// Prompt Variables

// Check that the name does not contain an empty string.
    do {

        // alert("You need to enter a valid name.")
        yourName = prompt("What is your name?");
    }  while (yourName == "")



// Check that the hours does not contain an empty value.

    do {

        noHours = prompt("Please enter the number of hours you worked for the pay period.");

    }  while (noHours == "")

            if (payFrequency == "Weekly" || payFrequency == "Week" || payFrequency == "By the week") {

                payWeekly = noHours * perHour;
                payWeeklyTotal = payWeekly * 4;



// Check that the pay does not contain an empty value.

    do {

        perHour = prompt("Please enter your hourly pay? (Numbers only)");


    }  while (typeof perHour != "number")


// Check that the pay period does not contain an empty string.

                do {

                    payFrequency = prompt("Do you get paid Weekly, Bi-Weekly, or Monthly?");

                }  while (payFrequency == "" )

                if (payFrequency == "Weekly" || payFrequency == "Week" || payFrequency == "By the week") {

                    payWeekly = noHours * perHour;
                    payWeeklyTotal = payWeekly * 4;

                } else if ("Bi-Weekly" || "BiWeekly" || "Bi" || "Twice A Week"){

                    payBiWeekly = noHours * perHour;
                    payBiWeeklyTotal = payBiWeekly * 2;

                } else if ("Monthly" || "Month" || "A Month"){

                    payMonthly = noHours * perHour;
                    payMonthlyTotal = payMonthly * 1;

                } else {


                }
            }




// Console Output

console.log(yourName);
console.log(payWeekly);

