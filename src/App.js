import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './News';
import { Routes, Route, BrowserRouter } from "react-router-dom";



export default class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general"country={this.props.country} category="general" />} />
            <Route exact path="/business" element={<News key="business"country={this.props.country} category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment"country={this.props.country} category="entertainment" />} />
            <Route exact path="/health" element={<News key="health"country={this.props.country} category="health" />} />
            <Route exact path="/science" element={<News key="science"country={this.props.country} category="science" />} />
            <Route exact path="/sports" element={<News key="sports"country={this.props.country} category="sports" />} />
            <Route exact path="/technology" element={<News key="technology"country={this.props.country} category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    ) 
  }
}



