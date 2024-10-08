import React, { useState } from 'react'
import './Header.css'


const Header = () => {

    const [menu,setMenu] = useState("menu");

  return (
    <div className='header'>
        <div className="header-contents">
            <h3>Lựa chọn những món ăn tại đây.</h3>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}><button>Xem menu</button></a>
        </div>
    </div>
  )
}

export default Header
