import React from 'react'
import { Link } from 'react-router'
import ReacMixin from 'react-mixin'
import Reflux from 'reflux'



import Menu from '../components/Menu'
import Puertas from '../components/Puertas'

import PuertaActions from '../actions/PuertaActions'
import PuertaStores from '../stores/PuertaStores'


@ReacMixin.decorate(Reflux.connect(PuertaStores, 'panico'))
export default class Puerta extends React.Component{
  constructor(){
    super();
  this.state = {panico: []};
  }

componentDidMount(){
  PuertaActions.fetchPuerta();

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
<Puertas posiciones={this.state.panico}/>





      </div>
    )
  }
}
