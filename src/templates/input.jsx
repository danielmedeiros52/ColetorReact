import React from 'react'


export default props => {

  const range = {
    width: props.range || '',
    marginLeft: props.marginLeft || '',
    marginTop: props.marginTop ||'',
}
return (
    <input type={props.tipo} className='info-input'
       onChange={props.onChange}
      onBlur={props.onBlur}
       placeholder={props.descricao}  style={range }/>
   )

   }
