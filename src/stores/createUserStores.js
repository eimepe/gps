import Reflux from 'reflux'
import createUserActions from '../actions/createUserActions'

    var Socket = require('simple-websocket');

let createUserStores = Reflux.createStore({
  listenables: [createUserActions],
  init: function(){





  },
  fetchcreateUser: function(){
  //  this.socket.emit('read')
  }
})


export default createUserStores
