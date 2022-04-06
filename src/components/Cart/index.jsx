import "./style.css"
import CartItem from "../CartItem"

function Cart({currentSale,setCurrentSale,treatedPrice,keyGen}){
  function totalCart(){
    
    let valorTotal = 0

    for(let i = 0; i < currentSale.length;i++){     
      valorTotal+=currentSale[i].price
      
    }
    
    const valorTotalStr = valorTotal.toFixed(2)
    if(valorTotalStr.includes(".")){
      
      return `R$${valorTotalStr.replace(".", ",")}`
      
    }
    
    return `R$${valorTotalStr},00`  
    
  }
  function rmvALL(){
    setCurrentSale([])
  }
  
  return(
    <aside className="CartInfo--container">
      <h3 className="Cart-tittle">Carrinho de compras</h3>
      <ul className="Cart--container">      
        {
          currentSale.map((productSale)=>{
            
            return(
              <CartItem productSale={productSale} setCurrentSale={setCurrentSale} currentSale={currentSale} key={keyGen()} treatedPrice={treatedPrice}/>
            )
          })
        }

      </ul>
      <section className="CartIinfo--opcoes">
        <div className="CartInfo--divisor"></div>
        <p className="CartInfo--total">Total: <span>{totalCart()}</span>  </p>
        <button className="Cart--removerTodos" onClick={rmvALL}>Remover todos</button>
      </section>
      
    </aside>
  )
}



export default Cart