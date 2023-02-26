
import {Button, Modal, Form} from "react-bootstrap"

import {FormEvent, useState, useRef} from "react"
import { getUniquePayeeNames } from "../services/expense-utils";
import IExpenseItem, { IExpenseCreateItem } from "../models/expense";
import { postExpenseItem } from "../services/expense";

type ExpenseCreatorModel = {
  expenseItems : IExpenseItem[];
  refreshParent : (newlyCreatedExpenseItem : IExpenseItem) => void;
}

const ExpenseCreator = ({expenseItems, refreshParent} : ExpenseCreatorModel) => {

  const expenseDescriptionRef = useRef<HTMLInputElement>(null);
  const payeeNameRef = useRef<HTMLSelectElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const expenseDateRef = useRef<HTMLInputElement>(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  const uniquePayeeNames = getUniquePayeeNames(expenseItems)

  const handleAddExpenseItem = async (event : FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    const expenseDescription = 
      (expenseDescriptionRef?.current?.value as string);
    const payeeName = 
      (payeeNameRef?.current?.value as string);
    const price = 
     parseFloat ( (priceRef?.current?.value as string));
    const expenseDate = 
      new Date(
      (expenseDateRef?.current?.value as string));


    console.log(expenseDescription);
    console.log(payeeName);
    console.log(price);
    console.log(expenseDate);

    const newExpenseItem : IExpenseCreateItem = {

      expenseDescription: expenseDescription,
      payeeName: payeeName,
      price: price,
      date: expenseDate
    }

     // Invoke the POST API
    const newlyCreatedExpenseItem 
      = await postExpenseItem(newExpenseItem);

    console.log("New Expense Item Object " + JSON.stringify(newlyCreatedExpenseItem));

    // Call something on parent
    refreshParent(newlyCreatedExpenseItem);

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