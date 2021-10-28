import React from "react"
import {Button,Typography} from "@bigbinary/neetoui/v2"

const SubNews = ({data,category}) =>{

    const findUrl = (url) =>{
        const urlArray = url.split('/');
        const slug = urlArray.at(-1);
        return (`/${category}/${slug}`)
    }

    return(
        <div className="grid grid-cols-2 gap-x-36 border-b-2 pb-6 border-t-2">
            {[1,2,3,4].map((item)=>(
                <div key = {item} className="flex pt-4">
                <img src = {data[item].imageUrl} className="h-20 w-20 mr-2" alt="news"/>
                <div className="flex-col">
                    <Typography style="h6">{data[item].title}</Typography>
                    <Typography style="body2" className="py-2 neeto-ui-text-gray-500 ">{`${data[item].author} at ${data[item].time} on ${data[item].date}`}</Typography>
                    <Button
                    label="Read More"
                    href = {findUrl(data[item].url)}
                    style="link"
                    />
                </div>    
                </div>
            ))}

        </div>
    )
}

export default SubNews