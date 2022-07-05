
/* function validaCredenciales(credenciales) {
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
          // Faltan datos
          if (respuestaJSON.success === false) {
            return false;
          }
          // Datos incorrectos
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

if (!chequeaCredenciales()) {
    window.location.assign('/index.html')
}

const logoutUser = document.getElementById('logout');
logoutUser.addEventListener("click", function(){
  localStorage.clear();
  window.location.assign("/index.html");
});
*/
const tabla = (function (respuestaJson){
  const tableContainer = document.getElementById('tableContainer');
  for(let i of respuestaJson['data']){
      tableContainer.innerHTML +=`
      <tr class='tabla'>
          <td class='tablat'>${i.id}</td>
          <td class='tablat'>${i.name}</td>
          <td class='tablat'>${i.username}</td>
          <td class='tablat'>${i.email}</td>
          <td class='tablat'>${i.address.street}</td>
          <td class='tablat'>${i.address.suite}</td>
          <td class='tablat'>${i.address.city}</td>
          <td class='tablat'>${i.phone}</td>
          <td class='tablat'>${i.company.name}</td>
      </tr>`
  }
});
fetch('https://basic-server-one.vercel.app/users')
.then(function(respuesta){
  return respuesta.json();
})
.then(function(respuestaJson){
  tabla(respuestaJson);;
});