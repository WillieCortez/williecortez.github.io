//contact us-submit
function validateForm() 
{
    var x = document.contactForm.firstname.value;
    var y = document.contactForm.lastname.value;
    var z = document.contactForm.email.value;
    
    

    if (x == "" || x == null)
        {
            alert("First Name must be filled out.");
            return false;
        }
    else if (y == "" || y == null)
        {
            alert("Last Name must be filled out.");
            return false;
        }
    else if(z = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(inputText.value.match(mailformat))  
{  
document.form1.text1.focus();  
return true;  
}  
else  
{  
alert("You have entered an invalid email address!");  
document.form1.text1.focus();  
return false;  
}  
}  
    
   
}
