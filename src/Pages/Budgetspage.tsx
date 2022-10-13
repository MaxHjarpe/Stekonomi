import React from "react";
import "../CSS/budgets.css";
import "../Components/Budgets.tsx";
import "../Components/Footer.tsx";

const Budgetspage = () => {
  return (
    <div className="flex-container">
        <h1 className="Rubrik">Dina budgets</h1>
      
      <button className="button1">Namn, 2022-07-22</button>
      <button className="button2">Namn2, 2022-08-22</button>
      <button className="button3">Namn3, 2022-09-22</button>
    </div>
  );
};

export default Budgetspage;
