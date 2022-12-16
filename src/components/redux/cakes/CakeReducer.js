import { buycake } from "./CakeAction"

const initialstate={
    noOfCakes:20
}

const CakeReducer=(state=initialstate,action)=>{ //reducer function
    switch(action.type){
        case buycake:return{
            ...state, noOfCakes:state.noOfCakes-1
        }
        default:return state
    }
}

export default CakeReducer