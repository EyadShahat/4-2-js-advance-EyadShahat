/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/


const student = {
  firstName: "Eyad",
  lastName: "Shahat",
  _gpa: 3.5,

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set gpa(newGpa) {
    if (newGpa >= 0.0 && newGpa <= 4.0) {
      this._gpa = newGpa;
    } else {
      console.error("Invalid GPA! Must be between 0.0 and 4.0");
    }
  },

  get gpa() {
    return this._gpa;
  }
};

console.log("Full Name:", student.fullName);
console.log("Initial GPA:", student.gpa);
student.gpa = 3.9; 
console.log("Updated GPA:", student.gpa);
student.gpa = 5.0; 
// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
const courses = {
  CS104: "Python",
  MATH201: "Linear Algebra",
  ENG102: "English Literature",
  PHY102gi: "Physics II"
};

console.log("\nCourses:");
for (let code in courses) {
  console.log(`${code}: ${courses[code]}`);
}

// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
const sampleString = "JavaScript";
console.log("\nString:", sampleString);
console.log("Length:", sampleString.length);
console.log("Character at index 0:", sampleString.charAt(0));
console.log("Character at last index:", sampleString.charAt(sampleString.length - 1));


// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/
const currentDate = new Date();
console.log("\nCurrent Date Info:");
console.log("Day of Month:", currentDate.getDate());
console.log("Month (0-11):", currentDate.getMonth());
console.log("Year:", currentDate.getFullYear());
// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
const numbers = [12, 45, 7, 89, 3, 64, 23, 56, 90, 18];

const min = Math.min(...numbers);
const max = Math.max(...numbers);


console.log("\nNumbers:", numbers);
console.log("Minimum:", min);

console.log("Maximum:", max);


// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/
function getMaxFromArray(arr) {

  if (arr.length === 0) {

    throw new Error("Array is empty!");
  }

  return Math.max(...arr);
}

const testArray = [];

try {
  const maxValue = getMaxFromArray(testArray);
  console.log("Max Value:", maxValue);

} catch (error) {

  console.error("Error:", error.message);
} finally {


  console.log("Execution completed in try/catch/finally block.");
}

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/
const words = ["ban", "babble", "make", "flab"];
const pattern = /ab/;
console.log("\nWords matching 'ab':");

words.forEach(word => {

  if (pattern.test(word)) {

    console.log(`${word} matches!`);
  }
});


// End of Advance JavaScript Lab — good luck!
