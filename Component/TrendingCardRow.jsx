import React from 'react'
import Rate from './cmc-table/Rate'
import Image from 'next/image'

const TrendingCardRow = ({key, number, symbol,icon, name, isIncrement, rate}) => {
  return (
    <div className='flex items-center justify-between mb-4 text-[0.93rem]'>
      
      <p className='opacity-40'>{number}</p>
      <div className='w-full flex'>
        <div className='mx-5'>
          {icon && <Image alt='' src={icon} width={20} height={20} />}
        </div>
        <p className='font-bold'>
          {name}
          <span className='text-gray-400'> {symbol}</span>
        </p>
      </div>
      <Rate isIncrement={isIncrement} rate={rate} />
    </div>
  )
}

export default TrendingCardRow