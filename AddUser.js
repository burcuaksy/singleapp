import React, { Component } from 'react'

export class AddUser extends Component {
  render() {
    return (
      <div className="col-md-8 md4-4">
        <div className="card">
          <h4>Add User Form</h4>
        </div>
        <div className="card-body">
          <form>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="id"
                placeholder="Enter Name"
                class="form-control"
              />

              <div className="form-group">
                <label htmlFor="department">Department</label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  placeholder="Enter Department"
                  class="form-control"
                />

              </div>

              <div className="form-group">
                <label htmlFor="salary">Salary</label>
                <input
                  type="text"
                  name="salary"
                  id="salary"
                  placeholder="Enter Salary"
                  class="form-control"
                />


              </div>
              <button class="btn btn-danger btn-block" type="submit">Add User</button>
          </form>
        </div>
      </div>

  
export default AddUser;

