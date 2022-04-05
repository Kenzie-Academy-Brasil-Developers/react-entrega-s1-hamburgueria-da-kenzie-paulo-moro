import "./style.css"


function Product({product,treatedPrice,addCart}){
  const {id,img,name,category,price} = product
  
  
  return(
    <li className="Product--container">
      <figure className="Product--imgContainer">
        <img className="Product--img" src={img} alt="FotoDoProduto" />
      </figure>
      
      <h3 className="Product--name">{name}</h3>
      <p className="Product--category">{category}</p>
      <p className="Product--valor">{treatedPrice(price)}</p>
      <button id={id} className="addCartBTN" onClick={addCart}>Adicionar</button>

    </li>
  )
}


export default Product