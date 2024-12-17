import React, { useState } from "react";

function CustomerForm({ onSave }) {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        rate: "",
        balance: "",
        deposit: "",
        status: "ACTIVE",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label>
                Name <br />
                <input name="name" value={formData.name} onChange={handleChange} required />
            </label><br />
            <label>
                Description <br />
                <input name="description" value={formData.description} onChange={handleChange} required maxlength="50" />
            </label><br />
            <label>
                Rate <br />
                <input type="number" name="rate" value={formData.rate} onChange={handleChange} required />
            </label><br />
            <label>
                Balance <br />
                <input type="number" name="balance" value={formData.balance} onChange={handleChange} required />
            </label><br />
            <label>
                Deposit <br />
                <input type="number" name="deposit" value={formData.deposit} onChange={handleChange} required />
            </label><br />
            <label>
                Status <br />
                <select name="status" value={formData.status} onChange={handleChange}>
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                </select>
            </label><br />
            <button className="save-btn" type="submit">Save</button>
        </form>
    );
}

export default CustomerForm;
