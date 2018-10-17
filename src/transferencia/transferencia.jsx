import React, {Component} from 'react'

import Header from '../templates/pageHeader'
import Form from './transfForm'
import Topo from '../templates/topoPallet'
import Historico from './transfHistorico'
import Destino  from './transfDestino'
import IF from '../templates/if'

const URL ='http://localhost:8084/gweb-teixeira/ServicoColetorControlador'
export default class Transferencia extends Component{
// const pallets = props.
constructor(props){
  super(props)
this.state= {
  numpallet:'',
  historico:false,
  pallet:{},
  listHistorico:[],
  tela:this.props.tela
}
this.buscarPallet = this.buscarPallet.bind(this)
this.handleChange = this.handleChange.bind(this)
this.changeHistorico = this.changeHistorico.bind(this)
this.addHistorico = this.addHistorico.bind(this)
}
buscarPallet(){
    const numPallet = this.state.numpallet
     fetch(`${URL}?acao=buscarPallet&numPallet=${numPallet}`)
    .then(response => response.json())
    .then(resp => this.setState ({ ...this.state, pallet:resp }))
    .then(change => this.changeHistorico())

}
handleChange(e){
this.setState({...this.state , numpallet: e.target.value})
}
changeHistorico(){
  if(!this.state.historico && this.state.pallet.enderecamento){
          this.setState({...this.state, historico:true })
          this.addHistorico()
  }else if (this.state.pallet.enderecamento){
      this.addHistorico()

  }
}
addHistorico(){
    this.setState(estadoatual =>({listHistorico:[...estadoatual.listHistorico,this.state.pallet]}))
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
        <div >
        <Historico pallet= {this.state.pallet} listHistorico={this.state.listHistorico}  historico ={this.state.historico}/>
        </div>
          <IF test = {this.state.historico}>

          <Destino/>
          </IF>
    </div>
      )
    }
}
