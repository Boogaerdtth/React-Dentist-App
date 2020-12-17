import React from "react"
import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"

import Container from './Container'
import Nav from './Nav'

const App = () => (
  <Router>
    <Nav />
    <Container />
  </Router>
);
export default App;