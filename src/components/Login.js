import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import parser from 'json-parser';

var i=0;
var mapp;
var poly;

var statusLogin;
export default class Login extends React.Component {
  constructor(props) {
    super(props)

    //this.errorPass = this.errorPass.bind(this);

  }



  Login(event){

event.preventDefault();

console.log($(event.target).serializeArray());

    var url = "http://181.57.227.50:8089/api/session"; // El script a dónde se realizará la petición.
   $.ajax({
          url: url,
          dataType: "json",
          type:  'post',
               xhrFields: {
   withCredentials: true
},

          data: $(event.target).serialize(), // Adjuntar los campos del formulario enviado.
          success: function(data)
          {
//$obj = json_decode(data);
          //	var obj = JSON.parse(data);
          if(data.id>0){
           //console.log(document.cookie);
           var id = data.id
           //document.cookie = "id="+data.id;
           window.location = "home";
//window.location="index.php";
          }


//$("#respuesta").html(data); // Mostrar la respuestas del script PHP.
          }.bind(this),
          error: function(result) {
                  // alert("Error de Usuari o contraeña");
                   this.errorPass();
                  console.log("error");
                }.bind(this)
        });
  }


  errorPass(){

  var x = document.getElementById("snackbar")
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

  }

  statusLogin(){
    var url = "http://181.57.227.50:8089/api/session"; // El script a dónde se realizará la petición.
   $.ajax({
          url: url,
          dataType: "json",
          type:  'get',
               xhrFields: {
   withCredentials: true
},
 // Adjuntar los campos del formulario enviado.
          success: function(data)
          {

            console.log(data);
//$obj = json_decode(data);
          //	var obj = JSON.parse(data);
          if(data.id > 0){
           //console.log(document.cookie);
           var id = data.id

           console.log(id);
           //document.cookie = "id="+data.id;
           window.location = "home";
//window.location="index.php";
          }



//$("#respuesta").html(data); // Mostrar la respuestas del script PHP.
          },
          error: function(result) {
                console.log("Error de usuario o contraseña");
                }
        });
  }


componentDidMount()
{
  document.body.style.backgroundImage = "url('img/fondo.jpg')";

this.statusLogin();
  //console.log(document.cookie.length);
  //this.loadData();
  //this.loadMap();
  //this.loadGeocerca();

  //this.addLatLngToPoly();

}

render()
{
  return(




<div>



  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#"><img src="img/logo.png"/></a>
      </div>

    </div>
  </nav>

  <div id="login">
    <h2>Ingresar a la Plataforma GPS</h2>
    <form class="form-horizontal" onSubmit={this.Login}>
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Usuario</label>
        <div class="col-sm-10">
          <input type="text" name="email" class="form-control" id="inputEmail3" placeholder="Email"/>
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">Contraseña</label>
        <div class="col-sm-10">
          <input type="password" name="password" class="form-control" id="inputPassword3" placeholder="Password"/>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <div class="checkbox">
            <label>
              <input type="checkbox"/> Remember me
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-success">Iniciar Sesion</button>

        </div>
      </div>


    </form>
    <div id="snackbar">Some text some message..</div>

</div>

</div>






    )
}
}
