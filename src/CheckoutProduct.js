import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";

function CheckoutProduct( {id, image , price , rating, title }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
       dispatch({
          type: 'REMOVE_FROM_BASKET',
          id:id,
       })
    }
    return ( 
        <div className="checkoutproduct">
            <img  className="checkoutProduct__image" src={image} alt="product-image"/>

        <div className="checkoutProduct__info">
<p className="checkoutProduct__title">{title}</p>

<p className="checkoutProduct__price">
    <small>$</small>
    <strong>{price}</strong>
</p>

<p className="checkoutProduct__rating">
{
                  Array(rating)
                  .fill()
                 . map((_,i) =>(
                  <p>⭐</p>
                 ))

              }
</p>

<button onClick={removeFromBasket}>Remove From basket</button>
        </div>
        </div>

    )
}

export default CheckoutProduct
