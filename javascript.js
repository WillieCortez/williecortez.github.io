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
    else if(z == "" || z == null)
        {
            alert("Email must be filled out.");
            return false; 
        }
    
   
}
