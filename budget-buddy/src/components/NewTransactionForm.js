import React, { useState } from 'react'

function NewTransactionForm({ onFormSubmit }) {

    const initialFormData = {
        description: "",
        category: "",
        amount: "",
        date: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    function handleFormSubmit(e) {
        e.preventDefault()
        onFormSubmit(formData)
        setFormData(initialFormData)
    }

    return(
        <div >
            <form id="form-flex" onSubmit={handleFormSubmit}>
                <h1 id="form-header">Add new transaction:</h1>
                <input 
                    name="date" 
                    onChange={handleFormChange} 
                    value={formData.date} 
                    type="date" 
                    placeholder="Date">
                </input>
                <div className="divider"/>
                <input 
                    className="form-input"
                    name="description" 
                    onChange={handleFormChange} 
                    value={formData.description} 
                    type="text" 
                    placeholder="Description">
                </input>
                <div className="divider"/>
                <input 
                    name="amount" 
                    onChange={handleFormChange} 
                    value={formData.amount} 
                    type="number" 
                    placeholder="Amount">
                </input>
                <div className="divider"/>
                <input 
                    className="form-input"
                    name="category" 
                    onChange={handleFormChange} 
                    value={formData.category} 
                    type="text" 
                    placeholder="Category">
                </input>
                <div className="divider"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewTransactionForm