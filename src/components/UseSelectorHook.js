import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {buycake1} from './redux/cakes/CakeAction'

function UseSelectorHook(props) {
    //with useSelector we can directly access state stored in the store without the use of mapStateToProps() function
    //with useDispatch we can dispatch an action(call function)  ----getting state from store.js
    const noOfCakes=useSelector(state=>state.noOfCakes)
    const dispatch=useDispatch()
    return (
        <div>
            <h2>cakes count - {noOfCakes}</h2>
            <button onClick={()=>dispatch(buycake1())}>click me</button>
        </div>
    );
}

export default UseSelectorHook;