const form = document.getElementById("login");
const email = document.getElementById("email");
const pass = document.getElementById("pass");


login.addEventListener("submit", (e) => {
    e.preventDefault();
    const credenciales = {
        email: email.value,
        pass: pass.value,
      };

validaCredenciales(credenciales)
.then(function(successStatus) {
  if (successStatus) {
    guardaCredenciales(credenciales)
    window.location.href('/dashboard.html')
  } else {
    modal.style.display = "block";
  }
})
.catch(function(error) {
  console.log(error);
});
})
;

function guardaCredenciales(credenciales) {
    localStorage.setItem("email", credenciales.email)
    localStorage.setItem("contra", credenciales.pass)
}

function validaCredenciales (credenciales) {
    return fetch("https://basic-server-one.vercel.app/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: credenciales.email,
          password: credenciales.pass,
        }),
      })
        .then(function(respuesta) {
          return respuesta.json()
            .then(function (respuestaJSON) {
              // Si faltan datos
              if (respuestaJSON.success === false) {
                return false;
              }
              // Si los datos son incorrectos
              if (respuestaJSON.error === false) {
                return true;
              }
              return false;
            })
            .catch(function(error) {
              console.log(error);
            });
        })
        .catch(function(error) {
          console.log(error);
        });
}


function chequeaCredenciales (){
    return localStorage.getItem("email") && localStorage.getItem("pass");
}
   


if (chequeaCredenciales()) {
        const credenciales = {
          email: localStorage.getItem("email"),
          pass: localStorage.getItem("pass"),
        };
    
        validaCredenciales(credenciales)
          .then(function(successStatus) {
            if (successStatus) {
              window.location.assign('file:///Users/gonzalorescia/Desktop/UAI/Materias/4to/LPPA/Parcial%202/parcial2/dashboard.html')
            }
          })
          .catch(function(error) {
            console.log(error);
          })
    } else {
        if (window.location.origin == 'file:///Users/gonzalorescia/Desktop/UAI/Materias/4to/LPPA/Parcial%202/parcial2/dashboard.html'){
          window.location.assign('file:///Users/gonzalorescia/Desktop/UAI/Materias/4to/LPPA/Parcial%202/parcial2/index.html')
        }
    }
/*
    window.onload = function() {
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("submit");
        var span = document.getElementsByClassName("close")[0];
        
        // Cierra el modal
        span.onclick = function () {
          modal.style.display = "none";
        };
        
        // Cierra el modal (click afuera)
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
            };
    */
    // Get the modal
const modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
span.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
