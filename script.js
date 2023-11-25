
function validename(name){
    var letters = /^[A-Za-z]+$/;
    if(name.match(letters)){
        return true;
    }else{
        return false;
    }
}


function validgender(gender){
    var gender = document.getElementById('gender').value;
    if (gender!=0){
        return true;
    }else{
        return false;
        
        
    }
}
function convertTopercentage(){
    var gradesys= document.getElementById('Gradesys').value; 
    var grade= document.getElementById('igrade').value;
    if (gradesys == "percentage"){
        if (grade==""){
            return false;
        }
        else {
            return grade;
        }
    }else if (gradesys=='0') {
        ret
        return false;
    } else if(gradesys == "GPA"){
        if (grade==""){
            return false;
        }
        else {
            return (GPA*100)/4;
        }
        
    }
}
function vaildphone(){
    var phone = document.getElementById('phone').value;
    var phoneno = /^\d{10}$/;
    if(phone.match(phoneno)){
        return true;
    }else{
        return false;
    }
}
function validmail(){
    var email = document.getElementById('email').value;
    var emaill=/^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[^\s@]+\.com$/;
    if(email.match(emaill)){
        return true;
    }else{

        return false;
    }
}
function validname(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    validename(firstname);
    validename(lastname);
    
}
    