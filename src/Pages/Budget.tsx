import React from "react"
import BudgetForm from "../Components/BudgetForm";
import "../CSS/budgetPage.css";
import background from "../assets/backgroundWave.svg";


const Budget = () => {
    return (
        <div>
        <img className="backgroundImg" src={background} alt="" />

            <h1 className="date">Januari 2022</h1>
            <BudgetForm/>
        </div>
    )
}

export default Budget;