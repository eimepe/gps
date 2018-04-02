import Reflux from 'reflux'
import AsignarDeviceActions from '../actions/AsignarDeviceActions'

  //  var Socket = require('simple-websocket');

let AsignarDeviceStores = Reflux.createStore({
  listenables: [AsignarDeviceActions],
  init: function(){





  },
  fetchAsignarDevice: function(){
  //  this.socket.emit('read')
  }
})


export default AsignarDeviceStores
