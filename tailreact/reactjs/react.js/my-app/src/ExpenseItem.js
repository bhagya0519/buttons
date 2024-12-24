import ExpenseDate from "./components/ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props){

return(
    <div className="expense">
      <ExpenseDate date = {props.date} />
        <div className="item">
            <h2> {props.title} </h2>
            <div className="price">$ {props.amount} 
            </div>
    </div>
</div>
);
}
export default ExpenseItem;