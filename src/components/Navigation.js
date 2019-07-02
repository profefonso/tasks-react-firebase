import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

class Navigation extends Component {
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a href="https://www.google.com" className="text-white">
                    { this.props.tittle }
                    <span className="badge badge-pill badge-light ml-2">
                        { this.props.num_task }
                    </span>
                </a>
                <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                    <Button onClick={this.props.onNewTask} variant="outline-success">Add Task</Button>
                </ul>
            </nav>
        )
    }
}

export default Navigation;