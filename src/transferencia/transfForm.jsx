import React from 'react'

import Input from '../templates/input'

const container = {

  backgroundColor:'#DCDCDC',
  margin:0,
  padding:0,
}

const divContent={marginLeft:'20px',}

export default props => (
<div style={container}>
<div >
  <label style = {{marginLeft:'20px',marginRight:'20px',}}>Pallet Origem: </label>

  <Input type='text' descricao='Pallet'
      value={props.numpallet}
      onChange={props.handleChange}
      onBlur={props.buscarPallet}
      />
</div>
</div>


)
