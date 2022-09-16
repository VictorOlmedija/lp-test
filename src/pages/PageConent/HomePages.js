import React from 'react'
import Customers from '../Home/Customers'
import GridCustormer from '../Home/GridCustormer'
import Handoff from '../Home/Handoff'
import Home from '../Home/Home'
import HotDeals from '../Home/HotDeals'
import NewsLetter from '../Home/NewsLetter'
import SocialUniqueness from '../Home/SocialUniqueness'

const HomePages = () => {
  return (
    <>
    <Home/>
    <HotDeals/>
    <SocialUniqueness/>
    <Customers/>
    <GridCustormer/>
    <Handoff/>
    <NewsLetter/>
    </>
  )
}

export default HomePages