import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './EmployeeDetail';

const PER_PAGE = 20;

const EmployeeList = (props) => {
  console.log(props.employees);
  return (
    <div>
      <h1>Employee Lists</h1>
      <div className="employee-list">
        {props.employees.map(employee => <EmployeeDetail key={employee._id} employee={employee} />)}
      </div>
      <button onClick={() => console.log('clicked')} 
        className="btn btn-primary">Load More...</button>
    </div>
  )
}

export default createContainer(() => {
  //setup subscription
  Meteor.subscribe('employees', PER_PAGE);
  //return an object, send to EmployeeList as props
  return { employees: Employees.find({}).fetch() }
}, EmployeeList);