import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>"Quán ăn 'Hương Quê' nằm tại số 123 đường Lê Lợi, quận 1, TP. Hồ Chí Minh, là nơi lý tưởng cho những ai yêu thích hương vị ẩm thực
             Việt Nam. Quán sẽ mang đến cho thực khách những món ăn đặc sản như phở bò, bánh xèo, và chả giò được chế biến từ những nguyên liệu tươi ngon nhất. Đội ngũ nhân viên nhiệt tình, chu đáo cùng với hương vị đậm đà, thơm ngon của các món ăn chắc chắn sẽ khiến bạn muốn quay lại nhiều lần."</p>
            <div className="footer-social-icons">
            <a href="https://www.facebook.com/fotizb3zt.ezr3al.245/"><img src={assets.facebook_icon} alt=""/> </a>
               <a href="https://www.instagram.com/iamph4ttttt/?hl=vi"> <img src={assets.twitter_icon} alt="" /></a>
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Công ty</h2>
            <ul>
                <li>Trang chủ</li>
                <li>Về chúng tôi</li>
                <li>Tuyển dụng</li>
                <li>Điều khoản & dịch vụ</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Thông tin liên lạc</h2>
            <ul>
                <li>0375567352</li>
                <li>Email:phatt4071@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024-All right reserved</p>
    </div>
  )
}

export default Footer
