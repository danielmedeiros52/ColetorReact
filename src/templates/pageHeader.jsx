import React from 'react'

export default props=>(
<div>
  <div id="topo">
    <img src="public/images/th-menu.png" className="icone-menu" />
      <div id="seta-voltar" className="seta-voltar" />
    <label>{props.nomeTela}</label>
  </div>

  <div id="submenu">
      <div id="sair" className="submenu">
      <label>Sair</label>
    </div>
    <div id="finalizar" className="submenu">
      <label>Finalizar</label>
    </div>
    <div id="limpar" className="submenu">
      <label>Limpar</label>
    </div>
  </div>
</div>

)
