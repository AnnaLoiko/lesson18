import axios from 'axios';

// action creator
export const actionCreator = data => ({ type: "TEST_ACTION", payload: data })

// async action
export const getInfo = () => dispatch => {
  axios('http://test.com/')
    .then(({ data }) => dispatch(getInfoSuccess(data)))
    .catch(error => dispatch(getInfoError(error)));
}

const getInfoSuccess  = data  => ({ type: "GET_INFO_SUCCESS", payload: messages });
const getInfoError    = error => ({ type: "GET_INFO_ERROR", payload: error });