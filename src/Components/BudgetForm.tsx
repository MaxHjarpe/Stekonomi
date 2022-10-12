import { Form, Input, InputNumber } from "antd";
import React from "react";

const BudgetForm = () => {
    <div className="budget">
        <div className="budget__form">
            <h1>Utgifter</h1>
            <Form layout="horizontal">
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
                <Form.Item 
                    name="histoty"
                    label="Historik">
                </Form.Item>
            </Form>
        </div>
    </div>
}

export default BudgetForm;