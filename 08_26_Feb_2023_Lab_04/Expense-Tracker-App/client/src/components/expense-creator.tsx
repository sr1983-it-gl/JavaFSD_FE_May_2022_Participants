
import {Button, Modal} from "react-bootstrap"

import {useState} from "react"

const ExpenseCreator = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  return (

    <>

    <Button variant="primary" className="float-end" onClick={handleShow}>Create Expense Item</Button>

    <Modal show={show} onHide={handleClose}>
      
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>

      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>


    </Modal>    

    </>
  )
}

export {ExpenseCreator};