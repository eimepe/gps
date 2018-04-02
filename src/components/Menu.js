import React from 'react';
import { Link } from 'react-router'
//import $ from 'jquery';
var listMenu;
var logoA;
var body;
export default class Menu extends React.Component {
  constructor() {
    super();
    this.state =  {
      logo:"",
      data: 0,


    }
    //this.err
  }



  verificarUser(){

      var url = "http://181.57.227.50:8089/api/session"; // El script a dónde se realizará la petición.
     $.ajax({
            url: url,
            dataType: "json",
            type:  'get',
                 xhrFields: {
     withCredentials: true
  },
   // Adjuntar los campos del formulario enviado.
        success: (datas) => {


//alert("hola");

this.setState({data: datas.id})
              console.log(datas.id);

              this.verUser();
  if(datas.admin==true){
     console.log("admin");
    listMenu = <li><a href="users" title="Usuarios y dispositivos"><i class="material-icons">person_pin</i></a></li>

  }



  //$("#respuesta").html(data); // Mostrar la respuestas del script PHP.
            },
            error: function(result) {
                  window.location = "/";
                  }
          });

  }


  verUser(){

      var url = "http://181.57.227.50:9000/edituser/"+this.state.data; // El script a dónde se realizará la petición.
     $.ajax({
            url: url,
            dataType: "json",
            type:  'get',

   // Adjuntar los campos del formulario enviado.
            success: (data) => {

              console.log(data[0].logo);

document.body.style.backgroundImage = "url('http://181.57.227.50:9000/"+data[0].fondo+"')";



this.setState({logo: data[0].logo})







  //$("#respuesta").html(data); // Mostrar la respuestas del script PHP.
            },
            error: function(result) {
                //  window.location = "/";
                  }
          });

  }


Salir(){


        var url = "http://181.57.227.50:8089/api/session"; // El script a dónde se realizará la petición.
       $.ajax({
              url: url,
              dataType: "json",
              type:  'delete',
                   xhrFields: {
       withCredentials: true
    },
     // Adjuntar los campos del formulario enviado.
          success: (datas) => {

window.location = "/";

    //$("#respuesta").html(data); // Mostrar la respuestas del script PHP.
              },
              error: function(result) {
                    window.location = "/";
                    }
            });

}



  componentDidMount(){

this.verificarUser();
$(".button-collapse").sideNav();

  }

  render(){

    return(
<div >
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header ">
      <a class="navbar-brand espacioleft" href="#"><img src={"http://181.57.227.50:9000/"+this.state.logo}/></a>
      </div>
      <ul class="nav navbar-nav navbar-right espacioright" >
        <li class="active"><a title="Inicio" href="home"><i class="material-icons">home</i></a></li>
        <li><a href="posiciones" title="Ultimas posiciones"><i class="material-icons">place</i></a></li>
        <li><a href="geocercas" title="Geocercas"><i class="material-icons">flip_to_front</i></a></li>
        <li><a href="panicos" title="Alertas de panico"><i class="material-icons">warning</i></a></li>
        <li><a href="puertas" title="Estados de Puertas"><i class="material-icons">note</i></a></li>
          <li><a href="powers" title="Encendido y Apagado de Vehiculo"><i class="material-icons">power_settings_new</i></a></li>

          {listMenu}

          <li onClick={this.Salir}><a href="#"     title="Salir"><i class="material-icons">cancel</i></a></li>
      </ul>
    </div>
  </nav>

</div>
    )
  }
}
