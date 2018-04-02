import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import parser from 'json-parser';

var i=0;
var mapp;
var poly;
export default class AsignarDevices extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      data: [],
      devices: [],
      geocercas: [],
       device: 0,
       geoce: 0,
       iduser: 0
    }

    this.change = this.change.bind(this);
    this.changes = this.changes.bind(this);
    this.guardarAsignacion = this.guardarAsignacion.bind(this);
    this.eliminarAsignacion = this.eliminarAsignacion.bind(this);
  }

  loadData()
	{
		$.ajax({
			url: "http://181.57.227.50:8089/api/devices",
			dataType: 'json',
			xhrFields: {
    withCredentials: true
},
			success: (data) => {
				this.setState({data});
			}
		})
	}


		loadGeocercas()
	{
		$.ajax({
			url: "http://181.57.227.50:8089/api/users",
			dataType: 'json',
			xhrFields: {
    withCredentials: true
},
			success: (geocercas) => {
				this.setState({geocercas});
			}
		})
	}

	guardarAsignacion(event){
		event.preventDefault();

   console.log($(event.target).serializeArray());

		var parametros = {

                "deviceId" : parseInt(this.refs.device.value),
                "userId" : parseInt(this.refs.geofence.value)


        };
		$.ajax({
					data    : JSON.stringify(parametros),
			url: "http://181.57.227.50:8089/api/permissions/devices",
			dataType: 'json',
			contentType:"application/json",
			type:  'post',
			xhrFields: {
    withCredentials: true
},
			success: (respuesta) => {
				this.setState({respuesta});
				this.loadAsignados(this.refs.geofence.value);
			}
		});
	}




  eliminarAsignacion(ev){

var idde = ev.target.value;
var idu = ev.target.id;

   console.log(ev.target.id);

    var parametros = {

                "deviceId" : parseInt(idde),
                "userId" : parseInt(idu)


        };
    $.ajax({
          data    : JSON.stringify(parametros),
      url: "http://181.57.227.50:8089/api/permissions/devices",
      dataType: 'json',
      contentType:"application/json",
      type:  'delete',
      xhrFields: {
    withCredentials: true
},
      success: (respuesta) => {
      this.loadAsignados(parseInt(idu));
        console.log(parametros.userId);
        //this.setState({respuesta});

      }
    });


  }


	loadAsignados(iddevice)
	{
		$.ajax({
			url: "http://181.57.227.50:8089/api/devices?_dc=1500106613605&userId="+iddevice,
			dataType: 'json',
			xhrFields: {
    withCredentials: true
},
			success: (devices) => {
        console.log(devices);
				this.setState({devices});
        this.setState({iduser: iddevice});
			}
		})

	}


	change(event){
         this.setState({user: event.target.value});
         console.log(event.target.value);
         this.loadAsignados(event.target.value);
     }



     changes(event){
            this.setState({device: event.target.value});
            console.log(event.target.value);
        }



	componentDidMount()
	{
		this.loadData();
		this.loadGeocercas();
	}

	render()
	{
		return(

<div className="container-fluid" id="sidebar">
<h2>Asignacion de Usuario  a Dispositivo {this.state.device}</h2>
<form onSubmit={this.guardarAsignacion} className="form-inline">

            <select className="form-control" onChange={this.change} ref="geofence" name="geocerca"  value={this.state.user}>
		<option value="0">Selecione un Usuario</option>
{this.state.geocercas.map((geo) => {

	return <option key={geo.id} value={geo.id}>{geo.name}</option>

	 })}

            </select>

            <select className="form-control" ref="device"  onChange={this.changes}  name="dispositivo" value={this.state.device}>
            		<option value="0">Selecione un Dispositivo</option>
            {this.state.data.map((res) => {

            	return <option key={res.id} value={res.id}>{res.name}</option>

            	 })}

                        </select>
            <button className="btn btn-primary">Asignar</button>
            </form>
            <h3>Dispositivos Asignados</h3>
            {this.state.devices.map((res) => {

	return <p key={res.id} value={res.id}>{res.name} <button key={res.id} value={res.id} id={this.state.iduser}  type="button" class="btn btn-danger" onClick={this.eliminarAsignacion}>-</button></p>

	 })}
            </div>
			)
	}

}
