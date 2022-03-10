import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import * as actions from './action';
import { getFlickr } from './api';

/*
  takeLatest : 인수로 action type을 받아서 해당 액션타입 발생시 제일 최근에 발생한 함수 호출
  takeEvery : '' action type이 발생할 때마다
  call : 특정 함수를 동기적으로 호출
  fork : 특정 함수를 비동기적으로 호출
  put : 기존 dispatch동일한 기능
  all : fork함수를 그룹화해서 실행할떄
*/

export function* onLoadFlickrAsync(action){
  console.log(action);
  try {
    const response = yield call(getFlickr, action.tag);    
    yield put({type: actions.FLICKR_SUCCESS, payload: response.data.photos.photo})   
  }
  catch (error) {
    yield put({ type: actions.FLICKR_FAIL, payload: error})
  }
}

export function* onLoadFlickr(){
  yield takeLatest(actions.FLICKR_START, onLoadFlickrAsync );
}

export default function* rootSaga(){
  yield all([
    fork(onLoadFlickr)
  ])
}
