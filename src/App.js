// import React from 'react'
import React, {useEffect, useState} from 'react'
import './App.css';
import { PostCreator } from './components/postCreator';
// import {ImageFetcher} from './components/ImageFetcher'

const App = () => {
  const [user, setUser] = useState();
  const [list, setList] = useState([]);
  const [postContent, setPostContent] = useState();
  const [url, setUrl] = useState([]);
  const [count, setCount] = useState(1)
  useEffect(()=>Images(),[])
  const submitHandler = (e) => {
      e.preventDefault();
      if (postContent){
        setList([...list, postContent])
      }
   }
   const Images = async () =>{
      const res = await fetch(`https://picsum.photos/v2/list?page=${count}&limit=28`);
      let images = await res.json();
      console.log(images);
      // let img = images.map((url)=>url.download_url);
      setUrl(images)
      // console.log(img);
    }

    const ImagePoster = () => {
      return(
        <div className='grid'>
        {url.map((url)=>{
          return(
            <div>
              <img className='picsum' key={url.id} src={url.download_url} alt="images" />
              <button>Like</button>
              <button>Share</button>
              <button>Comment</button>
            </div>
          )
          })
        }
        </div>
      )
    }

    const handlePage = () => {
      setCount(count+1)
      Images();
    }
  
     return (
       <div className="App">
      {user ? <h1>Welcome {user} </h1>: <h1>Please login</h1>}
      <input type="text" onChange={(e)=> setUser(e.target.value)}/>
      <PostCreator setPostContent={setPostContent} list={list} submitHandler={submitHandler} />
      {/* <ImageFetcher/> */}
      <ImagePoster/>
      <div>
        {list.map((item, index)=> <h2 key={index}>{item}</h2>)}
      </div>
      <button onClick={()=>handlePage()}>Show More</button>
    </div>
  );
}

export default App;
