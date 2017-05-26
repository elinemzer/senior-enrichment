import React, { Component } from 'react';
import { deleteCampus } from '../action-creators/campuses';
import Campus from '../components/Campus';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    selectedCampus: state.campuses.selected,
    students: state.students.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCampus(id){
      dispatch(deleteCampus(id))
    }
  }
}

class CampusContainer extends Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event){
    event.preventDefault();
    this.props.deleteCampus(this.props.selectedCampus.id);
  }

  render(){
    return(
      <Campus
          handleDelete={this.handleDelete}
          students={this.props.students}
          selectedCampus={this.props.selectedCampus}
          />
        )
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusContainer);
