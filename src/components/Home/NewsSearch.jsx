import {React,useCallback,useState} from "react";
import ReactDOM from 'react-dom';
import { Input,Button,Tag } from "@bigbinary/neetoui/v2";
import {Search,Close} from "@bigbinary/neeto-icons"
import { Link } from "react-router-dom";
import debounce from "lodash/debounce"


const NewsSearch = ({newsFeed,filter,showSearch,setShowSearch}) => {
    const [searchData,setSearchData] = useState();


    const findUrl = (url,category) =>{
        const urlArray = url.split('/');
        const slug = urlArray.at(-1);
        return (`/${category}/${slug}`)
    }

    const searchDebounce = useCallback(debounce(value=>setSearchData(value),500),[])

    if(!showSearch) return null

    return ReactDOM.createPortal(
        
        <div >
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-70" onClick={()=>{setShowSearch(false);setSearchData()}} ></div>
            <div className="w-full fixed top-1/3">
            <div className="flex flex-col items-center w-full">
                <Input className = "w-1/3" prefix={<Search size={16} />} placeholder="Search for an article"  suffix={<Button style="text" icon={Close} onClick={()=>{setShowSearch(false);setSearchData()}}/>} onChange = {(e)=> searchDebounce(e.target.value)}/>
                {
                    searchData && (
                        <div className="mt-2 max-h-72 overflow-y-auto w-1/3 bg-white rounded-sm border-b-2">
                            
                            {
                                filter.flatMap((category)=>{
                                    return newsFeed[category].filter((news)=>{
                                        let x = news.title.toLowerCase().includes(searchData.toLowerCase());
                                        if(x) {
                                            news.category = category
                                            return news;
                                        } 
                                        return null;                                            
                                    })
                                }).map((ele)=>{return (
                                            <div className="m-2 p-2 bg-gray-100 rounded-sm border-b-2 flex justify-between items-center" onClick={()=>{setShowSearch(false);setSearchData()}}>
                                                <div className="flex">
                                                <img src={ele.imageUrl} className="h-12 w-12"/>
                                                <Link
                                                    className = "p-3 font-bold"
                                                    to ={{pathname: findUrl(ele.url,ele.category)}}>
                                                    {ele.title}
                                                </Link>
                                                </div>
                                                <Tag
                                                    className = ""
                                                    color="green"
                                                    label={ele.category}
                                                    size="large"
                                                />
                                            </div>)})
                            }
                        </div>
                    )
                }
            </div> 
            </div>   
        </div>,
        document.getElementById('search')
    )
}

export default NewsSearch