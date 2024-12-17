import React from "react";
import deleteIcon from "./assets/images/delete.svg";
import editIcon from "./assets/images/edit.svg";

function CustomerTable({ data, onDelete }) {
    return (
        <table className="customer-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Rate</th>
                    <th>Balance</th>
                    <th>Deposit</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((customer, index) => (
                    <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                        <td>{index + 1}</td>
                        <td>{customer.name}</td>
                        <td>{customer.description}</td>
                        <td>{customer.rate} INR</td>
                        <td className={customer.balance < 0 ? "negative" : "positive"}>
                            {customer.balance} INR
                        </td>
                        <td>{customer.deposit} INR</td>
                        <td className={customer.status === "ACTIVE" ? "status-active" : "status-inactive"}>
                            {customer.status}
                        </td>
                        <td>
                            <button className="img-edit">
                                <img src={editIcon} alt="Edit" />
                            </button>
                            <button className="img-edit" onClick={() => onDelete(index)}>
                                <img src={deleteIcon} alt="Delete" />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CustomerTable;
