import React from 'react'

import Header from "./Components/Header"
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Search from './Components/Search'
import Sellers from './Components/Sellers'
import Auction from './Components/Auction'
import Review from './Components/Review'
import Trending from './Components/Trending'


function App() {
  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
        <Navbar />
          <Home />
      <Search />
      <Sellers />
      <Auction />
      <Review />
      <Trending />
    </Container>
  )
}

export default App