import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import parser from 'json-parser';

var i=0;
var map;
var poly;
var user=0;
var datos;
 var markers = [];
  var p;
 var listItems;
export default class Map extends React.Component {
  constructor() {
    super();
    this.state =  { data: [],
      dato: [],
    }

  }



 setMapOnAll(map) {
     for (var i = 0; i < markers.length; i++) {
       markers[i].setMap(map);
     }
   }

  clearMarkers()
  {
          this.setMapOnAll(null);
        }

loadMap()
{
         map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
      center: {lat: 3.5454, lng: -76.2545}
        });



      }






 loadMark(map, datoss) {

this.clearMarkers(null);

markers = [];



             // Adds markers to the map.

             // Marker sizes are expressed as a Size of X,Y where the origin of the image
             // (0,0) is located in the top left of the image.

             // Origins, anchor positions and coordinates of the marker increase in the X
             // direction to the right and in the Y direction down.
             var image = {
               url: 'img/marker1.png',
               // This marker is 20 pixels wide by 32 pixels high.
               size: new google.maps.Size(40, 40),
               // The origin for this image is (0, 0).
               origin: new google.maps.Point(0, 0),
               // The anchor for this image is the base of the flagpole at (0, 32).
               anchor: new google.maps.Point(0, 32)
             };
             // Shapes define the clickable region of the icon. The type defines an HTML
             // <area> element 'poly' which traces out a polygon as a series of X,Y points.
             // The final coordinate closes the poly by connecting to the first coordinate.


//console.log(datos);


                            datoss.map((res) =>{






                    var location = {lat: res.latitude, lng: res.longitude};
                    var images = 'http://181.57.227.50:9000/img/'+res.img;
                    var marker = new google.maps.Marker({
                      position: location,
                       map: map,
                       icon: images,
                      // draggable: true,
                       title: res.name
                      });
                             markers.push(marker);
                              // window['marker'+'res.deviceId'].setMap(null);
                               })


















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
                  //  window.location = "home";
         //window.location="index.php";
                   }



         //$("#respuesta").html(data); // Mostrar la respuestas del script PHP.
                   },
                   error: function(result) {
                           window.location = "/";
                         }
                 });
           }





componentWillMount(){

this.statusLogin();

}

formatFecha(fecha){
  var fechas = new Date(fecha);
//console.log(fechas);
return fechas;

}

asignarDevices(ev)
{
open('editdevice/'+ev.target.value,'','top=200,left=400,width=800,height=500');
}


componentDidMount()
{

  console.log();
  //this.loadData();
this.loadMap();

}



  render(){

     datos = this.props.posiciones;

    listItems =datos.map((pos) =>



    <tr key={pos.id}>
      <td>{pos.name}</td>
      <td>{pos.latitude}</td>
      <td>{pos.longitude}</td>
      <td>{pos.speed}</td>
      <td>{""+this.formatFecha(pos.servertime).toLocaleString()} <button type="button" value={pos.deviceid} class="btn btn-success" onClick={this.asignarDevices}>Editar</button>

      <img src={"http://181.57.227.50:9000/img/"+pos.img}/></td>

    </tr>

    );

    this.loadMark(map, datos);

    //console.log(datos);

    return(




<div>
      <div  id="maps">
<div className="sidebarsd" id="map"></div>


</div>


  <div class="sidebar">
    <table class="table">
       <thead>
         <tr>
           <th>NOMBRE DEL DISPOSITIVO</th>
           <th>LATITUD</th>
           <th>LONGITUD</th>
           <th>VELOCIDAD</th>
           <th>FECHA Y HORA  DD/MM/AA  HH:MM:SS</th>

         </tr>
       </thead>
       <tbody>

    {listItems}
       </tbody>
     </table>
  </div>
</div>
    )
  }
}
