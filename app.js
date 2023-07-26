let pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let email=document.getElementById('input');
let ErrorMessage=document.getElementById('errorMessage');
let Button=document.getElementById('button');

function isValid(){
    const Form=email.parentElement;
    const errorIcon=Form.querySelector('img');
    if (!email.value.match(pattern)) {
        email.style.border="2px solid hsl(0, 93%, 68%)";
        errorIcon.style.visibility="visible";
        ErrorMessage.style.display="block";
    }
    else{
        email.style.border="";
        errorIcon.style.visibility="hidden";
        ErrorMessage.style.display="none";
    }
}
 Button.addEventListener('click',isValid);