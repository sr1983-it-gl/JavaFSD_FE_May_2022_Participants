
import {Table} from "react-bootstrap"
import IExpenseItem from "../models/expense"

import {format} from "date-fns";

type ExpenseItemsModel = {

  expenseItems : IExpenseItem[];

}

const ExpenseItems = ({expenseItems} : ExpenseItemsModel) => {

  const defaultExpenseItems : IExpenseItem[] = [
    {
      "expenseDescription": "Paid Internet Bill",
      "payeeName": "Rahul",
      "price": 1200,
      "date": new Date(),
      "id": 2
    },
    {
      "expenseDescription": "Trip to Delhi",
      "payeeName": "Ramesh",
      "price": 10000,
      "date": new Date(),
      "id": 3
    },
    {
      "expenseDescription": "Bought a Car",
      "payeeName": "Rahul",
      "price": 123456,
      "date": new Date(),
      "id": 4
    }    
  ]

  const convertDateAsString = (date : Date) => {
    // TODO
    return format(new Date(), "yyyy-MM-dd");
  }

  return (
    <div>

      <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Expense Description</th>
                <th>Payee</th>
                <th>Expense Date</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>

              {
                expenseItems.map( (expenseItem : IExpenseItem, index) => {

                  return (
                    <tr>
                    <td>{index + 1}</td>
                    <td>{expenseItem.expenseDescription}</td>
                    <td>{expenseItem.payeeName}</td>
                    <td>{convertDateAsString(expenseItem.date)}</td>
                    <td>{expenseItem.price}</td>
                  </tr>    
                  )
                })
              }

            </tbody>
          </Table>
          
    </div>
  )
}

export {ExpenseItems}

