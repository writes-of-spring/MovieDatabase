import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Movie from './Movie'

class MoviesList extends PureComponent {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=0e3d3942ffabfea2c5e7345ef1e195bf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
      )
      const movies = await res.json()

      this.setState({
        movies: movies.results,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { movies } = this.state
    return (
      <MovieGrid className="MoviesList">
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    )
  }
}

export default MoviesList

const MovieGrid = styled.div`
  display: grid;
  padding: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 2rem;
`
