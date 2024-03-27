// a function calculateGrade: use marks to assign a grade

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
// validate Marks are from 0 to 100. return error message if validation fails
function validateMarks(marks){
    if(marks>0 && marks<=100){ 
        return calculateGrade(marks)
    } else{return"enter grade marks"}
} 
console.log(validateMarks(60))
console.log(validateMarks(160))


