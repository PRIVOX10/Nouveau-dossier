import { formatMoney } from '../utils.js'

function TransactionItem({ transaction, onDelete }) {
  const { id, description, amount, type, category } = transaction
  const isIncome = type === 'Income'

  return (
    <li className="item">
      <span className={`dot ${isIncome ? 'dot-income' : 'dot-expense'}`} />
      <div>
        <strong>{description}</strong>
        <small>
          {type} <span className="badge">{category}</span>
        </small>
      </div>
      <span className={isIncome ? 'income' : 'expense'}>
        {isIncome ? '+' : '-'}
        {formatMoney(amount)}
      </span>
      <button className="delete" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  )
}

export default TransactionItem
