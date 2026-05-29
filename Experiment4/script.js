
function calRes(){
    let n=parseFloat(document.getElementById("subjects").value);
    let i;
    let total=0;
    for(i=0; i<n; i++){
        let x=parseFloat(prompt("Enter marks for subject " + (i+1)));
        total += x;
    }
    let average = (total / n) ;
    let grade;
    if(average >= 90){
        grade = "A";
    }   
    else if(average >= 70){
        grade = "B";
    }
    else if(average >= 50){
        grade = "C";
    }
    else if(average >= 30){
        grade = "D";
    }
    else{
        grade = "F";
    }
    let result;
    if(grade === "A" || grade === "B" || grade === "C"){
        result = "Pass";
    }   
    else{
        result = "Fail";
    }
    let resDiv = document.getElementById("result");
    resDiv.innerHTML = "<b>Total Marks: " + total + "</b><br/><b>Average Marks: " + average + "</b><br/><b>Grade: " + grade + "</b><br/><b>Result: " + result + "</b>";
}
