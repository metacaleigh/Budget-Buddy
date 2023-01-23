import React, { useState, useEffect } from 'react'
import TransactionList from './TransactionList'
import Search from './Search'
import NewTransactionForm from './NewTransactionForm'
import DateFilter from './DateFilter'
import PieChart from './PieChart'
import Wallet from '../images/Wallet.png'
import UserWallet from './UserWallet'
import CategoryFilter from './CategoryFilter'
import { CATEGORIES } from '../data'


function TransactionsContainer({ transactions, setTransactions, baseUrl}) {
    

    const [search, setSearch] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json()) 
            .then(transactions => setTransactions(transactions))
    }, [])

    const filteredTransactions = transactions.filter((transaction) => {
        return transaction.description.toLowerCase().includes(search.toLowerCase())
    })

   

    function handleDelete(id) {
        const newList = filteredTransactions.filter((transaction) => transaction.id !== id)
        fetch(baseUrl + `/${id}`, {method: 'DELETE'})
          .then(setTransactions(newList))
    }

    return(
        <div>
            <Search search={search} setSearch={setSearch}/>
            <DateFilter /> <CategoryFilter categories={CATEGORIES} setSelectedCategory={setSelectedCategory}/>
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
            <div>
                <img src={Wallet} alt="wallet" id="wallet"/>
                <UserWallet />
            </div>
            <PieChart />
        </div>
    )
}

export default TransactionsContainer