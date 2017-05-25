import {RECEIVE_STUDENTS, RECEIVE_STUDENT} from '../constants';
import axios from 'axios';
// import {hashHistory} from 'react-router'

export const receiveStudents = students => ({
    type: RECEIVE_STUDENTS,
    students
});

export const receiveStudent = student => ({
    type: RECEIVE_STUDENT,
    student
});

export const getStudentById = studentId => {
  return dispatch => {
    axios.get(`/api/students/${studentId}`)
      .then(response => {
        dispatch(receiveStudent(response.data));
      });
  };
};

export const addNewStudent = (studentName) => {
  return (dispatch, getState) => {
    return axios.post('/api/students', {name: studentName})
      .then(res => res.data)
      .then(studentCreated => {
        const newListOfStudents = getState().students.list.concat([studentCreated]);
        dispatch(receiveStudents(newListOfStudents));
        hashHistory.push(`/students/${student.id}`)
      });
  };
};

export const deleteStudent = studentName => {
  return (dispatch, getState) => {
    return axios.delete('/api/students', {name: studentName})
    .then(res => res.data)
    .then(studentDeleted => {
      const deleteThis = students.list.indexOf([studentDeleted])
      const newListOfStudents = getState().students.list.splice(deleteThis, 1)
      dispatch(receiveStudents(newListOfStudents));
      hashHistory.pop(`/students/${student.id}`)
    });
  };
};
