import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems,food_list,removeFromCart,getTotalCartAmount,url} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Món</p>
          <p>Tên</p>
          <p>Giá</p>
          <p>Số lượng</p>
          <p>Tổng tiền</p>
          <p>Xóa</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
            if(cartItems[item._id]>0){
              return (
                <div>
                <div className="cart-items-title cart-items-item">
                    <img src={url+"/images/"+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{item.price*cartItems[item._id]}</p>
                    <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
                </div>
              )
            }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Thanh toán</h2>
              <div className="cart-total-details">
                  <p>Tổng tiền</p>
                  <p>{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                  <p>Phí vận chuyển</p>
                  <p>{0}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                  <b>Tổng</b>
                  <b>{getTotalCartAmount()}</b>
              </div>
              <hr />
              <button onClick={()=>navigate('/order')}>Thanh toán</button>   
        </div>
      </div>
    </div>
  )
}
export default Cart
