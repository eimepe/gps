import React from 'react'

import ReacMixin from 'react-mixin'
import Reflux from 'reflux'

import Menu from '../components/Menu'

import ContentService from '../components/ContentService'
import Footer from '../components/Footer'

import ServiceActions from '../actions/ServiceActions'
import ServiceStores from '../stores/ServiceStores'
require('es6-promise').polyfill();
require('isomorphic-fetch');



@ReacMixin.decorate(Reflux.connect(ServiceStores, 'service'))
export default class Servicios extends React.Component{
  constructor(){
    super();
  this.state = {
    service: []
  };
  }

componentDidMount(){
  ServiceActions.Servicefetch("datos")
}



  render(){
console.log(this.state.service);
      return(

        <div>
        <Menu/>
        <ContentService data={this.state.service}/>
        <Footer />
        </div>
      )


  }
}
