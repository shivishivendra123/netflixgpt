import { useRef, useState } from "react"
import Header from "./Header"
//import validatefields from "./utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth }  from "../src/utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "./utils/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginForm,setLoginForm] = useState(true);
    const [error,setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);

    

    const handleLogin = ()=>{
        // console.log(email.current.value)
        // console.log(password.current.value);

        // const error = validatefields(email,password);
        // setErrorMessage(error);
        if(!loginForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode+errorMessage);
                // ..
            });   
        }else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    const {uid,email,displayname} = user;
                    dispatch(addUser({uid:uid,email:email,displayname:displayname}));
                    navigate('/browse');
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode+errorMessage);
                });
        }
        
        
        
    }
    return (
        <div>
            <Header/>
            <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"/>
            <form onSubmit={(e)=>{e.preventDefault()}} className="bg-black absolute w-4/12 my-24 p-10 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl mb-2"> {loginForm?"Sign In":"Sign Up"}</h1>
                {!loginForm?<input type="text"  placeholder="Type your full name..." className="p-2 my-4 w-full bg-slate-500  font-bold"/>:null}
                
                <input type="text" ref={email} placeholder="Email Address" className="p-2 my-4 w-full bg-slate-500  font-bold"/>
                <input type="password" placeholder="Enter Password" ref={password} className="p-2 my-4 w-full bg-slate-500 font-bold"/>
                <p className="text-red-700 font-bold">{error}</p>
                {!loginForm?<input type="password" placeholder="Confirm Password" className="p-2 my-4 w-full bg-slate-500 font-bold"/>:null} 
                <button onClick={()=>handleLogin()} className="bg-[#E50914] w-full my-4 h-[50px] rounded-md">{loginForm?"Log In":"Sign Up"}</button> 
                
                {loginForm?<p className="font-bold">New to Netflix? Sign Up Now<button className="bg-[#E50914] mx-10 w-[100px] rounded-sm" onClick={()=>{
                    var lg = loginForm;
                    setLoginForm(!lg)
                }} type="button">Sign Up</button></p>:null}
                {!loginForm?<p className="font-bold">Already have an Account<button className="bg-[#E50914] mx-10 w-[100px] rounded-sm" onClick={()=>{
                    var lg = loginForm;
                    setLoginForm(!lg)
                }} type="button">Sign In</button></p>:null}
            </form>
        </div>
    )
}

export default Login