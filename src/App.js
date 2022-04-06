import './App.css';
import Logo from './components/Files/img/Logo.png';
import { useEffect , useState } from 'react';
import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';





function App() {
  const [products, setProducts] = useState([]); 
  const [currentSale, setCurrentSale] = useState([])
  const [filterWord,setFilterWord] = useState("")


  useEffect(()=>{
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then((response)=>response.json())
    .then((response)=>setProducts(response))
    .catch((err)=>err)
  })  

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
      
      <input onChange={(event)=>setFilterWord(event.target.value.toLowerCase())} className='PesquisaProdutos--input' type='text' placeholder='Digitar Pesquisa'></input>
        
     
    </header>      
      <main className='App-main'>
        <ProductList products={products}  setCurrentSale={setCurrentSale} currentSale={currentSale} keyGen={keyGen} filterWord={filterWord}/>
        <Cart currentSale={currentSale}   setCurrentSale={setCurrentSale} keyGen={keyGen} />
      </main>
    </div>
  );
}

export default App;
