import React, { useState, useEffect } from "react";

function TitleChanger() {
    const [name, setName] = useState('Johnny');

    useEffect(() => {
        document.title = 'Hello ' + name; 
    }, [name])

    const myStyles = {
        padding: '5px',
        margin: '2px'
    }

    return (
        <div>
          <h1>Hello, there {name} welcome.</h1>
          <input style={myStyles}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter new name"
          />
          <button style={myStyles}>Submit</button>
        </div>
      );
}

export default TitleChanger;