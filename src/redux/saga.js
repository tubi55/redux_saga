import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import * as actions from './action';
import { getFlickr } from './api';

//action 타입에 따라 변경될 generator함수 정의
export function* onLoadFlickrAsync(action){
  
  //정상적으로 작동시
  try {
    //getFlickr함수에 action객체로 넘어온 tag값을 인수로 전달해서 호출
    const response = yield call(getFlickr, action.tag);  
    //반환된 결과값을 FLICKR_SUCCESS타입 액션의 payload에 담아서 다시 reducer에 전달  
    yield put({type: actions.FLICKR_SUCCESS, payload: response.data.photos.photo})   
  }
  catch (error) {
    yield put({ type: actions.FLICKR_FAIL, payload: error})
  }
}

//FLICKR_START타입의 액션 발생시 위의 onLoadFlickrAsync함수 실행
export function* onLoadFlickr(){
  yield takeLatest(actions.FLICKR_START, onLoadFlickrAsync );
}

//위의 함수를 비동기적으로 호출
export default function* rootSaga(){
  yield all([
    fork(onLoadFlickr)
  ])
}
