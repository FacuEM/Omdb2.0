import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchMovie} from '../redux/actions/movies';
import {addFav} from '../redux/actions/favourites';
import {useParams, Link} from 'react-router-dom';
import Navbar from './NavbarComponent';
// Bootstrap
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const SingleMovie = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const movie = useSelector((state) => state.movies.movie);
  const user = useSelector((state) => state.auth.logged)

  useEffect(() => {
    //fetch a single movie according to the id
    dispatch(fetchMovie(id))
  }, []);
  
  return (
    
    <div>
      <Navbar />
      <Container>
        <Row style={{ margin: "20px" }}>
          <Col xs={3} className="mb-5" key={movie.imdbID}>
            <hr />
            <hr />
            <Card className=" shadow-sm bg-white rounded">
              <Card.Img variant="top" src={movie.Poster} />
            </Card>
          </Col>

          <Col key={movie.imdbID}>
            <span style={{ color: "white" }}>
              <ul>
                <hr />
                <hr />
                <strong style={{ color: "#ffc107" }}> Title: </strong>{" "}
                {movie.Title}
                <br />
                <br />
                {movie.Plot}
                <br /> <br />
                <strong style={{ color: "#ffc107" }}> Year: </strong>
                {movie.Year}
                <br />
                <strong style={{ color: "#ffc107" }}> Genre: </strong>
                {movie.Genre}
                <br />
                <strong style={{ color: "#ffc107" }}> Director: </strong>
                {movie.Director} <br />
                <strong style={{ color: "#ffc107" }}> Actors: </strong>
                {movie.Actors}
                <br />
                <strong style={{ color: "#ffc107" }}> Writer: </strong>
                {movie.Writer}
                <br />
                <hr />
              </ul>
            </span>
            
              <span>
                <Button
                  className="mt-auto d-flex justify-content-center font-weight-bold "
                  variant="warning"
                  style={{ marginLeft: "50px", marginTop: "100px" }}
                >
                 <Link to="/" style={{textDecoration: 'none', color:'black'}}>Back Home</Link> 
                </Button>
              </span>
          
            <hr />
            <span>
            {user.email && 
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  addFav({title: movie.Title, poster: movie.Poster, user: user.id})
                }}
                className="mt-auto d-flex justify-content-center font-weight-bold "
                variant="warning"
                style={{ marginLeft: "50px", marginTop: "100px" }}
              >
                Add Favorite
              </Button>}

            </span>
            <hr />
            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SingleMovie

{/* <div>
<Navbar />
<h1>{movie.Title}</h1>
<img src={movie.Poster}/>
<button onClick={() => addFav({title: movie.Title, poster: movie.Poster, user: user.id})}>Agregar a favoritos</button>
</div> */}