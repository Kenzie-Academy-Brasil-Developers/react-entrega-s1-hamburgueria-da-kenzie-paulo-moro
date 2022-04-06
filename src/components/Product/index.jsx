import "./style.css"


function Product({product,addCart, cartId}){
  const {id,img,name,category,price} = product
  
  return(
    <li className="Product--container" id={cartId}>
      <figure className="Product--imgContainer">
        <img className="Product--img" src={img} alt="FotoDoProduto" />
      </figure>
      <section className="Product--InfoContainer">
        <h3 className="Product--name">{name}</h3>
        <p className="Product--category">{category}</p>
        <p className="Product--valor">{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        <button id={id} className="addCartBTN" onClick={addCart}>Adicionar</button>
      </section>
    </li>
  )
}


export default Product