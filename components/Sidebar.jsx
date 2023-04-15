import { FaUserAlt } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import { BsFillBellFill } from 'react-icons/bs';
import { HiCurrencyDollar } from 'react-icons/hi';
import { AiFillCaretDown } from 'react-icons/ai';
import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className='bg-primary-color w-[16rem] h-full fixed top-0 lg:top-auto lg:relative z-[10]'>
      <div className='w-full h-full text-gray-100'>
        <div className='flex items-center justify-between pl-6 pr-9 py-6 mb-2 border-b border-gray-500'>
          <div className='flex items-center'>
            <FaUserAlt className='text-xl'/>
            <p className='ml-3'>Hello, User</p>
          </div>
          <div className='relative'>
            <span className='rounded-full w-[.5rem] h-[.5rem] absolute right-0 bg-red-500'></span>
            <BsFillBellFill className='text-xl cursor-pointer'/>
          </div>
        </div>

        <Link href="#" className='flex items-center justify-between pl-4 pr-2 py-[.5rem] border-gray-500'>
          <div className='flex items-center'>
            <MdMessage className='text-xl'/>
            <p className='ml-2'>Discussion Forum</p>
          </div>
          <div className='relative'>
            <AiFillCaretDown className='text-sm'/>
          </div>
        </Link>

        <Link href="#" className='flex items-center justify-between pl-4 pr-2 py-[.5rem] border-gray-500'>
          <div className='flex items-center'>
            <HiCurrencyDollar className='text-xl'/>
            <p className='ml-2'>Market Stories</p>
          </div>
        </Link>

        <Link href="#" className='flex items-center justify-between pl-4 pr-2 py-[.5rem] border-gray-500'>
          <div className='flex items-center'>
            <p className='ml-[1.8rem]'>Sentiment</p>
          </div>
        </Link>

        <Link href="#" className='flex items-center justify-between pl-4 pr-2 py-[.5rem] border-gray-500'>
          <div className='flex items-center'>
            <p className='ml-[1.8rem]'>Market</p>
          </div>
        </Link>

        <Link href="#" className='flex items-center justify-between pl-4 pr-2 py-[.5rem] border-gray-500'>
          <div className='flex items-center'>
            <p className='ml-[1.8rem]'>Sector</p>
          </div>
        </Link>

        <Link href="#" className='flex items-center justify-between pl-4 pr-2 py-[.5rem] border-gray-500'>
          <div className='flex items-center'>
            <p className='ml-[1.8rem]'>Watchlist</p>
          </div>
        </Link>

        <Link href="#" className='flex items-center justify-between pl-4 pr-2 py-[.5rem] border-gray-500'>
          <div className='flex items-center'>
            <p className='ml-[1.8rem]'>Events</p>
          </div>
        </Link>

        <Link href="#" className='flex items-center justify-between pl-4 pr-2 py-[.5rem] border-gray-500'>
          <div className='flex items-center'>
            <p className='ml-[1.8rem]'>News/Interview</p>
          </div>
        </Link>

      </div>
    </div>
  )
}
