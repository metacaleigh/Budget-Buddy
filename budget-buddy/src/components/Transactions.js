import React, { useState } from 'react'

function Transactions({ description, amount, category, date, id, handleDelete }) {
    
    const table = (id % 2 == 0) ? "TableDataEven" : "TableDataOdd"


    return(
        <>
        <tr className={`${table}`}>
            <td>{date}</td>
            <td>{description}</td>
            <td>$ {amount}</td>
            <td>{category}
                <span>
                    <button onClick={() => handleDelete(id)}>x</button>
                </span>     
            </td>
        </tr>       
        </>
    )
}

export default Transactions