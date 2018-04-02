import React from 'react'
import { Link } from 'react-router'
import ReacMixin from 'react-mixin'
import Reflux from 'reflux'



import Menu from '../components/Menu'
import Posicion from '../components/Posicion'

import PosicionActions from '../actions/PosicionActions'
import PosicionStores from '../stores/PosicionStores'


@ReacMixin.decorate(Reflux.connect(PosicionStores, 'posicion'))
export default class Home extends React.Component{
  constructor(){
    super();
  this.state = {service: []};
  }

componentDidMount(){
  PosicionActions.fetchPosicion();

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

<Menu/>
<Posicion posiciones={this.state.posicion}/>





      </div>
    )
  }
}
