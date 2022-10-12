import { Form, Input, InputNumber } from "antd";
import React from "react";
import "../CSS/budgetForm.css";

const BudgetForm = () => {
    return (
        <div className="budget">
            <h1 className="utgifter">Utgifter</h1>
            <div className="budget__form">
                <div className="budget__form__left">
                    <Form.Item
                    name="income" 
                    rules={[{required: true, message: "Inkomst måste nämnas", min: 1}]}
                    label="Inkomst">
                        <InputNumber
                        name="income"
                        placeholder="Nämn din inkomst"
                        //value={cardName}
                        />
                    </Form.Item>
                </div>
                <div className="budget__form__center">
                    <Form layout="vertical">
                        <Form.Item 
                        name="rent"
                        label="Hyra">
                            <InputNumber
                            name="rent"
                            placeholder="Nämn din hyra"
                            //value={cardName}
                            />
                        </Form.Item>
                        <Form.Item 
                        name="food"
                        label="Mat">
                            <InputNumber
                            name="food"
                            placeholder="Nämn dina mat utgifter"
                            //value={cardName}
                            />
                        </Form.Item>
                        <Form.Item 
                        name="transport"
                        label="Transport">
                            <InputNumber
                            name="transport"
                            placeholder="Nämn dina transport utgifter"
                            //value={cardName}
                            />
                        </Form.Item>
                        <Form.Item 
                        name="gym"
                        label="Gym">
                            <InputNumber
                            name="gym"
                            placeholder="Nämn dina gym utgifter"
                            //value={cardName}
                            />
                        </Form.Item>
                    </Form>
                </div>
                <div className="budget__form__right">
                    <Form.Item
                        className="history"
                        name="history"
                        label="Historik">
                    </Form.Item>
                </div>
            </div>
        </div>
    )
}

export default BudgetForm;