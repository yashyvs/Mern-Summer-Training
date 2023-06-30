// 1. Write a JavaScript function that Print Sum of Even Place and Odd Place Digit

// E.g num = 2914
// O/p Even Place (9+4)
// Odd Place 2+1

function printSum() {
    var str = prompt("Enter a number");
    var even = 0;
    var odd = 0;
    for(var i = 0; i < str.length; i++) {
        if(i%2==0) {
            odd+=parseInt(str[i]);
        }
        else {
            even+=parseInt(str[i]);
        }
    }
    console.log("Odd:", odd);
    console.log("Even:", even);
}

// printSum();

/* ================================================================================================= */


// 2. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : ‘learn javascript from brain mentors’
// Expected Output : ‘Learn Javascript From Brain Mentors

function convertString() {
    var str = prompt("Enter a string");
    var newStr = "";
    
    var arr = str.split(" ");
    for(var i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }
    // console.log(split);

    for(var i = 0; i < arr.length; i++) {
        newStr+=arr[i]+" ";
    }

    console.log(newStr);
}

// convertString();

/* ================================================================================================= */

// 3. Write a JS Function to validate Phone Number 
// Only number and must be 10 digit long

function validateNumber() {
    function isdigit(string) {
        for (let i = 0; i < string.length; i++) {
           var ascii = string.charCodeAt(i);
           if (ascii < 48 || ascii > 57) {
              return false;
           }
        }
        return true;
    }

    var num = prompt("Enter a number");
    if(isdigit(num) && num.length === 10) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

// validateNumber();


/* ================================================================================================= */

// 4. Write a JS Function to validate Email Address
// Must contains @
// Must ends with .com/.org/.edu

function validateEmail() {
    var email = prompt("Enter the email address");
    if(email.includes("@") && (email.includes(".com") || email.includes(".org") || email.includes(".edu"))) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

// validateEmail();

/* ================================================================================================= */


// 5. Write a JS Function to find the occurrence of each character in JS
// Input : “brain mentors”
// O/P : b 1
// r 2
// A 1
// I 1
// N 2
// M 1
// E 1
// T 1
// O 1
// S 1

function count() {
    var str = prompt("Enter the string");
    obj = {};
    for(let i in str) {
        if(str[i] === ' ') {
            continue;
        }
        else if(isNaN(obj[str[i]])) {
            obj[str[i]] = 1;
        }
        else {
            obj[str[i]]++;
        }
    }
    console.log(obj);
    for(let i in obj) {
        console.log(i + ":", obj[i]);
    }
}

// count();

/* ================================================================================================= */
