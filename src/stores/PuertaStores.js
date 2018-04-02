import Reflux from 'reflux'
import PuertaActions from '../actions/PuertaActions'

    var Socket = require('simple-websocket');

let PuertaStores = Reflux.createStore({
  listenables: [PuertaActions],
  init: function(){





  },
  fetchPanico: function(){
  //  this.socket.emit('read')
  }
})


export default PuertaStores
