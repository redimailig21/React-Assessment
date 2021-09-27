import React from "react";

const Success = props => {
    return (
        <div className="container">
        <div className="app-wrapper">
            <header>
                <h2>{props.Success}</h2>
            </header>
            <div>
                <p>{props.message}Data successfully saved!</p>
            </div>
            <footer>
            <button className="button">Close</button>
            </footer>
        </div>
    </div>        
    )
};


export default Success;