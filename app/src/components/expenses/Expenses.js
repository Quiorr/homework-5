import { ExpensesCard } from "./ExpensesCard";

export const Expenses = (props) => {
    const { movies } = props;

    return (
        <ul>
            {movies.map((el) => {
                return <ExpensesCard el={el} key={el.id} onDelete={props.onDelete} onEdit={props.onEdit} />
            })}
        </ul>
    )
}