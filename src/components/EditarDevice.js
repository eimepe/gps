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
   name:"",
   uniqueid:"",
   phone:"",
   img:"",
   foto:"",

  }
    //this.errorPass = this.errorPass.bind(this);

this.nombreupdate = this.nombreupdate.bind(this);
this.uniqueidupdate = this.uniqueidupdate.bind(this);
this.phoneupdate = this.phoneupdate.bind(this);
this.nitupdate = this.nitupdate.bind(this);
this.gerenteupdate = this.gerenteupdate.bind(this);
this.direccionupdate = this.direccionupdate.bind(this);
this.ciudadupdate = this.ciudadupdate.bind(this);
  }



  Login(event){

event.preventDefault();



var dd = '';


    var url = "http://181.57.227.50:9000/editardevice/1"; // El script a dónde se realizará la petición.
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

          self.close();
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
			url: "http://181.57.227.50:9000/editdevice/"+this.props.id,
			dataType: 'json',
			success: (dato) => {


console.log(dato);
        this.setState({dato: dato[0]});
        this.setState({name: dato[0].name});
        this.setState({uniqueid: dato[0].uniqueid});
        this.setState({phone: dato[0].phone});
        this.setState({foto: dato[0].foto});
        this.setState({img: dato[0].img});
			}
		})
	}


  nombreupdate(e) {
     this.setState({name: e.target.value});
  }

  uniqueidupdate(e) {
   this.setState({uniqueid: e.target.value});
}

phoneupdate(e) {
   this.setState({phone: e.target.value});
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
console.log(this.state.dato.foto);
  return(




<div>





  <div id="create">
    <h2>Editar Dispositivo {this.state.nombre}</h2>
    <form class="form-horizontal" id="formulario" onSubmit={this.Login} enctype='multipart/form-data'>
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Nombre</label>
        <div class="col-sm-10">
          <input type="text" name="name" value={this.state.name} onChange={this.nombreupdate} class="form-control" id="inputEmail3" placeholder="Nombre"/>
        </div>
      </div>


      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Identificador unico</label>
        <div class="col-sm-10">
          <input type="text" name="uniqueid" value={this.state.uniqueid} onChange={this.uniqueidupdate}  class="form-control" id="inputEmail3" placeholder="Email o Usuario"/>
        </div>
      </div>

<input type="hidden" name="admin" class="form-control" id="inputPassword3" value="false"/>
<input type="hidden" name="id" class="form-control" id="inputPassword3" value={this.props.id}/>
<input type="hidden" name="img" class="form-control" id="inputPassword3" value={this.state.dato.img}/>
<input type="hidden" name="foto" class="form-control" id="inputPassword3" value={this.state.dato.foto}/>





      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Telefono</label>
        <div class="col-sm-10">
          <input type="text" name="phone" value={this.state.phone} onChange={this.phoneupdate}  class="form-control" id="inputEmail3" placeholder="Nombre de la empresa"/>
        </div>
      </div>




      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Foto</label>
        <div class="col-sm-10">
        <img class="materialboxed" src={"http://181.57.227.50:9000/img/"+this.state.foto} width="100" />

          <input type="file" name="foto" class="form-control" id="inputEmail3" placeholder="Logo"/>
        </div>
      </div>

      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Icono</label>
        <div class="col-sm-10">
  <img src={"http://181.57.227.50:9000/img/"+this.state.img} width="100" />
          <input type="file" name="img"    class="form-control" id="inputEmail3" placeholder="Fondo"/>
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
