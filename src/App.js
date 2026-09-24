import { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard.js'
import TransactionForm from './components/TransactionForm.js'
import Filters from './components/Filters.js'
import TransactionList from './components/TransactionList.js'

const STORAGE_KEY = 'transactions'

// Read saved transactions once, when the app starts
function loadTransactions() {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved ? JSON.parse(saved) : []
}

function App() {
  const [transactions, setTransactions] = useState(loadTransactions)
  const [typeFilter, setTypeFilter] = useState('All')
  const [categoryFilter, setCategoryFilter] = useState('All')

  // Save to localStorage every time the list changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
  }, [transactions])

  function addTransaction(transaction) {
    setTransactions([transaction, ...transactions])
  }

  function deleteTransaction(id) {
    if (window.confirm('Delete this transaction?')) {
      setTransactions(transactions.filter((t) => t.id !== id))
    }
  }

  // Derived data: calculated from the state, not stored in it
  const income = transactions
    .filter((t) => t.type === 'Income')
    .reduce((sum, t) => sum + t.amount, 0)
  const expenses = transactions
    .filter((t) => t.type === 'Expense')
    .reduce((sum, t) => sum + t.amount, 0)
  const balance = income - expenses

  const filteredTransactions = transactions.filter(
    (t) =>
      (typeFilter === 'All' || t.type === typeFilter) &&
      (categoryFilter === 'All' || t.category === categoryFilter)
  )

  return (
    <div className="app">
      <h1>Finance Tracker</h1>

      <Dashboard
        balance={balance}
        income={income}
        expenses={expenses}
        recentTransactions={transactions.slice(0, 3)}
      />

      <TransactionForm onAdd={addTransaction} />

      <section className="card">
        <h2>Transactions</h2>
        <Filters
          typeFilter={typeFilter}
          categoryFilter={categoryFilter}
          onTypeChange={setTypeFilter}
          onCategoryChange={setCategoryFilter}
        />
        <TransactionList
          transactions={filteredTransactions}
          onDelete={deleteTransaction}
        />
      </section>
    </div>
  )
}

export default App
