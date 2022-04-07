import "./style.css"
import Product from "../Product"


function ProductList({products,treatedPrice,setCurrentSale,currentSale,keyGen,filterWord}){
  
  function addCart(event){
    const productId = event.target.id
    const product= products.find((product)=>{
      return product.id.toString() === productId
    })  
    
    product.id = keyGen()
    
    
    
    if(currentSale.length === 0){
      
      setCurrentSale([product])
    }else if(currentSale.length > 0){
      setCurrentSale([...currentSale,product])
    }
    
  }
  
  return(
    <ul className="ProductList--Container">      
      { 
        products.filter((item)=>item.name.toLowerCase().includes(filterWord)||item.category.toLowerCase().includes(filterWord)).map((product)=>{
          return(
            <Product product={product} key={keyGen()} treatedPrice={treatedPrice} addCart={addCart} idCart={keyGen()}/>
          )
        })
      
      }
    </ul>
  )
  
}


export default ProductList