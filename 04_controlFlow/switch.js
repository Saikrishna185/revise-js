// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// let month = 1;

const month = prompt("Enter month number: ");
console.log(`The month number is ${month}`);
switch (month) {
  case 1:
    console.group("January");
    console.log("1st month of the year");
    break;
  case 2:
    console.group("February");
    console.log("2nd month of the year");
    break;
  case 3:
    console.group("March");
    console.log("3rd month of the year");
    break;
  case 4:
    console.group("April");
    console.log("4th month of the year");
    break;
  case 5:
    console.group("May");
    console.log("5th month of the year");
    break;
  case 6:
    console.group("June");
    console.log("6th month of the year");
    break;
  case 7:
    console.group("July");
    console.log("7th month of the year");
    break;
  case 8:
    console.group("August");
    console.log("8th month of the year");
    break;
  case 9:
    console.group("September");
    console.log("9th month of the year");
    break;
  case 10:
    console.group("October");
    console.log("10th month of the year");
    break;
  case 11:
    console.group("November");
    console.log("11th month of the year");
    break;
  case 12:
    console.group("December");
    console.log("12th month of the year");
    break;

  default:
    console.log("Invalid month");
    break;
}