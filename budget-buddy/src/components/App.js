import React, { useState } from 'react'
import Logo from './Logo'
import TransactionsContainer from './TransactionsContainer'
import "../index.css"
import NavBar from './NavBar.js'
import AboutUs from './AboutUs'
import ModifyTransactions from './ModifyTransactions.js'
import AddBalanceForm from './AddBalanceForm'
import { Switch, NavLink } from "react-router-dom"


function App({ Route }) {
  const baseUrl = "http://localhost:3001/transactions"

  const [transactions, setTransactions] = useState([])
  const [balance, setBalance] = useState(0)

  function onFormSubmit(newBalance) {
    let walletTotal = Math.abs(Number(newBalance) + Number(balance))
    setBalance(walletTotal)
  }

  return (
    <div id="app-comp">
       <div id="header-flex">
         <Logo />
         <NavBar NavLink={NavLink} />
      </div>
      <Switch>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/transaction/new">
          <ModifyTransactions transactions={transactions} setTransactions={setTransactions} baseUrl={baseUrl} />
        </Route>
        <Route exact path="/">
          <TransactionsContainer balance={balance} transactions={transactions} setTransactions={setTransactions} baseUrl={baseUrl} />
        </Route>
        <Route path="/add-to-wallet">
          <AddBalanceForm balance={balance} onFormSubmit={onFormSubmit}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;

