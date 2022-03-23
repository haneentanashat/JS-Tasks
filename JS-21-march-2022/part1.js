/* 1. Write a JavaScript program that accept two integers and
 * display the larger. Go to the editor */
/******* Start Your Code *********/

let number1 = window.prompt("Enter  number one : ")
let number2 = window.prompt(" Enter number two :")
if (number1 >= number2) {
    document.write("Number one is larger than number two:" + number1)
}
else {
    document.write("Number Two is larger than number one:" + number2)
}

/******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
of product of three numbers. Display an alert box with the 
specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

let num1 = prompt("first number: ")
let num2 = prompt(" second number:")
let num3 = prompt(" third number:")
let product = num_1 * num_2 * num_3
if (product < 0) {
    alert("The sign is (-) ")
}
else {
    alert("The sign is  (+) ")
}

/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
let snum1 = window.prompt(" Enter the number: ");
let snum2 = window.prompt(" Enter the number: ");
let snum3 = window.prompt(" Enter the number: ");
if (snum1 > snum2 && snum3 > snum3) {
    if (snum2 > snum3) {
        alert(anum1 + " " + snum2 + " " + snum3);
    } else {
    }
    alert(snum1 + " " + snum3 + " " + snum2);
} else if (snum2 > snum1 && snum2 > snum3) {
    if (snum1 > snum3) {
        alert(snum2 + " " + snum1 + " " + snum3);
    } else {
        alert(snum2 + " " + snum3 + " " + snum1);
    }
} else {
    if (snum1 > snum2) {
        alert(snum3 + " " + snum1 + " " + snum2);
    } else {
        alert(snum3 + " " + snum2 + " " + snum2);
    }
}

/******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
let lnum1 = window.prompt("Enter a number: ");
let lnum2 = window.prompt("Enter a number:");
let lnum3 = window.prompt("Enter a number:");
let lnum4 = window.prompt("Enter a number:");
let lnum5 = window.prompt("Enter a number:");
if (lnum1 > lnum2 || lnum1 > lnum3 || lnum1 > lnum4 || lnum1 > lnum5) {
    alert("Number" + lnum1 + "is the biggest")
} else if (lnum2 > lnum1 || lnum2 > lnum3 || lnum2 > lnum4 || lnum2 > lnum5) {
    alert("Number" + lnum2 + "is the biggest")
} else if (lnum3 > lnum2 || lnum3 > lnum1 || lnum3 > lnum4 || lnum3 > lnum5) {
    alert("Number" + lnum3 + "is the biggest")
} else if (lnum4 > lnum1 || lnum4 > lnum2 || lnum4 > lnum3 || lnum4 > lnum5) {
    alert("Number" + lnum4 + "is the biggest")
} else if (lnum5 > lnum1 || lnum5 > lnum2 || lnum5 > lnum4 || lnum5 > lnum3) {
    alert("Number" + lnum5 + "is the biggest")
}
/******* End Your Code ********* */

/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/

let x = window.prompt("Enter a number: ");
let y = window.prompt("Enter a number: ");
if (x > y) {
    alert("hello world");
} else {
    alert("Goodbye")
}

/******* End Your Code ********* */

