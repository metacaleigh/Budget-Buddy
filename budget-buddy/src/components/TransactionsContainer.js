import React, { useState, useEffect } from 'react'
import TransactionList from './TransactionList'
import Search from './Search'
import DateFilter from './DateFilter'
import PieChart from './PieChart'
import Wallet from '../images/Wallet.png'
import UserWallet from './UserWallet'
// import CategoryFilter from './CategoryFilter'
import { CATEGORIES } from '../data'
import Moment from 'react-moment'
import moment from 'moment'



function TransactionsContainer({ transactions, setTransactions, baseUrl, balance, transactionTotal, setTransactionTotal }) {
    

    const [search, setSearch] = useState("")
    const [filteredTrans, setFilteredTrans] = useState([])
    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json()) 
            .then(transactions => {setTransactions(transactions)
                setFilteredTrans(transactions)
            })
    }, [])

    const filteredTransactions = transactions.filter((transaction) => {
        return transaction.description.toLowerCase().includes(search.toLowerCase()) ||
        transaction.category.toLowerCase().includes(search.toLowerCase())
    })

    function handleDelete(id) {
        const newList = filteredTransactions.filter((transaction) => transaction.id !== id)
        fetch(baseUrl + `/${id}`, {method: 'DELETE'})
          .then(setTransactions(newList))
    }

    const eachCategory = filteredTrans.map((transaction) => {
        return transaction.category
    })

    const eachAmount = filteredTrans.map((transaction) => {
        return transaction.amount
    })
    const eachTransaction = filteredTrans.map((transaction) => {
        return transaction
    })

    let today = new Date()
    let todayString = new Date(today.getTime() - (today.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0]


    function handleClick(e) {
        const filter = e.target.name
        setFilteredTrans(transactions)
        if (filter === 'Today') {
            const todaysTransactions = filteredTransactions.filter((transaction) => {
                if (transaction.date === todayString) {
                    return transaction
                }
            })
            setFilteredTrans(todaysTransactions)
        } else if (filter === 'This Week') {
            const thisWeekTransactions = filteredTransactions.filter((transaction) => {
                if (moment(transaction.date).isSame(todayString, 'week')) {
                    return transaction
                }
            })
            setFilteredTrans(thisWeekTransactions) 
        } else if (filter === 'This Month') {
            const thisMonthTransactions = filteredTransactions.filter((transaction) => {
                if (moment(transaction.date).isSame(todayString, 'month')) {
                    return transaction
                }
            })
            setFilteredTrans(thisMonthTransactions)
        } else if (filter === 'All') {
            setFilteredTrans(transactions)
        }
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

console.log(filteredTrans === [] ? transactions : filteredTrans)

    return(
        <div className="transaction-container-flex-row">
            <div id="left-side-flex-column">
                <Search search={search} setSearch={setSearch}/>
                <DateFilter handleClick={handleClick}/>
                <table>
                    <tbody className="TransactionTable">
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
                        <TransactionList transactions={filteredTrans} handleDelete={handleDelete} />
                    </tbody>
                </table>
                <div id="wallet-info-flex">
                    <img src={Wallet} alt="wallet" id="wallet"/>
                    <UserWallet balance={balance}/>
                </div>
            </div>
            <div>
                <PieChart 
                setTransactionTotal={setTransactionTotal} 
                category={eachCategory} 
                amount={eachAmount} 
                transaction={eachTransaction}
                />
            </div>
        </div>
    )
}

export default TransactionsContainer