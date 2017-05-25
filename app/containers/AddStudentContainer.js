import React, { Component } from 'react';
import AddStudent from '../components/AddStudent';
import { addNewStudent } from '../action-creators/students';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    addNewStudent(studentName){
      dispatch(addNewStudent(studentName))
    }
  }
}

class AddStudentContainer extends Component {

  constructor (props) {
      super(props);
      this.state = {
        inputValue: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

   handleChange(event){
     const value = event.target.value
    this.setState({
      inputValue: value
    })
  }

    handleSubmit(event){
      event.preventDefault();
      this.props.addNewStudent(this.state.inputValue);
    }

    render(){
      return(
        <AddStudent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={this.state.inputValue}
          />
      )
    }
}

export default connect(null, mapDispatchToProps)(AddStudentContainer)
