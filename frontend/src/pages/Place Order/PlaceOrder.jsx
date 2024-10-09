import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext);

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHanlder = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (event) => {
    event.preventDefault(); 
    let orderItems = [];
    food_list.map((item)=>{
      if (cartItems[item._id]>0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error");
    }
  }

  const navigate = useNavigate();

  useEffect(()=>{
    if (!token) {
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0){
      navigate('/cart')
    }
  },[token])
  return (
    <form onSubmit={placeOrder} className='place-order'>
        <div className="place-order-left">
            <p className="title">Thông tin giao hàng</p>
            <div className="multi-fields">
              <input required name='firstName' onChange={onChangeHanlder} value={data.firstName} type="text" placeholder='Họ'/>
              <input required name='lastName' onChange={onChangeHanlder} value={data.lastName} type="text" placeholder='Tên'/>
            </div>
            <input required name='email' onChange={onChangeHanlder} value={data.email} type="email" placeholder='Email'/>
            <input required name='street' onChange={onChangeHanlder} value={data.street} type="text" placeholder='Đường'/>
            <div className="multi-fields">
              <input required name='city' onChange={onChangeHanlder} value={data.city} type="text" placeholder='Thành phố'/>
              <input required name='state' onChange={onChangeHanlder} value={data.state} type="text" placeholder='Quận/huyện/Tỉnh'/>
            </div>
            <div className="multi-fields">
              <input required name='zipcode' onChange={onChangeHanlder} value={data.zipcode} type="text" placeholder='Mã bưu'/>
              <input required name='country' onChange={onChangeHanlder} value={data.country} type="text" placeholder='Quốc gia'/>
            </div>
            <input required  name='phone' onChange={onChangeHanlder} value={data.phone} type="text" placeholder='Số điện thoại'/>
        </div>
        <div className="place-order-right">
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
                  <b>Tổng tiền</b>
                  <b>{getTotalCartAmount()}</b>
              </div>
              <hr />                
              <button  type='submit'>Thanh toán với Payment</button>  
        </div>
        </div>
    </form>
  )
}

export default PlaceOrder
