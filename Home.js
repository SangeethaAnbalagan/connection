import React, { useState } from "react";
import axios from "axios";



export default function Home(){

    const [msg,setMsg]=useState('')

    let submit=async(e)=>{
        e.preventDefault()

        try{
            await axios.post("http://localhost:8000/",{
                msg
            })
        }
        catch(e){
            console.log(e);

        }
    }



    return(
        <div className="container">

            <form action="POST">

            <textarea name="text" onChange={(e)=>{setMsg(e.target.value)}} placeholder="enter the text here" cols="30" rows="10"></textarea>

            <input type="submit" onClick={submit} value="Submit"/>

            </form>

        </div>
    )
}