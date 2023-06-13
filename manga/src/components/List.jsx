import React,{useState,useEffect} from 'react'
import '../App';
import axios from 'axios';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';


const Books = () => {

    const [book,setBooks]=useState([]);

const{favorites,addToFavorites,removeFromFavorites,}=useAppContext();

const navigate = useNavigate();

const favoritesChecker =(id) =>{
    const boolean = favorites.some((book) => book.id === id);
    return boolean;


};

    useEffect(()=> {
        loadBooks();

    },[]);

    const loadBooks=async()=>{
    const res=await axios.get("http://localhost:8080/getbook");
        console.log(res.data)
        setBooks(res.data)
    }

    const deleteBook=async(id)=>{
        await axios.delete(`http://localhost:8080/delete/${id}`);
        
    }

    
  return (
  <div className='book-list'>
        {book.map((book)=> (
         <div key={book.id} className='book'>
            <div>
                <h4>{book.title}</h4>
            </div>
            <button onClick={()=> deleteBook(book.id)}>Delete</button>
            <div>
                <img src={book.imageUrl} alt='#' 
                onClick={()=> navigate(`/books/${book.id}`)}
                />
            </div>
            <div>
                {favoritesChecker(book.id) ?(
                
                <button onClick={()=>removeFromFavorites(book.id)}>
                Remove From Favorites
            </button>
            ) :(
                <button onClick={()=>addToFavorites(book)}>
                    Add to Favorites
                </button>
            )

            }
            </div>
        </div>
    ))}
    </div>
  );
};


export default Books;