import React, { useState, useEffect } from "react";
import CustomerForm from "./CustomerForm";
import CustomerTable from "./customerTable";
import "./App.css";
import filterIcon from "./assets/images/filter.svg";
import searchIcon from "./assets/images/search.svg";
function App() {
    const [customers, setCustomers] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("customers")) || [];
        setCustomers(savedData);
    }, []);

    const addCustomer = (customer) => {
        const updatedList = [...customers, customer];
        setCustomers(updatedList);
        localStorage.setItem("customers", JSON.stringify(updatedList));
        setShowForm(false);
    };

    const deleteCustomer = (index) => {
        if (window.confirm("Rostdan ham o'chirmoqchimisiz?")) {
            const updatedList = customers.filter((_, i) => i !== index);
            setCustomers(updatedList);
            localStorage.setItem("customers", JSON.stringify(updatedList));
        }
    };

    return (
        <div className="container">
            <header className="header">
                <button>
                    <img src={filterIcon} alt="Filter" />
                </button>
                <div className="search-box">
                    <img src={searchIcon} alt="Search" />
                    <input type="text" placeholder="Search" />
                </div>
                <button className="add-btn" onClick={() => setShowForm(true)}>
                    Add Customer
                </button>
            </header>

            <CustomerTable data={customers} onDelete={deleteCustomer} />

            {showForm && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Add New Customer</h2>
                        <CustomerForm onSave={addCustomer} />
                        <button className="close-btn" onClick={() => setShowForm(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
