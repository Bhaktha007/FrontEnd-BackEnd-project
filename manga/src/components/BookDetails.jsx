import React ,{useState,useEffect}from 'react'
import '../App';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const BookDetails = () => {

  const [book,setBook]=useState({});
  


  const {id} = useParams();

  useEffect(()=> {
    axios.get(`http://localhost:8080/get/${id}`)
    .then(res=> {
      setBook(res.data);
    }).catch(err=> console.log(err))

  },[id]);


  return (
    <div className='book-details'>
      <div className='book-poster'>
        <h2>{book?.title}</h2>
      </div>
      <div>
        <button className='edt' style={{backgroundColor:"black",marginBottom:"10px"}}>
        <Link to={`/update/${id}`}>Edit</Link>
        </button>
        <img src={book?.imageUrl} alt="#" />
      </div>
      <div className='book-description'> 
         <h2>Description</h2>
         <p>{book?.description}</p>
         <h2>Authors</h2>
         <p>{book?.authors}</p>
         <h2>Genres</h2>
         <p>{book?.genres}</p>
         <h2>Edition</h2>
         <p>{book?.edition}</p>
         <h2>Format</h2>
         <p>{book?.format}</p>
      </div>
    </div>
  )
  
};

export default BookDetails;