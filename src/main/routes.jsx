import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Menu from '../templates/menu'
import Transferencia from '../transferencia/transferencia'
import Layout from '../templates/layout'
export default props=>(

    <Router>
      <Layout>
          <Switch>
                <Route path="/" exact={true} component={props => <Menu tela={'Transferência'} />}/>
              <Route path="1/11" component={Transferencia} />
                <Route path='/1' component={props => <Transferencia tela={'Transferência de Endereçamento'} />}/>
                // <Route path="*" omponent={props => <Menu tela={'Transferência'} />} />
         </Switch>
      </Layout>
    </Router>
)
