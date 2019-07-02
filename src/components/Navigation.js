import React, { Component } from 'react';


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
            </nav>
        )
    }
}

export default Navigation;