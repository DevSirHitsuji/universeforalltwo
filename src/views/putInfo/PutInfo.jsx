import "./PutInfo.css"

import Info from "../../components/info/Info"
import Input from "../../components/input/Input"
import MyHeader from "../../components/MyHeader/MyHeader"
import MyFooter from "../../components/myFooter/MyFooter"

import { Link } from "react-router-dom"

export default function PutInfo(props) {
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
        <button ><Link to="/content">continue</Link></button>
        
        <MyFooter/>
        </div>       
    )
}