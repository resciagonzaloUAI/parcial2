let key = localStorage.getItem("inicioSesion")

if (key === undefined || key === null || key == 0) {
    window.location.assign('./index.html')
}
/*
const logoutUser = document.getElementById('logout');
logoutUser.addEventListener("click", function(){
  localStorage.setItem("inicioSesion", 0);
  window.location.assign("./index.html");
});*/

const logoutUser = document.getElementById('salir');
logoutUser.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("inicioSesion", 0);
  window.location.assign("./index.html");
});



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
})
.catch(function(error) {
  console.log(error);
  modal.style.display = "block";
});;


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