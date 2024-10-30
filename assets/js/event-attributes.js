// JavaScript Document
var elUsername = document.getElementById('username');
var elPassword = document.getElementById('password');
var elEmail = document.getElementById('email');
var elPhoneNum = document.getElementById('phoneNum');
var elFName = document.getElementById('fName');
var elLName = document.getElementById('lName');
var elComments = document.getElementById('comments');

function checkName(minLength, div, feedback, input){
	var elData = document.getElementById(div);
	var elMsg = document.getElementById(feedback);
	var elInput = document.getElementById(input);
	var validRegex = /^[a-zA-Z-']+$/;
		
	if (elData.value.length < minLength){
		elInput.classList.add("has-error");
		elMsg.classList.add("red");
		elMsg.innerHTML = 'Field must be ' + minLength + ' characters or more.';
	}
	else if(elData.value.match(validRegex)){
		elInput.classList.remove("has-error");
		elInput.classList.add("has-success");
		elMsg.classList.remove("red");
		elMsg.innerHTML = ''; // Clear message
	}
	else{                                              						
		elInput.classList.add("has-error");
		elMsg.classList.add("red");
		elMsg.innerHTML = 'Can only contain alphabet characters, hyphens and apostrophes. Must also be at least 2 characters.';
	}
}

function checkEmail(email,feedback,input){
	
	var validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	var elEmail = document.getElementById(email);
	var elMsg = document.getElementById(feedback);
	var elInput = document.getElementById(input);
	
	if (elEmail.value.match(validRegex)){
		elInput.classList.remove("has-error");
		elInput.classList.add("has-success");
		elMsg.classList.remove("red");
		elMsg.innerHTML = ''; // Clear message
	} 
	else{                                              								
		elInput.classList.add("has-error");
		elMsg.classList.add("red");
		elMsg.innerHTML = 'Invalid Email Address Entered.';
	}
}

function checkPhone(length, div, feedback, input){
	var elData = document.getElementById(div);
	var elMsg = document.getElementById(feedback);
	var elInput = document.getElementById(input);
	var validRegex = /^[0-9]+$/;

	if (elData.value.length != length){
		elInput.classList.add("has-error");
		elMsg.classList.add("red");
		elMsg.innerHTML = 'Phone number must be exactly ' + length + ' characters.';
	}
	else if(elData.value.match(validRegex)){
		elInput.classList.remove("has-error");
		elInput.classList.add("has-success");
		elMsg.classList.remove("red");
		elMsg.innerHTML = ''; // Clear message
	}
	else{                                              						
		elInput.classList.add("has-error");
		elMsg.classList.add("red");
		elMsg.innerHTML = 'Phone number should contain only numbers and be exactly 10 digits.';		
	}
}

function checkData(minLength,div,feedback,input){  
	var elData = document.getElementById(div);
	var elMsg = document.getElementById(feedback);
	var elInput = document.getElementById(input);
	
	if (elData.value.length < minLength){
		elInput.classList.add("has-error");
		elMsg.classList.add("red");
		elMsg.innerHTML = div.charAt(0).toUpperCase() + div.slice(1) + ' must be ' + minLength + ' characters or more.';
	} 
	else{                                              						
		elInput.classList.remove("has-error");
		elInput.classList.add("has-success");
		elMsg.classList.remove("red");
		elMsg.innerHTML = ''; // Clear message	
	}
	
}

function checkComment(div, feedback, input){
	var elData = document.getElementById(div);
	var elMsg = document.getElementById(feedback);
	var elInput = document.getElementById(input);
	
	if (elData.value.length > 0){
		elInput.classList.remove("has-error");
		elInput.classList.add("has-success");
		elMsg.classList.remove("red");
		elMsg.innerHTML = ''; // Clear message
	} 
	else{                                              							
		elInput.classList.add("has-error");
		elMsg.classList.add("red");
		elMsg.innerHTML = div.charAt(0).toUpperCase() + div.slice(1) + ' cannot be empty.';		
	}
	
}

elFName.addEventListener('blur', function() {
	checkName(2,'fName','fName_feedback','fNameInput');
	},false);

elLName.addEventListener('blur', function() {
	checkName(2,'lName','lName_feedback','lNameInput');
	},false);

elEmail.addEventListener('blur', function() {
	checkEmail('email','email_feedback','emailInput');
	},false);

elPhoneNum.addEventListener('blur', function() {
	checkPhone(10,'phoneNum','phoneNum_feedback','phoneNumInput');
	},false);

elUsername.addEventListener('blur', function() {
	checkData(6,'username','username_feedback','usernameInput');
	},false);

elPassword.addEventListener('blur', function() {
	checkData(6,'password','password_feedback','passwordInput');
	},false);

elComments.addEventListener('blur', function() {
	checkComment('comments','comments_feedback','commentsInput');
	},false);