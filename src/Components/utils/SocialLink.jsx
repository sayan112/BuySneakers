import React from 'react'

const SocialLink = ({icon,url}) => {
  return (
   <a href={url} target='blank'>
    <img src={icon} alt='iconimg' className='w-8 h-8 items-center cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110'/>
   </a>
  )
}

export default SocialLink