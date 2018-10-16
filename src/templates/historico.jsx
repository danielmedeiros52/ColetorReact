import React from 'react'
export default props =>{
  const rows = props.listHistorico || []
  const container = {
  margin:'1px',
  padding:'0.5px',
  lineHeight: 0.5,
  }
    const renderRows =()=>{

        return rows.map(hist=>(
            <div id="ticket-conferido"  style={container} className="ticket-conferido" key={hist.pallet}>
                        <div className="campo-ticket">
                        { console.log(hist)}
                            <label>Cliente: </label>
                            <label>{hist.cliente}</label>
                              <label>{hist.cnpj}</label>
                        </div>

                        <div  className="campo-ticket">
                              <label>Produto: </label>
                              <label>{hist.produto}</label>
                        </div>
                        <div  style={{marginLeft:'150px'}} className="campo-ticket">

                              <label>Qtd: </label>
                              <label>{hist.quantidade_pallet}</label>
                        </div>
                        <div  className="campo-ticket">
                              <label>Pallet: </label>
                              <label data="quant"> {hist.pallet}</label>
                        </div>

                        <div  className="campo-ticket">
                              <label>Endereçamento: </label>
                              <label>{hist.enderecamento}</label>
                        </div>

                      </div>
          )
        )

    }



return(
  <div>
{renderRows()}
</div>
)





}
