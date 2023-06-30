
// 1.Write a function calculate that takes three arugments from the user, say num1 , num2, and operation(1==add, 2==subtract, 3==multiply, 4==divide ).
// Dont use switch statement or if else statements
     
//     1.add,
//     2.subtract,
//     3.multiply,
//     4.divide 
    
//     write the calc function for all the operations


function calc() {
    
    var a = prompt("Enter the first number");
    var b = prompt("Enter the second number");
    var c = prompt("Enter the operation");

    if(c > 4) {
        console.log("Enter valid operation");
        return;
    }

    function calculate(a, b, fn) {
        return fn(a,b);
    }


    function add(a, b) {
        return a+b;
    }
    function subtract(a, b) {
        return a-b;
    }
    function multiply(a, b) {
        return a*b;
    }
    function divide(a, b) {
        return a/b;
    }

    var obj = {1 : add, 2 : subtract, 3 : multiply, 4 : divide};

    console.log(calculate(parseInt(a), parseInt(b), obj[c]));
    
}

// calc();


/* ================================================================================================= */

    
// 2 . Create a function Named Triangle which takes 3 parameters, say A, B and C denoting the 3 sides of a triangle.
// Use Callback function, create a method to check if the triangle is Equilateral or not.
    
    
// Output:
// "true" if the triangle is equilateral and "false" if its not.
    

function chkTriangle() {
    var a = parseInt(prompt("Enter side a"));
    var b = parseInt(prompt("Enter side b"));
    var c = parseInt(prompt("Enter side c"));

    function Triangle(A, B, C, callback) {
        if (a === b && b === c) {
          callback(true);
        } 
        else {
          callback(false);
        }
    }

    function isEqui(result) {
        if (result) {
          console.log("The triangle is equilateral.");
        } else {
          console.log("The triangle is not equilateral.");
        }
    }

    var ans = Triangle(a,b,c,isEqui);

    console.log(ans);

}

// chkTriangle();


/* ================================================================================================= */

    
// 3.Given two strings, return true if they are anagrams of one another
    
// For example: Mary is an anagram of Army

function anagram() {
    var str1 = prompt("Enter the first string");
    var str2 = prompt("Enter the second string");
    
    function anagramCheck(str1, str2) {
        if(str1.length != str2.length) return false;
        
        var obj1 = {};
        var obj2 = {};

        for(let i=0; i<str1.length; i++) {
            if(obj1[str1[i]]) {
                obj1[str1[i]]++;
            }
            else {
                obj1[str1[i]] = 1;
            }
        }
        for(let i=0; i<str2.length; i++) {
            if(obj2[str2[i]]) {
                obj2[str2[i]]++;
            }
            else {
                obj2[str2[i]] = 1;
            }
        }
        

        for(let i=0; i<str1.length; i++) {
            if(obj1[str1[i]]!= obj2[str2[i]]) return false;
        }
        return true;
    }

    if(anagramCheck(str1, str2)) console.log("It is anagram");
    else console.log("It is not anagram"); 
}

// anagram();
    
/* ================================================================================================= */

    
    
// 4. Create a function Employee, having id, name, basic_Salary as arguments.
    
//     Compute HRA, DA, TA, GS, NS.
    
//     HRA is 30% of Basic Salary.
//     DA is 10% of Basic Salary.
//     TA is 20% of Basic Salary.
    
//     GS = Basic Salary + HRA + DA + TA;
    
//     TAX DEDUCTION is 10% of GS.
    
//     NS = GS - TAX DEDUCTION.
    
//     NOte : Use Basic Salary in Lexical Scope 
//     Print salary slip of the employee.

function Employee() {
    var salary = parseFloat(prompt("Enter the salary"));

    var hra = () => 0.3 * salary;
    var da = () => 0.1  * salary;
    var ta = () => 0.2 * salary;
    var gs = () => salary + hra() + da() + ta();
    var tax = () => 0.1 * gs();
    var ns = () => gs() - tax();

    function calculate() {
        console.log("Salary: " + salary);
        console.log("HRA: " + hra());
        console.log("DA: " + da());
        console.log("TA: " + ta());
        console.log("GS: " + gs());
        console.log("TAX: " + tax());
        console.log("NS: " + ns());

    }
    calculate();
}

// Employee();

    
/* ================================================================================================= */

    
// 5. Write a function to find the maximum and minimum elements in an array.
//     arr = [10,3,15,-1,9,6]
    
//     output = maxno. : 15, minno. : -1

function findMaxMin() {

    let max = () => Math.max(...arr);
    let min = () => Math.min(...arr); 
      
    let arr = [10, 3, 15, -1, 9, 6];
    console.log("maxNo :", max(), "minNo :", min());
}

// findMaxMin();

/* ================================================================================================= */
