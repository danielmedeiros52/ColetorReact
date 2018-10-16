import React from 'react'
import IF from '../templates/if'
import Historico  from '../templates/historico'
export default props =>(
<IF test = {props.historico}>
    <Historico listHistorico={props.listHistorico}/>
</IF>



)
