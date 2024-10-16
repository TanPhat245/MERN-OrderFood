import React from 'react'
import  './InstructOrder.css'
import { assets } from '../../assets/assets'
const InstructOrder = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="title">
          <h1>Cách đặt hàng</h1>
          <hr />
        </div>
        <div className="services-section">
          <div className='card'>
            <div className="icon">
              <img src={assets.planning} alt="" />
            </div>
            <h2>Chọn Món Ăn</h2>
            <p>Chọn món ăn phù hợp với nhu cầu của bạn và điền đầy đủ thông tin giao hàng.</p>
          </div>

          <div className='card'>
            <div className="icon">
              <img src={assets.cooking} alt="" />
            </div>
            <h2>Công Phượng sẽ nấu</h2>
            <p>Chúng tôi lựa chọn những nguyên liệu tốt nhất và nấu trong bếp công nghiệp.</p>
          </div>

          <div className='card'>
            <div className="icon">
              <img src={assets.fast_deli} alt="" />
            </div>
            <h2>Giao hàng</h2>
            <p>Đội ngũ giao hàng sẽ giao tận nơi các phần ăn cho bạn mỗi ngày.</p>
          </div>

          <div className='card'>
            <div className="icon">
              <img src={assets.eating} alt="" />
            </div>
            <h2>Thưởng thức</h2>
            <p>Không cần suy nghĩ chỉ cần mở ra và thưởng thức ngay!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructOrder
