import React, { Component } from 'react';
import AddCampus from '../components/AddCampus';
import { addNewCampus } from '../action-creators/campuses';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    addNewCampus(name, image){
      dispatch(addNewCampus(name, image))
    }
  }
}

class AddCampusContainer extends Component {

  constructor (props) {
      super(props);
      this.state = {
        name: '',
        image: ''
      };
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

   handleNameChange(event){
     const value = event.target.value
    this.setState(Object.assign({}, this.state, {name: value}));
  }

  handleImageChange(event){
    const value = event.target.value
    this.setState(Object.assign({}, this.state, {image: value}));
   }

    handleSubmit(event){
      event.preventDefault();
      this.props.addNewCampus(this.state.name, this.state.image);
    }

    render(){
      return(
        <AddCampus
          handleNameChange={this.handleNameChange}
          handleImageChange={this.handleImageChange}
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          image={this.state.image}
          />
      )
    }
}

export default connect(null, mapDispatchToProps)(AddCampusContainer)
