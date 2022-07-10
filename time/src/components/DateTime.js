import React from 'react'

function DateTime(props) {
    console.log(props);
    return (
        <p className="date">{props.date}</p>
    )
}

export default DateTime