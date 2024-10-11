import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header.jsx'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx'
import AppDownload from '../../components/AppDownload/AppDownload.jsx'
import InstructOrder from '../../components/InstructOrder/InstructOrder.jsx'
import Detail from '../../components/Detail/Detail.jsx'

const Home = () => {

    const [category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <Detail/>
      <InstructOrder/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
