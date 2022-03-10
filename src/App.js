import './App.css';
import { useSelector } from 'react-redux';

export default function App() {
  const flickr = useSelector( store => store.flickrReducer );
  console.log(flickr);

  return (
    <div className="App">
      <h1>Flickr Saga</h1>
    </div>
  );
}

