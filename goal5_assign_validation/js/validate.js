/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){
	
	var button = document.getElementById('f_submit');

    myform.onsubmit = function(e){

       var userName = document.querySelector("#f_username");
	     var email = document.querySelector("#f_email");
		   var phone = document.querySelector("#f_phone");
		     var ssn = document.querySelector("#f_ssn");
			   var password = document.querySelector("#f_password");
	   
	   
	   
	   
	   
	   
	   validateField(userName);
	   validateField(email);
	   validateField(phone);
	   validateField(ssn);
	   validateField(password);

      


        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){

        if (inputName.name === 'f_username'){
            var pattern = /^[a-zA-Z]+$/

		}else if (inputName.name === 'f_email'){
            var pattern = /(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})/

		}else if (inputName.name === 'f_phone'){
            var pattern = /^[2-9]\d{2}-\d{3}-\d{4}$/
			
		}else if (inputName.name === 'f_ssn'){
            var pattern = /^[2-9]\d{2}-\d{2}-\d{4}$/
			
		}else if (inputName.name === 'f_password'){
            var pattern = /^.{4,16}$/
			
        };
		


        var pass = pattern.test(inputName.value);
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

button.onclick = myform.onsubmit;


})();  // end wrapper



