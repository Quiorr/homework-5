export const ExpensesCard = ({ el, onDelete, onEdit }) => {
    
  return (
      <li>
        <div className="allImg">
          <img src={el.url} alt={el.title} />
        </div>
        <div className="container">
          <div className="movieInfo">
            <h3>{el.title}</h3>
            <p>{`${el.rating}/5 stars`}</p>
          </div>
        </div>
        <div className="movieListBtn">
            <button onClick={() => onDelete(el.id)}>Delete</button>
            <button onClick={() => onEdit(el.id)}>Edit</button>
        </div>
      </li>
  )
};