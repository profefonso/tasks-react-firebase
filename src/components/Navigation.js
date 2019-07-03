import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { MDBIcon } from "mdbreact";

class Navigation extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">{ this.props.tittle }
                    <span className="badge badge-pill badge-light ml-2">
                        { this.props.num_task }
                    </span>
                </a>
                <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                    <Button onClick={this.props.onNewTask} variant="outline-success">Add Task</Button>
                </ul>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default Navigation;