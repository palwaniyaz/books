const form = document.querySelector('.form'),
    emailInput = form.querySelector('.email'),
    passwordInput = form.querySelector('.password');

form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
    event.preventDefault();
  
    const res = await fetch("https://d4033904182f2496.mokky.dev/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: emailInput.value.trim(),
        password: passwordInput.value.trim()
      })
    });
  
  
    if(!res.ok){
        const answer = confirm('Siz registraciyadan o\'ttin\'izba')

        if(answer){
            alert('Email yaki parol qate terilgen')
        } else{
            alert('Registraciaydan o\'in\'')
            window.location.href = "registraciya.html";
        }
      }
  
  }

  