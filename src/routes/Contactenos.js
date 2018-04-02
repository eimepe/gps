import React from 'react'
import $ from 'jquery'


import ReacMixin from 'react-mixin'
import Reflux from 'reflux'

import Menu from '../components/Menu'

import Contentcontact from '../components/Contentcontact'
import Footer from '../components/Footer'

import AdminActions from '../actions/AdminActions'
import AdminStores from '../stores/AdminStores'
require('es6-promise').polyfill();
require('isomorphic-fetch');



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

                    document.cookie = stories.token;
                  //  Router.browserHistory.push('/');
                      console.log(stories.token);
                   });
}

  render(){


      return(

        <div>
        <Menu/>
        <Contentcontact />
        <Footer />
        </div>
      )


  }
}
