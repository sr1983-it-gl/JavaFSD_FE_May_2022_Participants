
import {useEffect} from "react"
import {getAllExpenseItems} from "../services/expense"
import {Container} from "react-bootstrap"
import { ExpenseItems } from "./expense-items"

const ExpenseTracker = () => {


  useEffect( () => {

    const getAllExpenseItemsInvoker = async () => {
      try{
        const response = await getAllExpenseItems();
        console.log(response);
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
      <ExpenseItems></ExpenseItems>
    </Container>
  )
}

export {ExpenseTracker}