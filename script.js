//firstname: FN|lastname: LN|gender:gender|birthday: birthday| grade system: GradeSys|grade:grade|phone:phone|email:email
// need to add a hidden feedback element <p> to display the error message
//validating name input
function validename(inId){
    var letters = document.getElementById(inId).value;
    if(letters==''){
        return "please Enter a valid name\n";
    }else if(letters.match(/^[a-zA-Z]*$/)){
        return null;
    }else{
        return "Invalid Name\n";
    }
}
//validating gender input
function validgender(inId){
    var gender = document.getElementById(inId).value;
    if (gender!=''){
        return null;
    }else{
        return "PLease select a gender\n";       
    }
}
function validbirthday(inId){
    var date = document.getElementById(inId).value;
    if (date!=""){
        return null;
    }else{
        return "PLease select a date\n";       
    }
}
function validdate(inId){
    var date = document.getElementById(inId).value;
    if (date!=""){
        return null;
    }else{
        return "PLease select a date\n";       
    }
}
//validating grade system
function validgradesys(inId){
    var gradesys= document.getElementById(inId).value;
    if (gradesys!=0){
        return null;
    } else {
        return "Please select a grade system\n";
    } 
}

//converting GPA to percentage


//validating grade
function validgrade(inId,igrade){
    var gradesys= document.getElementById(inId).value; 
    var grade= document.getElementById(igrade).value;
    if (gradesys == "percentage"){
        if (grade>=0.0,grade<=100.0){
            return null;
        } else {
            return "Invalid Percentage\n";
        }
    }else if (gradesys=='') {
        return "Please select a grade system\n";
    } else if(gradesys == "GPA"){
        if (grade>=0.0,grade<=4.0){
            convertTopercentage('GradeSys','igrade','submitgrade');
            return null;}
        else {
            return "Invalid GPA\n";
        }
    }
}

//validating phone number
function validphone(inId){
    var phone = document.getElementById(inId).value;
    if(phone.match(/^[0-9]{12}$/g)){
        return null;
    }else{
        return "Please Enter Phone Number: please make sure to enter country code\n";
    }
}
//validating email
function validmail(inId){
    var email = document.getElementById(inId).value;
    var emaill=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(email.match(emaill)){
        return null;
    }else{
        return "Please enter Email Address\n";
    }
}
//validating form on change
function Errormessage(txt,id){
    document.getElementById(id).innerHTML=txt;
}
//validating form on submit
function validform(){
    var err = validename('FN')+validename('LN')+validgender('gender')+validphone('phone')+validmail('email')+validbirthday('birthday')+validgrade('GradeSys','grade');
    if (err!=null){alert(err);return false;}
}  
function validletters(inId){
    var letters = document.getElementById(inId).value;
    if(letters.length<3){
        return "please Enter a valid "+ inId+"\n";
    }else if(letters.match(/^[a-zA-Z _ -]$/g)){
        return null;
    }else{
        return "Your"+ inId+ "must be only letters\n";
    }
}
function validmessage(inId){
    var message = document.getElementById(inId).value;
    if(message==''){
        return "Your input shouldnt be less than 50 charchaters \n";
    }else if(letters.length>50){
        return null;
    }else{
        return "Your Input must be only letters\n";
    }
}
function validmessageform(){
    var err=validletters('name')+validmail('email')+validletters('subject')+validmessage('message');
    if (err!=null){
        Errormessage(validletters('name'),'ernam');
        Errormessage(validmail('email'),'erem');
        Errormessage(validletters('subject'),'ersub');
        Errormessage(validmessage('message'),'ermsg');
        alert(err);
        return false;
    }else{
        return true;
    }
}