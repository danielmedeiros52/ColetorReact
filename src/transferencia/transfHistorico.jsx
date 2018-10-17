import React from 'react'
import IF from '../templates/if'
import Historico  from '../templates/historico'
import Destino  from './transfDestino'
export default props =>(
<IF test = {props.historico}>
    <Historico listHistorico={props.listHistorico}/>
    
</IF>



)
