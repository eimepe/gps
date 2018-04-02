import React from 'react'
import $ from 'jquery'

var Router = require('react-router');

import ReacMixin from 'react-mixin'
import Reflux from 'reflux'

import Menu from '../components/Menu'
import Home from './Home'
import Loginform from '../components/administrador/Loginform'
import Footer from '../components/Footer'

import AdminActions from '../actions/AdminActions'
import AdminStores from '../stores/AdminStores'
require('es6-promise').polyfill();
require('isomorphic-fetch');

var estado = 0

@ReacMixin.decorate(Reflux.connect(AdminStores, 'login'))
export default class Administrador extends React.Component{
  constructor(){
    super();
    this.state = {service: {data:[], user:[]}};
  }

componentDidMount(){
  AdminActions.fetchLogin()
}

 onSubmitLogin(ev){
  ev.preventDefault()
  let data = $(ev.target).serializeArray()

console.log(data);

var miInit = {
              method: "POST",
               body: data
               };


               fetch('http://localhost:3000', miInit)
                   .then(function(response) {
                       if (response.status >= 400) {
                           throw new Error("Bad response from server");
                       }
                       return response.json();
                   })
                   .then(function(stories) {
                    estado = 1;
                    document.cookie = stories.token;
                  //  Router.browserHistory.push('/');
                      console.log(stories.token);
                   });
}

  render(){


      return(

        <div>
        <Menu/>
        <Loginform onSubmit={this.onSubmitLogin.bind(this)}/>
        <Footer />
        </div>
      )


  }
}
