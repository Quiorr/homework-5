import { useState } from "react";
import Button from "../UI/Button";
import { Input } from "../UI/Input";


export const ExpensesModal = ({ onClick, onSubmit }) => {
    const [inputText, setInputText] = useState('');
    const [inputImageUrl, setInputImageURL] = useState('');
    const [inputRating, setInputRating] = useState('');

    function getInputValue(e) {
        setInputText(e.target.value)
    }

    function getImgUrlInput(e) {
        setInputImageURL(e.target.value)
    }

    function getRatingInput(e) {
        setInputRating(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault();
        
        const newMovies = {
            title: inputText,
            url: inputImageUrl,
            rating: inputRating,
            id: inputText,
        };
        onSubmit(newMovies)
        setInputText("");
        setInputImageURL("");
        setInputRating("");
    };    


    return ( 
        <form onSubmit={submitHandler} className="block" 
            style={{
                width: "900px",
                height: "400px",
                marginTop: "100px", 
                marginBottom: "100px"
                }}>
            <div className="inputBlock">
                <Input 
                    type='text' 
                    placeholder="title" 
                    children="Title Movie:" 
                    value={inputText}
                    onChange={getInputValue}
                />
                <Input 
                    type="url"
                    src={inputImageUrl} 
                    placeholder="url" 
                    children="Image URL:" 
                    value={inputImageUrl}
                    onChange={getImgUrlInput}
                />
                <Input 
                    type='number' 
                    placeholder ="rating" 
                    children="Rating Movie:" 
                    value={inputRating}
                    onChange={getRatingInput}
                />
            </div>
            <div className="buttonBlock">
                <Button type="button" onClick={onClick}>Cancel</Button>
                <Button type="submit" onClick={submitHandler}>Add Movie</Button>
            </div>
        </form>
    )
}