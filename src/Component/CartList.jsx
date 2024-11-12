import React, { useEffect, useState } from 'react';
import "./CartList.css";

const CartList = ({ cart }) => {
  let [details, setDetails] = useState(cart);
  let [totalAmount, setTotalAmount] = useState(0);
  
  useEffect(() => {
  
    const amount = details.reduce((acc, item) => acc + item.price, 0);
    setTotalAmount(amount);
  }, [details]); 

  const handleDelete = (id) => {
    const modifiedArray = details.filter((ele) => ele.id !== id);
    setDetails(modifiedArray);
  };

  return (
    <div>
      <center><h2>Cart List</h2></center>
      {details.map((ele) => (
        <section key={ele.id} className='cart-container'>
          <main className='sub-container'>
            <img src={ele.image} alt="" className='image-cart' />
            <div className="adjust">
              <p><b>Title:</b> {ele.title}</p><br/>
              <div><b>Price:</b> {ele.price}/-</div><br/>
              <button onClick={() => handleDelete(ele.id)}>Delete</button>
            </div>
          </main>
        </section>
      ))}
      <div className="total-amount">
        <h3>Total Amount: {totalAmount}/-</h3>
      </div>
    </div>
  );
};

export default CartList;
