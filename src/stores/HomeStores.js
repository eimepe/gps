import Reflux from 'reflux'
import HomeActions from '../actions/HomeActions'
  var Socket = require('simple-websocket');

let HomeStores = Reflux.createStore({
  listenables: [HomeActions],
  init: function(){

let context = this;


setInterval(function(){



  $.ajax({
dataType: 'json',
    url: "http://181.57.227.50:8089/api/session",
    type: "GET",
    xhrFields: {
withCredentials: true
},

       success: function(data)
   {

     fetch('http://181.57.227.50:9000/posiciones/'+data.id)
         .then(function(response) {
             if (response.status >= 400) {
                 throw new Error("Bad response from server");
             }
             return response.json();
         })
         .then(function(stories) {

//console.log(stories);
context.trigger(stories);

         });

   }
});


}, 3000);






  },
  fetchService: function(){
  //  this.socket.emit('read')
  }
})


export default HomeStores
