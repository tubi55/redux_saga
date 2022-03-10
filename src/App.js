import './App.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import *  as actions from './redux/action';

export default function App() {  
  const [search, setSearch] = useState('');
  const [tag, setTag] = useState('ocean'); 
  const {flickr} = useSelector( store => store.flickrReducer );
  const dispatch = useDispatch();  

  const updateSearch = () => {
    setTag(search);
    setSearch('');
  }

  
  useEffect(()=>{
    dispatch({type: actions.FLICKR_START, tag })
  },[tag]);

  return (
    <div className="App">
      <h1>Flickr Saga</h1>

      <section id="searchBox">
        <input 
          type="text" 
          value={search}
          onChange={ e => setSearch(e.target.value)}
        />

        <button onClick={updateSearch}>Search</button>
      </section>

      <section id="showBox">
        {flickr.map((item,idx) => (
          <article key={idx}>
            <h2>{item.title}</h2>
            <img src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`} />
          </article>
        ))}
      </section>
      
    </div>
  );
}

