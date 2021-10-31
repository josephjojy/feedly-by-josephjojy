import React from "react";
import ErrorImg from "../../resourses/Error.png"
import {Button,Typography} from "@bigbinary/neetoui/v2"
import { Home } from "@bigbinary/neeto-icons";
import { Link } from "react-router-dom";

const ErrorPage = () =>{
    return(
        <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full">
            <img src={ErrorImg} className="pb-4" alt="error"/>
            <Typography style="h3" className="max-w-xs  text-center">404<br/>Page Not Found</Typography>
            <Link to={{ pathname: "/" }}>
                <Button
                    className="mt-5"
                    icon={Home}
                    label="Take me home"
                    style="secondary"
                    size="large"
                    iconPosition="left"
                />
            </Link>
        </div>
    )
}

export default ErrorPage