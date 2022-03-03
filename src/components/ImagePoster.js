
import React, {useState} from 'react'
import './ImagePoster.css';
import { BsHeart } from 'react-icons/bs';
import { FcLike } from 'react-icons/fc';
    
const ImagePoster = (props) => {
const [like, setLike] = useState(false);

    return(
      <div className='grid'>
      {props.url.map((url)=>{
        return(
          <div>
            <img className='picsum' key={url.id} src={url.download_url} alt="images" />
            <button id='likeButton' >  {like? <FcLike/> : <BsHeart/>} </button>
            <button>Share</button>
            <button>Comment</button>
          </div>
        )
        })
      }
      </div>
    )}

export default ImagePoster