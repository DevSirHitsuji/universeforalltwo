import "./Content.css"

import axios from 'axios'
import { useEffect, useState } from 'react'

import Preview from '../../components/preview/Preview'
import MyHeader from '../../components/MyHeader/MyHeader'
import Info from '../../components/info/Info'
import MyFooter from '../../components/myFooter/MyFooter'




export default function Content(props) {

    const [title, setTitle] = useState();
    const [info, setInfo] = useState();
    const [imgUrl, setImgUrl] = useState();
  
    
    const getDate = async () => {
      const url = "https://api.nasa.gov/planetary/apod?api_key=" + "kdfNSXeGP6S3lB4RxgB05UXhgxNPIR850imFrlDB" + "&date=" + localStorage.getItem("date");
      const res = await axios.get(url);
      const data = res.data;
      setTitle(data.title)
      setInfo(data.explanation)
      setImgUrl(data.url)
    }
    useEffect(() => getDate, [])

    return (
        <div>
        <MyHeader tittle="Universe For All" />
      
        <main>
            <Preview src={imgUrl}/>
            <Info 
            tittle={title}
            description={info}
            />
        </main>

        <MyFooter/>
        </div>        
    )
}