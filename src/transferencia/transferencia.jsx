import React, {Component} from 'react'

import Header from '../templates/pageHeader'
import Form from './transfForm'
import Topo from '../templates/topoPallet'
export default class Transferencia extends Component{
// const pallets = props.
constructor(props){
  super(props)
this.state= {
  numpallet:'',
  pallet:{},
  tela:this.props.tela
}
this.buscarPallet = this.buscarPallet.bind(this)
this.handleChange = this.handleChange.bind(this)
}
buscarPallet(){
    const numPallet = this.state.numpallet
    fetch(`http://localhost:8084/gweb-teixeira/ServicoColetorControlador?acao=buscarPallet&numPallet=${numPallet}`)
    .then(response => response.json())
    .then(resp => this.setState ({ ...this.state, pallet:resp}))
}

handleChange(e){
this.setState({...this.state , numpallet: e.target.value})
}


render(){
   return (
      <div>
        <Header nomeTela={this.state.tela} />

        <Form buscarPallet={this.buscarPallet}
          numPallet={this.state.numpallet}
          handleChange={this.handleChange}

          />

        <Topo pallet ={this.state.pallet} />


      </div>
      )
    }
}
