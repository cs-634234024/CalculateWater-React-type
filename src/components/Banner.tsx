import React from 'react'

import calculator from '../assets/images/calculator.png'

type Props = {
  title : string , 
  detail : string , 
  image : any
}

const Banner = ({title , detail, image}: Props) => {
  return (
    <div className='container mx-auto w-full  bg-blue-300 grid grid-cols-3 rounded-lg'>
        <div className='col-span-2 flex flex-col justify-center items-center p-5'> 
            <h1 className='text-white font-bold text-3xl'>{title}</h1>
            <p className='text-white'>{detail}</p>
         </div>
        <img  src={image} alt=""  width={300} height={300} />
    </div>
  )
}

export default Banner