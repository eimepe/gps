import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import parser from 'json-parser';

var i=0;
var mapp;
var poly;
export default class Asignargeos extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      data: [],
      devices: [],
      geocercas: [],
       device: 0,
       geoce: 0
    }

    this.change = this.change.bind(this);
    this.changes = this.changes.bind(this);
    this.guardarAsignacion = this.guardarAsignacion.bind(this);

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
			url: "http://181.57.227.50:8089/api/geofences",
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
                "geofenceId" : parseInt(this.refs.geofence.value)


        };
		$.ajax({
					data    : JSON.stringify(parametros),
			url: "http://181.57.227.50:8089/api/devices/geofences",
			dataType: 'json',
			contentType:"application/json",
			type:  'post',
			xhrFields: {
    withCredentials: true
},
			success: (respuesta) => {
				this.setState({respuesta});
				this.loadAsignados(this.refs.device.value);
			}
		});
	}


	loadAsignados(iddevice)
	{
		$.ajax({
			url: "http://181.57.227.50:8089/api/geofences?deviceId="+iddevice,
			dataType: 'json',
			xhrFields: {
    withCredentials: true
},
			success: (devices) => {
				this.setState({devices});
			}
		})

	}


	change(event){
         this.setState({device: event.target.value});
         console.log(event.target.value);
         this.loadAsignados(event.target.value);
     }



     changes(event){
         this.setState({geoce: event.target.value});
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
<h2>Asignacion de Geocerca a Dispositivo {this.state.device}</h2>
<form onSubmit={this.guardarAsignacion} className="form-inline">
<select className="form-control" ref="device" onChange={this.change} name="dispositivo" value={this.state.device}>
		<option value="0">Selecione un Dispositivo</option>
{this.state.data.map((res) => {

	return <option key={res.id} value={res.id}>{res.name}</option>

	 })}

            </select>
            <select className="form-control" ref="geofence" name="geocerca" onChange={this.changes} value={this.state.geoce}>
		<option value="0">Selecione una Geocerca</option>
{this.state.geocercas.map((geo) => {

	return <option key={geo.id} value={geo.id}>{geo.name}</option>

	 })}

            </select>
            <button className="btn btn-primary">Asignar</button>
            </form>
            <h3>Geocercas Asignadas A Dispositivo Seleccionado</h3>
            {this.state.devices.map((res) => {

	return <p key={res.id} value={res.id}>{res.name}</p>

	 })}
            </div>
			)
	}

}
