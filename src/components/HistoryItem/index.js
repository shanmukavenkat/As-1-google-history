import './index.css'

const HistoryItem = props => {
  const {ItemDetails, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = ItemDetails

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li>
      <div className="card-items">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>

       <button
  type="button"
  className="delete-btn"
  onClick={onDelete}
  data-testid="delete"   // Add this line
>
  <img
    src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
    alt="delete"
  />
</button>
      </div>
    </li>
  )
}

export default HistoryItem
