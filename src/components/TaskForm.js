import React, { Component } from 'react'


class TaskForm extends Component {
    constructor () {
        super();
        this.state = {
          tittle: '',
          assigned: '',
          description: '',
          category: 'Work',
          status: 'no-working',
          priority: 'low'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(e) {
        console.log(this.state)
        e.preventDefault();
        this.props.onAddTask(this.state);
        this.setState({
          tittle: '',
          assigned: '',
          description: '',
          category: 'Work',
          status: 'no-working',
          priority: 'low'
        });
      }
    
      handleInputChange(e) {
        const {value, name} = e.target;
        this.setState({
          [name]: value
        });
      }
    
      render() {
        return (
          <div className="card">
            <form onSubmit={this.handleSubmit} className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  name="tittle"
                  className="form-control"
                  value={this.state.tittle}
                  onChange={this.handleInputChange}
                  placeholder="Tittle"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="assigned"
                  className="form-control"
                  value={this.state.assigned}
                  onChange={this.handleInputChange}
                  placeholder="Assigned"
                  />
              </div>
              <div className="form-group">
                <select
                    name="category"
                    className="form-control"
                    value={this.state.category}
                    onChange={this.handleInputChange}
                  >
                  <option>Work</option>
                  <option>Study</option>
                  <option>Home</option>
                  <option>Personal</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <select
                    name="status"
                    className="form-control"
                    value={this.state.status}
                    onChange={this.handleInputChange}
                  >
                  <option>no-working</option>
                  <option>in-process</option>
                  <option>finalized</option>
                  <option>hold</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  placeholder="description"
                  />
              </div>
              <div className="form-group">
                <select
                    name="priority"
                    className="form-control"
                    value={this.state.priority}
                    onChange={this.handleInputChange}
                  >
                  <option>low</option>
                  <option>medium</option>
                  <option>high</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        )
      }
}

export default TaskForm;