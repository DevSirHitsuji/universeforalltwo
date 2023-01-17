import "./Content.css"


import { useEffect, useState } from 'react'

import Preview from '../../components/preview/Preview'
import MyHeader from '../../components/MyHeader/MyHeader'
import Info from '../../components/info/Info'
import MyFooter from '../../components/myFooter/MyFooter'




export default function Content(props) {

    // const [title, setTitle] = useState();
    // const [info, setInfo] = useState();
    // const [imgUrl, setImgUrl] = useState();
  
    


    return (
        <div>
        <MyHeader tittle="Universe For All" />
      
        <main>
            <Preview src={localStorage.getItem("url")}/>
            <Info 
            tittle={localStorage.getItem("title")}
            description={localStorage.getItem("explanation")}
            />
        </main>

        <MyFooter/>
        </div>        
    )
}