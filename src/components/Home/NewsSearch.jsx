import React from "react";
import ReactDOM from 'react-dom';
import { Input,Button } from "@bigbinary/neetoui/v2";
import {Search,Close} from "@bigbinary/neeto-icons"

const NewsSearch = ({showSearch,setShowSearch}) => {

    const SearchStyle= {
        zIndex:1000,
        position : 'fixed',
        top : '35%',
        right : '50%',
        width : '35%',
        transform : 'translate(50%,50%)',
        backgroundColor : 'white'
    }
    const OverLay = {
        position : 'fixed',
        top : 0,
        bottom : 0,
        left : 0,
        right : 0,
        backgroundColor : 'rgba(0,0,0,.7)'

    }
    if(!showSearch) return null

    return ReactDOM.createPortal(
        
        <div >
            <div style={OverLay}></div>
            <div style={SearchStyle}>
                <Input label="" prefix={<Search size={16} />} placeholder="Search for an article"  suffix={<Button style="text" icon={Close} onClick={()=>setShowSearch(false)}/>} />
            </div>    
        </div>,
        document.getElementById('search')
    )
}

export default NewsSearch