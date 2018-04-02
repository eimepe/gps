import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import parser from 'json-parser';

var i=0;
var mapp;
var poly;
export default class Puertas extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      datag: [],
      dato: [],
      nnn: [],
      datas: []
    }
  this.updateState = this.updateState.bind(this);
  this.updateStates = this.updateStates.bind(this);
  this.updateDi = this.updateDi.bind(this);
  this.updateStatet = this.updateStatet.bind(this);
  this.imprimiR = this.imprimiR.bind(this);
  this.loadReportes = this.loadReportes.bind(this);
  }

  loadData(event){
event.preventDefault();



var ff = this.refs.texta.value.substring(0,this.refs.texta.value.length-2);
console.log(ff);

   var parametros = {

        "id" : -1,
                "name" : this.refs.name.value,
                "description" : this.refs.description.value,
              "area" : "POLYGON(("+ff+"))"

        };
  $.ajax({
    data    : JSON.stringify(parametros),
    url: "http://181.57.227.50:8089/api/geofences",
    dataType: 'json',
    contentType:"application/json",
    type:  'post',
    xhrFields: {
  withCredentials: true
},
    success: (datar) => {
             //this.loadMap();
      //this.setState({data});
      this.loadGeocerca();
      this.loadMap();
    }
  })
}

loadGeocerca(){

  $.ajax({
    url: "http://181.57.227.50:8089/api/geofences",
    dataType: 'json',
    contentType:"application/json",
    type:  'get',
    xhrFields: {
  withCredentials: true
},
    success: (datag) => {
             //this.loadMap();
      this.setState({datag});
      console.log(datag);

    }
  })
}


loadDevices(){

  $.ajax({
    url: "http://181.57.227.50:8089/api/devices",
    dataType: 'json',
    contentType:"application/json",
    type:  'get',
    xhrFields: {
  withCredentials: true
},
    success: (dato) => {
             //this.loadMap();
      this.setState({dato});
      console.log(dato);

    }
  })
}

  loadDeleteGeocerca(id){
    console.log(id);

  $.ajax({
    url: "http://181.57.227.50:8089/api/geofences/"+id,
    dataType: 'json',
    contentType:"application/json",
    type:  'DELETE',
    xhrFields: {
  withCredentials: true
},
    success: (datag) => {
             //this.loadMap();
      this.setState({datag});
      console.log(datag);

    }
  })
}


loadReportes(ev){
  ev.preventDefault();
    var posi =  $(ev.target).serializeArray();


$.ajax({
  url: "http://181.57.227.50:9000/puerta/"+posi[0].value+"/"+posi[1].value+"",
  dataType: 'json',
  xhrFields: {

},
  success: (nnn) => {

    console.log(nnn);
           //this.loadMap();
    this.setState({nnn});
  //console.log(this.state.nnn);

  }
})
}


imprimiR()
{
open('asignargeo.php','','top=200,left=400,width=800,height=500') ;
}


formatFecha(fecha){
  var fechas = new Date(fecha);
console.log(fechas);
return fechas;

}

EstadoPuerta(estado){
  if(estado=="dooropen"){return "Puerta Abierta"}else{return "Puerta Cerrada"}
}

  updateStatet(e) {
    this.setState({datat: e.target.value});
    this.setState({nnn: []});
 }

  updateState(e) {
    this.setState({datas: e});
 }
   updateStates(e) {
    //var resdd= e.target.value.substring(0,e.target.value.length-2);

    this.setState({datass: e.target.value});
 }
   updateDi(e) {
    this.setState({datad: e.target.value});
 }
componentDidMount()
{
  //this.loadData();
  //this.loadMap();
  //this.loadGeocerca();
  this.loadDevices();
  //this.addLatLngToPoly();

}

render()
{
  return(




<div className="container-fluid" class="sidebar">


<div className="container">
<h2 className="text-center">Reportes de Aperturas de Puerta</h2>
<form className="form-inline text-center" onSubmit={this.loadReportes}>
<div className="form-group">
<select className="form-control" name="id" onChange = {this.updateDi}>
<option key="00001" value="0">Selecione un dispositivo</option>
{this.state.dato.map((ress) => {

return <option key={ress.id} value={ress.id}>{ress.name}</option>

 })}

</select>
<label> Tipo de geocerca </label>
<select className="form-control" name="puerta" onChange = {this.updateStatet}>
<option value="00">Seleccione</option>
<option value="dooropen">Puerta Abierta</option>
<option value="doorclouse">Puerta Cerrada</option>
</select>
<input type="submit" className="btn btn-primary" value="Buscar Reportes" />
</div>
</form>
<table className="table ">
<thead>
              <tr>
                  <th>Tipo</th>
                  <th>Fecha  D-M-A  H-M-S</th>
                  <th>Dispositivo</th>



              </tr>
            </thead>
            <tbody>
{this.state.nnn.map((resh) => {

return <tr key={resh.uniqueId} >

                  <td >{ this.EstadoPuerta(this.state.datat) }</td>
                  <td >{""+this.formatFecha(resh.servertime).toLocaleString()}</td>
                  <td >{resh.name}</td>



</tr>

 })}
</tbody>
          </table>

</div>
</div>






    )
}
}
