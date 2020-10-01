
function sendMail(contactForm) {
  emailjs.send("gmail", "Harima", {
    "from_name": contactForm.fname.value,
    "from_email": contactForm.email.value,
    "message": contactForm.message.value,
    to_name: "Harima"
       
    })

       .then(function (response) {
          console.log('SUCCESS!', response);
          alert("your email has been send thanks!");
       }, function (error) {
          console.log('FAILED...', error);
          alert("please try again")
       });
 
    return false;
 }

