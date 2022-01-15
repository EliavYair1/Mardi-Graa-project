const form = document.querySelectorAll('.form-horizontal');
const username = document.getElementById('username');
const username = document.getElementById('userLname');
const email = document.getElementById('email');


function showError(input,message){
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}
function showSuccess(input){
   const formControl = input.parentElement;
   formControl.className = 'form-control success';
}



//prevent the Submit
form.addEventListener('submit',function(e){
e.preventDefault();

//Check the form fields
if(username.value === ""){
  showError(username,'User Name is Requierd');
}
else{
  showSuccess(username);
}
if(email.value === ""){
  showError(email,'Email is Requierd');
}
else{
  showSuccess(email);
}
if(password.value === ""){
  showError(password,'Password is Requierd');
}
else{
  showSuccess(password);
}
if(password2.value === ""){
  showError(password2,'Password is Requierd');
}
else{
  showSuccess(password2);
}
});