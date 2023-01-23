import React, { useState } from 'react'
import Logo from './Logo'
import TransactionsContainer from './TransactionsContainer'
import "../index.css"
import NavBar from './NavBar.js'
import AboutUs from './AboutUs'
import SpendingStats from './SpendingStats'
import ModifyTransactions from './ModifyTransactions.js'
import { Switch, NavLink } from "react-router-dom"

function App({ Route }) {
  const baseUrl = "http://localhost:3001/transactions"

  const [transactions, setTransactions] = useState([])


  return (
    <div id="app-comp">
      <Logo /> <NavBar NavLink={NavLink} />
      <Switch>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/spendingstats">
          <SpendingStats />
        </Route>
        <Route path="/form-edit">
          <ModifyTransactions transactions={transactions} setTransactions={setTransactions} baseUrl={baseUrl} />
        </Route>
        <Route exact path="/">
          <TransactionsContainer transactions={transactions} setTransactions={setTransactions} baseUrl={baseUrl} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

