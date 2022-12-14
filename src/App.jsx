import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'
import ProductContainer from './components/ProductContainer'

function App() {
  return (
    <div className="App">
      <ProductContainer>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </ProductContainer>
    </div>
  )
}

export default App
