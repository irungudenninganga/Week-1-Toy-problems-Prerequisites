const prompt = require('prompt-sync')();
const scoreEnterd= prompt('Enter score : ');

function studentOutputGrade(marks){
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


console.log(studentOutputGrade(scoreEnterd))