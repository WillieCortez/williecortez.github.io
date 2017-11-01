//contact us-submit
function validateForm() 

   {
    var x = document.contactForm.firstname.value;
    var y = document.contactForm.lastname.value;
    var z = document.contactForm.email.value;
    var r = document.contactForm.contactreason.value;
    var s = document.contactForm.subject.value;

    if (x == "" || x == null)
        {
            alert("Please Enter First Name.");
            return false;
        }
    else if (y == "" || y == null)
        {
            alert("Please Enter Last Name.");
            return false;
        }
    else if(z == "" || z == null)
        {
            alert("Please Enter Proper Email Address.");
            return false; 
        }
    else if(r == "" || r == null)
        {
            alert("Please Select Reason.");
            return false; 
        }
    else if(s == "" || s == null)
        {
            alert("Please Enter Comments.");
            return false; 
        }
}

