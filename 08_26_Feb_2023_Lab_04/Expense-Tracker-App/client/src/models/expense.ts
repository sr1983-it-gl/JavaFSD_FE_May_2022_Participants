
interface IExpenseItem {

  expenseDescription: string,
  payeeName: string,
  price: number,
  date: Date,
  id: number  
}

export type IExpenseCreateItem = Omit<IExpenseItem, "id">;

export default IExpenseItem;