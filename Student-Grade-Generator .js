// the prompt below is used to import 'prompt-sync' to enable  entering of marks scored 

const prompt = require('prompt-sync')();
// this const variable is used to store the 'scoreEnterd' to be used as a argument
const scoreEnterd= prompt('Enter score : ');
// this function 'studentOutputGrade()' takes marks as an argument and pass it to the if  else statment
function studentOutputGrade(marks){
    //marks is used to be compared to output the grade
    if (marks>79) {
        return 'A'
    } else if (marks>=60 && marks<=78) {
        return 'B-'
    } else if (marks>=49 && marks<=59){
        return 'C-'
    } else if (marks>=40 && marks<=48) {
        return 'D-'
    } else {
        return 'E-'
    }
}

// for the function to run , invocasion needs to take place 'studentOutputGrade(scoreEnterd)'
console.log(studentOutputGrade(scoreEnterd))