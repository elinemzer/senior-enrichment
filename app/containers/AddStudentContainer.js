import React, { Component } from 'react';
import AddStudent from '../components/AddStudent';
import { addNewStudent } from '../action-creators/students';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    students: state.students,
    selectedCampus: state.campuses.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewStudent(name, email){
      dispatch(addNewStudent(name, email))
    }
  }
}

class AddStudentContainer extends Component {

  constructor (props) {
      super(props);
      this.state = {
        name: '',
        email: ''
      };
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

   handleNameChange(event){
     const value = event.target.value
       this.setState(Object.assign({}, this.state, {name: value}));
  }

   handleEmailChange(event){
    const value = event.target.value
      this.setState(Object.assign({}, this.state, {email: value}));
 }

  handleSubmit(event){
    event.preventDefault();
    this.props.addNewStudent(this.state.name, this.state.email);
    }

    render(){
      return(
        <AddStudent
          handleEmailChange={this.handleEmailChange}
          handleNameChange={this.handleNameChange}
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          email={this.state.email}

          />
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudentContainer)
