import "./style.css"
import CartItem from "../CartItem"

function Cart({currentSale,setCurrentSale,treatedPrice,keyGen}){
  function totalCart(){
    
    let total = currentSale.reduce((acc, valorAtual)=>{
      return acc+valorAtual.price
    },0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    return total
    
  }

  function rmvALL(){
    setCurrentSale([])
  }

  if(currentSale.length > 0){
  
  return(
    <aside className="CartInfo--container">
      <h3 className="Cart-tittle">Carrinho de compras</h3>
      <ul className="Cart--container">      
        {
          currentSale.map((productSale)=>{
            
            return(
              <CartItem productSale={productSale} setCurrentSale={setCurrentSale} currentSale={currentSale} key={keyGen()} treatedPrice={treatedPrice} keyGen={keyGen} id={keyGen()}/>
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
  )}
  else if(currentSale.length === 0){
    return(
      <aside className="CartInfo--container">
        <h3 className="Cart-tittle">Carrinho de compras</h3>
        <ul className="Cart--container">      
          <li className="Cart--empty">
            <h3 className="Cart--emptyTittle" >Sua sacola está vazia</h3>
            <p className="Cart--emptyText" >adicione itens</p>
          </li>

        </ul>           
      </aside>
    )
  }
}



export default Cart