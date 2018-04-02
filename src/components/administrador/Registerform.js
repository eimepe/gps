import React from 'react'



export default class Registerform extends React.Component {

  componentDidMount(){

  }

  constructor() {
    super();

  }

  render(){


    return(
      <section>
          <div class=" container">
          <h4>Registrarse</h4>
          <div class="row">
   <form class="col s12" onSubmit={this.props.onSubmit} >
     <div class="row">
       <div class="input-field col s4">
         <i class="material-icons prefix">perm_identity</i>
         <input id="icon_prefix" name="email" type="text" class="validate"/>
         <label for="icon_prefix">Usuario</label>
       </div>

       <div class="input-field col s4">
         <i class="material-icons prefix">perm_identity</i>
         <input id="icon_prefix" name="nombre" type="text" class="validate"/>
         <label for="icon_prefix">Usuario</label>
       </div>

       <div class="input-field col s4">
         <i class="material-icons prefix">perm_identity</i>
         <input id="icon_prefix" name="tel" type="text" class="validate"/>
         <label for="icon_prefix">Usuario</label>
       </div>

       <div class="input-field col s4">
         <i class="material-icons prefix">perm_identity</i>
         <input id="icon_prefix" name="ciudad" type="text" class="validate"/>
         <label for="icon_prefix">Usuario</label>
       </div>


       <div class="input-field col s4">
         <i class="material-icons prefix">vpn_key</i>
         <input id="icon_telephone" name="clave" type="password" class="validate"/>
         <label for="icon_telephone">Contraseña</label>
       </div>

       <div class="input-field col s4">

         <input  type="submit" class="btn"/>

       </div>
     </div>
   </form>
 </div>
        </div>
      </section>

    )
  }
}
