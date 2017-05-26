import Student from '../components/Student';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    selectedStudent: state.students.selected,
    campuses: state.campuses.list
  };
};

const StudentContainer = connect(mapStateToProps)(Student);
//where are you rendering studentcontainer also can you hear me cant here you ph lol
export default StudentContainer;
