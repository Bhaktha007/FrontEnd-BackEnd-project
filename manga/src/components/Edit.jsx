import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import '../styles/Edit.css';

export default function EditDetails() {
  let navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [user, setUser] = useState({
    id: "",
    title: "",
    imageUrl: "",
   description: "",
    authors: "",
    genres: "",
    edition: "",
    format: "",
  });

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const result = await axios.get(`http://localhost:8080/get/${id}`);
    setUser(result.data);
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const {
    title,
    imageUrl,
   description,
    authors,
    genres,
    edition,
    format
  } = user;

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/update`, user);
    navigate("/list");
  };

  return (
    <div className="editcontainer">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Details</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="title"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                ImageUrl
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="imageUrl"
                name="imageUrl"
                value={imageUrl}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
               description
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="description"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Authors
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Authors"
                name="authors"
                value={authors}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Genres
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="genres"
                name="genres"
                value={genres}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
              Edition
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="edition"
                name="edition"
                value={edition}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Format
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="format"
                name="format"
                value={format}
                onChange={(e) => onInputChange(e)}
              />
            </div>
           
            <button type="submit" className="btn btn-primary my-2">
              Update Details
            </button>
            <Link className="btn btn-primary my-2 mx-2" to={"/list"}>
              Back to List
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}