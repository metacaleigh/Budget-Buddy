import React, { useState } from 'react'

function Transactions({ description, id, amount, category, date, handleDelete, index }) {
    
    const table = ((index + 1) % 2 == 0) ? "TableDataEven" : "TableDataOdd"


    return(
        <>
        <tr className={`${table}`}>
            <td>
                <button className="transaction-button" onClick={() => handleDelete(id)}> ✖︎ </button>
                <button className="transaction-button" > ✎ </button>
                {date}
            </td>
            <td>{description}</td>
            <td>$ {amount}</td>
            <td>{category}</td>
        </tr>       
        </>
    )
}

export default Transactions