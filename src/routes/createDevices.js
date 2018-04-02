import React from 'react'
import { Link } from 'react-router'
import ReacMixin from 'react-mixin'
import Reflux from 'reflux'



import Menu from '../components/Menu'
import CreateDevice from '../components/CreateDevice'

import createUserActions from '../actions/createUserActions'
import createUserStores from '../stores/createUserStores'


@ReacMixin.decorate(Reflux.connect(createUserStores, 'users'))
export default class CreateDevices extends React.Component{
  constructor(){
    super();
  this.state = {users: []};
  }

componentDidMount(){
  createUserActions.fetchcreateUser();

}




onSubmitver(ev){
console.log(document.cookie);
let data
if(!document.cookie){
   data = "inicio";
}else{
data = document.cookie;
}
var miInit = {

             method: "GET",
              };


              fetch('http://localhost:3000/editar/'+data, miInit)
                  .then(function(response) {
                      if (response.status >= 400) {
                          throw new Error("Bad response from server");
                      }
                      return response.json();
                  })
                  .then(function(stories) {
                   //estado = 1;
                   //document.cookie = stories.token;
                 //  Router.browserHistory.push('/');
                     console.log(stories.token);
                  });
}


  render(){


//console.log(this.state.service);
    return(
      <div>


<CreateDevice />





      </div>
    )
  }
}
