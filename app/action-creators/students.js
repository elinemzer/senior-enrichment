import {RECEIVE_STUDENTS, RECEIVE_STUDENT} from '../constants';
import axios from 'axios';
import {hashHistory} from 'react-router'

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

export const addNewStudent = (name, email) => {
  return (dispatch, getState) => {
    return axios.post('/api/students', {name, email})
      .then(res => res.data)
      .then(studentCreated => {
        const newListOfStudents = getState().students.list.concat([studentCreated]);
        dispatch(receiveStudents(newListOfStudents));
        hashHistory.push('/students')
      });
  };
};

export const deleteStudent = id => {
  return (dispatch, getState) => {
    return axios.delete(`/api/students/${id}`)
    .then(res => res.data)
    .then(studentDeleted => {
      const deleteThis = getState().students.list.indexOf(studentDeleted)
      const newListOfStudents = getState().students.list.splice(deleteThis, 1)
      dispatch(receiveStudents(newListOfStudents));
      hashHistory.push('/students')
    });
  };
};
