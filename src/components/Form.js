import React, { Component } from 'react'

class Form extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             activity: '',
             time: ''
        }
    }

    handleActivityChange = (event) => {
        this.setState({
            activity: event.target.value
        })
    }

    handleTimeChange = (event) => {
        this.setState({
            time: event.target.value
        })
    }

    // handleSubmit = () => {
    //     this.setState((prevState) => ({activities:prevState.activities.concat()}))
    // }

    // handleSubmit = event => {
    //     (`${this.state.activity} ${this.state.time}`)
    //     event.preventDefault()
    // }
       

    
    render() {
        const { activity, time } = this.state
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                   <label>Activity: </label>
                    <input type="text" value={activity}                  
                    onChange={this.handleActivityChange}/>                
                </div>
                <div>
                    <label>Time: </label>
                    <input type="text" value={time}
                    onChange={this.handleTimeChange} />
                </div>
                <button onClick = {() => this.handleSubmit} type="submit">Submit</button>
            </form>

            <div>
             <ul>
                <li><span>{this.state.activity}</span> at <span> {this.state.time}</span></li>
             </ul>
            </div>
            </div>
        )
    }
}

export default Form