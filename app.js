var sidemenue = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0"
}
function closemenu(){
    sidemenu.style.right = "-200px"
}

/*-------------------------------- Scroll reveal -------------------------------------*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .Skills-container, .portfolio-box, .contact', { origin: 'buttom '});
ScrollReveal().reveal('.home-contact >h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact >p, .about-content', { origin: 'right'});

/*-------------------------------- Typed js -------------------------------------*/
const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer.', 'Web Designer.', 'Graphics Designer', 'Microsoft Office.', ],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
});

// let skills =document.getElementById('skills');
//     var nameerror = document.getElementById('name-error');
//     var numbererror = document.getElementById('number-error');
//     var emailerror = document.getElementById('email-error');
//     var messageerror = document.getElementById('message-error');

//     function validateName (){
//         var name = document.getElementById('fname').value;
//         if(name.length == 0){
//             nameerror.innerHTML = 'full name is required';
//             return false;
//         }
//         if (!name.match(/^[a-z,.'-]+$/i)){
//             nameerror.innerHTML = 'write full name';
//             return false;
//         }
//         else nameerror.innerHTML = <i class="fa-solid fa-check"></i>;
//         return true;
//     }
//     function validationEmail (){
//         var email =  document.getElementById('fmail').value;
//         if(email.length == 0){
//             emailerror.innerHTML = 'email is required';
//             return false;
//          }
//          if(!email.match(/^[a-zA-Z0-9_-]+@[a-zA-Z]){2,4}$/)){
//             emailerror.innerHTML = 'Email format invalid'
//             return false;
//          }
//          else emailerror.innerHTML = ' <i class="fa-solid fa-check"></i>';
//          return true;
//     }

//     var sidemenu = document.getElementById("sidemenu");



