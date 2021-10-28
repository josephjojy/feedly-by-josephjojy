import React from "react"
import {Button,Typography} from "@bigbinary/neetoui/v2"

const SubNews = ({data}) =>{
    return(
        <div className="grid grid-cols-2 gap-x-28 border-b-2 pb-6">
            {[1,2,3,4].map((item)=>(
                <div key = {item} className="flex pt-4">
                <img src = {data[item].imageUrl} className="h-20 w-20 mr-2" alt="news"/>
                <div className="flex-col">
                    <Typography style="h6">{data[item].title}</Typography>
                    <Typography style="body3" className="py-2 neeto-ui-text-gray-500 ">{`${data[item].author} at ${data[item].time} on ${data[item].date}`}</Typography>
                    <Button
                    label="Read More"
                    onClick={function noRefCheck(){}}
                    style="link"
                    />
                </div>    
                </div>
            ))}

        </div>
    )
}

export default SubNews