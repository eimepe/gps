import Reflux from 'reflux'
import EncendidoActions from '../actions/EncendidoActions'

    var Socket = require('simple-websocket');

let EncendidoStores = Reflux.createStore({
  listenables: [EncendidoActions],
  init: function(){





  },
  fetchEncendido: function(){
  //  this.socket.emit('read')
  }
})


export default EncendidoStores
