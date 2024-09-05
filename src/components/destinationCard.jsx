import React from 'react'

const DestinationCard = ({destination}) => {
  return (
    <div className='relative rounded-lg overflow-hidden'>
        <img 
            src={destination.image} 
            alt={destination.name}
            className='w-full h-98 object-cover rounded-lg' 
        />
        <div className='absolute bottom-0 text-center left-0 right-0 bg-gradient-to-t from-blueGrey to-transparent p-4 rounded-lg'>
            <h1 className='text-white text-4xl font-playfair font-bold pb-4'>{destination.name}</h1>
            <p className='text-white'>
                {destination.flag} {destination.location}
            </p>
            <p className='text-white mt-1'>{destination.visitors}</p>
        </div>
    </div>
  )
}

export default DestinationCard