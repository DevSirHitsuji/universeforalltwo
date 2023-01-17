import "./PutInfo.css"

import Info from "../../components/info/Info"
import Input from "../../components/input/Input"
import MyHeader from "../../components/MyHeader/MyHeader"
import MyFooter from "../../components/myFooter/MyFooter"

import {useNavigate } from "react-router-dom"
import axios from 'axios'

export default function PutInfo(props) {
    const navigate = useNavigate();
    const getDate = async () => {
        const url = "https://api.nasa.gov/planetary/apod?api_key=" + "kdfNSXeGP6S3lB4RxgB05UXhgxNPIR850imFrlDB" + "&date=" + localStorage.getItem("date");
        const res = await axios.get(url);
        const data = await res.data;
        localStorage.setItem("title", data.title)
        localStorage.setItem("explanation", data.explanation)
        localStorage.setItem("url", data.url)  
        navigate("/content")
      }

    return (
        <div>
        <MyHeader tittle="Universe For All" />
        <Info 
            tittle="Wellcome people"
            description="inset a date bellow and appreciate"
        />
        
        <Input 
            type="date"
            placeholder="choice a date..."
            func={(e) => {localStorage.setItem("date", e.target.value)}}
        />
        <button onClick={getDate}>continue</button>
        
        <MyFooter/>
        </div>       
    )
}