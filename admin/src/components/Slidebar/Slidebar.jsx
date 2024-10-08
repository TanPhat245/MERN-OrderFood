import React from 'react'
import './Slidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const Slidebar = () => {
  return (
    <div className='slidebar'>
      <div className="slidebar-options">
        <NavLink to='/add' className="slidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Thêm</p>
        </NavLink>
        <NavLink to='/list' className="slidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Danh sách</p>
        </NavLink>
        <NavLink to='/order' className="slidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Đơn hàng</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Slidebar
