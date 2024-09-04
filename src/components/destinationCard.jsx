import React from 'react'

const DestinationCard = ({destination}) => {
  return (
    <div className='relative roudned-lg overflow-hidden'>
        <img 
            src={destination.image} 
            alt={destination.name}
            className='w-full h-64 object-cover rounded-lg' 
        />
        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-lg'>
            <h3 className='text-white text-xl font-bold'>{destination.name}</h3>
            <p className='text-white text-sm'>
                {destination.flag} {destination.location}
            </p>
            <p className='text-white text-xs mt-1'>{destination.visitors}</p>
        </div>
    </div>
  )
}

export default DestinationCard