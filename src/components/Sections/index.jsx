import {React} from "react";
import {Typography} from "@bigbinary/neetoui/v2"
import MainNews from "./MainNews";
import SubNews from "./SubNews";
import NoNews from "./NoNews";
import FilterLabel from "./FilterLabel";

const Sections = ({category,setCategory,setFilter,filter,newsFeed}) => {
    let reqCategories = [];

    if(filter.length){
        reqCategories = filter;
        return(
        <div className="my-10 mx-48 h-full">
            <FilterLabel setCategory={setCategory} setFilter={setFilter} filter={filter}/>
            <div className="flex flex-col justify-center items-center">
            {
                reqCategories.map((category,index)=>{
                    const capitalizeTitle = category[0].toUpperCase()+category.slice(1)
                    return newsFeed[category]&&(
                        <div key={index} className="max-w-7xl mt-10 flex flex-col justify-start items-start">
                            <Typography style="h1">{capitalizeTitle} News</Typography>
                            <MainNews data={newsFeed[category][0]} category={category}/>
                            <SubNews data = {newsFeed[category]} category={category}/>
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