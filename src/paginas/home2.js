import Home from "./home"
import {useState} from "react";
import SignUp from "./signup";

function Home2() {

    const[user,setUser]=useState([])
    return (
        <div>
            {
                !user.length>0 ? <SignUp setUser={setUser}/>:<Home/>
            }


        </div>
    );
}

export default Home2;