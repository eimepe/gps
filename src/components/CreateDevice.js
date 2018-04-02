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



var dd = '';
var parametros = {
"name":event.target.name.value,
"uniqueId":event.target.uniqueId.value,
"phone":event.target.phone.value,
"model":"",
"contact":"",
"category":"",
"status":"",
"lastUpdate":null,
"groupId":0

        };

    var url = "http://181.57.227.50:8089/api/devices"; // El script a dónde se realizará la petición.
   $.ajax({
          url: url,
          dataType: 'json',
    			contentType:"application/json",
          type:  'post',
               xhrFields: {
   withCredentials: true
},

          data:JSON.stringify(parametros), // Adjuntar los campos del formulario enviado.
          success: function(data)
          {
//$obj = json_decode(data);
          //	var obj = JSON.parse(data);
window.opener.document.location.reload();self.close();


//$("#respuesta").html(data); // Mostrar la respuestas del script PHP.
          }.bind(this),
          error: function(result) {
                  // alert("Error de Usuari o contraeña");
                   this.errorPass();
                  console.log("error");
                }.bind(this)
        });
  }


  componentWillUnmount(){
  window.opener.document.location.reload();self.close();
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
        //   window.location = "home";
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





  <div id="create">
    <h2>Crear Un nuevo Dispositivo</h2>
    <form class="form-horizontal" onSubmit={this.Login}>
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Nombre</label>
        <div class="col-sm-10">
          <input type="text" name="name" class="form-control" id="inputEmail3" placeholder="Nombre"/>
        </div>
      </div>


      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Identificador Unico </label>
        <div class="col-sm-10">
          <input type="text" name="uniqueId" class="form-control" id="inputEmail3" placeholder="Identificador Unico "/>
        </div>
      </div>




  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Telefono </label>
    <div class="col-sm-10">
      <input type="text" name="phone" class="form-control" id="inputEmail3" placeholder="Telefono"/>
    </div>
  </div>




      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-success">Crear Usuario</button>
<a class="btn btn-danger" href="javascript:window.opener.document.location.reload();self.close()"> Cerrar </a>
        </div>
      </div>


    </form>
    <div id="snackbar">Some text some message..</div>

</div>

</div>






    )
}
}
