import Reflux from 'reflux'
import PosicionActions from '../actions/PosicionActions'

    var Socket = require('simple-websocket');

let PosicionStores = Reflux.createStore({
  listenables: [PosicionActions],
  init: function(){





  },
  fetchService: function(){
  //  this.socket.emit('read')
  }
})


export default PosicionStores
