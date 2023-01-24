import React, { useState, useEffect } from 'react'
import TransactionList from './TransactionList'
import Search from './Search'
import DateFilter from './DateFilter'
import PieChart from './PieChart'
import Wallet from '../images/Wallet.png'
import UserWallet from './UserWallet'
import CategoryFilter from './CategoryFilter'
import { CATEGORIES } from '../data'



function TransactionsContainer({ transactions, setTransactions, baseUrl, balance }) {
    

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

    const eachCategory = transactions.map((transaction) => {
        return transaction.category
    })

    const eachAmount = transactions.map((transaction) => {
        return transaction.amount
    })
    const eachTransaction = transactions.map((transaction) => {
        return transaction
    })

    let today = new Date()
    let todayString = new Date(today.getTime() - (today.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0]


    function handleTodayClick() {
        const todaysTransactions = transactions.filter((transaction) => {
            if (transaction.date === todayString) {
                return transaction
            }
        })
        setTransactions(todaysTransactions)
    }

    // function handleThisWeekClick() {
    //     const thisWeeksTransactions = transactions.filter((transaction) => {
    //         if
    //     })
    // }

    // function handleThisMonthClick() {
    //     const thisMonthsTransactions = transactions.filter((transaction) => {

    //     })
    // }



    return(
        <div className="transactioncontainer">
            <Search search={search} setSearch={setSearch}/>
            <DateFilter handleTodayClick={handleTodayClick}/> <CategoryFilter categories={CATEGORIES} setSelectedCategory={setSelectedCategory}/>
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
            <div id="wallet-info-flex">
                <img src={Wallet} alt="wallet" id="wallet"/>
                <UserWallet balance={balance}/>
            </div>
            <PieChart category={eachCategory} amount={eachAmount} transaction={eachTransaction}/>
        </div>
    )
}

export default TransactionsContainer