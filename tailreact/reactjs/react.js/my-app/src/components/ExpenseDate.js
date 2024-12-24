 function ExpenseDate(props){
    const month = props.date.toLocalString('en-us', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocalString('en-us', {day: '2-digit'});

    return(
        <div className="expense-date"> 
            <div className="expense-date_month"> {month} </div>
            <div className='expense-date_year'> {year} </div>
            <div className='.expense-date_day'> {day} </div>
        </div>
    );
}

export default ExpenseDate;