import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Khám phá menu của chúng tôi</h1>
      <p className='explore-menu-text'>Thực đơn của quán mang đến sự đa dạng với các món mì, bún, cơm và đồ uống phong phú. Mì được chế biến từ sợi mì tươi, kết hợp với nước dùng đậm đà và các loại topping phong phú. Bún với hương vị truyền thống, hấp dẫn từ bún bò Huế đến bún thịt nướng, mang đậm nét đặc trưng Việt Nam. Các món cơm được phục vụ với nhiều lựa chọn từ cơm gà, cơm sườn, đến cơm chiên hải sản, đảm bảo no bụng mà vẫn đậm đà hương vị. Thực đơn nước uống đa dạng từ trà thảo mộc, nước ép trái cây tươi, đến các loại nước ngọt giải khát, mang đến sự tươi mới và sảng khoái.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
