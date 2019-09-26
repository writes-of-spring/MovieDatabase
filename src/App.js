import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Logo from './logo.svg'
import './App.css'
import MoviesList from './MoviesList'
import MovieDetail from './MovieDetail'

const App = () => (
  <div>
    <Helmet>
      <title>PKMDB</title>
    </Helmet>
    <Router>
      <div className="App">
        <header
          className="App-header"
          style={{
            height: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Link to="/">
            <img
              style={{ height: '50px', display: 'block' }}
              src={Logo}
              className="App-logo"
              alt="logo"
            />
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/movie/:id" component={MovieDetail} />
        </Switch>
      </div>
      <footer></footer>
    </Router>
  </div>
)
export default App
