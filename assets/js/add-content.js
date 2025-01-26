document.addEventListener('DOMContentLoaded', () => {
    const pageType = document.body.dataset.page;
  
    if (pageType === 'home')
      displayGreeting();

  });

document.querySelector('.menu-toggle').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
  });
  
function displayGreeting(){
    var today = new Date(); //variable to hold date
    var hourNow = today.getHours(); //variable to get and hold hr of current date
    var greeting; //variable to hold string
    var greetTag = document.getElementById("greetingDiv");
    if(hourNow >18){ //>6
        greeting = 'Good Evening!';
    } else if (hourNow >12){
        greeting = 'Good Afternoon!';
    }else if (hourNow >0) {
        greeting = 'Good Morning!';
    }else{
        greeting = 'Welcome!';
    }
    greetTag.innerHTML = '<h1 style="text-align: center">' + greeting + '</h1>'; // assign the value to innerHTML
}