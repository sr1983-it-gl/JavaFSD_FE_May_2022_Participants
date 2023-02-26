
import {Button, Modal, Form} from "react-bootstrap"

import {FormEvent, useState, useRef} from "react"
import { getUniquePayeeNames } from "../services/expense-utils";
import IExpenseItem from "../models/expense";

type ExpenseCreatorModel = {
  expenseItems : IExpenseItem[]
}

const ExpenseCreator = ({expenseItems} : ExpenseCreatorModel) => {

  const expenseDescriptionRef = useRef<HTMLInputElement>(null);
  const payeeNameRef = useRef<HTMLSelectElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const expenseDateRef = useRef<HTMLInputElement>(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  const uniquePayeeNames = getUniquePayeeNames(expenseItems)

  const handleAddExpenseItem = (event : FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    const expenseDescription = expenseDescriptionRef?.current?.value ;
    const payeeName = payeeNameRef?.current?.value;
    const price = priceRef?.current?.value;
    const expenseDate = expenseDateRef?.current?.value;

    // Invoke the POST API

    console.log(expenseDescription);
    console.log(payeeName);
    console.log(price);
    console.log(expenseDate);


    handleClose();
  }

  return (

    <>

    <Button variant="primary" className="float-end" onClick={handleShow}>Create Expense Item</Button>

    <Modal show={show} onHide={handleClose}>
      
      <Modal.Header closeButton>
        <Modal.Title>Add Expense Item</Modal.Title>
      </Modal.Header>

      <Modal.Body>

          <Form onSubmit={handleAddExpenseItem}>
            
            <Form.Group className="mb-3" controlId="expenseDescription">
              <Form.Label>Expense Description</Form.Label>
              <Form.Control type="text" placeholder="Enter expense description" ref={expenseDescriptionRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="payeeName">
              <Form.Label>Payee</Form.Label>

                <Form.Select aria-label="Default select example" ref={payeeNameRef}>

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
              <Form.Control type="number" placeholder="Enter price" ref={priceRef}/>
            </Form.Group>            

            <Form.Group className="mb-3" controlId="expenseDate">
              <Form.Label>Expense Date</Form.Label>
              <Form.Control type="date" ref={expenseDateRef}/>
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