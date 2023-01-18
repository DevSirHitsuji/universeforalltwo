import "./PutInfo.css"

import Info from "../../components/info/Info"
import Input from "../../components/input/Input"
import MyHeader from "../../components/MyHeader/MyHeader"
import MyFooter from "../../components/myFooter/MyFooter"

import {useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState } from "react"

export default function PutInfo(props) {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    function verify(Today, Date) {
        const today = Today.split("-");
        const date = Date.split("-");
    
        if (parseInt(date[0]) < parseInt(today[0])){
            setError("");
            return true;
        }
        
        if ((date[0]) == today[0] && parseInt(date[1]) < parseInt(today[1])){
            setError("");
            return true;
        }

        if (date[0] == today[0] && date[1] == today[1] && parseInt(date[2]) < parseInt(today[2])){
            setError("");
            return true;
        }

        if (date[0] == today[0] && date[1] == today[1] && date[2] == today[2]) {
            setError("Maybe today not yet have a content, try later!")
            return true;
        }

        setError("Date not exist, please, put a valid date!");
        return false;
    }

    const getDate = async () => {
        const timeElapsed = Date.now();
        const date = new Date(timeElapsed);
        const today = date.toISOString().split("T");
        
        if(verify(today[0], localStorage.getItem("date"))){
            const url = "https://api.nasa.gov/planetary/apod?api_key=" + "kdfNSXeGP6S3lB4RxgB05UXhgxNPIR850imFrlDB" + "&date=" + localStorage.getItem("date");
            const res = await axios.get(url);
            const data = await res.data;
            localStorage.setItem("title", data.title)
            localStorage.setItem("explanation", data.explanation)
            localStorage.setItem("url", data.url)  
            navigate("/content")
        }
      }

    return (
        <div className="main">
        <div className="section">
           <MyHeader tittle="Universe For All" />
            <Info 
                tittle="Wellcome people"
                description="inset a date bellow and appreciate"
            />
            <div>
                <Input 
                type="date"
                placeholder="choice a date..."
                func={(e) => {localStorage.setItem("date", e.target.value)}}
                />
                <p className="error">{error}</p>
                <button onClick={getDate}>continue</button>
            </div>
        </div>
        

        
        
        
        <MyFooter/>
        </div>       
    )
}