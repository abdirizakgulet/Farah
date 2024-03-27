
 //the function speedDetector assigns demeritpoints for every 5km/hr above 70 
 //if accrued poits e to car drivers and suspends their licencequal 12.
 

function speedDetector(speed){
    let limit= 70
    let demeritPoints=1*((speed-limit)/5)
    // if speed is less than 70;will return an ok message.
    if(speed<=70){
        return 'ok'
    }
    // if demerit points less than 12; return value of demeritPoints.
    else if(demeritPoints<12){
        return `points:${demeritPoints}`
    } 
    // if accrued demeritPoints is equal or greater than 12;will return license suspended message.
    else if(demeritPoints>=12){
        return 'license suspended'
    }








}
console.log(speedDetector(60))
console.log(speedDetector(80))
console.log(speedDetector(180))