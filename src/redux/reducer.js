import { combineReducers } from "redux";
import * as actions from './action';

const flickrReducer = (state={flickr:[]}, action) => {
  switch (action.type) {
    case actions.FLICKR_START:
      return {...state}

    case actions.FLICKR_SUCCESS:
      return {...state, flickr: action.payload}

    case actions.FLICKR_FAIL:
      return {...state, error: action.payload}
    
    default:
      return state;
  }
}

const rootReducer = combineReducers({ flickrReducer })
export default rootReducer;