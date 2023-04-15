import "./App.css";
import { NewExpense } from './components/newExpenses/NewExpenses'
import { Expenses } from './components/expenses/Expenses';
import { useState } from "react";

const newMovies = [
  {
    id: 1,
    title: "Avatar 1",
    rating: 4,
    url: "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080",
  },
  {
    id: 2,
    title: "Kunfu panda",
    rating: 5,
    url: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 3,
    title: "Naruto Shipuden",
    rating: 5,
    url: "https://cdn.europosters.eu/image/1300/posters/naruto-shippuden-i84239.jpg",
  },
  {
    id: 4,
    title: "Hobbit",
    rating: 5,
    url: "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_FMjpg_UX1000_.jpg",
  },        
];


function App() {

  const [newMovieDate, setNewMovieDate] = useState(newMovies)

  const addNewExpensesHandler = (movie) => {
    const newArr = [...newMovieDate, movie];
    setNewMovieDate(newArr);
  };

  function deleteExpensesMovies(id) {
    const newData = newMovieDate.filter((el) => el.id !== id);
    setNewMovieDate(newData);
  }

  function editExpressionMovies(id) {
    const newData = newMovieDate.filter((el) => el.id === id);
    setNewMovieDate(newData);
  }

  return (
      <div className="App">
          <NewExpense onSubmit={addNewExpensesHandler} />
          <Expenses movies={newMovieDate} onDelete={deleteExpensesMovies} onEdit={editExpressionMovies}  />
      </div>
  )
};

export default App;