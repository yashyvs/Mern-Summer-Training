// 1.Write a JavaScript program to display the current day and time in the following format.
// Today is : wednesday.
// Current time is : 10 PM : 30 : 38

function disp() {
    const date = new Date();
    let hrs = String(date.getHours()).padStart(2, '0');
    let mins = String(date.getMinutes()).padStart(2, '0');
    let secs = String(date.getSeconds()).padStart(2, '0');
    let day = date.getDay();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    console.log("Today is : " + days[day]);
    
    var z;
    if(hrs === 0 && mins === 0 && secs === 0) {
        z = "MID_NIGHT";
    }else if(hrs === 12 && mins === 0 && secs ===0) {
        z = "NOON";
    }else if(hrs > 0 && hrs < 12 || hrs === 0 && mins > 0){
        z = "AM";
    }else {
        z = "PM";
    }
    console.log(`Current Time : ${hrs} ${z} : ${mins} : ${secs}`);
}

// disp();

/* ================================================================================================= */


// 2.Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// Function to format the date as mm-dd-yyyy

function showDate() {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    
    function MMDDYYYY() {
        return `${month}-${day}-${year}`;
    }
    function MMDDYYYYSlashes() {
        return `${month}/${day}/${year}`;
    }
    function DDMMYYYY() {
        return `${day}-${month}-${year}`;
    }      
    function DDMMYYYYSlashes() {
        return `${day}/${month}/${year}`;
    }


    console.log("MMDDYYYY :", MMDDYYYY());
    console.log("MMDDYYYYSlashes :", MMDDYYYYSlashes());
    console.log("DDMMYYYY :", DDMMYYYY());
    console.log("DDMMYYYYSlashes :", DDMMYYYYSlashes());
}
  
// showDate();


/* ================================================================================================= */

// 3.WAP to print area and perimeter of rectangle , taking input from the user , using prompt

function rectangle() {
    var length = parseInt(prompt("Enter the length of the rectangle"));
    var breath = parseInt(prompt("Enter the breath of the rectangle"));

    var area = () => length*breath;
    var perimeter = () => 2*(length+breath);

    console.log("Area of rectangle : ", area());
    console.log("Perimeter of rectangle : ", perimeter());
}

// rectangle();

/* ================================================================================================= */

// 4.WAP to rotate the string ‘brainmentors in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

// input  = brainmentors

// output = sbrainmentor

function periodicallyShift() {
    let word = "brainmentors";

    function shiftLastCharToFirst() {
    word = word[word.length - 1] + word.substring(0, word.length - 1);
    console.log(word);
    }

    for (let i = 0; i < word.length; i++) {
        setTimeout(shiftLastCharToFirst, i * 2000);
    }
}

// periodicallyShift();

/* ================================================================================================= */




// 5.WAP to find out if 1st January will be a Sunday between 2000 and 2030

function findSunday() {
    const currY = new Date();

    let y = 2000;
    currY.setFullYear(y);
    currY.setDate(1);
    currY.setMonth(0);

    while(y<=2050) {
        console.log();
        let currD = currY.getDay();
        if(currD === 0) {
            console.log("Year :", y, "having the Sunday on 1st January");
        }
        y = y+1;
        currY.setFullYear(y);
    }
}

// findSunday();

/* ================================================================================================= */