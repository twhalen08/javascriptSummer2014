/*
 Let’s revisit form validation from week 2. 
  You will use your same form but create some new JavaScript. 
 
1. In your HTML make a fname and lname fields.
2. Using regular expression to validate your form.
    a. Full name must be a SpaceAlphaValidate, only characters and spaces allowed
    c. Email must start with characters, have a @ symbol, have another set 
       of characters have a period and end with 3 characters.
    d. Comments must not have any html.  Search for characters that have <> 
       wrapped around it.

3.  Once all the data is valid hide the form using [object].style.display='none'
    Display a div that will show the data entered.  You can add a div to the page
    and have it display:none to start.

 */





function SpaceAlphaValidate( str ) {
        var alphaRegex = /[a-zA-Z ]+/;
        return alphaRegex.test(str);			
}

function emailValidate(str) {
     var emailRegex = /^[a-zA-Z]+[@]{1}[a-zA-Z]+[\.]{1}[a-zA-Z]{2,3}$/;
     return emailRegex.test(str);
}

function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}

function submitForm() {
			
        var fname = document.getElementById('fname');
        var lastName = document.getElementById("lname");
        var emailAddr = document.getElementById("email");
        var txtComments = document.getElementById("comments");
        var fname_err = document.getElementById("err_fname");
        var lname_err = document.getElementById("err_lname");
        var emailAddr_err = document.getElementById("err_email");
        var txtCommentsErr = document.getElementById("err_comments");
        var formDiv = document.getElementById("content");
        var resultsDiv = document.getElementById("results");


        if ( !fname.value.length ) {
                fname_err.innerHTML = "Fname needs a length";
        } else if ( SpaceAlphaValidate(fname.value) === false ) {
                fname_err.innerHTML = "Fname needs Alpha chars";
        } else {
                fname_err.innerHTML = "Fname is good";
        }
        
        
        
        if (!lastName.value.length) {
            lname_err.innerHTML = "Lname needs a length";
        } else if ( SpaceAlphaValidate(lastName.value) === false ) {
            lname_err.innerHTML = "Lname needs alpha chars";
        } else {
            lname_err.innerHTML  = "Lname is good!";
        }
        
        if (!emailAddr.value.length) {
            emailAddr_err.innerHTML = "email needs a length";
        } else if (emailValidate(emailAddr.value) === false ) {
            emailAddr_err.innerHTML = "invalid email. please use the email@domain.tld format";
        } else {

            emailAddr_err.innerHTML = "email is good!";
        }
        
        txtComments.value = strip_HTML(txtComments.value);
        if ( SpaceAlphaValidate(fname.value) === true && emailValidate(emailAddr.value) === true &&  SpaceAlphaValidate(lastName.value) === true )
        {
            formDiv.style.display = 'none';
            resultsDiv.innerHTML = 'First and Last Name: ' + fname.value + lastName.value + '</br>Email Address: ' + emailAddr.value + '</br>Comments: ' + txtComments.value;
        }
        console.log(txtComments.value);

}