import React from "react";
import NoNewsImg from "../../resourses/Nonews.png"
import { Button,Typography } from "@bigbinary/neetoui/v2";
import { Edit } from "@bigbinary/neeto-icons";


const NoNews = () => {

    return(
        <div>
            <div className="mt-12 pb-20 flex flex-col items-center">
                <img src={NoNewsImg}/>
                <Typography style="h3" className="py-4">No News Articles Found</Typography>
                <Button
                    iconPosition="left"
                    label="Write to us"
                    onClick={function noRefCheck(){}}
                    style="secondary"
                    icon = {Edit}
                    size="large"
                />
            </div>
        </div>
    )
}

export default NoNews