import React from 'react'
import Hero from '../component/Hero'
import GameCard from '../component/GameCard'
import Banner from '../component/Banner'
import Info from '../component/Info'
import Main from '../component/Main'



function HomePage() {
  return (
    <div>
   <Hero /> 
   <GameCard />
   <Banner />
   <Info />
   <Main />
    </div>
  )
}

export default HomePage
