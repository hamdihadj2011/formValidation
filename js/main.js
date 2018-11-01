/*Input Validation*/

var fname=document.getElementById('fname');
var sname=document.getElementById('sname');
var adress=document.getElementById('adress');
var email=document.getElementById('email');
var password=document.getElementById('password');
var submit=document.getElementById('submit');
var comments=document.getElementById('comments')


fname.addEventListener("blur", checkEmpty);
sname.addEventListener("blur", checkEmpty);
adress.addEventListener("blur", checkEmpty);
email.addEventListener("blur", checkEmpty);
password.addEventListener("blur", checkEmpty);
comments.addEventListener("blur", checkEmpty);
form.addEventListener("submit", checkEmpty);


function checkEmpty() {
	if(this.value.length===0){
    //alert("Must be not empty");
    this.style.border="1px solid #f00";

	}
	else{
		this.style.border="none";
	}
    

};

form.addEventListener("submit",function checkEmail(event){
	event.preventDefault();
	var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (!filter.test(email.value)) {
		 alert('Please provide a valid email address');
		 email.focus();
		 return false
    
	}
		else{
   return true

}

});


form.addEventListener("submit",function checkPassword(event){
	//event.preventDefault();
	var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

if (password.value.length<8 && password.value != passw){
	alert('Please enter correct password');
	password.focus();
	return false
}
else{
	return true
}
});


