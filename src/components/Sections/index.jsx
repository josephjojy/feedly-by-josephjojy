import {React} from "react";
import { categories } from "../../constants";
import {Typography} from "@bigbinary/neetoui/v2"
import MainNews from "./MainNews";
import SubNews from "./SubNews";

const Sections = ({filter,newsFeed}) => {
    let reqCategories = [];

    if(filter.length) 
        reqCategories = filter;
    else
        reqCategories = categories;
    return(
        <div className="my-20 mx-50 h-full flex flex-col justify-center items-center">
            {
                reqCategories.map((category,index)=>{
                    return newsFeed[category.toLowerCase()]&&(
                        <div key={index} className="max-w-7xl mt-10 flex flex-col justify-start items-start">
                            <Typography style="h1">{category} News</Typography>
                            <MainNews data={newsFeed[category.toLowerCase()][0]}/>
                            <SubNews data = {newsFeed[category.toLowerCase()]}/>
                        </div>
                    );
                })
            }
        </div>
    )        
}

export default Sections