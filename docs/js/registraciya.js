// www@www.com

const form = document.querySelector('.form'),
    nameInput = form.querySelector('.name'),
    lastNameInput = form.querySelector('.lastName'),
    emailInput = form.querySelector('.email'),
    passwordInput = form.querySelector('.password'),
    passwordInputAgain = form.querySelector('.password2');

form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
    event.preventDefault();
  
    if(passwordInput.value === passwordInputAgain.value){
        const res = await fetch("https://d4033904182f2496.mokky.dev/register", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: nameInput.value.trim(),
            lastName: lastNameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value.trim()
          })
        });
      
        if(!res.ok){
            const error = await res.json();
            console.error(error);
            return;
          } else {
            const json = await res.json();
            console.log(json);

            localStorage.setItem('data', JSON.stringify(json))

            window.location.href = "Avtorlar.html";
        }
    } else {
        alert('paroller birdey boliwi kerek')
    }
  
  }