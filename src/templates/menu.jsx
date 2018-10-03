import React from 'react'

import ItemMenu from './itemMenu'
import Header from './pageHeader'
export default props =>(
  <div>
    <Header nomeTela='Transferências'/>

      <ItemMenu menu='Transferência de Endereçamento' link='/1'/>
      <ItemMenu menu='Transferência de Quantidade' link='#2' />
      <ItemMenu menu='Divisão de Pallet' link='#3' />
  </div>


)
