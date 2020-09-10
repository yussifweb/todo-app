import React from 'react'

export default ({id, activity, time, deleteTodo}) => (
     
    <div>
        <p className="fade-in">
        <span>{activity}</span>
        {/* <span><button onClick={() => deleteTodo(id)}>Delete</button></span> */}
        </p>
    </div>
)