import React from 'react'
import Transactions from './Transactions'

function TransactionList({ transactions, handleDelete }) {
    const transactionItems= transactions.map((transaction => {
        return <Transactions key={transaction.id} {...transaction} handleDelete={handleDelete}/> 
    }))
    return(
        <>
            {transactionItems}
        </>
    )
}

export default TransactionList