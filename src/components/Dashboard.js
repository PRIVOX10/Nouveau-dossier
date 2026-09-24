import { formatMoney } from '../utils.js'

function Dashboard({ balance, income, expenses, recentTransactions }) {
  return (
    <section className="card">
      <h2>Dashboard</h2>

      <div className="stats">
        <div className="stat stat-balance">
          <span>Balance</span>
          <strong className={balance < 0 ? 'expense' : ''}>{formatMoney(balance)}</strong>
        </div>
        <div className="stat">
          <span>Income</span>
          <strong className="income">{formatMoney(income)}</strong>
        </div>
        <div className="stat">
          <span>Expenses</span>
          <strong className="expense">{formatMoney(expenses)}</strong>
        </div>
      </div>

      <h3>Recent transactions</h3>
      {recentTransactions.length === 0 ? (
        <p className="empty">No transactions yet.</p>
      ) : (
        <ul className="recent">
          {recentTransactions.map((t) => (
            <li key={t.id}>
              <span>{t.description}</span>
              <span className={t.type === 'Income' ? 'income' : 'expense'}>
                {t.type === 'Income' ? '+' : '-'}
                {formatMoney(t.amount)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Dashboard
