//JavaScript & Html Exam
//1

/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 */

let input = [2, 7, 11, 15];
let target = 9;

let index = function (arr, target) {
  let tempArr = arr.slice();
  let tempTarget = target;
  let retArr = [];
  for (let i = 0; i < tempArr.length - 1; i++) {
    if (tempArr[i] + tempArr[i + 1] === target) {
      retArr.push(i);
      retArr.push(i + 1);
      return retArr;
    }
  }
};

console.log(index(input, target));
console.log(index([3, 2, 4], 6));
console.log(index([3, 3], 6));

//2

/* Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
•	For example, 121 is a palindrome while 123 is not.
*/

let num1 = 156;
let num2 = 121;
let num3 = 123454321;

let palindrome = function (integer) {
  let tempInt = integer;
  let tempStr = tempInt + "";
  tempStr = tempStr.split("").reverse().join("");
  tempInt2 = parseInt(tempStr);
  if (tempInt2 === tempInt) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome(num1));
console.log(palindrome(num2));
console.log(palindrome(num3));

//3

/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/

let arrStr = ["flower", "flow", "flight"];

let LongestCommonPrefix = function (arrOfStrings) {
  let tempArr = arrOfStrings.slice();
  for (let i = 0; i < tempArr[0].length; i++) {
    for (let j = 1; j < tempArr.length; j++) {
      if (tempArr[0][i] !== tempArr[j][i]) {
        return tempArr[0].slice(0, i);
      }
    }
  }
};

console.log(LongestCommonPrefix(arrStr));

let strS = "PEOPLE";
let sliceStr = strS.slice(-1);
console.log(sliceStr);

//4

let n = [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 7, 7, 8, 9];

let results = function (numsArr) {
  let tempArr = numsArr;
  let UniqueNums = 0;
  let index = 0;
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[index] === tempArr[index + 1]) {
      console.log(tempArr);
      tempArr.splice(index, 1);
      tempArr.push("_");
      UniqueNums++;
    } else {
      index++;
    }
  }
  console.log(tempArr);
  return UniqueNums;
};

// console.log(results(n));

// let n = [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 7, 7, 8, 9];

// let results = function (numsArr) {
//   let tempArr = numsArr;
//   let UniqueNums = 0;
//   for (let i = 0; i < tempArr.length; i++) {
//     if (tempArr[i] === tempArr[i + 1]) {
//       console.log(tempArr);
//       tempArr.splice(i, 1);
//       tempArr.push("_");
//       UniqueNums++;
//     }
//   }
//   console.log(tempArr);
//   return UniqueNums;
// };

// console.log(results(n));

//5 - Sasha WhatSup

function Mapping(digits) {
  let telephone = new Map([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "f"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]],
  ]);

  let tempStr = digits + "";
  let tempArr = tempStr.split("");
  let newArr = [];
  let combineArr = [];

  tempArr.forEach((value, index, arr) => {
    telephone.forEach((mapValue, key, map) => {
      if (value === key) {
        newArr.push(mapValue);
      }
    });
  });

  if (tempArr.length === 0) {
    return "";
  } else if (tempArr.length === 1) {
    return newArr.flat();
  } else {
    let index = 0;
    for (let k = 0; k < tempArr.length - 1; k++) {
      for (let i = 0; i < newArr[index].length; i++) {
        for (let j = 0; j < newArr[index + 1].length; j++) {
          combineArr.push(newArr[index][i] + newArr[index + 1][j]);
        }
      }
      index++;
    }
  }

  return combineArr;
}
console.log(Mapping(""));
console.log(Mapping(2));
console.log(Mapping(23));
console.log(Mapping(234));
////////////////////////////////////////////////////////////////////////////////
// ex-02

//1

let inputStr = "a,b$c";
function reverseStr(str) {
  let tempStr = str.slice();
  console.log(tempStr);
}
console.log(reverseStr(inputStr));

//3

let Tsionet = {
  Teachers: ["Haim", "Elias", "Alon"],
  Location: "Akko",
  Partner: "Merkaz Mase",
  Subjects: ["C language", "JavaScript"],
  Semester: 1,
};

console.log(Tsionet);

//4

let numbersArr = [1, 5, 22, 3, 66, 100, 75, 2];
let cloneNumbersArr = [...numbersArr];
console.log(cloneNumbersArr);

let [firstE, SecondE] = cloneNumbersArr;
console.log(firstE, SecondE);

let [firstElement, SecondElement, ...others] = cloneNumbersArr;
console.log(firstElement, SecondElement, others);

let person = {
  firstName: "Eli",
  lastName: "Gilgur",
  county: "Israel",
  city: "Karmiel",
  age: 28,
  job: "Programmer",
};

let { firstName, lastName, job } = { ...person };
console.log(firstName, lastName, job);

let restOperator = function (a, b, ...args) {
  console.log(a);
  console.log(b);
  console.log(args);
};

restOperator(1, 2, 3, 4, 5, 6, 7, 8);

class TsionetCL {
  constructor(Teachers, Location, Subjects, Student) {
    this.Teachers = Teachers;
    this.Location = Location;
    this.Subjects = Subjects;
    this.Student = Student;
  }

  addStudent() {
    console.log(`${this.Student} Join Tsionet`);
  }
  deletStudent() {
    console.log(`${this.Student} expelled from Tsionet`);
  }
}

let student1 = new TsionetCL("Haim", "Akko", "JavaScript", "Eli");
console.log(student1);
student1.addStudent();
student1.deletStudent();

////////////////////////////////////////////////////////////////////////////////
//Shirel Drive

//1
function Azeret(num) {
  let sum = 1;
  for (let i = 2; i <= num; i++) {
    sum = sum * i;
  }
  return sum;
}
console.log(Azeret(5));

let car = function (type, manufacturingYear, price) {
  let currentPrice = price;
  let currentYear = 2022;
  for (let i = manufacturingYear; i < currentYear; i++) {
    currentPrice = currentPrice * 0.9;
  }
  let arr = [];
  arr.push(type);
  arr.push(manufacturingYear);
  arr.push(currentPrice);
  return arr;
};

console.log(car("Honda", 2020, 1000));

//4
function recursiveFunc(x) {
  if (x === 0) return;

  if (x === 1) return 1;

  x = x * recursiveFunc(x - 1);

  return x;
}

// 5 4 3 2 1 0
console.log(recursiveFunc(7));

//https://www.geeksforgeeks.org/common-characters-n-strings/?ref=lbp

function commonCharacters(arrStr) {
  let newArr = [];
  let countCharacter = 0;
  let tempArr = arrStr.slice();
  console.log(tempArr);
  for (let i = 0; i < tempArr[0].length; i++) {
    countCharacter = 0;
    for (let k = 1; k < tempArr.length; k++) {
      for (let j = 0; j < tempArr[k].length; j++) {
        if (tempArr[0][i] === tempArr[k][j]) {
          countCharacter++;
          if (countCharacter >= tempArr.length - 1) {
            newArr.push(tempArr[0][i]);
          }
        }
      }
    }
  }
  let uniqueSet = new Set(newArr);
  let regularArr = [...uniqueArr];
  regularArr = regularArr.join("").toUpperCase().split("");

  let alphabetical = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  console.log(alphabetical);
  console.log(regularArr);
  let resultArr = [];

  alphabetical.forEach((value, index) => {
    regularArr.forEach((val) => {
      if (value === val) {
        resultArr.push(value);
      }
    });
  });

  console.log(resultArr.join(" ").toLowerCase());
}

commonCharacters(["geeksforgeeks", "gemkstones", "acknowledges", "aguelieks"]);
commonCharacters(["apple", "orange"]);
