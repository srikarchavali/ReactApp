// import React from 'react'
import {useState} from 'react'
import './App.css';
import { PostCreator } from './components/postCreator';

const App = () => {
  const [user, setUser] = useState();
  const [list, setList] = useState([]);
  const [postContent, setPostContent] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    if (postContent){
      setList([...list, postContent])
    }
  }

  return (
    <div className="App">
      {user ? <h1>Welcome {user} </h1>: <h1>Please login</h1>}
      <input type="text" onChange={(e)=> setUser(e.target.value)}/>
      <PostCreator setPostContent={setPostContent} list={list} submitHandler={submitHandler} />
      <div>
        {list.map((item, index)=> <h2 key={index}>{item}</h2>)}
      </div>
    </div>
  );
}

export default App;
