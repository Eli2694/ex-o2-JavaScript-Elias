// ex-02

//1

let inputStr = "a,b$c";
function reverseStr(str) {
  let tempStr = str.slice().split("");
  let start = 0;
  let end = tempStr.length - 1;
  let tempLetter;

  for (let i = 0; i < tempStr.length - 1; i++) {
    if (start === end) {
      break;
    }
    if (tempStr[start].match("^[a-zA-Z]") && tempStr[end].match("^[a-zA-Z]")) {
      tempLetter = tempStr[start];
      tempStr[start] = tempStr[end];
      tempStr[end] = tempLetter;
      start++;
      end--;
    } else if (tempStr[start].match("^[a-zA-Z]")) {
      end--;
    } else if (tempStr[end].match("^[a-zA-Z]")) {
      start++;
    } else {
      start++;
      end--;
    }
  }
  return tempStr;
}
console.log(reverseStr(inputStr));
console.log(reverseStr("Ab,c,de!$"));

//2
// vowels ( a, e, i, o, u).

function vowels(str) {
  tempArr = str.slice().split("");
  let lowerIndex = 0;
  let vowel = 0;
  let indexArr = [];
  for (let [index, value] of tempArr.entries()) {
    if (
      value === "a" ||
      value === "e" ||
      value === "i" ||
      value === "o" ||
      value === "u"
    ) {
      if (vowel === 1) {
        indexArr.push(index - lowerIndex);
        lowerIndex++;
      }
      vowel = 1;
    } else {
      vowel = 0;
    }
  }

  for (let i of indexArr) {
    tempArr.forEach((value, index, arr) => {
      if (i === index) {
        tempArr.splice(i, 1);
      }
    });
  }

  return tempArr.join("");
}

console.log(vowels("your article is in queue"));

/*
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
*/
