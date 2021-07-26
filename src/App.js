import './App.css';

import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';

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

  const addUser = () => {
    console.log("add user");
    axios.post('http://localhost:8080/auth/admin/realms/Ebanking-realm/users', {
      username: "test-user",
      lastName: "test",
      firstName: "joe",
      email: "test@mail.de",
      attributes: {
        test: "attr"
      },
      enabled: true,
      credentials: [
        {
          type: "password",
          value: "test",
          temporary: false
        }
      ]
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <h1>V2</h1>
      <h1 className="person">This is the app component</h1>

      {/* <Person name="hamza" age="23">additional content</Person> */}

      <TestIfContext.Provider value={{
        testIf: personState.testIf,
        showIfTest: showIfTest
      }}>
        <Person2
          name={personState.persons[0].name}
          age={personState.persons[0].age}
          click={onClickButton}
          changed={onNameChange}
        ></Person2>

        <Person2
          name={personState.persons[1].name}
          age={personState.persons[1].age}
          click={onClickButton}
          changed={onNameChange}
        ></Person2>
      </TestIfContext.Provider>

      <button onClick={showState}>show state</button>

      {/* <button ref={buttonTestIfRef} onClick={showIfTest}>show if test</button> */}

      {/* <Person2 name={personState.persons[1].name} age={personState.persons[1].age}></Person2> */}
      {/* <Person /> */}

      {/* { personState.testIf ?
        <TestIf /> : null
      } */}

      <h2>-------------- Redux --------------</h2>

      <Counter />


      <h2>-------------- add user --------------</h2>
      <button onClick={addUser}>add user</button>


    </div>
  );


}

export default App;
