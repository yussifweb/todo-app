import React, { useState } from 'react'
import Todo from './Todo'
import { act } from '@testing-library/react'

const handleSubmit = (e, todos, setTodos, activity, setActivity, time, setTime) => {
    e.preventDefault()
    const id = (todos.length) ? todos[todos.length - 1].id + 1 : 0

    setTodos([...todos, {id: id, activity: activity, time: time}])
    setActivity('')
    setTime('')

}

export default () => {
    const [todos, setTodos] = useState([
        {id:1, activity: 'play', time: '4pm'},
        {id:1, activity: 'play', time: '4pm'}
    ])
    const [activity, setActivity] = useState('')
    const [time, setTime] = useState('')

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e, todos, setTodos, activity, setActivity, time, setTime)}>
            <div>
                <label>Activity: </label>
                <input type="text" value={activity}                  
                onChange={(e) => setActivity(e.target.value)}/>                
                </div>
                <div>
                <label>Time: </label>
                <input type="text" value={time}                  
                onChange={(e) => setTime(e.target.value)}/>                
                </div>
                <button type="submit">Submit</button>
            </form>

            {todos.map(todo => (
                <Todo id={todo.id} activity={todo.activity} time={todo.time}></Todo>
            ))}
        </div>
    )
}