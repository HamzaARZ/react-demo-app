import react, {useState} from 'react';


const Person = props => {
    const [personState, setPersonState] = useState({
        persons : [
            {name: 'hamza', age : 23},
            {name: 'hsdvq', age : 13}
        ]
    });

    const [otherState, setOtherState] = useState("other values");

    const onClickButton = () => {
        setPersonState({
            persons: [
                {name: 'hamza', age : 33},
                {name: 'hsdaa', age : 22}
            ]
        })
      };

      console.log(personState);
      console.log(otherState);

    return (
        <div>
            <h3 className="person">this is a person component</h3>
            <p>name : {personState.persons[0].name}, age : {personState.persons[0].age}.</p>
            <p>name : {personState.persons[1].name}, age : {personState.persons[1].age}.</p>
            <p>{5 + 1}</p>
            <button onClick = {onClickButton}>click me</button>
            <p>{props.children}</p>
        </div>
    );
}

export default Person;