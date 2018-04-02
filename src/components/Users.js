import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import parser from 'json-parser';

var i=0;
var mapp;
var poly;
export default class Posicion extends React.Component {
  constructor(props) {
    super(props);
      this.state =  {
     data: [],
      dato: [],
      datou: [],
      datas: '0',
      datas: '0',
      datad: '0',
    }
this.updateState = this.updateState.bind(this);
this.updateStates = this.updateStates.bind(this);
this.updateDi = this.updateDi.bind(this);
this.loadDevice = this.loadDevice.bind(this);
this.imprimiR = this.imprimiR.bind(this);
this.editUsers = this.editUsers.bind();

  }


  deleteDevice(ev)
  {
    var id = ev.target.value;
var confirmar = confirm("Seguro quiere Eliminar el Dispositivo?.");

if(confirmar){
  $.ajax({
    url: "http://181.57.227.50:8089/api/devices/"+id,
    dataType: 'json',
    type: 'delete',
    xhrFields: {
  withCredentials: true
},
    success: () => {


      location.reload();

    }

  })


}else{

}



  }


  deleteUser(ev)
  {
    var id = ev.target.value;
var confirmar = confirm("Seguro quiere Eliminar el Usuario?.");

if(confirmar){
  $.ajax({
    url: "http://181.57.227.50:8089/api/users/"+id,
    dataType: 'json',
    type: 'delete',
    xhrFields: {
  withCredentials: true
},
    success: () => {


      location.reload();

    }

  })


}else{

}



  }





	loadDevice()
	{
		$.ajax({
			url: "http://181.57.227.50:8089/api/devices",
			dataType: 'json',
			xhrFields: {
    withCredentials: true
},
			success: (dato) => {

				this.setState({dato});

			}
		})
	}


  loadUsers()
  {
    $.ajax({
      url: "http://181.57.227.50:8089/api/users",
      dataType: 'json',
      xhrFields: {
    withCredentials: true
},
      success: (datou) => {

        this.setState({datou});

      }
    })
  }








	imprimiR()
	{

	}





	  updateState(e) {

      this.setState({datas: e.target.value});
        console.log(this.state.datas);
   }


     updateStates(e) {

      this.setState({datass: e.target.value});
      console.log(this.state.datass);
   }


     updateDi(e) {

    this.setState({datad: e.target.value});
    console.log(this.state.datad);
   }

   formatFecha(fecha){
     var fechas = new Date(fecha);
   console.log(fechas);
   return fechas;

   }




   asignarDevices()
   {
  open('asignardevice','','top=200,left=400,width=800,height=500');
   }

   openDevices()
   {
  open('createdevices','','top=200,left=400,width=800,height=500');
   }

   openUsers()
   {
  open('createusers','','top=200,left=400,width=800,height=500');
   }

   editUsers(ev)
   {
     var id = ev.target.value;
  open('editaruser/'+id,'','top=200,left=400,width=800,height=500');
   }



	componentDidMount()
	{
		//this.loadData();

		this.loadDevice();
    this.loadUsers();

	}


	render()
	{
		return(




<div id="sidebar" class="container">
<button type="button" class="btn btn-success" onClick={this.asignarDevices}>Asignar Dispositivos</button>
<div class="col-md-6">
<h2>Dispositivos</h2> <button type="button" class="btn btn-success" onClick={this.openDevices}>+</button>
<table class="table">

  <thead>
      <tr>
        <th>Nombre</th>
        <th>Identificador</th>

      </tr>
    </thead>
<tbody>
{this.state.dato.map((ress) => {

	return <tr><td><button key={ress.id} value={ress.id} type="button" class="btn btn-danger" onClick={this.deleteDevice}>-</button> {ress.name}</td> <td>{ress.uniqueId} </td></tr>

	 })}
</tbody>
</table>

</div>


<div class="col-md-6">
<h2>Usuarios</h2> <button type="button" class="btn btn-success" onClick={this.openUsers}>+</button>
<table class="table">
  <thead>
      <tr>
        <th>Nombre</th>
        <th>Correo</th>

      </tr>
    </thead>

<tbody>
{this.state.datou.map((ress) => {

	return <tr><td><button class="btn btn-primary" value={ress.id} onClick={this.editUsers}>E</button> <button key={ress.id} value={ress.id} type="button" class="btn btn-danger"  onClick={this.deleteUser}>-</button>{ress.name}</td> <td>{ress.email} </td></tr>

	 })}
</tbody>
</table>

</div>

</div>


			)
	}
}
