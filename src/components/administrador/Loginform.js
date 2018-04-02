import React from 'react'



export default class Loginform extends React.Component {

  componentDidMount(){

  }

  constructor() {
    super();

  }

  render(){


    return(
      <section>

          <div class=" container">
            <h3>Bienvenico a Avantecn</h3>
          <h4>Inicia sesion</h4>
          <div class="row">
   <form class="col s12" onSubmit={this.props.onSubmit} >
     <div class="row">
       <div class="input-field col s12 l6">
         <i class="material-icons prefix">perm_identity</i>
         <input id="icon_prefix" name="usuario" type="text" class="validate"/>
         <label for="icon_prefix">Usuario</label>
       </div>
       <div class="input-field col s12 l6">
         <i class="material-icons prefix">vpn_key</i>
         <input id="icon_telephone" name="clave" type="password" class="validate"/>
         <label for="icon_telephone">Contraseña</label>
       </div>

       <div class="input-field col s12 l6">

         <input  type="submit" class="btn blue waves-effect waves-light" value="Iniciar Sesion"/>

       </div>
     </div>
   </form>
 </div>
        </div>
      </section>

    )
  }
}
