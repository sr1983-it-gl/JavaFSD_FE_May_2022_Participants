
import {Table} from "react-bootstrap"
import IExpenseItem from "../models/expense"
import {getUniquePayeeNames, getGrandTotal, getTotalExpenseByPayee} from "../services/expense-utils";

type ExpenseByPendingAmountModel = {
  expenseItems : IExpenseItem[];
}

const ExpenseByPendingAmount = ({expenseItems} : ExpenseByPendingAmountModel) => {

  const uniquePayeeNames = getUniquePayeeNames(expenseItems);

  const getPendingAmount = (payeeName : string) => {

    // Generic Expense Formula - For more than 2 people
    // n -> No of persons
    // ( (1 / n) * totalExpenses) - totalExpenseByPayee

    // Total Expenses - 1000    
    // Scenario-1
      // Ramesh 600
    // Scenario-2
     // Ramesh -> 300

    const totalExpenses = getGrandTotal(expenseItems);
    const totalExpenseByPayee = getTotalExpenseByPayee(payeeName, expenseItems);

    const halfAmount = totalExpenses / 2;

    if (totalExpenseByPayee >= halfAmount){
      return 0;
    }else{
      return (halfAmount - totalExpenseByPayee)
        // 500 - 300
    }
  } 

  // const PAYEE_TO_PAYEE = " ===> "

  return (

    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Payee {`<=>`} Payee</th>
        <th>Pending Amount</th>
      </tr>
    </thead>

    <tbody>

      {
        uniquePayeeNames.map( (payeeName, index) => {

          return (
            <tr>
            <td>{index + 1}</td>
            <td>{payeeName}</td>
            <td>{getPendingAmount(payeeName)}</td>
          </tr>    
          )
        })
      } 

    </tbody>
  </Table>

  );
}

export {ExpenseByPendingAmount}