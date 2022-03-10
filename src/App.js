import './App.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import *  as actions from './redux/action';

export default function App() {
  const [tag, setTag] = useState('ocean');
  const {flickr} = useSelector( store => store.flickrReducer );
  const dispatch = useDispatch();
  console.log(flickr);

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

