import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/slices/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../src/utils/firebase'
import { useNavigate } from "react-router-dom";
import appStore from "./utils/appStore";
import { options } from "./utils/constants";

const Header = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector((store)=>store.user);
           
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                const {uid,email,displayname} = user;
                    dispatch(addUser({uid:uid,email:email,displayname:displayname}));
                    //navigate("/browse")
            }else{
                dispatch(removeUser());
                navigate("/")
            }
        })

        return ()=>unsubscribe();
    },[])

    const [showUserMenu,setShowUserMenu] = useState(false);
    return (
        <div className="absolute  w-screen z-10 bg-gradient-to-b from-black flex justify-between">
            <img className="w-[200px]  px-3 py-4" src="
https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="">

</img>
        <button className="bg-red-700 w-[200px] ml-[-20px] h-10 mx-6 my-7 rounded-md p-2 text-white" onClick={()=>{
            console.log("gpt")
            navigate('/GptSearch')
        }}>Gpt Search</button>
        {data?(
            <button onClick={()=>{
                console.log("dad")
                setShowUserMenu(!showUserMenu);
            }} className="mb-5 mr-3 z-10"><span><img onClick={()=>{
                console.log("sss")
            }}className="w-[50px] h-[50px] mx-4 my-4" src="https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="usericon">

</img></span><span>
        {showUserMenu?<ul className="bg-red-300">
            <li><button onClick={()=>{
                signOut(auth).then(() => {
                  // Sign-out successful.
                  dispatch(removeUser())
                  navigate('/')
                }).catch((error) => {
                  // An error happened.
                });
            }}>
                Sign Out
                </button></li>
        </ul>:null}
    </span></button>
        ):null}
            
        
        </div>
    )
}

export default Header;