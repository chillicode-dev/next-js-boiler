// Action names
export const FETCH_START = '@${TM:DUCK_NAME}/FETCH_START';
export const FETCH_OK = '@${TM:DUCK_NAME}/FETCH_OK';
export const FETCH_ERR = '@${TM:DUCK_NAME}/FETCH_ERR';

// Action creators
const fetchStart = () => {
  return {type: FETCH_START};
};

const fetchOk = data => ({
  type: FETCH_OK,
  payload: data,
});

const fetchErr = err => ({
  type: FETCH_ERR,
  error: err,
});

// Reducer
const initialState = {
  data: [],
  isFetching: false,
  error: null,
};

export default function ${TM:DUCK_NAME}Reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_OK:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case FETCH_ERR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
