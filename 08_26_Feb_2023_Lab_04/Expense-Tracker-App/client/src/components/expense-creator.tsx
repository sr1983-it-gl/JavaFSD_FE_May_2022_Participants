
import {Button, Modal, Form} from "react-bootstrap"

import {useState} from "react"
import { getUniquePayeeNames } from "../services/expense-utils";
import IExpenseItem from "../models/expense";

type ExpenseCreatorModel = {
  expenseItems : IExpenseItem[]
}

const ExpenseCreator = ({expenseItems} : ExpenseCreatorModel) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  const uniquePayeeNames = getUniquePayeeNames(expenseItems)

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

                  <option>SELECT A PAYEE</option>

                  {
                    uniquePayeeNames.map( (payeeName) => {
                        return (
                          <option value={payeeName}>{payeeName}</option>
                        )
                    })
                  }
              
                
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