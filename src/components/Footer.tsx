import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-blue-400 w-full '>
        <div className='container mx-auto pt-7 pb-7'>
        <div className='grid grid-cols-3 text-white '>
            <div className='flex flex-col'>

                <h1 className='text-3xl font-bold mb-7'>  Calculate Water  </h1>
                <p> Dev by Array (hrsdfordev) </p>
                <p> Now I'm Study in Songkhal Major Comsci </p>
                <p> Now i'm have been learning React + TypeScript + Node js</p>
            </div>
            <div className='flex flex-col'>

                <h1 className='text-3xl font-bold mb-7'>  Speak With me   </h1>
                <p> Phone :  095-5057316 </p>
                <h1 className='text-3xl font-bold mt-7 mb-7'>  Contacts   </h1>
                <p> Gmail :  hrsdfordev@gmail.com</p>
                <p> Facebook :  Haris Sadeen </p>
                <p> Line :  @wiojkl </p>
                <p> Github :  hrsdfordev </p>
            </div>
            <div className='flex flex-col '>

                <h1 className='text-3xl font-bold mb-7'>  Works   </h1>
                <p className='font-semibold mb-3'> FinalProjects : <span> A Mobile Application for Binary Image Classification of Skin Moles (Flutter , Tenserflow) </span> </p> 
                <p className='font-semibold'> OthersProjects : <span> PokemonList Website (React , Javascript , API) </span> </p> 

            </div>

        </div>

        <hr className='mt-5 mb-5'/>
        <div className='flex justify-around text-xl text-white font-bold'>
            <h1>
                Deverloper By Array 
            </h1>
            <div className='bg-blue-300 py-2 px-3 rounded-lg'>
                hrsdfodev
            </div>

        </div>
        </div>
        

    </div>
  )
}

export default Footer