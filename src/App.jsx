import { useState } from 'react'
import Counter from './counter'
import  './App.css'
import LikeButton from './likeButton'
import LudoGames from './LudoGames'
import Todo_list from './Todo_list'
import LotteryTickect from './LotteryTickect'
import { sum } from './ticket'


function App() {

  let winConditions = (ticket) =>{
    return sum (ticket) === 15;
  }
 
  return (
    <>
    {/* <Counter/>
    <LikeButton/> */}
    {/* <LudoGames /> */}
    {/* <Todo_list/> */}
    <LotteryTickect n={3} winConditions={winConditions} />
    

    
    
    
    
    </>
  )
}

export default App;
