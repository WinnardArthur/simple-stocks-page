import { useState } from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import { BsCardChecklist, BsGrid } from 'react-icons/bs';
import { BiChat, BiHomeCircle } from 'react-icons/bi';


export default function Menubar() {
    const [active, setActive] = useState('home');

  return (
    <div className='fixed bottom-0 left-0 right-0 text-gray-100 bg-primary-color block lg:hidden'>
        <div className='flex items-center'>
            <button onClick={() => setActive('dashboard')} className={`${active === 'dashboard' ? 'border-b-2 border-red-500' : ''} py-3 w-[20%] flex justify-center`}>
                <MdOutlineDashboard className='text-[1.3rem]'/>
            </button>
            <button  onClick={() => setActive('grid')} className={`${active === 'grid' ? 'border-b-2 border-red-500' : ''} py-3 w-[20%] flex justify-center`}>
                <BsGrid />
            </button>
            <button  onClick={() => setActive('home')} className={`${active === 'home' ? 'border-b-2 border-red-500' : ''} py-3 w-[20%] flex justify-center`}>
                <BiHomeCircle className='text-[1.3rem]'/>
            </button>
            <button  onClick={() => setActive('chat')} className={`${active === 'chat' ? 'border-b-2 border-red-500' : ''} py-3 w-[20%] flex justify-center`}>
                <BiChat className='text-[1.3rem]'/>
            </button>
            <button  onClick={() => setActive('list')} className={`${active === 'list' ? 'border-b-2 border-red-500' : ''} py-3 w-[20%] flex justify-center`}>
                <BsCardChecklist className='text-[1.3rem]'/>
            </button>
        </div>
    </div>
  )
}
