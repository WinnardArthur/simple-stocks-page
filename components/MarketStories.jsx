import Image from 'next/image';

const stories = [
    {
        img: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdE33YA_L80j0_Y18aPr4ZvdfwZJLmFU72w&usqp=CAU',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/BSE_building_at_Dalal_Street.JPG',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/BSE_building_at_Dalal_Street.JPG',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        img: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdE33YA_L80j0_Y18aPr4ZvdfwZJLmFU72w&usqp=CAU',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        img: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdE33YA_L80j0_Y18aPr4ZvdfwZJLmFU72w&usqp=CAU',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/BSE_building_at_Dalal_Street.JPG',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
]

export default function MarketStories ({ screenSize }) {

    return (
        <div>
            <h2 className='hidden md:block text-red-400 font-medium text-xl py-3 mb-[2.2rem]'>MARKET STORIES</h2>
                
            <div className='flex justify-center lg:justify-between flex-wrap mt-[1.5rem] lg:mt-0'>
                {stories.map(story => (
                    <div className="relative w-[17rem] h-[12rem] mb-6" key={story.id}>
                        <Image fill src={story.img} alt='Story' className='rounded-lg brightness-[90%]'/>
                        <p className="text-white absolute text-[.92rem] leading-5 font-medium bottom-0 bg-[rgba(0,0,0,.5)] rounded-xl py-3 px-8 pr-14">{story.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}