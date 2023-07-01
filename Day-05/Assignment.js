// 1. Find Occurance of a target value in given array;
// arr= [19, 22, 18, 19, 16, 18, 19, 21, 24];
// target = 19;

function Occurance() {
    var arr = [19, 22, 18, 19, 16, 18, 19, 21, 24];
    var target = 19;
    console.log(arr.filter(e=>e == target).length);
}

// Occurance();

/* ================================================================================================= */



// 2 . Reverse a given string using reverse() method 
// input = "BrainMentors"
// output = "srotnemniarB"

function Reverse() {

    var input = "BrainMentors";
    var output = input.split("").reverse().join("");
    console.log(output);
}

// Reverse();

/* ================================================================================================= */



// 3. Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
// Count of vowels in string;
// ex:- str = "brainmentors"
// 		output: count = 4

function Count() {
    var str = "brainmentors";
    var count = str.split("").filter(e=> e=='a' || e=='e' || e=='i' || e=='o' || e=='u').length;
    console.log(count);
}

// Count();

/* ================================================================================================= */



// 4. Write a function to find the sum of all elements in an array.
// ex:- arr = [1,2,3,4,5];

// output = 15;

function sum() {
    var arr = [1, 2, 3, 4, 5];
    var acc = arr.reduce((acc, e) => acc+e, 0);
    console.log(acc);
}

// sum();

/* ================================================================================================= */



// 5.Write a function to reverse the order of elements in an array.
// don't Use reverse() Method 
// ex:- var arr = ['a','b','c','d','e','f']
			
// 		output = ['f','e','d','c','b','a']


function reverse() {
    var arr = ['a','b','c','d','e','f'];
    var newArr = [];
    for(let i=0; i<arr.length; i++) {
        newArr[i] = arr[arr.length-1 -i];
    }
    console.log(newArr);
}

// reverse();

/* ================================================================================================= */



// 6. Write a function to remove a specific element from an array.

// 	arr = [1,2,3,4,5];
// 	remove = 3

// 	output :- [1,2,4,5]

function removeElement() {
    var arr = [1,2,3,4,5];
    var remove = 3;
    var newArr = arr.filter(e=>e!=remove);
    console.log(newArr);
}

// removeElement();

/* ================================================================================================= */



// 7. Write a function to find the second largest number in an array.

// ex:- var arr = [12,4,6,9,2,15,3,9];
		
// 		output second largest : 12

function secondlarge() {
    var arr = [12, 4, 6, 9, 2, 15, 3, 9];
    var mx = Math.max(...arr);
    
    var arr = arr.filter(e => e!=mx);

    arr.sort((a,b) => b-a);

    console.log(arr[0]);

}

// secondlarge();

/* ================================================================================================= */



// 8.Write a function to rotate an array by a given number of steps to the right.

// ex:- arr = [1,2,3,4,5];
// 		step = 2;

//  output = [4,5,1,2,3]

function rotate() {
    function reverse(arr, lo, hi) {
        while (lo < hi) {
          [arr[lo], arr[hi]] = [arr[hi], arr[lo]];
          lo++;
          hi--;
        }
    }

    var arr = [1,2,3,4,5];
    var k=2;
    k = k % arr.length;
    reverse(arr, 0, arr.length - k - 1);
    reverse(arr, arr.length - k, arr.length - 1);
    reverse(arr, 0, arr.length - 1);
    console.log(arr);
      
}

// rotate();

/* ================================================================================================= */



// 9.Write a function to find the intersection of two arrays (common elements between the two arrays).

// ex:- arr1 = [2,4,1,7,4,2] , arr2 = [5,1,4,7,3,1];

// output = [1,4,7]

function intersection() {
    var arr1 = [2, 4, 1, 7, 4, 2];
    var arr2 = [5, 1, 4, 7, 3, 1];
    var newArr = arr1.filter(e=>arr2.includes(e));
    var uniqueArr = newArr.filter((e, i)=>newArr.indexOf(e) === i);
    console.log(uniqueArr);
}

// intersection();

/* ================================================================================================= */



// 10.Write a function to remove duplicate elements from an array while preserving the original order.
// 	ex:- arr = [1,2,5,2,5,1,6,7,7]

// 		output:- [1,2,5,6,7]

function removeDuplicate() {
    var arr = [1, 2, 5, 2, 5, 1, 6, 7, 7];
    var newArr = arr.filter((e, i, a) => a.indexOf(e) === i);
    console.log(newArr);
}

// removeDuplicate();

/* ================================================================================================= */