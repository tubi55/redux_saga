import './App.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import *  as actions from './redux/action';

export default function App() {
  //검색어를 담을 state생성
  const [tag, setTag] = useState('ocean');
  //구조분해 할당으로 store.flickrReducer안의 객체에서 flickr값만 뽑음
  const {flickr} = useSelector( store => store.flickrReducer );
  const dispatch = useDispatch();
  console.log(flickr);

  //컴포넌트 생성시 FLICKR_START액션타입에 tag를 담아서 reducer에 전달
  useEffect(()=>{
    dispatch({type: actions.FLICKR_START, tag })
  },[]);

  return (
    <div className="App">
      <h1>Flickr Saga</h1>
      {flickr.map((item,idx) => (
        <article key={idx}>
          <h2>{item.title}</h2>
          <img src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`} />
        </article>
      ))}
    </div>
  );
}

