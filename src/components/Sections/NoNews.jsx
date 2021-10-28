import {React,useState} from "react";
import NoNewsImg from "../../resourses/Nonews.png"
import { Button,Typography } from "@bigbinary/neetoui/v2";
import { Edit } from "@bigbinary/neeto-icons";
import WriteToUs from "./WriteToUs";


const NoNews = () => {
    const [showModal, setShowModal] = useState(false);

    return(
        <div>
            <div className="mt-12 pb-20 flex flex-col items-center">
                <img src={NoNewsImg}/>
                <Typography style="h3" className="py-4">No News Articles Found</Typography>
                <Button
                    iconPosition="left"
                    label="Write to us"
                    onClick={() => setShowModal(true)}
                    style="secondary"
                    icon = {Edit}
                    size="large"
                />
            </div>
            <WriteToUs showModal={showModal} setShowModal={setShowModal}/>
        </div>
    )
}

export default NoNews