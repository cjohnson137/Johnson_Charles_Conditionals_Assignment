/**
 * Charles Johnson
 * Conditionals Assignment
 * Hourly Pay Calculator
 * SDI Section 1
 * February 16, 2015
 */



    // Define Pay Variables
var yourName;  // Name Variable
var payFrequency; // Length of pay period
var noHours;   // Hours worked variable
var perHour;   // Amount user gets paid per hour

var payWeekly;   // Weekly pay period variable
var payWeeklyTotal;   // Weekly pay period variable 2

var payBiWeekly;    // Bi Weekly pay period variable
var payBiWeeklyTotal;   // Bi Weekly pay period variable 2

var payMonthly;    // Monthly pay period variable
var payMonthlyTotal;   // Monthly pay period variable 2

var payValue;   // Overall Hours and Amount per hour variable
var payValueTotal;  // Overall Hours and Amount per hour variable 2

var textOutput1;
var textOutput2;

var payFrequency1;

var varTest = "testing";

// Prompt Variables

// Check that the name does not contain an empty string.
    do {

        // alert("You need to enter a valid name.")
        yourName = prompt("What is your name?");
    }  while (yourName == "") // Validate empty string



// Check that the hours does not contain an empty value.

    do {

        noHours = prompt("Please enter the number of hours you worked for the pay period."); // Prompt Hours Worked

    }  while (noHours == "") // Validate empty string



    do {

       perHour = prompt("Please enter how much you make per hour.");  // Amount per hour prompt


    }  while (perHour == "") // Validate empty string


// Check that the pay does not contain an empty value.

    do {

        payFrequency = prompt("Do you get paid Weekly, Bi-Weekly, or Monthly?");  // Length of pay period prompt


    }  while (payFrequency == "") // Validate empty string


// Check that the pay period does not contain an empty string and type of check for specific values.

                if (payFrequency == "Weekly" ) {  // Check for variations of pay frequency

                    payWeekly = noHours * perHour;   // Calculate hours and amount per hour
                    payWeeklyTotal = payWeekly * 4;   // Calculate a monthly total based on 4 weeks in a month

                    payValue = payWeekly;     //   Copy value into a single variable so that there or no issues in console output
                    payValueTotal = payWeeklyTotal;     //   Copy value into a single variable so that there or no issues in console output

                 //   varTest = "Test Week";
                   // console.log(varTest);

                } else if ("Bi-Weekly" || "BiWeekly" || "Bi" || "Twice A Week"){    // Check for variations of pay frequency


                    payBiWeekly = noHours * perHour;    // Calculate hours and amount per hour
                    payBiWeeklyTotal = payBiWeekly + payBiWeekly;   // Calculate a monthly total based on 4 weeks in a month

                    payValue = payBiWeekly; //   Copy value into a single variable so that there or no issues in console output
                    payValueTotal = payBiWeeklyTotal; //   Copy value into a single variable so that there or no issues in console output

                 //   varTest = "Test Bi";
                   // console.log(payFrequency);

                } else if ("Monthly" || "Month" || "A Month"){     // Check for variations of pay frequency


                    payMonthly = noHours * perHour;    // Calculate hours and amount per hour
                    payMonthlyTotal = payMonthly * 1;   // Calculate hours and amount per hour

                    payValue = payMonthly; //   Copy value into a single variable so that there or no issues in console output
                    payValueTotal = payMonthlyTotal; //   Copy value into a single variable so that there or no issues in console output

                    //varTest = "Test Month";
                  //  console.log(varTest);

                } else {   // Check for variations of pay frequency



                    payFrequency = alert("I guess that you don't want to know how much you get paid.");   // Alert to let person that they didn't do it right



                }



if (payFrequency = "Weekly" ){    // Filter to provide a different output based on weekly, bi-weekly, or monthly pay period

    //  If weekly then output either of these response based on the amount of hours worked.
    textOutput1 = (perHour >= 40 && payFrequency == Weekly) ? "Wow! You work extremely hard, keep up the great work." : "You job should give you a raise and more hours."

} else {


    // If Not weekly then output these either of these responses based on amount of hours worked.
    textOutput1 = (perHour >= 80 && payFrequency != Weekly) ? "Wow! You work extremely hard, keep up the great work." : "You are working some nice hours."

}

// Console Output
console.log(payFrequency);

console.log("Howdy " + yourName);
console.log("You work a total of " + noHours + " hours per " + payFrequency + " pay period." );
console.log("You direct deposit will be $" + payValue + " before taxes.");
console.log("You will make around $" + payValueTotal + " each month.");
console.log(textOutput1);

