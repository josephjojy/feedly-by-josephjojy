import React from 'react'
import {Header} from '@bigbinary/neetoui/v2/layouts'
import {Button, Tooltip} from '@bigbinary/neetoui/v2'
import { Search, Notification, Filter} from '@bigbinary/neeto-icons'

const Home = () => {
    return (
        <div className="px-4 border-b">
                <Header actionBlock={
                <>
                    <Tooltip
                        content="Search"
                        placement="bottom"
                    ><Button 
                        icon ={() =>{return <Search/>}}
                        style = "icon"
                    /></Tooltip>
                    <Tooltip
                        content="Subscribe"
                        placement="bottom"
                    ><Button 
                        icon ={() =>{return <Notification/>}}
                        style = "icon"
                    /></Tooltip>
                    <Button 
                        icon = {Filter}
                        label = "Filter"
                        style = "secondary"
                        size = "large"
                    />
                </>
                }
                title={<div className="text-gray-500">Feed.ly</div>}
                />
        </div>
    )
}

export default Home
