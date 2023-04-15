import Button from "../UI/Button";
import { ExpensesModal } from "../newExpenses/ExpensesModal"
import { useState } from "react";

export const NewExpense = ({ onSubmit }) => {
    const [ showModal, setShowModal ] = useState(false);

    function openAndCloseExpensesModalHandler() {
       setShowModal((prev) => !prev);
    }

  return (
    <div>
      { showModal ? (
        <ExpensesModal 
          onClick={ openAndCloseExpensesModalHandler } 
          onSubmit={onSubmit}
        /> 
        ) : (
          <div style={{
            backgroundColor: "blue",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}>
            <h2>Favorite Movie</h2>
            <Button onClick={ openAndCloseExpensesModalHandler }>
              Add Movie
            </Button>
          </div> )}
    </div> 
  )
}