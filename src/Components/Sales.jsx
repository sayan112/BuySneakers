import React from 'react'
 import Item from './utils/Item'
import Title from './utils/Title'
const Sales = ({endpoint:{title,items}}) => {
  return (
<>
    <div className='nike-container'>
        <Title title={title}/>
        <div className='grid  items-center justify-items-center grid-cols-4 md:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 gap-7 lg:gap-5 mt-7'>
        {items.map((item, index)=>(
         <Item item={item} key={index}/>   
        ))}
            
        </div>
    </div>
</>
  )
}

export default Sales