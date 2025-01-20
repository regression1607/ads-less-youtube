import React from 'react'

function Button({name}) {
  return (
    <div>
      <button className='px-4 py-1 bg-gray-400 rounded-lg text-sm md:text-base'>{name}</button>
    </div>
  )
}

export default Button;