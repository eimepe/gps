import Reflux from 'reflux'
import LoginActions from '../actions/LoginActions'

    var Socket = require('simple-websocket');

let LoginStores = Reflux.createStore({
  listenables: [LoginActions],
  init: function(){





  },
  fetchLogin: function(){
  //  this.socket.emit('read')
  }
})


export default LoginStores
