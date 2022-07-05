
fetch('https://basic-server-one.vercel.app/users/')

      .then(response => response.json())
      .then(data => {
        var respuesta = JSON.stringify(data)
        document.querySelector('#debut').innerText = respuesta;
        console.log(data)
      });
         
