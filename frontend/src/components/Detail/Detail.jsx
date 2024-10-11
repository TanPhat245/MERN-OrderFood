import React from 'react'
import './Detail.css'
import { assets } from '../../assets/assets'

const Detail = () => {
  return (
    <div className="banner-card">
    <img src={assets.bg_test} alt="" />
    <div className='actor'>
    <img src={assets.congphing} alt="" />
    </div>
        <div className="banner-content">
          <h2>FUT88</h2>
          <p>Gà kia ai rán mà giòn
          <p>Cam kia ai bổ mà mòn cả dao</p>
          <p>Mòn dao thì đã làm sao</p>
          <p>Chạy ra tạp hoá mua bao thuốc về</p>
          <p>2 năm xuất ngoại xa quê</p>
          <p>Bổ cam, xách nước, cà phê, rán gà</p>
          <p><span><i>Bếp trưởng: Nguyễn Công Phượng</i></span></p>
          </p>
        </div>
      </div>
  )
}

export default Detail
