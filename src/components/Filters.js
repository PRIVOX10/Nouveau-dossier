import { CATEGORIES } from '../utils.js'

function Filters({ typeFilter, categoryFilter, onTypeChange, onCategoryChange }) {
  return (
    <div className="filters">
      <label>
        Type:
        <select value={typeFilter} onChange={(e) => onTypeChange(e.target.value)}>
          <option value="All">All</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
      </label>
      <label>
        Category:
        <select value={categoryFilter} onChange={(e) => onCategoryChange(e.target.value)}>
          <option value="All">All</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default Filters
