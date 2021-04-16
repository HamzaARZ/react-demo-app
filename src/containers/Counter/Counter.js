import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';
// import * as actionTypes from '../../store/actions/actions';

class Counter extends Component {

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.result.map((res, index) => {
                        return <li key={index} onClick={() => this.props.onDeleteResult(index)}>{res}</li>
                    })}
                </ul>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        result: state.res.result
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: (value) => dispatch(actionCreators.add(value)),
        onSubtractCounter: (value) => dispatch(actionCreators.subtract(value)),
        onStoreResult: (counter) => dispatch(actionCreators.storeAsyncResult(counter)),
        // onStoreResult: (counter) => dispatch(actionCreators.storeResult(counter)),
        onDeleteResult: (index) => dispatch(actionCreators.deleteResult(index))
        // onDeleteResult: (index) => dispatch(actionCreators.deleteResult(index))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
