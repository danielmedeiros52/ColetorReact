import React from 'react'

import Input from '../templates/input'

const container = {

  backgroundColor:'rgb(49, 91, 130)',
  margin:0,
  padding:0,
  border:'solid 1px black',
  color:'white',
    fontWeight:'bold',
}

const divContent={marginLeft:'20px',}

export default props => (
<div style={container}>
<div >
  <label style = {{marginLeft:'20px',marginRight:'20px',}}>Origem: </label>

  <Input type='text' descricao='Pallet'
      value={props.numpallet}
      onChange={props.handleChange}
      onBlur={props.buscarPallet}
      marginTop='10px'
      />
</div>





</div>


)
