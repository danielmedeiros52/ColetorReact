import React from 'react'

const container = {
backgroundColor:'#FFFFFF',
margin:0,
padding:0,
}
const title = {
  fontWeight:'bold',

}




export default props=>(
  <div  style={container} id="info-item">
    {console.log(props.pallet)}
    <h5 style={title} align="center">Pallet Bipado</h5>
    <h3 align="center" style={title}>
    Pallet:  {props.pallet.pallet+' ' || ' ' }
      Endereço: { props.pallet.enderecamento || '  Pallet não endereçado'}
    </h3>
       <div >
              <div id="cliente" className="campo-info">
                  <label>Cliente: {props.pallet.cliente} - {props.pallet.cnpj}</label>
              </div>
              <div id="produto" className="campo-info">
                <label>Produto:{props.pallet.produto}</label>
                {props.pallet.produto ?  <label> {'.  Cod:'+props.pallet.codigo_barras}</label> : ''}
              </div>
              <div id="entrada" className="campo-info" >
                  <label>Quantidade: </label>
                  <label>{props.pallet.quantidade_pallet} {props.pallet.sigla} </label>
              </div>
              <div id="tipo-mercadoria" className="campo-info">
                  <label>Tipo: </label>
                  <label>{props.pallet.tipo_item}</label>
              </div>
         </div>
    </div>
)
