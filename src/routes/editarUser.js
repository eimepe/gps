import React from 'react'
import { Link } from 'react-router'
import ReacMixin from 'react-mixin'
import Reflux from 'reflux'



import Menu from '../components/Menu'
import EditarUser from '../components/EditarUser'

import editarUserActions from '../actions/editarUserActions'
import editarUserStores from '../stores/editarUserStores'


@ReacMixin.decorate(Reflux.connect(editarUserStores, 'users'))
export default class editarUser extends React.Component{
  constructor(props){
    super(props);
  this.state = {users: []};
console.log(props);
  }

componentDidMount(){
  editarUserActions.fetcheditarUser();

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

<EditarUser id={this.props.params.id} />

      </div>
    )
  }
}
