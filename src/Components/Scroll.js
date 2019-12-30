import React from 'react';

const Scroll = (props) => {
    return (
        <div style = {{overflowY: "scroll", border: "1px solid pink", height: "700px"}}>
            {props.children}
        </div>
    )
};

export default Scroll;