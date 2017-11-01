//contact us-submit
function validateForm() 
{
    var x = document.contactForm.firstname.value;
    var y = document.contactForm.lastname.value;
    var z = document.contactForm.email.value;
    var f = document.contactform.subject.value;
    

    if (x == "" || x == null)
        {
            alert("Please Enter First Name.");
            return false;
        }
    else if (y == "" || y == null)
        {
            alert("Please Ener Last Name.");
            return false;
        }
     
        {    
            else if(z == "" || z == null)       
        {
        
            alert("Please Enter Your Proper Email Address.");
            document.getElementById("eTextBox").focus();
            return false;
        
        }

            else if(f == "")
        {
            alert("Please enter a message in the box provided.");
            document.getElementById("mTextBox").focus();
            return false;
        }
            else
        {
            alert("You submision has been sent!")
        }         
}
   
}
