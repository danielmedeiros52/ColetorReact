import React from 'react'
import Input from '../templates/input'

const containerDestino = {

  backgroundColor:'rgb(49, 91, 130)',
  marginTop:320,
  paddingTop:0,
  border:'solid 1px black',
  color:'white',
  fontWeight:'bold',
}

const divContent={marginLeft:'20px',}

export default props =>(

  <div style={containerDestino}>
  <div >
    <label style = {{marginLeft:'20px',marginRight:'20px',}}>Destino: </label>

    <Input type='text' descricao='Pallet'/>
      <Input type='text' descricao='Endereço Destino' range='200px' marginLeft='15px' marginTop='10px'/>

  </div>





  </div>


)
