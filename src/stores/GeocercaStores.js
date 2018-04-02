import Reflux from 'reflux'
import GeocercaActions from '../actions/GeocercaActions'

    var Socket = require('simple-websocket');

let GeoercaStores = Reflux.createStore({
  listenables: [GeocercaActions],
  init: function(){





  },
  fetchGeocerca: function(){
  //  this.socket.emit('read')
  }
})


export default GeoercaStores
