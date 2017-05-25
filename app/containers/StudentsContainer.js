import React from 'react';
import Students from '../components/Students';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    students: state.students.list
  }
}
const StudentsContainer = connect(mapStateToProps)(Students);
export default StudentsContainer;
