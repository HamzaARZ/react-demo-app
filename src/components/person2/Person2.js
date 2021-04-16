import react, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';

import classes from './Person2.module.css';

import TestIf from '../TestIf/TestIf';

import TestIfContext from '../../context/testIf-context';


const Person2 = props => {

    const testIfContext = useContext(TestIfContext);

    const onClickButton = () => {
    };


    const buttonStyles = {
        cursor: "pointer",
        "background-color": "green"
        // backgroundColor: "red"
    }
    const classestest = [];

    classestest.push(classes.teest);
    classestest.push(classes.hovertest);

    return (
        <Fragment>
            <p>name : {props.name}, age : {props.age}.</p>
            {/* <button onClick={props.click}>click me</button> */}
            <button className={classestest.join(' ')}
                // style={buttonStyles}
                onClick={() => props.click('name2')}>
                click me
            </button>
            <br></br>
            <input type="text" onChange={props.changed} value={props.name} />


            <TestIfContext.Consumer>
                {context =>
                    <button onClick={context.showIfTest}>show if test</button>
                }
            </TestIfContext.Consumer>

            {testIfContext.testIf ?
                <TestIf /> : null}
        </Fragment>
    );
};


Person2.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    changed: PropTypes.func
};


export default Person2;

// rafc
