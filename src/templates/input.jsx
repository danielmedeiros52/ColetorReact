import React from 'react'

export default props => (

    <input type={props.tipo} className='info-input'
       onChange={props.onChange}
      onBlur={props.onBlur}
       placeholder={props.descricao} />


)
