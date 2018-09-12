//variables
const sendBtn = document.getElementById('sendBtn'),
email  = document.getElementById('email'),
subject = document.getElementById('subject'),
message = document.getElementById('message'),
resetBtn = document.getElementById('resetBtn'),
sendEmailForm = document.getElementById('email-form');





// event listeners

eventListeners();

function eventListeners(){

    document.addEventListener('DOMContentLoaded',appInit);

    email.addEventListener('blur',validateField);
    subject.addEventListener('blur',validateField);
    message.addEventListener('blur',validateField);

    //to reset the form after sending the email
    sendEmailForm.addEventListener('submit',sendEmail);
    resetBtn.addEventListener('click',resetForm);
   
    
}





// functions


function appInit(){
sendBtn.disabled = true;
}


function validateField(){
    let errors;

    validateLength(this);

    if(this.type === 'email'){
        validateEmail(this);
    }

    if(email.value !== '' && subject.value !== '' && message.value !== ''){
    errors =document.querySelectorAll('.error');
        if(errors.length === 0){
            sendBtn.disabled = false;
        }
    }
}


function validateLength(field){

    if(field.value.length >0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else
    {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

function validateEmail(field){
    var txt = field.value;

    if(txt.indexOf('@') == -1){
        field.style.borderBottomColor = 'red';
        

    }else
    {
       field.style.borderBottomColor = 'green'
    }
    

}

function resetForm(){
    /*
    Reset() which is being used here is a function in javascript which resets the form when the reset button is clicked.
    */
    sendEmailForm.reset();
}

function sendEmail(e){
e.preventDefault();

const spinner = document.getElementById('spinner');
spinner.style.display = 'block';

const sendImage = document.createElement('img');
sendImage.src = 'img/mail.gif';
sendImage.style.display = 'block';



/* After making the spinner to appear for 5s, we have to hide it and make the other image appear.
 Spinner which is being used here has no purpose but to create an impression that it is processing something which it
 is actually not.

*/

    var t = setInterval(Hide,3000);

    function Hide(){
        spinner.style.display = 'none';
        document.querySelector('#loaders').appendChild(sendImage);
        
        var p = setInterval(removeit,2000);

        function removeit(){
            sendEmailForm.reset();
            sendImage.remove();
        }
    }

   

}
