import Reflux from 'reflux'
import PanicoActions from '../actions/PanicoActions'

    var Socket = require('simple-websocket');

let PanicoStores = Reflux.createStore({
  listenables: [PanicoActions],
  init: function(){





  },
  fetchPanico: function(){
  //  this.socket.emit('read')
  }
})


export default PanicoStores
