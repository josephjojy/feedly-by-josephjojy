import React from "react";
import { useParams } from "react-router-dom";
import {Typography ,Button, Tooltip} from "@bigbinary/neetoui/v2"
import {Copy} from "@bigbinary/neeto-icons"
import SubNews from "../Sections/SubNews";
import ErrorPage from "../ErrorPage";
import { Toastr } from "@bigbinary/neetoui/v2";




const Article = ({newsFeed}) => {
    const {category,slug} = useParams();

    const findArticle = () => {
        return newsFeed[category]?.find((news) => news.url.includes(slug))
    }

    const article = findArticle();
    if(article){

    let copyNews = newsFeed[category]?.filter((item)=>item.url !==article.url);
    return(
        <div>
            <div className="my-20 mx-60 h-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-start">                
                    <Typography style="h1">{article.title}  <Tooltip content="Copy" placement="bottom">
                        <Button className="ml-1" icon = {() =>{return <Copy/>}} style="icon"
                            onClick={() => {navigator.clipboard.writeText(article.readMoreUrl);Toastr.info("Copied to clipboard.")}}
                        />
                        </Tooltip> 
                    </Typography>
                    <div className="w-full mt-4 flex flex-row justify-start neeto-ui-text-gray-500">
                        <Typography style="body2">{`${article.author} at ${article.time} on ${article.date}`}</Typography>
                    </div>
                    <div className="w-full mt-5 flex flex-row justify-center items-center">
                        <img src={article.imageUrl} className="h-72 max-w-5xl" alt="news"/>
                    </div>
                    <div className="w-full mt-8 py-5 border-b-2">
                        <Typography style="body1">
                            {article.content} <br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto alias illo et officia assumenda, doloribus rem blanditiis, tenetur autem deleniti mollitia sed id ex cumque architecto, corporis optio vitae nostrum.<br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veniam facilis dolorum optio? Sint quidem explicabo, quae ipsum excepturi, ut, in doloribus atque a esse modi ea reprehenderit maxime quod!
                        </Typography>
                    </div>    
                </div> 
                <SubNews data = {copyNews} category={category}/>   
            </div>
        </div>
    )
    }
    else{
        return <ErrorPage />
    }
}

export default Article