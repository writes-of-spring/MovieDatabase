import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Poster } from './Movie'

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154'
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280'

class MovieDetail extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=0e3d3942ffabfea2c5e7345ef1e195bf&language=en-US`
      )
      const movie = await res.json()

      this.setState({
        movie,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { movie } = this.state
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <Helmet>
          <title>{`PKMD | ${movie.title}`}</title>
        </Helmet>
        <MovieInfo>
          <Poster
            src={`${POSTER_PATH}${movie.poster_path}`}
            alt={movie.title}
          />

          <div className="movieInfo">
            <h1>{movie.title}</h1>
            <h3>
              {new Date(movie.release_date).toLocaleDateString(undefined, {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    )
  }
}

export default MovieDetail

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
  background-position: center bottom;
`
const MovieInfo = styled.div`
  background: white;
  justify-content: center;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  flex-wrap: wrap;
  > div.movieInfo {
    position: relative;
    top: -4rem;
    margin-left: 20px;
    flex: 400px;
    @media (min-width: 718px) {
      top: 0;
    }
  }
  img {
    position: relative;
    top: -5rem;
    flex: 0 154px;
  }
`
