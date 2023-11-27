// need to add a hidden feedback element <p> to display the error message
//validating name input
function validename(inId){
    var letters = /^[A-Za-z]+$/;
    if(inId.match(letters)){
        return true;
    }else{
        return "Invalid Name\n";
    }
}
//validating gender input
function validgender(inId){
    var gender = document.getElementById(inId).value;
    if (gender!=0){
        return true;
    }else{
        return "PLease select a gender\n";       
    }
}
//validating grade system
function validgradesys(inId){
    var gradesys= document.getElementById(inId).value;
    if (gradesys!=0){
        return "";
    } else {
        return "Please select a grade system\n";
    } 
}
//validating grade
function validgrade(inId,igrade){
    var gradesys= document.getElementById(inId).value; 
    var grade= document.getElementById(igrade).value;
    if (gradesys == "percentage"){
        if (grade.match(/^[0-9]{1,3}$/)){
            return "";
        } else {
            return "Invalid Percentage\n";
        }
    }else if (gradesys=='0') {
        return "Please select a grade system\n";
    } else if(gradesys == "GPA"){
        if (grade.match(/^[0-4]\.[0-9]{1,2}$/)){
            return "";}
        else {
            return "Invalid GPA\n";
        }
    }
}
//converting GPA to percentage
function convertTopercentage(inId,igrade){
    var gradesys= document.getElementById(inId).value; 
    var grade= document.getElementById(igrade).value;
    if(gradesys == "GPA"){
        return (GPA*100)/4;
    }
}
//validating phone number
function vaildphone(inId){
    var phone = document.getElementById(inId).value;
    var phoneno = /^\d{10}$/;
    if(phone.match(phoneno)){
        return true;
    }else{
        return "Invalid Phone Number\n";
    }
}
//validating email
function validmail(inId){
    var email = document.getElementById(inId).value;
    var emaill=/^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[^\s@]+\.com$/;
    if(email.match(emaill)){
        return true;
    }else{
        return "Invalid Email Address\n";
    }
}
//validating form on change
function Errormessage(txt,id){
    document.getElementById(id).innerHTML=txt;
}
//validating form on submit
function validform(){
    var error = validename('#FN')+validename()+validgender('#gender')+vaildphone()+validmail();
    convertTopercentage('gradesys','grade');
    if (error == ""){
        return true;}
    else{
        alert(error);
        return false;}
}  