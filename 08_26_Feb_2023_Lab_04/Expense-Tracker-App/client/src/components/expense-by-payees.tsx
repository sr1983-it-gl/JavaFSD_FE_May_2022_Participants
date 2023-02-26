
import {Table} from "react-bootstrap"
import IExpenseItem from "../models/expense"
import {getUniquePayeeNames, getGrandTotal, getTotalExpenseByPayee} from "../services/expense-utils";

type ExpenseByPayeesModel = {
  expenseItems : IExpenseItem[];
}

const ExpenseByPayees = ({expenseItems} : ExpenseByPayeesModel) => {

  const uniquePayeeNames = getUniquePayeeNames(expenseItems);

  return (

    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Payee Name</th>
        <th>Contributed Amount</th>
      </tr>
    </thead>

    <tbody>

      {
        uniquePayeeNames.map( (payeeName, index) => {

          return (
            <tr>
            <td>{index + 1}</td>
            <td>{payeeName}</td>
            <td>{getTotalExpenseByPayee(payeeName, expenseItems)}</td>
          </tr>    
          )
        })
      }

          <tr>
            <td></td>
            <td>GRAND TOTAL</td>
            <td>{getGrandTotal(expenseItems)}</td>
          </tr>    

    </tbody>
  </Table>

  );
}

export {ExpenseByPayees}