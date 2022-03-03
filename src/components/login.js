import React, {useState, useEffect} from 'react'
import { RiLoginBoxLine } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri';
import { loginUser } from './index';
import ImagePoster from './ImagePoster';


const Login = () => {
    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [password, setPasword] = useState();
    const [state, setState] = useState(false);
    const [url, setUrl] = useState([]);
    const [count, setCount] = useState(1)
    useEffect(()=>Images(),[])

   const handlePage = () => {
    setCount(count+1)
    Images();
  }

   const Images = async () =>{
      const res = await fetch(`https://picsum.photos/v2/list?page=${count}&limit=28`);
      let images = await res.json();
      console.log(images);
      setUrl(images)
      // console.log(img);
    }

    const loginHandler = async (e) =>{
        e.preventDefault();
        let login = await loginUser(setUser, email, password);
        console.log(login)
        if(login===true){
          setState(!state);
        }
    }
  return (
      <div>
        {state ? 
          <>
            <button onClick={()=> setState(!state)}>Logout</button>
            <ImagePoster url={url}/>
            <button onClick={()=>handlePage()}>Show More</button>
          </>
          :
        <>
          <h1>Login <RiLoginBoxLine/></h1>
          <form onSubmit={loginHandler}>
          <input type='email' placeholder='email' onChange= {(e)=> setEmail(e.target.value)}/> <MdEmail/>
          <br/>
          <input type='password' placeholder='password' onChange={(e)=> setPasword(e.target.value)}/> <RiLockPasswordFill/>
          <br/>
          <button type='submit'> Login </button>
          </form>
        </>
        }
      </div>
  );
}

export default Login;