import React from 'react'

import Header from '../templates/pageHeader'
import Form from './transfForm'
export default props => (
    <div>
        <Header nomeTela={props.tela} />
        <Form />
    </div>
)
