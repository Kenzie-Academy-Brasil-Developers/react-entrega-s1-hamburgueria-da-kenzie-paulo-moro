import "./style.css"
import Product from "../Product"


function ProductList({products,treatedPrice,setCurrentSale,currentSale,keyGen}){
  function addCart(event){
    const productId = event.target.id
    const product= products.find((product)=>{
      return product.id.toString() === productId
    })  
    
    if(currentSale.length === 0){
      setCurrentSale([product])
    }else if(currentSale.length > 0){
      setCurrentSale([...currentSale,product])
    }
    
  }

  return(
    <ul className="ProductList--Container">      
      { 
        products.map((product)=>{
          return(
            <Product product={product} key={keyGen()} treatedPrice={treatedPrice} addCart={addCart}/>
          )
        })
      
      }
    </ul>
  )
}


export default ProductList