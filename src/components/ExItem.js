import React from "react";
import "./ExItem.css";
function ExItem(){
    const expDate = new Date(2024,5,22);
    const exptitle = "Buy New Car";
    const expamount = 90000;
    return (
        <div className="expense-item">
            <div>{expDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{exptitle}</h2>
                <div className="expense-item__price">${expamount}</div>
            </div>
        </div>
    );
}
export default ExItem;