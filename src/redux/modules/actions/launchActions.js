import { monthReduction } from '../../../lib/helpers';

function fetchLaunchesBegin() {
  return { type: 'FETCH_LAUNCHES_BEGIN' };
}

function fetchNextLaunchSuccess(nextLaunch) {
  return { type: 'FETCH_NEXT_LAUNCH_SUCCESS', nextLaunch };
}

function fetchUpcomingLaunchesSuccess(upcomingLaunches) {
  return { type: 'FETCH_UPCOMING_LAUNCHES_SUCCESS', upcomingLaunches };
}

function fetchModalDataSuccess(modalData) {
  return { type: 'FETCH_MODAL_DATA_SUCCESS', modalData };
}

function fetchLaunchesError(error) {
  return { type: 'FETCH_LAUNCHES_ERROR', error };
}


// THUNKS
export function fetchNextLaunch() {
  return function (dispatch) {
    fetchLaunchesBegin();
    fetch('http://localhost:3001/launches/nextLaunch')
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      }).then((data) => {
        dispatch(fetchNextLaunchSuccess(data[0]));
      }).catch(err => dispatch(fetchLaunchesError(err)));
  };
}

export function fetchUpcomingLaunches() {
  return function (dispatch) {
    fetchLaunchesBegin();
    fetch('http://localhost:3001/launches')
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      }).then((data) => {
        const sortDataByMonth = monthReduction(data);
        dispatch(fetchUpcomingLaunchesSuccess(sortDataByMonth));
      }).catch(err => dispatch(fetchLaunchesError(err)));
  };
}

export function fetchModalData(launchID) {
  return function (dispatch) {
    fetchLaunchesBegin();
    fetch(`http://localhost:3001/launches/${launchID}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      }).then((data) => {
        dispatch(fetchModalDataSuccess(data));
      }).catch(err => dispatch(fetchLaunchesError(err)));
  };
}
