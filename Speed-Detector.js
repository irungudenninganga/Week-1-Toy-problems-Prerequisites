// the prompt below is used to import 'prompt-sync' to enable  entering of speed of car
const prompt = require('prompt-sync')();
// this const variable is used to store the 'scoreEnterd' to be used as a argument
const speedOfCar= prompt('Enter speed :');
// this function 'speedDetecto()' takes speedOfCar as an argument and pass it to the if  else statment to be compared to either return 'ok' or the 'extraspeed'
function speedDetector(speedOfCar){
    if (speedOfCar<=70){
        return  'Result :' + 'OK'
     }  else if(speedOfCar>=70  ){
        let extraSpeed=speedOfCar-70
        return  extraSpeed
     }
     
}
//invocing the speedDetector() to return 

console.log(('speed:'+speedDetector(speedOfCar)))
// pointsCounter() function takes the extra speed and caculates after 5 km/s add a point and when the points exced 12 the license is suspended
function pointsCounter(){
    let points=0;
    // create a variable to hold the called out function speedDetector()
    let countPoints=speedDetector(speedOfCar)
    console.log(countPoints)
    // if statment is used to compare the exceded speed and returns points and when the points exced 12 the license is suspended
    if(countPoints>=5 && countPoints<10){
        return points+1
     } else if (countPoints>=10 && countPoints<15){
        return points+2
     } else if (countPoints>=15 && countPoints<20){
        return points+3
     } else if (countPoints>=20 && countPoints<25){
        return points+4
     } else if (countPoints>=25 && countPoints<30){
        return points+5
     } else if (countPoints>=30 && countPoints<35){
        return points+6
     } else if (countPoints>=35 && countPoints<40){
        return points+7
     } else if (countPoints>=40 && countPoints<45){
        return points+8
     } else if (countPoints>=45 && countPoints<50){
        return points+9
     } else if (countPoints>=50 && countPoints<55){
        return points+10
     } else if (countPoints>=55 && countPoints<60){
        return points+11
     } else if (countPoints>=60 && countPoints<65){
        return points+12
     } else if (countPoints>=65 ){
        return  'License suspended'
     }
     return points
     
}
// invocing poimtsCounter()
console.log( 'points :' +pointsCounter())