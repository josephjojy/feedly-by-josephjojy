import {React,useState,useEffect} from 'react'
import {Header} from '@bigbinary/neetoui/v2/layouts'
import {Button, Tooltip} from '@bigbinary/neetoui/v2'
import { Search, Notification, Filter} from '@bigbinary/neeto-icons'
import SidePane from './SidePane'
import Subscribe from './Subscribe'

const Home = ({category,setCategory,setFilter}) => {
    const [showFilter, setShowFilter] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="mx-5" >
                <Header className=" px-2 border-b" actionBlock={
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
                <SidePane category={category} setCategory={setCategory} showFilter={showFilter} setShowFilter={setShowFilter} setFilter={setFilter}/>
                <Subscribe showModal={showModal} setShowModal={setShowModal}/>
               
        </div>
    )
}

export default Home
