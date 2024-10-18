import axios from "axios";
import { useEffect, useState } from "react"
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export const Appbar = () => {
    const [user,setUser]  = useState("");
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }).then((response) => {setUser(response.data.firstName)
            localStorage.setItem("user",response.data.username)
        //   console.log(response.data);
          }
        )
          
          
    },[])
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                {user ? user.toUpperCase() : ""} 
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user ? user.split("")[0].toUpperCase() : ""}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full mr-4">
                {user ? <Button title="Logout" onClick={()=> { localStorage.clear(); navigate('/signin') } }/> : ""} 
            </div>
        </div>
    </div>
}