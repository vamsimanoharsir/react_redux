import {createStore} from 'redux' //unlike js redux we use createStore here
import CakeReducer from './cakes/CakeReducer'

const store=createStore(CakeReducer)
export default store
 