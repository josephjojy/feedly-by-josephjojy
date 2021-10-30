import React from "react"
import {Typography} from "@bigbinary/neetoui/v2"
import { Link } from "react-router-dom"

const MainNews = ({data,category}) =>{

    const findUrl = (url) =>{
        const urlArray = url.split('/');
        const slug = urlArray.at(-1);
        return (`/${category}/${slug}`)
    }

    if(!data)return <div className=" w-full" ><Typography >No News in this section</Typography></div>
    return(
        <div className="py-5 flex flex-row justify-center">
            <img src={data.imageUrl} className="h-72 w-1/2" alt="news"/>
            <div className="w-1/2 ml-5 flex flex-col justify-start items-start">
                <Typography style="h3" className="leading-8 tracking-wide">{data.title}</Typography>
                <div className="w-full flex flex-row justify-end neeto-ui-text-gray-500">
                    <Typography style="body2">{`${data.author} at ${data.time} on ${data.date}`}</Typography>
                </div>
                <div className="mt-4 leading-5">{data.content.substring(0, 300).concat('...')}</div>
                <Link className="text-purple-800"
                    to ={{pathname: findUrl(data.url)}}>
                  Read more
                </Link>
            </div>
        </div>
    )
}

export default MainNews