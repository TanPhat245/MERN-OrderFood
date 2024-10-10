import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import InstructOrder from '../../components/InstructOrder/InstructOrder'
import Detail from '../../components/Detail/Detail'

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
