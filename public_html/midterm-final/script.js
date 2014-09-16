/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    var fullName = document.getElementById("fullname");
    var fullNameErr = document.getElementById("fullname_err");
    var email = document.getElementById("email");
    var emailErr = document.getElementById("email_err");
    var phone = document.getElementById("phone");
    var phoneErr = document.getElementById("phone_err");
    var description = document.getElementById("description");
    var descriptionErr = document.getElementById("description_err");
    var btnSaveData = document.getElementById("savedata");
    var tableData = document.getElementById("tabledata");
    
    

function SpaceAlphaValidate( str ) {
        var alphaRegex = /[a-zA-Z ]+/;
        return alphaRegex.test(str);			
}
function phoneValidate(str){
    var phoneRegex = /^[2-9]\d{2}-\d{3}-\d{4}$/;
    return phoneRegex.test(str);
}

function emailValidate(str) {
     var emailRegex = /^[a-zA-Z]+[@]{1}[a-zA-Z]+[\.]{1}[a-zA-Z]{2,3}$/;
     return emailRegex.test(str);
}

function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}

function submitForm()
{
if(!fullName.value.length) {
    fullNameErr.innerHTML = "Full Name is too short! Please enter a valid full name";
    
} else if (SpaceAlphaValidate(fullName.value) === false) {
    fullNameErr.innerHTML = "Full Name contains invalid characters. Only alph characters and spaces allowed!";
} else {
    fullNameErr.innerHTML = "";
}

if (!email.value.length) {
    emailErr.innerHTML = "Email is too short! Please enter a valid email address.";
} else if (emailValidate(email.value) === false) {
    emailErr.innerHTML = "Invalid email! Pleas enter a valid email. ex: someone@someplace.com";    
} else {
    emailErr.innerHTML = "";
}

if (!phone.value.length) {
    phoneErr.innerHTML = "Phone Number is too short! you must enter a valid phone number. ex: 401-123-4567";
} else if (phoneValidate(phone.value) === false) {
    phoneErr.innerHTML = "Phone Number is invalid! Please enter a valid phone number. ex: 401-123-4567";
} else {
    phoneErr.innerHTML = "";
}

description.value = strip_HTML(description.value);
    
    
}
