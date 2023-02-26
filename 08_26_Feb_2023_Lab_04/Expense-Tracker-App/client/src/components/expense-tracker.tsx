
import {useEffect} from "react"
import {getAllExpenseItems} from "../services/expense"

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

    getAllExpenseItemsInvoker();

  }, [])

  return (
    <div>
      Expense Tracker Component
    </div>
  )
}

export {ExpenseTracker}