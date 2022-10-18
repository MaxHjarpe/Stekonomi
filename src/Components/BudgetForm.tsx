import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../CSS/budgetForm.css";

const BudgetForm = () => {
    return (
        <>
            <h1 className="utgifter">Utgifter</h1>
            <div className="budget">

                <div className="budget__form__left">
                    <p className="income">Inkomst</p>
                    <input type="number" required />
                </div>

                <form className="budget__form">
                    {/* <div> */}
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
                            <label className="formItemTitle">Övrigt</label>
                            <input id="other" className="formItemInput" type="number" />
                        </div>
                        <div className="budget__success">
                    <Link to="/budgets">

                            <button className="budget__button submit__button">Beräkna</button>
                    </Link>

                        </div>
                        {/* </div> */}
                    </div>
                </form>

                <div className="budget__form__right">
                    <Link to="/budgets">
                    <button
                        className="budget__button history__button"
                    //onClick={}
                    >
                        Historik
                    </button>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default BudgetForm;