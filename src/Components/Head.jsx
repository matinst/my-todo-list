import React from 'react'

export default function Head(props) {
  return (
    <nav className='h-16 flex justify-center items-center border-b-[2px] '>
        <h1 className='font-mono text-lg'>{props.title}</h1>
    </nav>
  )
}
