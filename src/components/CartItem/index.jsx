import "./style.css"



function CartItem({productSale,setCurrentSale, currentSale}){
  const {name,category,img,id} = productSale
  
  
  
  function rmvCart(event){
    const productId = event.target.id 
     
    setCurrentSale(
      currentSale.filter((sale)=>{    
      return sale.id.toString() !== productId
    }))
    
   
    
    
   
  }

  function treatedName(word){
    let newWord = word
    if(word.length>14){
      newWord = word.slice(0,10)+"..."
      return newWord
    }
    return newWord
  }
  
  return(
    <li className="CartItem--Container">
      <figure className="CartItem--imgContainer">
        <img  className="CartItem--img" src={img} alt="FotoProduto"/>
      </figure>
      <section className="CartItem--InfoContainer">
        <h3 className="CartItem--Title">{treatedName(name)}</h3>
        <p  className="CartItem--Category">{category}</p>
        
        <button id={id} className="CartItem--Rmv-BTN" onClick={rmvCart}>Remover</button>
      </section>      
    </li>
  )

}


export default CartItem