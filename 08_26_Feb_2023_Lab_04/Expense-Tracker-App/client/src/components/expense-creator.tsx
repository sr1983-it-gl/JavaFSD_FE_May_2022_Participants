
import {Button, Modal, Form} from "react-bootstrap"

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
        <Modal.Title>Add Expense Item</Modal.Title>
      </Modal.Header>

      <Modal.Body>

          <Form>
            
            <Form.Group className="mb-3" controlId="expenseDescription">
              <Form.Label>Expense Description</Form.Label>
              <Form.Control type="text" placeholder="Enter expense description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="payeeName">
              <Form.Label>Payee</Form.Label>

                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>

            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label>price</Form.Label>
              <Form.Control type="number" placeholder="Enter price" />
            </Form.Group>            

            <Form.Group className="mb-3" controlId="expenseDate">
              <Form.Label>Expense Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>            

            <Button variant="primary" type="submit">
              Add Expense Item
            </Button>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Form>
      </Modal.Body>

    </Modal>    

    </>
  )
}

export {ExpenseCreator};