import React, {useState, useEffect} from 'react'
import { RiLoginBoxLine } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri';
import { loginUser } from './index';
import ImagePoster from './ImagePoster';
import './login.css'


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
    let card = document.getElementById('card')
    const openRegister = () =>{
        card.style.transform = 'rotateY(-180deg)'
    }
    const openLogin = () =>{
    card.style.transform = 'rotateY(0deg)'
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
          {/* <h1>Login <RiLoginBoxLine/></h1>
          <form onSubmit={loginHandler}>
          <input type='email' placeholder='email' onChange= {(e)=> setEmail(e.target.value)}/> <MdEmail/>
          <br/>
          <input type='password' placeholder='password' onChange={(e)=> setPasword(e.target.value)}/> <RiLockPasswordFill/>
          <br/>
          <button type='submit'> Login </button>
          </form> */}
          <div className = "wrapper" id="wrapper">
            <div className="container">
                <div className="card">
                    <div className="inner-box" id="card">
                        <div className="card-front">
                            <h2>LOGIN</h2>
                            <form onSubmit={loginHandler}>
                                <div className="icon">
                                <input className="input-box" onChange= {(e)=> setEmail(e.target.value)} type="email" placeholder="Enter your email" required/><MdEmail/>
                                </div>
                                <div className="icon">                                    
                                <input className="input-box" onChange= {(e)=> setPasword(e.target.value)} type="password" placeholder="Password"/> <RiLockPasswordFill/>
                                </div>
                                <button type="submit" className="submit-btn" >Login</button>
                            </form>
                            <button type="button" className="btn" onClick={openRegister}>I'm New Here</button>
                        </div>
                        <div className="card-back">
                            <h2>REGISTER</h2>
                            <form>
                            <input className="input-box" type="text" placeholder="Enter Username" required/>
                            <input className="input-box" type="email" placeholder="Enter your email" required/>
                            <input className="input-box" type="password" placeholder="Password"/>
                            <button type="submit" className="submit-btn" >Submit</button>
                        </form>
                        <button type="button" className="btn" onClick={openLogin}>I have an account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.js"></script>
        <script src="./app.js"></script> */}
        </>
        }
      </div>
  );
}

export default Login;