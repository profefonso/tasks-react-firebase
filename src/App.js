import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from './Firebase';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import Navigation from './components/Navigation'
import TaskForm from './components/TaskForm'

//import { tasks } from './tasks.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('tasks');
    this.unsubscribe = null;
    this.state = {
      tasks: [],
      show: false,
    };
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onCollectionUpdate = (querySnapshot) => {
    const tasks = [];
    querySnapshot.forEach((doc) => {
      const { tittle, assigned, description, priority } = doc.data();
      tasks.push({
        key: doc.id,
        doc, // DocumentSnapshot
        tittle,
        assigned,
        description,
        priority,
      });
    });
    this.setState({
      tasks
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  removeTask(index, key) {
    firebase.firestore().collection('tasks').doc(key).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
    this.setState({
      tasks: this.state.tasks.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTask(task) {
    this.ref.add({
      tittle: task.tittle,
      assigned: task.assigned,
      description: task.description,
      priority: task.priority
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
    /*this.setState({
      tasks: [...this.state.tasks, task]
    })*/
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render(){
    const task = this.state.tasks.map((task, i) => {
      return (
        <div key={i} className="col-md-3">
          <div className="card bg-dark text-white border-success mt-4">
            <div className="card-header">
              <h3>{ task.tittle }</h3>
              <span className="badge badge-pill badge-danger ml-2">
                { task.priority }
              </span>
            </div>
            <div className="card-body">
              <p>{ task.description }</p>
              <p><mark>{ task.assigned }</mark></p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTask.bind(this, i, task.key)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <Navigation tittle='Tasks' num_task={ this.state.tasks.length } onNewTask={ this.handleShow }/>

        <div className="container">
          <div className="row mt-12">
            <div className="col-md-12">
              <div className="row">
                { task }
              </div>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TaskForm onAddTask={ this.handleAddTask }></TaskForm>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
