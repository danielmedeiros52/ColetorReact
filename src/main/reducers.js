import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'ler livro',
        list: [{
            _id: 1,
            description: 'pagar fatura do cartal',
            done: true
        }, {
            _id: 2,
            description: 'Reuniao com a equipe',
            done: false
        }]
    })


})

export default rootReducer