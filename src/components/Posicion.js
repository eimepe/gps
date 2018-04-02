import React from 'react';
import { Link } from 'react-router';
//import $ from 'jquery';
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
      datas: '0',
      datas: '0',
      datad: '0',
    }
this.updateState = this.updateState.bind(this);
this.updateStates = this.updateStates.bind(this);
this.updateDi = this.updateDi.bind(this);
this.loadData = this.loadData.bind(this);
this.imprimiR = this.imprimiR.bind(this);

  }

	loadData(ev)
	{
ev.preventDefault();
  var posi =  $(ev.target).serializeArray();



		$.ajax({
			url: "http://181.57.227.50:8089/api/positions?deviceId="+posi[0].value+"&from="+posi[1].value+":00.00Z&to="+posi[2].value+":00.00Z",
			dataType: 'json',
			xhrFields: {
    withCredentials: true
},
			success: (data) => {
               //this.loadMap();
					this.setState({data});
				this.loadMark();
			}
		})
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


	loadMap()
	{
 mapp = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 3.5454, lng: -76.4545}

  });


  poly = new google.maps.Polyline({
    strokeColor: '#000000',
    strokeOpacity: 1.0,
    strokeWeight: 3
  });
  poly.setMap(mapp);
     //this.loadMark(maps);
	}



	loadMark()
	{

var image = "img/marker1.png";
var infowindow = new google.maps.InfoWindow();

		while(i <= this.state.data.length){
			console.log(this.state.data.length);


		var marker = new google.maps.Marker({
        position:  {lat: this.state.data[i].latitude, lng: this.state.data[i].longitude},
        title: this.formatFecha(this.state.data[i].serverTime).toLocaleString(),
        draggable: true,
        map: mapp,
  icon: image
    });

		var contentString = "Fecha: "+this.state.data[i].serverTime+"; ";



		google.maps.event.addListener(marker, 'click', (function(marker, i, contentString) {
        return function() {
          //infowindow.setContent(contentString);
          //infowindow.open(mapp, marker);
		    mapp.setZoom(20);
          mapp.setCenter(marker.getPosition());
        }
      })(marker, i));


		var path = poly.getPath();

  // Because path is an MVCArray, we can simply append a new coordinate
  // and it will automatically appear.
  path.push(new google.maps.LatLng(this.state.data[i].latitude, this.state.data[i].longitude));


         i = i+1;
         //console.log(i);
		}


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


	componentDidMount()
	{
		//this.loadData();
		this.loadMap();
		this.loadDevice();

	}


	render()
	{

		return(


<div>
<div  id="maps">
<div id="map"></div>
</div>
<div class="sidebar">

<h4 className="text-center"> Por favor seleciones dos Fechas </h4>
<form className="form-inline text-center" onSubmit={this.loadData}>
<div className="form-group">
<select  name="device" className="form-control" onChange = {this.updateDi}>
<option key="00001" value="0">Selecione un dispositivo</option>
{this.state.dato.map((ress) => {

	return <option key={ress.id} value={ress.id}>{ress.name}</option>

	 })}

</select>
<label> Fecha inicial </label>
<input type="datetime-local" className="form-control" name="fecha1" value = {this.state.datas}  onChange = {this.updateState}/>
<label> Fecha Final </label>
<input type="datetime-local" className="form-control" name="fecha2" value = {this.state.datass}  onChange = {this.updateStates}/>
<input type="submit" className="btn btn-primary" value="Buscar" />
<a href="posiciones" className="btn btn-danger">Reiniciar Mapa</a>
</div>
</form>
<br></br><a className="btn btn-success"  href="index.php">Volver</a>
<div class="scroll">
<table class="table" >
 <thead>
                <tr>
                    <th >Fecha D-M-A  H-M-S</th>
                     <th>Latitud</th>
                    <th >Longitud</th>
                    <th >Altitud</th>
                    <th >Velocidad</th>

                     <th >Direccion</th>
                </tr>
              </thead>
					<tbody>

{this.state.data.map((res) => {


	return <tr key={res.id} >

                    <td >{""+this.formatFecha(res.serverTime).toLocaleString()}</td>
                    <td >{res.latitude}</td>
                    <td >{res.longitude}</td>
                    <td >{res.altitude}</td>
                     <td >{res.speed}</td>
                    <td >{res.address}</td>

	</tr>

	 })}
	 </tbody>



            </table>
            </div>
            </div>
</div>


			)
	}
}
