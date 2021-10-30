import React from "react"
import {Typography} from "@bigbinary/neetoui/v2"
import { Link } from "react-router-dom"

const SubNews = ({data,category}) =>{

    const findUrl = (url) =>{
        const urlArray = url.split('/');
        const slug = urlArray.at(-1);
        return (`/${category}/${slug}`)
    }

    if(!data[0]) return null
    return(
        <div className="grid grid-cols-2 gap-x-36 pb-6 border-t-2">
            {data.slice(1,5).map((item,index)=>(
                <div key = {index} className="flex pt-4">
                <img src = {item.imageUrl} className="h-20 w-20 mr-2" alt="news"/>
                <div className="flex-col">
                    <Typography style="h6">{item.title}</Typography>
                    <Typography style="body2" className="py-2 neeto-ui-text-gray-500 ">{`${item.author} at ${item.time} on ${item.date}`}</Typography>
                    <Link className="text-purple-800"
                        to ={{pathname: findUrl(item.url)}}>
                        Read more
                    </Link>
                </div>    
                </div>
            ))}

        </div>
    )
}

export default SubNews