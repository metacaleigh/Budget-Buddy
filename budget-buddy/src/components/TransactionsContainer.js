import React, { useState, useEffect } from 'react'
import TransactionList from './TransactionList'
import Search from './Search'
import NewTransactionForm from './NewTransactionForm'
import DateFilter from './DateFilter'
import PieChart from './PieChart'

function TransactionsContainer() {
    const baseUrl = "http://localhost:3000/transactions"

    const [transactions, setTransactions] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json()) 
            .then(transactions => setTransactions(transactions))
    }, [])

    const filteredTransactions = transactions.filter((transaction) => {
        return transaction.description.toLowerCase().includes(search.toLowerCase())
    })

    function onFormSubmit(newTransaction) {
        const newTransactionBody = {
            ...newTransaction,
            amount: Number(newTransaction.amount)
        }

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTransactionBody)
        })
            .then(res => res.json())
            .then(setTransactions([...transactions, newTransaction]))
    }

    function handleDelete(id) {
        const newList = filteredTransactions.filter((transaction) => transaction.id !== id)
        .map((transaction, index) => ({ ...transaction, id: Number(index)+ 1}))
        fetch(baseUrl + `/${id}`, {method: 'DELETE'})
          .then(setTransactions(newList))
    }

    return(
        <div>
            <Search search={search} setSearch={setSearch}/>
            <NewTransactionForm onFormSubmit={onFormSubmit}/>
            <DateFilter />
            <table className="TransactionTable">
                <tbody>
                    <tr>
                        <th className="TableHeader">
                            <h3>Date</h3>
                        </th>
                        <th className="TableHeader">
                            <h3>Description</h3>
                        </th>
                        <th className="TableHeader">
                            <h3>Amount</h3>
                        </th>
                        <th className="TableHeader">
                            <h3>Category</h3>
                        </th>
                    </tr>
                    <TransactionList transactions={filteredTransactions} handleDelete={handleDelete} />
                </tbody>
            </table>
            <PieChart />
        </div>
    )
}

export default TransactionsContainer