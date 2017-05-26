import React, { Component } from 'react';
import { deleteStudent } from '../action-creators/students';
import Student from '../components/Student';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    selectedStudent: state.students.selected,
    campuses: state.campuses.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteStudent(id){
      dispatch(deleteStudent(id))
    }
  }
}


class StudentContainer extends Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event){
    event.preventDefault();
    this.props.deleteStudent(this.props.selectedStudent.id);
  }

  render(){
    return(
      <Student
          handleDelete={this.handleDelete}
          campuses={this.props.campuses}
          selectedStudent={this.props.selectedStudent}
          />
        )
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);
