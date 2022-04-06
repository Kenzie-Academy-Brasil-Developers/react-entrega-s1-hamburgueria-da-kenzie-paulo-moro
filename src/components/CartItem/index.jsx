import "./style.css"

function CartItem({productSale,setCurrentSale, currentSale,treatedPrice}){
  const {name, id, category, price, img} = productSale
  function rmvCart(event){
    const productId = event.target.id   
    setCurrentSale(
      currentSale.filter((sale)=>{
        return sale.id.toString() !== productId
      })
    )
  }
  
  return(
    <li className="CartItem--Container">
      <figure className="CartItem--imgContainer">
        <img  className="CartItem--img" src={img} alt="FotoProduto"/>
      </figure>
      <section className="CartItem--InfoContainer">
        <h3 className="CartItem--Title">{name}</h3>
        <p  className="CartItem--Category">{category}</p>
        
        <button id={id} className="CartItem--Rmv-BTN" onClick={rmvCart}>Remover</button>
      </section>      
    </li>
  )

}


export default CartItem