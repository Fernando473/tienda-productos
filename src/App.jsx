import datos from "./products.json"
import './App.css'
import { useState } from "react"
import Card from './components/Card'
import ProductContainer from './components/ProductContainer'


const App = () => {

  const [ search, setSearch ] = useState("")
  const searcher = (e) => {
    setSearch(e.target.value)   
  }
  const results = !search ? datos : datos.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))

  return(
    <div className="App">
      <legend>Busca nuestros Productos</legend>
       <input type="text" onChange={searcher} name="search" id="search" />
      <ProductContainer>
        {
          results.map(product => 
              <Card 
                    key={product.id}
                    discount={product.discount}
                    name={product.name}
                    oldPrice={product.price}
                    newPrice ={product.price - (product.price* product.discount)/100}
                    image = {product.url}

              />
          ) 
        }
      </ProductContainer>
    </div>
  )
}

export default App
