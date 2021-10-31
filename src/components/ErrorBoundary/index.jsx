import React from "react";
import ErrorImg from "../../resourses/Error.png"
import {Button,Typography} from "@bigbinary/neetoui/v2"
import { Home } from "@bigbinary/neeto-icons";



class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full">
            <img src={ErrorImg} className="pb-4" alt="error"/>
            <Typography style="h3" className="max-w-xs  text-center">You have landed somewhere unknown.</Typography>
            <a href = "/">
                <Button
                    className="mt-5"
                    icon={Home}
                    label="Take me home"
                    style="secondary"
                    size="large"
                    iconPosition="left"
                />
            </a>
        </div>
        )
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary