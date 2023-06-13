import React, { useEffect, useState } from 'react'
import '../App';
import { useAppContext } from '../context/appContext';
import { useNavigate, useParams } from 'react-router';
import { BOOK_DETAILS_URL } from '../API';
import axios from 'axios';

const Favorites = () => {
  const{favorites,addToFavorites,removeFromFavorites}=useAppContext();
  console.log('favorites are', favorites);
  
  const favoritesChecker =(id) =>{
      const boolean = favorites.some((book) => book.id === id);
      return boolean;
  };

  const navigate = useNavigate();

  const {id} = useParams();

  const [,setBook]=useState({});

  
  useEffect(()=> {
    axios.get(`${BOOK_DETAILS_URL}/${id}`)
    .then(res=> {
      setBook(res.data);
    }).catch(err=> console.log(err))

  },[id]);

  
  

  return  <div className='favorites'>
    {favorites.length >0 ? favorites.map((book)=> (
         <div key={book.id} className='Book'>
            <div>
                <h4>{book.title}</h4>
            </div>
            <div>
                <img src={book.imageUrl} alt='#' onClick={()=> navigate(`/books/${book.id}`)}/>
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
    )):<h1>You don't have any favorites yet!</h1>}
  </div>;

}

export default Favorites