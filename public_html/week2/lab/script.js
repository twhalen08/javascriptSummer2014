/*
 * Make sure to validate that an email is 
 * entered into the input(just that it has a length.
 * 
 * Validate the comments field to make sure that is has
 * a length greater than 0 and less than 150.
 */
    
  function submitForm() {
    //create variables to store the values of the fields nad spans.
    var fullname = document.getElementById("name"); 
    var fullnameErr = document.getElementById("err_name");
    var emailAddress = document.getElementById("email");
    var emailAddressErr = document.getElementById("err_email");
    var comments = document.getElementById("comments");
    var commentsErr = document.getElementById("err_comments");
    
    var hasErrors = false; //boolean used to show errors or lack thereof
    
    if ( fullname.value.length ) {
        fullname.classList.remove('bad');
        fullname.classList.add('good');        
        fullnameErr.innerHTML = '';
        //if the value of fullname has length, set the classlist to good and leave the span blank
    } else {
        hasErrors = true;
        fullname.classList.remove('good');
        fullname.classList.add('bad');       
        fullnameErr.innerHTML = "<p>Full Name is not valid.</p>";       
       //otherwise set the error flag to true, set the classlist to bad, and warn the user. 
    }
    
    
    if ( emailAddress.value.length ) {
        emailAddress.classList.remove('bad');
        emailAddress.classList.add('good');
        emailAddressErr.innerHTML = '';
    } else {
        hasErrors = true;
        emailAddress.classList.remove('good');
        emailAddress.classList.add('bad');
        emailAddressErr.innerHTML = "<p>An email address is required!</p>";
        //otherwise set the error flag to true, set the classlist to bad, and warn the user. 
    }
    
    if (!comments.value.length | comments.value.length > 150) {
        hasErrors = true;
        comments.classList.remove('good');
        comments.classList.add('bad');
        commentsErr.innerHTML = "<p> The comments field must be between 0 and 150 characters<\p>";
        //if the comment length is not within range, set the error flag to true, set the classlist to bad, and warn the user. 
    } else {
        comments.classList.remove('bad');
        comments.classList.add('good');
        commentsErr.innerHTML = '';
         //otherwise set the classlist to good and leave the span blank
    }
            
    }

   