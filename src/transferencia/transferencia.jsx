import React, {Component} from 'react'

import Header from '../templates/pageHeader'
import Form from './transfForm'
import Topo from '../templates/topoPallet'
export default class Transferencia extends Component{
// const pallets = props.
constructor(props){
  super(props)
this.state= {pallet:{}, tela:this.props.tela}
this.refresh()
}
refresh(){
    fetch('http://localhost:8084/gweb-teixeira/ServicoColetorControlador?acao=buscarPallet&numPallet=10190')
    .then(response => response.json())
    .then(resp => this.setState ({ ...this.state, pallet:resp}))
}
render(){
   return (
      <div>
        <Header nomeTela={this.state.tela} />
<Form/>
<Topo pallet ={this.state.pallet} />


      </div>
      )
    }
}
