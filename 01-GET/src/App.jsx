import { useState,useEffect } from 'react';
import { getPost } from './API/index.js';
import  Cards  from './components/cards.jsx';
import './App.css';

function App() {

  const [data, setData] = useState(null);
  useEffect(() => {
    getPost().then((posts) => setData(posts));
  }, []);

  return (
    <>
      <div className="app"></div>{
        data ? data.map((e) => <Cards title={e.title} body={e.body}/>): <p>Loading...</p>
      }
      <h1>API GET Request Example</h1>
    </>
  );
}

export default App;
