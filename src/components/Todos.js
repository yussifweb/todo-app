import React, { useState } from 'react'
import Todo from './Todo'

// const handleSubmit = (e, todos, setTodos, activity, setActivity, time, setTime) => {
const handleSubmit = (e, todos, setTodos, activity, setActivity) => {
    e.preventDefault()
    const id = (todos.length) ? todos[todos.length - 1].id + 1 : 0

    setTodos([...todos, {id: id, activity: activity}])
    // setTodos([...todos, {id: id, activity: activity, time: time}])

    setActivity('')
    // setTime('')
}

// const deleteTodo = (id, todos, setTodos) => {
//     setTodos(todos.filter(todo => todo.id !== id))
// }

export default () => {
    const [todos, setTodos] = useState([''])
    const [activity, setActivity] = useState('')
    // const [time, setTime] = useState('')

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e, todos, setTodos, activity, setActivity)}>    
            {/* <form onSubmit={(e) => handleSubmit(e, todos, setTodos, activity, setActivity, time, setTime)}> */}
            <div>
                <label><h3>What Do You Want To Do?</h3></label>
                <input className="activity" type="text" value={activity}                  
                onChange={(e) => setActivity(e.target.value)} required/>
                <button type="submit">Add</button>               
                </div>
                {/* <div>
                <label>Time: </label>
                <input type="text" value={time}                  
                onChange={(e) => setTime(e.target.value)}/>                
                </div> */}
                
            </form>

            {todos.map(todo => (
                // <Todo id={todo.id} activity={todo.activity} time={todo.time} deleteTodo={(id) => deleteTodo(id, todos, setTodos)}></Todo>
                <Todo id={todo.id} activity={todo.activity} ></Todo>

            ))}
        </div>
    )
}