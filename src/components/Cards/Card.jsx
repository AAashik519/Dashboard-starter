import React from 'react'
import './card.css'
import { cardsData } from '../Data/data'
const Card = () => {
  return (
    <div className='Cards'> 
        { cardsData.map((card,id)=>{
            return (
                 
                <div>
                    
                </div>
            )
        })}
    </div>
  )
}

export default Card