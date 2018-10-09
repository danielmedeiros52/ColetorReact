import React from 'react'

export default props=>(
       <div style={"background:#FFFF"}>
         {console.log(props.pallet)}
          <div id="info-item">
            Pallet: {props.pallet.pallet}
              <div id="cliente" className="campo-info">
                  <label>{props.pallet.cliente} - {props.pallet.cnpj}</label>
              </div>
              <div id="produto" className="campo-info">
                <label>{props.pallet.produto}</label>
                  <label>{props.pallet.codigo_barras}</label>

              </div>
              <div id="entrada" className="campo-info">
                  <label>Quantidade: </label>
                  <label>{props.pallet.quantidade_pallet} ,{props.pallet.sigla} </label>
                  {props.pallet.tipo_item}
              </div>
              <div id="nota" className="campo-info">
                  <label>Nota: </label>
                  <label>{props.pallet.enderecamento}</label>
              </div>
              <div id="data" className="campo-info">
                  <label>Data: </label>
                  <label>{'data'}</label>
              </div>
              <div id="tipo-mercadoria" className="campo-info">
                  <label>Tipo: </label>
                  <label>{"Tipo"}</label>
              </div>
              <div id="norma-pallet" className="campo-info">
                  <label>Palletização: </label>
                  <label>{"A"} x {"itemEntrada.produto.alturaPalletizacao"}</label>
             </div>
         </div>
    </div>

)
