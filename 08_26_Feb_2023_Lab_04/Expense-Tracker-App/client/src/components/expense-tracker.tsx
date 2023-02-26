
import {useEffect, useState} from "react"
import {getAllExpenseItems} from "../services/expense"
import {Container} from "react-bootstrap"
import { ExpenseItems } from "./expense-items"
import IExpenseItem from "../models/expense"
import { ExpenseByPayees } from "./expense-by-payees"


const ExpenseTracker = () => {

  const [expenseItems, setExpenseItems] 
    = useState<IExpenseItem[]>([])

  useEffect( () => {

    const getAllExpenseItemsInvoker = async () => {
      try{
        const response = await getAllExpenseItems();
        console.log(response);
        setExpenseItems(response);
      }catch(error){
        console.log(error);
      }  
    }

    // let x = 
    getAllExpenseItemsInvoker();

  }, [])

  return (
    <Container>
      <h2>Expense Items</h2>
      <ExpenseItems expenseItems={expenseItems}></ExpenseItems>

      <ExpenseByPayees expenseItems={expenseItems}></ExpenseByPayees>
    </Container>
  )
}

export {ExpenseTracker}