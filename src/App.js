import './App.css';

import React, { useState, useEffect, useRef, useContext } from 'react';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Person from './components/person/Person';
import Person2 from './components/person2/Person2';
import TestIf from './components/TestIf/TestIf';
import TestIfContext from './context/testIf-context';
import Counter from './containers/Counter/Counter';


function App() {

  const buttonTestIfRef = useRef(null);


  // useEffect(() => {
  //   buttonTestIfRef.current.click();
  // }, []);


  const [personState, setPersonState] = useState({
    persons: [
      { name: 'hamza', age: 23 },
      { name: 'hsdvq', age: 13 }
    ],
    testIf: false
  });

  const [otherState, setOtherState] = useState("other values");

  const onClickButton = (newName) => {
    setPersonState({
      persons: [
        { name: 'hamza', age: 33 },
        { name: newName, age: 22 }
      ],
      // testIf: personState.testIf
    });
  };

  const onNameChange = (event) => {
    setPersonState({
      persons: [
        { name: event.target.value, age: 23 },
        { name: event.target.value, age: 13 }
      ]
    })
  };
  const showIfTest = () => {
    setPersonState((prevState, props) => {
      return {
        persons: prevState.persons,
        testIf: !prevState.testIf
      }
    })
  };

  const showState = () => {
    console.log(personState);
  };

  return (
    <div className="App">
      <h2>-------------- Redux --------------</h2>
      <Counter />
    </div>
  );
}

export default App;
