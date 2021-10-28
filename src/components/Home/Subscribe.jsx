import {React,useState} from "react";
import {Button, Modal, Typography, Input} from '@bigbinary/neetoui/v2'
import subscribe from '../../resourses/subscribe.png'
import axios from "axios";
import { WebHookURL } from "../../constants";


const Subscribe = ({showModal,setShowModal}) => {

    const [userEmail, setUserEmail] = useState({});

    const handleChange = (e) => {
        setUserEmail((email) => ({
            ...email,
            [e.target.id]: e.target.value
          }));
    }

    const handleSubmit = async() =>{
        const response = await axios.post(WebHookURL,{userEmail})
        setUserEmail()
    }

  
    return (
      <div className="w-full">
        <Modal isOpen={showModal} size="xs" closeButton={false}>

          <Modal.Body className="mt-8">
            <img src={subscribe} alt="subscribe"/>
            <Typography style="h2" className="mt-4">Subscribe to Feed.ly</Typography>
            <Typography style="body2" lineHeight="normal">
            We don't spam, but, we deliver the latest news in short.
            </Typography>
            <Input placeholder="oliver@example.com" id="email" type="email" className="pt-4" onChange={handleChange}/>
          </Modal.Body>
          <Modal.Footer className="space-x-2">
            <Button
              label="Sign Up"
              onClick={() => {setShowModal(false);handleSubmit()}}
              size="large"
            />
            <Button
              style="text"
              label="Cancel"
              onClick={() => {setShowModal(false);setUserEmail()}}
              size="large"
            />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

 export default Subscribe; 