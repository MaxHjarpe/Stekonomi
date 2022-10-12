import { Button } from "antd";
import React from "react";
import "../CSS/budgetForm.css";

const BudgetForm = () => {
    return (
        <div className="budget">
            <h1 className="utgifter">Utgifter</h1>
            <form>
                <div className="budget__form">
                    <div className="budget__form__left">
                        <p className="income">Inkomst</p>
                        <input type="number" required />
                    </div>
                    <div className="budget__form__center">
                        <div className="formItem">
                            <label className="formItemTitle">Hyra</label>
                            <input id="hyra" className="formItemInput" type="number" />
                        </div>
                        <div className="formItem">
                            <label className="formItemTitle">Mat</label>
                            <input id="food" className="formItemInput" type="number" />
                        </div>
                        <div className="formItem">
                            <label className="formItemTitle">Transport</label>
                            <input id="transport" className="formItemInput" type="number" />
                        </div>
                        <div className="formItem">
                            <label className="formItemTitle">Gym</label>
                            <input id="gym" className="formItemInput" type="number" />
                        </div>
                    </div>
                    <div className="budget__form__right">
                        <button 
                        className="budget__button"
                        //onClick={}
                        >
                            Historik
                        </button>
                    </div>
                </div>
                <div className="budget__success">
                    <button className="budget__button">Beräkna</button>
                </div>
            </form>
        </div>
    )
}

export default BudgetForm;