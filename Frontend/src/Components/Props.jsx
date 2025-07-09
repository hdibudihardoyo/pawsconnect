import React, {useState} from "react";

const Props = () => {
    const [name, setName] = useState("Hadi");
	return <ChildComponent name={name} />;
}

function ChildComponent (props) {
    return( 
        <div>
            <h1>Belajar props component</h1>
            <h4>Kenalin guys, namaku: {props.name}</h4>
        </div>
     )
    
}

export default Props;