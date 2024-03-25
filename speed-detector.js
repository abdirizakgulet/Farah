function speedDetector(speed){
    let limit= 70
    let demeritPoints=1*((speed-limit)/5)
    if(speed<=70){
        return 'ok'
    }else if(demeritPoints<12){
        return 'demeritPoints'
    }else if(demeritPoints>=12){
        return 'license suspended'
    }








}