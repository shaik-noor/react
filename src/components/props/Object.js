import React from "react";

function Person(props){
    return(
        <div>
            <p>Name: {props.person.name}</p>
            <p>Age: {props.person.age}</p>
        </div>
    );
};
export default Person;