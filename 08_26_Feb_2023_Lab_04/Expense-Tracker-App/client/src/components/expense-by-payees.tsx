
import {Table} from "react-bootstrap"
import IExpenseItem from "../models/expense"

type ExpenseByPayeesModel = {
  expenseItems : IExpenseItem[];
}

const ExpenseByPayees = ({expenseItems} : ExpenseByPayeesModel) => {

  const getUniquePayeeNames = (expenseItems : IExpenseItem[]) => {

    // let tempSet = new Set(expenseItems.payeeNames);

    const uniquePayeeNames : string[] = [];

    expenseItems.forEach( (expenseItem) => {

      let payeeName = expenseItem.payeeName;
      if (!uniquePayeeNames.includes(payeeName)){
        uniquePayeeNames.push(payeeName);
      }
    })

    return uniquePayeeNames;
  }

  const uniquePayeeNames = getUniquePayeeNames(expenseItems);

  const getTotalContributedAmount = (payeeName : string) => {

    let totalContributedAmount = 0;

    expenseItems.forEach((expenseItem) => {

      if (expenseItem.payeeName === payeeName){
        totalContributedAmount += expenseItem.price;
      }
    })

    return totalContributedAmount;
  }

  const getGrandTotal = () => {

    let grandTotalAmount = 0;

    expenseItems.forEach((expenseItem) => {

      grandTotalAmount += expenseItem.price;
    })

    return grandTotalAmount;    
  }

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
            <td>{getTotalContributedAmount(payeeName)}</td>
          </tr>    
          )
        })
      }

          <tr>
            <td></td>
            <td>GRAND TOTAL</td>
            <td>{getGrandTotal()}</td>
          </tr>    

    </tbody>
  </Table>

  );
}

export {ExpenseByPayees}