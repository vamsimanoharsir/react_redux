import React from 'react';
import {connect} from 'react-redux'
import { buycake1 } from './redux/cakes/CakeAction';

//this is the container
function CakeComponent(props) {  //store's state=component's props, in store we have nOfcakes so as props here
    return (
        <div>
            <h2>cake count {props.noOfCakes}</h2>
            <button onClick={props.buycake1}>click me</button>
        </div>
    );
}

//these are coming from app.js as props
//the state of the redux store is mapped to the props of this component line 6
const mapStateToProps=state=>{
    return{
    noOfCakes:state.noOfCakes//mapping store's state to component props
}
}
//these are coming from app.js as props, line 7
const mapDispatchToProps=dispatch=>{ //will triger buycake1 method/dispatch an action
    return{
    buycake1:()=>dispatch(buycake1())
}
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeComponent);