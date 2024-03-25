function calculateGrade(marks){
    let calculateGrade
    if(marks>79){
        return calculateGrade= 'A'
    } else if(marks>59 && marks<=79){
        return calculateGrade= 'B'
    } else if(marks>49 && marks<=59){
        return calculateGrade= 'C'
    } else if(marks>39 && marks<=49){
        return calculateGrade= 'D'
    }else if(marks<=39){
        return calculateGrade= 'E'
    }

    



}
function validateMarks(marks){
    if(marks>0 && marks<=100){ 
        return calculateGrade(marks)
    } else{enter grade marks}
}