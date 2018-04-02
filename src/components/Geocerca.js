import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import parser from 'json-parser';

var i=0;
var mapp;
var poly;
export default class Geocerca extends React.Component {

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
this.loadData = this.loadData.bind(this);
  }


  loadData(event){

  	event.preventDefault();

   console.log($(event.target).serializeArray());


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
  			url: "http://181.57.227.50:9000/geocerca/"+posi[0].value+"/"+posi[1].value+"",
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

  	loadMap()
  	{
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 3.4545, lng: -74.56565}
    });
    var poly = new google.maps.Polygon({
      strokeColor: '#000000',
      strokeOpacity: 1,
      strokeWeight: 3,
      map: map
    });

    // Add a listener for the click event
    google.maps.event.addListener(map, 'click',  (evt) => {
         this.addLatLngToPoly(evt.latLng, poly)
    });
  	}



  	 addLatLngToPoly(latLng, poly) {
    var path = poly.getPath();
    // Because path is an MVCArray, we can simply append a new coordinate
    // and it will automatically appear
    path.push(latLng);

    var encodeString = google.maps.geometry.encoding.encodePath(path);

    var lat = latLng.toString();
  var re = lat.replace("(", "");
  var ress = re.replace(",", "");
  var res = ress.replace(")", ", ");


    // Update the text field to display the polyline encodings
    document.getElementById('encoded-polyline').value += res;
    console.log(latLng.toString());
  }




  	imprimiR()
  	{
  open('asignargeo','','top=200,left=400,width=800,height=500');
  	}








  	  updateStatet(e) {
        this.setState({datat: e.target.value});
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
  		this.loadMap();
  		this.loadGeocerca();
  		this.loadDevices();
  		//this.addLatLngToPoly();

  	}




  	render()
  	{
  		return(




  <div>
    <div  id="maps">
    <div id="map"></div>
    </div>
  <div className="row" id="sidebar">
  <div className="col-xs-12 col-md-6 col-lg-6">
  <h2>Crear Geocerca</h2>
  <a className="btn btn-success" href="index.php">Volver</a>
  <a className="btn btn-primary" onClick={this.imprimiR}>Asignar Geocerca</a>
    <form onSubmit={this.loadData} className="form-inline">
  <input type="text" ref="name" placeholder="Nombre" className="form-control"/>
  <input type="text" ref="description" placeholder="Descripcion" className="form-control"/>
  <textarea className="textare" id="encoded-polyline" ref="texta"></textarea>
        <button className="btn btn-primary">Guardar geocerca</button>
      </form><br></br>

  </div>
  <div className="col-xs-12 col-md-6 col-lg-6">
  <h2>Lista de Geocercas</h2>
  <table className="table " >
   <thead>
                  <tr>
                      <th >Nombre</th>
                      <th>Descripcion</th>



                  </tr>
                </thead>
                <tbody>

  {this.state.datag.map((res) => {

  	return <tr key={res.id} >

                      <td >{res.name}</td>
                      <td >{res.description}</td>



  	</tr>

  	 })}
  	 </tbody>
              </table>
  </div>
  </div>
  <div className="container" class="sidebar">
  <h2 className="text-center">Reportes geocercas</h2>
  <form className="form-inline text-center" onSubmit={this.loadReportes}>
  <div className="form-group">
  <select className="form-control" name='id' onChange = {this.updateDi}>
  <option key="00001" value="0">Selecione un dispositivo</option>
  {this.state.dato.map((ress) => {

  	return <option key={ress.id} value={ress.id}>{ress.name}</option>

  	 })}

  </select>
  <label> Tipo de geocerca </label>
  <select className="form-control" name='type' onChange = {this.updateStatet}>
  <option value="00">Seleccione</option>
   <option value="geofenceEnter">Entrada a Geocerca</option>
   <option value="geofenceExit">Salida de Geocerca</option>
  </select>
  <input type="submit"  className="btn btn-primary" value="Buscar Reportes" />
  </div>
  </form>
  <table className="table table-striped table-hover">
  <thead>
                  <tr>
                      <th>Tipo</th>
                      <th>Fecha D-M-A  H-M-S</th>
                      <th>Geocerca</th>



                  </tr>
                </thead>
                <tbody>
  {this.state.nnn.map((resh) => {

  	return <tr key={resh.id} >

                      <td >{resh.type}</td>
                      <td >{resh.servertime}</td>
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
