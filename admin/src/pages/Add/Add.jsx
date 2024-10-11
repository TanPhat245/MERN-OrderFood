import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'
const Add = ({url}) => {
    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Mì"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async (event) =>
    {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("image",image)
        formData.append("category",data.category)  
        const response = await axios.post(`${url}/api/food/add`,formData)
        if (response.data.success) {
            setData({
                name:"",
                description:"",
                price:"",
                category:"Mì"
            })
            setImage(false)
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)
        }
    }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
            <p>Tải hình</p>
            <label htmlFor="image">
                <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
            <p>Tên món ăn</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Tên' />
        </div>
        <div className="add-product-description flex-col">
            <p>Mô tả</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Mô tả' required></textarea>

        </div>
        <div className="add-category-price">
            <div className="add-category flex-col">
                <p>Loại</p>
                <select onChange={onChangeHandler} name="category">
                    <option value="Mì">Mì</option>
                    <option value="Cơm">Cơm</option>
                    <option value="Nước">Nước</option>
                    <option value="Bánh Ngọt">Bánh Ngọt</option>
                    <option value="Bánh Mặn">Bánh Mặn</option>
                </select>
            </div>
            <div className="add-price flex col">
                <p>Giá</p>
                <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='tren 20k' />
            </div>
        </div>
        <button type='submit' className='add-btn'>Thêm</button>
      </form>
    </div>
  )
}

export default Add
