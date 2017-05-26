import { RECEIVE_CAMPUSES, RECEIVE_CAMPUS } from '../constants';
import axios from 'axios';
import { hashHistory } from 'react-router';

export const receiveCampuses = campuses => ({
    type: RECEIVE_CAMPUSES,
    campuses
});

export const receiveCampus = campus => ({
    type: RECEIVE_CAMPUS,
    campus
});

export const getCampusById = campusId => {
  return dispatch => {
    axios.get(`/api/campuses/${campusId}`)
      .then(response => {
        dispatch(receiveCampus(response.data));
      });
  };
};

export const addNewCampus = (name, image) => {
  return (dispatch, getState) => {
    return axios.post('/api/campuses', {name, image})
      .then(res => res.data)
      .then(campusCreated => {
        const newListOfCampuses = getState().campuses.list.concat([campusCreated]);
        dispatch(receiveCampuses(newListOfCampuses));
        hashHistory.push('/campuses')
      });
  };
};

export const deleteCampus = id => {
  return (dispatch, getState) => {
    return axios.delete(`/api/campuses/${campus.id}`)
    .then(res => res.data)
    .then(campusDeleted => {
      const deleteThis = campuses.list.indexOf([campusDeleted])
      const newListOfStudents = getState().campuses.list.splice(deleteThis, 1)
      dispatch(receiveCampuses(newListOfCampuses));
      hashHistory.pop(`/campuses/${campus.id}`)
    });
  };
};

// export const updateCampus = id => {
//   return (dispatch, getState) => {
//     return axios.put(`/api/campuses/${campus.id}`)
//     .then(res => res.data)
//     .then(campusUpdated => {
//       const
//   }
// }
