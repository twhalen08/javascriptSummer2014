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
    var tableData = document.getElementById("tableData");
    var mainform = document.getElementById("mainform");
    var globalArr = [];
    var parsedInserts = [];
    
function clearFields() {
mainform.reset(); //reset fields
}
function SpaceAlphaValidate( str ) {
        var alphaRegex = /[a-zA-Z ]+/; //a-z only
        return alphaRegex.test(str);	//returns true if valid		
}
function phoneValidate(str){
    var phoneRegex = /^[2-9]\d{2}-\d{3}-\d{4}$/;
    return phoneRegex.test(str);//returns true if valid		
}

function emailValidate(str) {
     var emailRegex = /^[a-zA-Z]+[@]{1}[a-zA-Z]+[\.]{1}[a-zA-Z]{2,3}$/;
     return emailRegex.test(str);//returns true if valid		
}

function strip_HTML(str) { // strips html from field
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}

function submitForm()
{
if(!fullName.value.length) { //if the fullname is blank
    fullNameErr.innerHTML = "Full Name is too short! Please enter a valid full name"; //warn the user
    
} else if (SpaceAlphaValidate(fullName.value) === false) { //if the fullname is invalid
    fullNameErr.innerHTML = "Full Name contains invalid characters. Only alph characters and spaces allowed!";//warn the user
} else {
    fullNameErr.innerHTML = "";//otherwise clear warning
}
       //the comments above in this function apply
       //to all of the ifs below. 

       
       
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
if (phoneValidate(phone.value) === true && emailValidate(email.value) === true && SpaceAlphaValidate(fullName.value) === true)// if everything is OK
{
    appendToLocalStorage();//add the result to local storage
    displayTable();//update the table
    clearFields();//clear the fields. 
}

}




function appendToLocalStorage() //add result
{
    globalArr.push({ //add result to the array
        'fullname': fullName.value, 
        'phone': phone.value, 
        'email': email.value, 
        'description': description.value
    });
    localStorage.setItem('inserts', JSON.stringify(globalArr)); //insert array into localstorage
    var getInserts = localStorage.getItem('inserts'); //get the localstorage data and store it in an array
}

function displayTable()
{
    var getInserts = localStorage.getItem('inserts'); // pull the data from localstorage
    parsedInserts = JSON.parse(getInserts); //parse the data so its usable 
    var nm = "";
    var number = 1;
    for(i in parsedInserts) //read into array
    {
        nm += ( "<tr><td>" + number + "</td><td>" +  parsedInserts[i].fullname + "</td><td>" + parsedInserts[i].phone + "</td><td>" + parsedInserts[i].email + "</td><td>" + parsedInserts[i].description + "</td></tr>");  
    number++;// add the html for a table row to the string variable. 
    }
    tableData.innerHTML = nm;//output the whole table to the screen
    
}

function onPageLoad(){
    if (localStorage.length){ //if there are items in localstorage
    var pullInserts = localStorage.getItem('inserts'); //pull everything stored in inserts
    globalArr = JSON.parse(pullInserts); //parse into something usable. 
    }
    else {
        console.log("empty"); //just a console warning telling me that the localstorage is empty
    }
    displayTable();// call the display table func
}

function localStorageClear(){ //clears local storage
    localStorage.clear(); //clears local storage
    globalArr.length = 0; //clears the global array so it doesn't accidentally repopulate localstorage
    displayTable(); // display the table again
}
function deleteLastRow(){
    globalArr.splice(- 1, 1); //delete the last row in the global array
    localStorage.setItem('inserts', JSON.stringify(globalArr)); // push the global array to local storage. 
    displayTable(); //redisplay the table.
}