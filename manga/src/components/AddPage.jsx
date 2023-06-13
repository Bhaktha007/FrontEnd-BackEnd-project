import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AddPage.css';

export default function AddDetails() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    id: '',
    title: '',
    imageUrl: '',
    description: '',
    authors: '',
    genres: '',
    edition: '',
    format: ''
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { id, title, imageUrl, description, authors, genres, edition, format } = user;

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/postbook', user);
    navigate('/list');
  };

  return (
    <div className="addcontainer">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Details</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                Id
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter id"
                name="id"
                value={id}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter title"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="imageUrl" className="form-label">
                Image URL
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the image URL"
                name="imageUrl"
                value={imageUrl}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the description"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="authors" className="form-label">
                Authors
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter authors"
                name="authors"
                value={authors}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="genres" className="form-label">
                Genres
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the genres"
                name="genres"
                value={genres}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="edition" className="form-label">
                Edition
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Give edition"
                name="edition"
                value={edition}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="format" className="form-label">
                Format
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter format"
                name="format"
                value={format}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-success">
                Add Details
              </button>
              <Link className="btn btn-danger mt-2" to="/list">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
