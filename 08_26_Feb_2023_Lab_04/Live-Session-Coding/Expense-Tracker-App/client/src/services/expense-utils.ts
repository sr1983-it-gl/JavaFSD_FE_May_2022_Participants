import IExpenseItem from "../models/expense";

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

const getGrandTotal = (expenseItems : IExpenseItem[]) => {

  let grandTotalAmount = 0;

  expenseItems.forEach((expenseItem) => {

    grandTotalAmount += expenseItem.price;
  })

  return grandTotalAmount;    
}


const getTotalExpenseByPayee = (payeeName : string, expenseItems : IExpenseItem[]) => {

  let totalContributedAmount = 0;

  expenseItems.forEach((expenseItem) => {

    if (expenseItem.payeeName === payeeName){
      totalContributedAmount += expenseItem.price;
    }
  })

  return totalContributedAmount;
}


export {getUniquePayeeNames, getGrandTotal, getTotalExpenseByPayee}