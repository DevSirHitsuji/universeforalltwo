import { Fragment } from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom";

import Content from "./views/content/Content";
import PutInfo from "./views/putInfo/putInfo";

export default function Routers(props) {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<PutInfo />} />
                    <Route path="/content" element={<Content />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}