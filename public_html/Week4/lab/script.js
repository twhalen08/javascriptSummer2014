/* 
 *We need to collect some data from the user. 
 *Please collect the following data. User input from email field 
 *and name field.  User Screen size, Browser information, page title. 
 * Collect the first 100 mouse coordinates the user makes on the page.
 * 
 * 
1.  Create a Json that will collect all this data. It’s as simple as a key:value pair.
2. Collect the user input value when they blur on the field
    a. Email
    b. User name
3. The user screen size, user agent and page title can be collected when 
the window loads.
    a. window.innerHeight
    b. window. innerWidth
    c. window. navigator. userAgent
    d. document.title
4. Collect the user mouse cords by putting them into an array when the 
user moves there mouse on the document. One for the mouseX, and one for 
the mouseY.  Once the Array has a length of 100 you can stop pushing the 
mouse cords into the array.
    a. e.clientX
    b. e.clientY
    c. jsonVariable.ArrayVariable.push(e.clientX) (Do not name your variables this sample)

 */

//userdata is the json that stores all of the data we're collecting. 
var userdata = {
    "x" : [],// mouse x axis
    "y" : [], // mouse y axis
    "agent" : "", // useragent
    "height" : "", //window height
    "width" : "", //window width
    "title" : "", //page title
    "email" : "", //email field
    "username" : "" //name field
};
userDat(); //userdat is called right after the jason is created and stores all of the window and useragent info. 

function trackMouse(e) { //the trackmouse takes the users mouses x and y positions and writes them to the json until 100 have been collected
    userdata.x.push(e.clientX);
    userdata.y.push(e.clientY);
     if ( userdata.x.length >= 100 && userdata.y.length >= 100) {
                    document.removeEventListener('mousemove', trackMouse);
                }

}
function userDat() { // this function as stated above collects the useragent and window data and writes it to the json
    userdata.agent = window.navigator.userAgent;
    userdata.height = window.innerHeight;
    userdata.width = window.innerWidth;
    userdata.title = document.title;
}
function onBlur1() {// when the user blurs out of the fullname field, the fullname is stored
   userdata.username = fullname.value;
}
function onBlur2() { //when the user blurs out of the email field, the email is stored.
    userdata.email = email.value;
}
function showResults() { // writes all results to the console and is called when the button is clicked
    console.log(userdata);
}
var fullname = document.getElementById("fullname");
var email = document.getElementById("email");
fullname.addEventListener("blur", onBlur1);
email.addEventListener("blur", onBlur2);

var results = document.getElementById('showResults');

results.addEventListener("click", showResults);
document.addEventListener('mousemove', trackMouse);
