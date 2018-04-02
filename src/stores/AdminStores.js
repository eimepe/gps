import Reflux from 'reflux'
//import $ from 'jquery'
//import api from '../js/api';
import AdminActions from '../actions/AdminActions'

let AdminStores = Reflux.createStore({
  listenables: [AdminActions],
  fetchLogin: function(){




  }

})


export default AdminStores
