import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineVisibility } from 'react-icons/md';
import { BiComment} from 'react-icons/bi';
import { FiShare2} from 'react-icons/fi';
import { Numeral } from 'react-numeral';

export default function DiscussionForum({ discussionData }) {
  return (
    <div>
        <h2 className='hidden md:block text-red-400 font-medium text-xl px-4 py-3'>DISCUSSION FORUM</h2>

        <div className='px-2 lg:px-4 pl-[2.2rem] lg:pl-[3.5rem] pb-5'>
            <h5 className='font-medium text-[1rem] lg:text-lg mt-4 lg:mt-0 mb-1 lg:mb-2'>Filters</h5>
            <div className='bg-white flex justify-between items-center py-4 px-2 lg:px-6 rounded-md shadow shadow-gray-400 drop-shadow-xl mb-4'>
                <button className='rounded-[5rem] w-fit px-2 lg:px-5 bg-red-700 text-white  text-[.75rem] lg:text-[.85rem] py-[.3rem] font-medium'>Sector 1</button>
                <button className='rounded-[5rem] w-fit px-2 lg:px-5 bg-blue-800 text-white  text-[.75rem] lg:text-[.85rem] py-[.3rem] font-medium'>Sector 2</button>
                <button className='rounded-[5rem] w-fit px-2 lg:px-5 bg-yellow-500 text-white  text-[.75rem] lg:text-[.85rem] py-[.3rem] font-medium'>Sector 3</button>
                
                <div className='w-[35%] lg:w-[40%] rounded-[5rem] flex items-center bg-white lg:bg-zinc-200 border border-gray-400 shadow px-1 py-[.32rem] pl-2 text-gray-600'>
                    <FiSearch className='text-[.95rem] lg:text-[1rem]'/>
                    <input type='text' placeholder="Search here" className='w-[90%] lg:ml-1 text-[.9rem] lg:text-[1rem] outline-none bg-transparent text-black'/>
                </div>
            </div>

            <div className='max-h-screen overflow-y-auto sm-scrollbar pr-2'>
                {
                    discussionData?.map((data) => (
                        <div key={data.id} className='relative mb-8 bg-white shadow shadow-gray-400 drop-shadow-xl rounded-md pt-[3rem] pb-[1rem]'>
                            <p className='absolute text-blue-400 right-4 top-4 text-[.84rem] sm:text-sm cursor-pointer font-medium'>
                                {data.createdAt} ago
                            </p>
                            {
                                <div className='flex justify-center'>
                                    <div className='relative w-[70%] lg:w-[60%] h-[6rem] lg:h-[8rem]'>
                                        <Image src='/images/infobeam3.jpg' fill className='object-cover'/>
                                    </div>
                                </div>
                            }
                            
                            <div className='flex justify-between gap-x-4 px-2 lg:px-8 mt-2 lg:mt-6'>
                                <div className='flex w-[3rem] h-[3rem] relative'>
                                    <Image 
                                        fill 
                                        className='rounded-full object-cover' 
                                        src={data.profileImg} alt="user"
                                    />   
                                </div>
                                
                                <div className='flex-1 pt-2'>
                                    <div className='flex items-center'>
                                        <h5 className='font-medium text-gray-600 text-[.85rem] lg:text-[.9rem]  mr-4 lg:mr-8'>Lorem Ipsum</h5>
                                        <button className='rounded-[5rem] px-3 lg:px-4 text-white text-[.8rem] lg:text-[.85rem] py-[0.2rem] font-medium' style={{backgroundColor: data.color}}>Sector 1</button>
                                    </div>
                                    <p className='text-gray-600 font-medium text-[.85rem] lg:text-[.9rem] mt-3 lg:mt-6'>
                                        {data.text} ago
                                    </p>

                                    <div className='flex justify-between mt-4 lg:mt-8'>
                                        <button className='flex items-center gap-x-1'>
                                            <AiFillHeart className='text-red-600 lg:text-2xl'/>
                                            <h6 className='text-[.8rem] lg:text-[.9rem] font-medium text-gray-600'>
                                                {Numeral(Number(data.likes))}
                                            </h6>
                                        </button>
                                        <button className='flex items-center gap-x-1'>
                                            <MdOutlineVisibility className='text-gray-600 lg:text-2xl'/>
                                            <h6 className='text-[.8rem] lg:text-[.9rem] font-medium text-gray-600'>
                                                {data.views} Views
                                            </h6>
                                        </button>
                                        <button className='flex items-center gap-x-1'>
                                            <BiComment className='text-gray-600 lg:text-2xl'/>
                                            <h6 className='text-[.8rem] lg:text-[.9rem] font-medium text-gray-600'>
                                                {data.comments} Comments
                                            </h6>
                                        </button>
                                        <button className='flex items-center gap-x-1'>
                                            <FiShare2 className='text-gray-600 lg:text-2xl'/>
                                            <h6 className='text-[.8rem] lg:text-[.9rem] font-medium text-gray-600'>Share</h6>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
