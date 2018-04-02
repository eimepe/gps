import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import parser from 'json-parser';

var i=0;
var mapp;
var poly;

var statusLogin;
export default class CreateDevice extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
   data: [],
  }

    //this.errorPass = this.errorPass.bind(this);

  }



  Login(event){

event.preventDefault();



var dd = '';
var parametros = {
"name":event.target.name.value,"email":event.target.email.value,
"password":event.target.password.value,
"readonly":false,
"admin":false,
"map":"",
"distanceUnit":"",
"speedUnit":"",
"latitude":0,
"longitude":0,
"zoom":0,
"twelveHourFormat":false,
"coordinateFormat":"",
"disabled":false,
"expirationTime":null,
"deviceLimit":-1,
"userLimit":0,
"deviceReadonly":false,
"token":"Bv5uXbnOAlyUaNfQ7gO9TIGuw5YO9SDS"

        };

    var url = "http://181.57.227.50:8089/api/users"; // El script a dónde se realizará la petición.
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
console.log(data);


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
    <h2>Crear Un nuevo Usuario</h2>
    <form class="form-horizontal" onSubmit={this.Login}>
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Nombre</label>
        <div class="col-sm-10">
          <input type="text" name="name" class="form-control" id="inputEmail3" placeholder="Nombre"/>
        </div>
      </div>


      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Email o Usuario</label>
        <div class="col-sm-10">
          <input type="text" name="email" class="form-control" id="inputEmail3" placeholder="Email o Usuario"/>
        </div>
      </div>

<input type="hidden" name="admin" class="form-control" id="inputPassword3" value="false"/>
<input type="hidden" name="readonly" class="form-control" id="inputPassword3" value="false"/>
<input type="hidden" name="distanceUnit" class="form-control" id="inputPassword3" value=""/>
<input type="hidden" name="speedUnit" class="form-control" id="inputPassword3" value=""/>
<input type="hidden" name="latitude" class="form-control" id="inputPassword3" value="0"/>
<input type="hidden" name="longitude" class="form-control" id="inputPassword3" value="0"/>
<input type="hidden" name="zoom" class="form-control" id="inputPassword3" value="0"/>
<input type="hidden" name="twelveHourFormat" class="form-control" id="inputPassword3" value="false"/>
<input type="hidden" name="coordinateFormat" class="form-control" id="inputPassword3" value=""/>
<input type="hidden" name="disabled" class="form-control" id="inputPassword3" value="false"/>
<input type="hidden" name="expirationTime" class="form-control" id="inputPassword3" value="null"/>
<input type="hidden" name="deviceLimit" class="form-control" id="inputPassword3" value="-1"/>
<input type="hidden" name="userLimit" class="form-control" id="inputPassword3" value="0"/>
<input type="hidden" name="deviceReadonly" class="form-control" id="inputPassword3" value="false"/>
<input type="hidden" name="token" class="form-control" id="inputPassword3" value="Bv5uXbnOAlyUaNfQ7gO9TIGuw5YO9SDS"/>





      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">Contraseña</label>
        <div class="col-sm-10">
          <input type="password" name="password" class="form-control" id="inputPassword3" placeholder="Contraseña"/>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-success">Crear Usuario</button>

        </div>
      </div>


    </form>
    <div id="snackbar">Some text some message..</div>

</div>

</div>






    )
}
}
