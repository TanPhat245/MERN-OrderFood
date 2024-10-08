import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios";
import { toast } from 'react-toastify';
const List = ({url}) => {
    const [list,setlist] = useState([]);

    const fetchList = async () => {
        const response = await axios.get(`${url}/api/food/list`)

        if (response.data.success) {
            setlist(response.data.data)
        }
        else {
            toast.error("Error")
        }
    }

    const removeFood = async(foodId) => {
        const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
        await fetchList();
        if (response.data.success) {
            toast.success(response.data.message)
        }
        else{
            toast.error("Error");
        }
    }

    useEffect(()=>{
        fetchList();
    },[])
  return (
    <div className='list add flex-col'>
      <p>Tất cả món ăn</p>
      <div className="list-table">
        <div className='list-table-format'>
            <b>Hình ảnh</b>
            <b>Tên</b>
            <b>Loại</b>
            <b>Giá</b>
            <b>HD</b>
        </div>
        {list.map((item,index)=>{
            return (
                <div key={index} className='list-table-format'>
                    <img src={`${url}/images/`+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                    <p>{item.price}</p>
                    <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
                </div>
            )
        })
        }
      </div>
    </div>
  )
}

export default List
