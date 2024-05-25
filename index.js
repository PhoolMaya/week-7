 //for no.1
 //Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
//Programmatically subtract the value of the first element in the array from the value in the last element of the array.
const lastIndex = ages.length - 1;
const lastAge = ages[lastIndex];
console.log("Last Age:", lastAge);
//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//adding new age to array
ages.push(42);
const firstAge = ages[0];
const ageDifference = lastAge - firstAge;
console.log("Age Difference:", ageDifference);
//Use a loop to iterate through the array and calculate the average age.
let sumOfAges = 0;
for (const age of ages) {
  sumOfAges += age;
}
const averageAge = sumOfAges / ages.length;
console.log("Average Age:", averageAge);

//for no.2
//Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'
//Use a loop to iterate through the array and calculate the average number of letters per name.
const names = ['Sam' , 'Tommy' , 'Tim' , 'Sally' , 'Buck' , 'Bob' ];
// total number of letters
let totalLetters = 0;
for  (const name of names) {
  totalLetters += name.length;
}
const averageLettersPerName = totalLetters / names.length;
console.log(`Average letters per name: ${averageLettersPerName.toFixed(2)}`);
// average letters per name

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
const concatenatedNames = names.join(' ');
console.log(`Concatenated names: ${concatenatedNames}`);

//for no.3
//How do you access the last element of any array?
const myArray3 = [1, 2, 3, 4, 5];
const lastItem = myArray3.length - 1;
const lastElement = myArray3[lastItem];

console.log("Last element:", lastElement);

//for no.4
//How do you access the first element of any array?
const array11 = ['apple', 'banana', 'cherry'];
const firstItem = array11[0];
console.log("First item:", firstItem);

//for no.5
//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:

//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array

const names1 = ["Kat", "Sammy", "tara"];
const nameLengths = [];
for  (const name of names) {
  nameLengths.push(name.length);
}
  // result in  nameLengths array
  console.log("Name lengths:", nameLengths);
  
  //for no.6
  //Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
  // Given nameLengths array
  const name = ["Kat", "Sammy", "Kate" , "Maya"];
  const nameLength = [];

  let sum = 0;
  for (const length of nameLengths) {
    sum += length;
  }
  
  console.log("Sum of name length:", sum);

  //for no.7
  //Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
  function repeatWord(word, n) {
    if (n <= 0) {
      return ""; 
    }
    let result = "";
    for (let i = 0; i < n; i++) {
      result += word;
    }
    return result;
  }
  
  // Example:
  const inputWord = "Hello";
  const repetitions = 3;
  const concatenatedWord = repeatWord(inputWord, repetitions);
  console.log("Concatenated word:", concatenatedWord);

  //for no.8
  //Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
  function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  
  // Example:
  const myFirstName = "Maya";
  const myLastName = "Pun";
  const fullName = getFullName(myFirstName, myLastName);
  console.log("Full name:", fullName);
  
  //for no.9
  //Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
  function isSumGreaterThan100(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum > 100;
}

// Example:
const myArray1 = [20, 30, 50]; // Sum = 100
console.log(isSumGreaterThan100(myArray1));

const anotherArray = [40, 60, 30]; // Sum = 130
console.log(isSumGreaterThan100(anotherArray)); 

//for no.10
//Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateAverage(arr) {
  if (arr.length === 0) {
      return 0; 
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;
  return average;
}

// Example:
const myArray = [10, 20, 30, 40];
const result = calculateAverage(myArray);
console.log(`The average is: ${result}`);


//for no.11
//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compareAverages(arr1, arr2) {
  // Calculate the average of arr1
  const sum1 = arr1.reduce((acc, num) => acc + num, 0);
  const avg1 = sum1 / arr1.length;

  // Calculate the average of arr2
  const sum2 = arr2.reduce((acc, num) => acc + num, 0);
  const avg2 = sum2 / arr2.length;

  // Compare averages and return true if avg1 > avg2
  return avg1 > avg2;
}

// Example :
const array1 = [10, 20, 30];
const array2 = [15, 25, 35];
console.log(compareAverages(array1, array2));  
 
//for no.12
//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
 function willBuyDrink(isHotOutside, moneyInPOCKET) {
if (isHotOutside && moneyInPOCKET > 10.50) {
  return true;
} else{
  return false;
}
 }
 //Example :
 const hotDay = true;
 const pocketMoney = 15.00;
 console.log(willBuyDrink(hotDay, pocketMoney));

 //for no.13
 //Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function isLeapYear(year) {
  return (year % 4 ===0 && year % 100 !==0) || (year % 400 ===0);
}
//Example:
const inputYear = 2024;
console.log(`is ${inputYear} a leap year? ${isLeapYear(inputYear)}`);
//I find the leap year thing interesting how our earth is revolving around the sun and it take some extra time to orbit around and that addition of time is counted as leap year.




  
  



















