import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Overdrive from 'react-overdrive'
import styled from '../node_modules/styled-components'

const POSTER_PATH = 'https://image.tmdb.org/t/p/w300'

const Movie = ({ movie }) => (
  <MovieContainer>
    <Link to={`/movie/${movie.id}`}>
      <Overdrive id={movie.title}>
        <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
      </Overdrive>
    </Link>
  </MovieContainer>
)
export default Movie

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
}
export const Poster = styled.img`
  box-shadow: 0 0 35px black;
  width: 100%;
`
const MovieContainer = styled.div`
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`
