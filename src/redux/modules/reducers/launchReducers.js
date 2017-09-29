const initialState = {
  loading: false,
  nextLaunch: {},
  upcomingLaunches: [],
  error: {},
};

export default function LaunchReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_LAUNCHES_BEGIN':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_NEXT_LAUNCH_SUCCESS':
      return {
        ...state,
        loading: false,
        nextLaunch: action.nextLaunch,
      };
    case 'FETCH_UPCOMING_LAUNCHES_SUCCESS':
      return {
        ...state,
        loading: false,
        upcomingLaunches: action.upcomingLaunches,
      };
    case 'FETCH_LAUNCHES_ERROR':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
