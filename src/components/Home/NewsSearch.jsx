import React from "react";
import ReactDOM from 'react-dom';

const NewsSearch = ({showSearch,setShowSearch}) => {

    if(!showSearch) return null

    return ReactDOM.createPortal(
        
        <div>
                hello
        </div>,
        document.getElementById('search')
    )
}

export default NewsSearch