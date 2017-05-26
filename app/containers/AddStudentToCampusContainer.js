// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { loadCampuses } from '../action-creators/students';
// import AddStudent from '../components/AddStudent';
//
// const mapStateToProps = state => {
//   return {
//     campuses: state.campuses,
//     selectedStudent: state.student.selected
//   };
// };
//
//
// class AddStudentByCampusContainer extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       campusId: 1,
//     };
//     //bind shit
//   }
//
//   render(){
//     return (
//       <AddStudent
//       campuses={this.props.campuses}
//     />
//   )
// }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(AddStudentByCampusContainer)
