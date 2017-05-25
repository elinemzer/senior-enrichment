import { RECEIVE_CAMPUSES, RECEIVE_CAMPUS } from '../constants';
import axios from 'axios';

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

export const addNewCampus = (campusName) => {
  return (dispatch, getState) => {
    return axios.post('/api/campuses', {name: campusName})
      .then(res => res.data)
      .then(campusCreated => {
        const newListOfCampuses = getState().campuses.list.concat([campusCreated]);
        dispatch(receiveCampuses(newListOfCampuses));
        hashHistory.push(`/campuses/${campus.id}`)
      });
  };
};
