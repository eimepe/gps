import React from 'react'
import { Link } from 'react-router'
import ReacMixin from 'react-mixin'
import Reflux from 'reflux'



import Menu from '../components/Menu'
import Panicos from '../components/Panicos'

import PanicoActions from '../actions/PanicoActions'
import PanicoStores from '../stores/PanicoStores'


@ReacMixin.decorate(Reflux.connect(PanicoStores, 'panico'))
export default class Panico extends React.Component{
  constructor(){
    super();
  this.state = {panico: []};
  }

componentDidMount(){
  PanicoActions.fetchPanico();

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
<Panicos posiciones={this.state.panico}/>





      </div>
    )
  }
}
