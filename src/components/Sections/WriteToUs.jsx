import {React,useState} from "react";
import {Button, Modal, Typography, Input, Textarea} from '@bigbinary/neetoui/v2'
import axios from "axios";
import { WebHookURL } from "../../constants";

const WriteToUs = ({showModal,setShowModal}) =>{

    const [userMsg, setUserMeg] = useState({});

    const handleChange = (e) =>{
        setUserMeg((message) => ({
            ...message,
            [e.target.id]: e.target.value
          }));
    }

    const handleSubmit = async() =>{
            const response = await axios.post(WebHookURL,{userMsg})
            setUserMeg()
    }

    return(
        <div>
        <Modal
            isOpen={showModal}
            closeButton={false}
            size="md"
        >
        <Modal.Body className="mt-5">
          <div className="mt-8 ml-auto mr-auto">
            <Typography style="h2" className="py-2">Can't find what you came for?</Typography>
            <Typography style="body2" className="pb-6">
              Write to us about which category interests you and we will Fetch
              them for you daily, for free.
            </Typography>
            <div className="flex">
                <Input className="pr-5" id="name" label="Name" placeholder="Oliver Smith"  onChange={handleChange}/>
                <Input label="Email" id="email" placeholder="oliver@example.com" onChange={handleChange}/>
            </div>
            <Textarea className="pt-5" id="message" label="Message" placeholder="Write your message here." onChange={handleChange}/>
          </div>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            size="large"
            label="Submit"
            onClick={() => {setShowModal(false);handleSubmit()}}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => {setShowModal(false);setUserMeg()}}
          />
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default WriteToUs