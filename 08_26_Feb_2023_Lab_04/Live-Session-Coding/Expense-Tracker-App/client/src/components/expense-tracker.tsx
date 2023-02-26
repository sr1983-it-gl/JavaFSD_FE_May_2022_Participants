
import {useEffect, useState} from "react"
import {getAllExpenseItems} from "../services/expense"
import {Container} from "react-bootstrap"
import { ExpenseItems } from "./expense-items"
import IExpenseItem from "../models/expense"
import { ExpenseByPayees } from "./expense-by-payees"
import { ExpenseByPendingAmount } from "./expense-by-pending-amount"
import { ExpenseCreator } from "./expense-creator"


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

  const refreshParentUponNewExpenseAddition = (newlyCreatedExpenseItem : IExpenseItem) => {

    setExpenseItems(
      [
        newlyCreatedExpenseItem,
        ...expenseItems
      ]
    )
    // Refresh code
  }

  return (
    <Container>
      <h2>Expense Items

        <ExpenseCreator expenseItems={expenseItems} refreshParent={refreshParentUponNewExpenseAddition}></ExpenseCreator>
      </h2>
      <ExpenseItems expenseItems={expenseItems}></ExpenseItems>

      <ExpenseByPayees expenseItems={expenseItems}></ExpenseByPayees>

      <ExpenseByPendingAmount expenseItems={expenseItems}></ExpenseByPendingAmount>
    </Container>
  )
}

export {ExpenseTracker}