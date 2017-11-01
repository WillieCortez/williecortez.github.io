//contact us-submit
function validateForm() 
{
    var x = document.contactForm.firstname.value;
    var y = document.contactForm.lastname.value;
    var z = document.contactForm.email.value;
    
    

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
    else if(z == "" || z == null)
        {
            alert("Please Enter Proper Email Address.");
            return false; 
        }
    
   
}
