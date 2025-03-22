import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'

import './style.css'
import Home from './views/home.jsx'
import NotFound from './views/not-found.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home/>}  path="/" />
        <Route element={<NotFound/>} path="**" />
        
      </Routes>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
