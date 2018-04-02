import Reflux from 'reflux'
import UsersActions from '../actions/UsersActions'

    var Socket = require('simple-websocket');

let UsersStores = Reflux.createStore({
  listenables: [UsersActions],
  init: function(){





  },
  fetchLogin: function(){
  //  this.socket.emit('read')
  }
})


export default UsersStores
