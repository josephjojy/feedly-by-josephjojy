import {React} from "react";
import {Button, Modal, Typography, Input} from '@bigbinary/neetoui/v2'
import subscribe from '../../resourses/subscribe.png'


const Subscribe = ({showModal,setShowModal}) => {
  
    return (
      <div className="w-full">
        <Modal isOpen={showModal} size="xs" closeButton={false}>

          <Modal.Body className="mt-8">
            <img src={subscribe} alt="subscribe image"/>
            <Typography style="h2" className="mt-4">Subscribe to Feed.ly</Typography>
            <Typography style="body2" lineHeight="normal">
            We don't spam, but, we deliver the latest news in short.
            </Typography>
            <Input placeholder="oliver@example.com" type="email" className="pt-4"/>
          </Modal.Body>
          <Modal.Footer className="space-x-2">
            <Button
              label="Sign Up"
              onClick={() => setShowModal(false)}
              size="large"
            />
            <Button
              style="text"
              label="Cancel"
              onClick={() => setShowModal(false)}
              size="large"
            />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

 export default Subscribe; 