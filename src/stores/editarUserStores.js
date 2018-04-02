import Reflux from 'reflux'
import editarUserActions from '../actions/editarUserActions'

    var Socket = require('simple-websocket');

let editarUserStores = Reflux.createStore({
  listenables: [editarUserActions],
  init: function(){





  },
  fetchcreateUser: function(){
  //  this.socket.emit('read')
  }
})


export default editarUserStores
