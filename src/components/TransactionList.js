import TransactionItem from './TransactionItem.js'

function TransactionList({ transactions, onDelete }) {
  if (transactions.length === 0) {
    return <p className="empty">No transactions to show.</p>
  }

  return (
    <ul className="list">
      {transactions.map((t) => (
        <TransactionItem key={t.id} transaction={t} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default TransactionList
