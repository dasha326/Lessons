'use strict';
//
// var div = document.querySelector('.time'),
//     currentDate = new Date(),
//     divText = currentDate.getDate() + '.' + (currentDate.getMonth()+1) + '.' + currentDate.getFullYear(),
//     divTextArray = divText.split('.'),
//     newDivText = '';
//
// for (var i = 0; i < divTextArray.length-1; i++) {
//     if (divTextArray[i].length === 1) {
//         divTextArray[i] = '0' + divTextArray[i];
//     }
//     newDivText += divTextArray[i] + '.';
// }
// newDivText += divTextArray[divTextArray.length-1];
// div.textContent = newDivText;


var namePerson = "Cfif";

var profession = namePerson === "Артем" ? 'Директор' : namePerson === "Максим" ? "преподаватель" : "Студент";

console.log(profession);