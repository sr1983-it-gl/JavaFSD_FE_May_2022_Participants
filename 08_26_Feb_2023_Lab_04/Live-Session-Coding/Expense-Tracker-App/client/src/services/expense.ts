
import axios from "axios";
import IExpenseItem, { IExpenseCreateItem } from "../models/expense";

// const GET_EXPENSE_ITEMS_URL = "http://localhost:4000/items";

const GET_EXPENSE_ITEMS_URL = "http://localhost:4000/items?_sort=date&_order=desc";


const getAllExpenseItems = async () => {

    const response 
      = await axios.get<IExpenseItem[]>(
          GET_EXPENSE_ITEMS_URL);
    return response.data;
}

const POST_EXPENSE_ITEMS_URL = "http://localhost:4000/items";
const postExpenseItem = async (newExpenseItem : IExpenseCreateItem) => {

  const response 
    = await axios.post(
        POST_EXPENSE_ITEMS_URL, newExpenseItem, {
          headers : {
            'Content-Type' : 'application/json'
          }
        });
  return response.data;
}

export {getAllExpenseItems, postExpenseItem}