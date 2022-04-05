import "./style.css"

function CartItem({product}){
  const {name, id, category, price, img} = product

  return(
    <li className="CartItem--Container">
      <figure className="CartItem--imgContainer">
        <img  className="CartItem--img" src={img} alt="FotoProduto"/>
      </figure>
      <h3 className="CartItem--Title">{name}</h3>
      <p  className="CartItem--Category">{category}</p>
      <p  className="CartItem--Valor">R$ {price},00</p>
      <button id={id} className="CartItem--Rmv-BTN">Remover</button>      
    </li>
  )

}


export default CartItem