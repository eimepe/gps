import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import parser from 'json-parser';

var i=0;
var mapp;
var poly;


var statusLogin;
export default class EditarUser extends React.Component {
  constructor(props) {
    super(props)
    this.state =  {
      dato:[],
   nombre:"",
   correo:"",
   empresa:"",
   nit:"",
   gerente:"",
   direccion:"",
   ciudad: "",
   logo:"",
   fondo:""
  }
    //this.errorPass = this.errorPass.bind(this);

this.nombreupdate = this.nombreupdate.bind(this);
this.correoupdate = this.correoupdate.bind(this);
this.empresaupdate = this.empresaupdate.bind(this);
this.nitupdate = this.nitupdate.bind(this);
this.gerenteupdate = this.gerenteupdate.bind(this);
this.direccionupdate = this.direccionupdate.bind(this);
this.ciudadupdate = this.ciudadupdate.bind(this);
  }



  Login(event){

event.preventDefault();



var dd = '';
var parametros = {
"name":event.target.name.value,
"email":event.target.email.value,
"nombre_empresa":event.target.nombre_empresa.value,
"nit":event.target.nit.value,
"gerente":event.target.gerente.value,
"direccion":event.target.direccion.value,
"ciudad":event.target.ciudad.value,
"logo":event.target.logo.value,
"fondo":event.target.fondo.value

        };

    var url = "http://181.57.227.50:9000/editarusuario/1"; // El script a dónde se realizará la petición.
    var formd =   new FormData($("#formulario")[0]);
   $.ajax({
          url: url,
          contentType: false,
          processData: false,
          type:  'post',

          data:formd, // Adjuntar los campos del formulario enviado.
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


console.log(this.props);

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




  loadDevice()
	{
		$.ajax({
			url: "http://181.57.227.50:9000/edituser/"+this.props.id,
			dataType: 'json',
			success: (dato) => {

				this.setState({dato: dato[0]});
        this.setState({nombre: dato[0].name});
        this.setState({correo: dato[0].email});
        this.setState({empresa: dato[0].nombre_empresa});
        this.setState({nit: dato[0].nit});
        this.setState({gerente: dato[0].gerente});
        this.setState({direccion: dato[0].direccion});
        this.setState({ciudad: dato[0].ciudad});
        this.setState({fondo: dato[0].fondo});
        this.setState({logo: dato[0].logo});
			}
		})
	}


  nombreupdate(e) {
     this.setState({nombre: e.target.value});
  }

  correoupdate(e) {
   this.setState({correo: e.target.value});
}

empresaupdate(e) {
   this.setState({empresa: e.target.value});
}

nitupdate(e) {
   this.setState({nit: e.target.value});
}

gerenteupdate(e) {
   this.setState({gerente: e.target.value});
}

direccionupdate(e) {
   this.setState({direccion: e.target.value});
}

ciudadupdate(e) {
   this.setState({ciudad: e.target.value});
}



componentDidMount(){
  this.statusLogin();
  this.loadDevice();
  //console.log(document.cookie.length);
  //this.loadData();
  //this.loadMap();
  //this.loadGeocerca();

  //this.addLatLngToPoly();

}

render()
{
console.log(this.state.dato.fondo);
  return(




<div>





  <div id="create">
    <h2>Editar Usuario {this.state.nombre}</h2>
    <form class="form-horizontal" id="formulario" onSubmit={this.Login} enctype='multipart/form-data'>
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Nombre</label>
        <div class="col-sm-10">
          <input type="text" name="name" value={this.state.nombre} onChange={this.nombreupdate} class="form-control" id="inputEmail3" placeholder="Nombre"/>
        </div>
      </div>


      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Email o Usuario</label>
        <div class="col-sm-10">
          <input type="text" name="email" value={this.state.correo} onChange={this.correoupdate}  class="form-control" id="inputEmail3" placeholder="Email o Usuario"/>
        </div>
      </div>

<input type="hidden" name="admin" class="form-control" id="inputPassword3" value="false"/>
<input type="hidden" name="id" class="form-control" id="inputPassword3" value={this.props.id}/>
<input type="hidden" name="logos" class="form-control" id="inputPassword3" value={this.state.dato.logo}/>
<input type="hidden" name="fondos" class="form-control" id="inputPassword3" value={this.state.dato.fondo}/>
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
        <label for="inputEmail3" class="col-sm-2 control-label">Nombre de la empresa</label>
        <div class="col-sm-10">
          <input type="text" name="nombre_empresa" value={this.state.empresa} onChange={this.empresaupdate}  class="form-control" id="inputEmail3" placeholder="Nombre de la empresa"/>
        </div>
      </div>

      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">NIT</label>
        <div class="col-sm-10">
          <input type="text" name="nit" value={this.state.nit} onChange={this.nitupdate}  class="form-control" id="inputEmail3" placeholder="NIT"/>
        </div>
      </div>

      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Gerente</label>
        <div class="col-sm-10">
          <input type="text" name="gerente" value={this.state.gerente} onChange={this.gerenteupdate}  class="form-control" id="inputEmail3" placeholder="Gerente"/>
        </div>
      </div>

      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Direccion</label>
        <div class="col-sm-10">
          <input type="text" name="direccion" value={this.state.direccion} onChange={this.direccionupdate}  class="form-control" id="inputEmail3" placeholder="Direccion"/>
        </div>
      </div>

      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Ciudad</label>
        <div class="col-sm-10">
          <input type="text"  name="ciudad" value={this.state.ciudad} onChange={this.ciudadupdate}  class="form-control" id="inputEmail3" placeholder="Ciudad  "/>
        </div>
      </div>


      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Logo</label>
        <div class="col-sm-10">
        <img src={"http://181.57.227.50:9000/"+this.state.logo} width="100" />

          <input type="file" name="logo" class="form-control" id="inputEmail3" placeholder="Logo"/>
        </div>
      </div>

      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Fondo</label>
        <div class="col-sm-10">
  <img src={"http://181.57.227.50:9000/"+this.state.fondo} width="100" />
          <input type="file" name="fondo"    class="form-control" id="inputEmail3" placeholder="Fondo"/>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-success">Editar Usuario</button>

        </div>
      </div>


    </form>
    <div id="snackbar">Some text some message..</div>

</div>

</div>






    )
}
}
