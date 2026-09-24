import { useState } from 'react'
import { CATEGORIES } from '../utils.js'

function TransactionForm({ onAdd }) {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('Expense')
  const [category, setCategory] = useState('Food')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const value = Number(amount)
    if (description.trim() === '' || !(value > 0)) {
      setError('Please enter a description and an amount greater than 0.')
      return
    }

    onAdd({
      id: Date.now(),
      description: description.trim(),
      amount: value,
      type,
      category,
    })

    // Reset the form
    setDescription('')
    setAmount('')
    setError('')
  }

  return (
    <section className="card">
      <h2>Add a transaction</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          min="0"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
      {error && <p className="error">{error}</p>}
    </section>
  )
}

export default TransactionForm
