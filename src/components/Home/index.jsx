import {React,useState,useEffect} from 'react'
import {Header} from '@bigbinary/neetoui/v2/layouts'
import {Button, Tooltip} from '@bigbinary/neetoui/v2'
import { Search, Notification, Filter} from '@bigbinary/neeto-icons'
import SidePane from './SidePane'
import Sections from '../Sections'
import Subscribe from './Subscribe'
import { feed } from '../../apis/inshort'
import { categories } from '../../constants'

const Home = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [newsFeed, setNewsFeed] = useState({});
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        const getFeed = (category) =>{
            let data = {};
            category.forEach(async (item)=>{
                const res = await feed(item.toLowerCase())
                data[res.category] = await res.data;
                setNewsFeed(data)
                if(Object.keys(data).length === categories.length)
                    setLoading(false)
            })
        }
        getFeed(categories)
    }, [])


    if(loading) return <h1>Loading</h1>

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
                <SidePane showFilter={showFilter} setShowFilter={setShowFilter}/>
                <Subscribe showModal={showModal} setShowModal={setShowModal}/>
                <Sections filter={filter} newsFeed={newsFeed}/>
        </div>
    )
}

export default Home
