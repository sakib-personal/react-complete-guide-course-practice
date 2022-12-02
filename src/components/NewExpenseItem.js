import "./NewExpenseItem.css";
import ExpenseItem from "./ExpenseItem";

function NewExpenseItem(props) {
  return (
    <ExpenseItem
      title={props.title}
      amount={props.amount}
      date={props.date}
    ></ExpenseItem>
  );
}

export default NewExpenseItem;
