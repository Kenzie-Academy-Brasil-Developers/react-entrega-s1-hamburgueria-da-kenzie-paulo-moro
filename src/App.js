import './App.css';
import Logo from './components/Files/img/Logo.png';
import { useEffect , useState } from 'react';
import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';




function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(()=>{
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then((response)=>response.json())
    .then((response)=>setProducts(response))
    .catch((err)=>err)
  })

  function treatedPrice(price){
    const priceStr = price.toString()
   
    if(priceStr.includes(".")){
      return `R$${priceStr.replace(".", ",")}`
      
    }
   
    return `R$${priceStr},00`
    
    
  }

  let key = 0

  function keyGen(){
       
    key++    
    return key
  }
 
  return (
    <div className="App">
      <header className="App-header">
      <figure className="Header--LogoContainer">
        <img  className="Header--Logo" src={Logo} alt="" />
      </figure>
      <form className='PesquisaProdutos--container'>
        <input className='PesquisaProdutos--input' type='text' placeholder='Digitar Pesquisa'></input>
        <button className='PesquisaProdutos--submit'>Pesquisar</button>
      </form>
      </header>
      <main className='App-main'>
        <ProductList products={products}  treatedPrice={treatedPrice} setCurrentSale={setCurrentSale} currentSale={currentSale} keyGen={keyGen}/>
        <Cart currentSale={currentSale}   treatedPrice={treatedPrice} setCurrentSale={setCurrentSale} keyGen={keyGen} />
      </main>
    </div>
  );
}

export default App;
