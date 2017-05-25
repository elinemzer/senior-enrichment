import React, { Component } from 'react';
import AddCampus from '../components/AddCampus';
import { addNewCampus } from '../action-creators/campuses';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    addNewCampus(campusName){
      dispatch(addNewCampus(campusName))
    }
  }
}

class AddCampusContainer extends Component {

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
      this.props.addNewCampus(this.state.inputValue);
    }

    render(){
      return(
        <AddCampus
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={this.state.inputValue}
          />
      )
    }
}

export default connect(null, mapDispatchToProps)(AddCampusContainer)
