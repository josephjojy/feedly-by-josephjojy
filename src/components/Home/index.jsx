import {React,useState} from 'react'
import {Header} from '@bigbinary/neetoui/v2/layouts'
import {Button, Tooltip} from '@bigbinary/neetoui/v2'
import { Search, Notification, Filter} from '@bigbinary/neeto-icons'
import SidePane from './SidePane'
import Sections from '../Sections'
import Subscribe from './Subscribe'

const Home = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [showModal, setShowModal] = useState(false);

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
                        onClick={() => setShowModal(!showModal)}
                    /></Tooltip>
                    <Button 
                        icon = {Filter}
                        label = "Filter"
                        style = "secondary"
                        size = "large"
                        onClick={() => setShowFilter(!showFilter)}
                    />
                </>
                }
                title={<div className="text-gray-500">Feed.ly</div>}
                />
                <SidePane showFilter={showFilter} setShowFilter={setShowFilter}/>
                <Subscribe showModal={showModal} setShowModal={setShowModal}/>
        </div>
    )
}

export default Home
