function nhif(grosssalary){
    if(grosssalary<=5999){
        return 150
    }else if(grosssalary>5999 && grosssalary<=7999){
        return 300
    } else if(grosssalary>7999 && grosssalary<=11999){
        return 400
    }else if(grosssalary>11999 && grosssalary<=14999){
        return 500
    }else if(grosssalary>14999 && grosssalary<=19999){
        return 600
    }else if(grosssalary>19999 && grosssalary<=24999){
        return 750
    }else if(grosssalary>24999 && grosssalary<=29999){
        return 850
    }else if(grosssalary>29999 && grosssalary<=34999){
        return 900
    }else if(grosssalary>34999 && grosssalary<=39999){
        return 950
    }
}

function nssf(grosssalary){
    if(grosssalary<=7000){
        return 0.06* grosssalary
    }else if(grosssalary>7000){
        return (0.06*7000) + (0.06*(grosssalary-7000))
    }
}




















































































