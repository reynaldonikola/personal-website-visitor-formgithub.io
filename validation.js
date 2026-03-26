const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function initValidation(formSelector){
const form=document.querySelector(formSelector);

form.addEventListener("submit",function(e){
e.preventDefault();
if(validateForm()){
document.getElementById("myform").style.display="none";
document.getElementById("thankYouMessage").style.display="block";
}
});

document.querySelectorAll(".track-validation").forEach(i=>{
i.addEventListener("blur",()=>validateField(i.id));
});
}

function validateForm(){
let v=true;
v=checkRequired("firstName","Required")&&v;
v=checkRequired("lastName","Required")&&v;
v=checkFormat("email","Invalid email",emailRegex)&&v;
v=validateHowFound()&&v;
return v;
}

function validateField(id){
if(id==="email") return checkFormat(id,"Invalid email",emailRegex);
return checkRequired(id,"Required");
}

function checkRequired(id,msg){
const el=document.getElementById(id);
const valid=el.value.trim()!=="";
setValidity(el,valid,msg);
return valid;
}

function checkFormat(id,msg,regex){
const el=document.getElementById(id);
const valid=regex.test(el.value);
setValidity(el,valid,msg);
return valid;
}

function validateHowFound(){
const checked=document.querySelectorAll('[name="howFound"]:checked').length>0;
const err=document.getElementById("howFoundError");
err.textContent=checked?"":"Select one";
return checked;
}

function setValidity(el,valid,msg){
el.classList.add("was-validated");
el.setCustomValidity(valid?"":msg);
if(el.nextElementSibling){
el.nextElementSibling.textContent=valid?"":msg;
}
}
