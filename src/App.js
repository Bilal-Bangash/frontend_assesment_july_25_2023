import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header, Footer } from './components'
import {
  HomeScreen,
  AllProductsScreen,
  CartScreen,
  ProductScreen,
} from './screens'

const App = () => {
  console.log('%csfsfsfs', 'color:red;font-size:50px')
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/all-products" element={<AllProductsScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
