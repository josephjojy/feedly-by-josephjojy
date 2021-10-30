import {React, useContext, useState,useEffect} from "react";
import {Typography} from "@bigbinary/neetoui/v2"
import MainNews from "./MainNews";
import SubNews from "./SubNews";
import NoNews from "./NoNews";
import FilterLabel from "./FilterLabel";
import { ArchiveContext } from "../../App";

const Sections = ({category,setCategory,setFilter,filter,newsFeed}) => {

    const [filteredNews,setFilteredNews] = useState(newsFeed); 
    let reqCategories = [];
    let news = {};
    const {archive} = useContext(ArchiveContext);

    useEffect(() => {
       const today = new Date().toDateString();
       filter.forEach((item)=>{
        news[item]=newsFeed[item].filter((ele)=>{
            if(!archive){
            let newsDate = new Date(ele?.date.slice(0,11)).toDateString();
            return today===newsDate?true:false;}
            return true
       })})
   setFilteredNews(news);
    }, [archive,filter])

    if(filter.length){
        reqCategories = filter;
        return(
        <div className="my-10 mx-48 h-full">
            <FilterLabel setCategory={setCategory} setFilter={setFilter} filter={filter}/>
            <div className="flex flex-col justify-center items-center">
            {
                reqCategories.map((category,index)=>{
                    const capitalizeTitle = category[0].toUpperCase()+category.slice(1)
                    return filteredNews[category]&&(
                        <div key={index} className="w-full border-b-2 mt-10 flex flex-col justify-start items-start">
                            <Typography style="h1">{capitalizeTitle} News</Typography>
                            <MainNews data={filteredNews[category][0]} category={category}/>
                            <SubNews data = {filteredNews[category]} category={category}/>
                        </div>
                    );
                })
            }
            </div>
        </div>
        ) 
    }
    else
        return( 
            <div className="my-20 mx-48 h-full flex flex-col justify-center items-center">
                <NoNews />  
                <SubNews className="border-t-2" data = {newsFeed["all"]} category="all"/> 
            </div>
        )    
}

export default Sections