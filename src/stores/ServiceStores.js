import Reflux from 'reflux';
import ServiceActions from '../actions/ServiceActions';
require('es6-promise').polyfill();
require('isomorphic-fetch');


let ServiceStores = Reflux.createStore({
  listenables: [ServiceActions],
  Servicefetch: function(){

    var miInit = {
                  method: "GET",

                   };
let context = this;

                   fetch('http://localhost:3000/servicios', miInit)
                       .then(function(response) {
                           if (response.status >= 400) {
                               throw new Error("Bad response from server");
                           }
                           return response.json();
                       })
                       .then(function(stories) {
                  context.trigger(stories)
                       });

  }
})


export default ServiceStores
