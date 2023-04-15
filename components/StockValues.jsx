import React from 'react';

const data = [
    {
        value: '.50',
        percentage: '0.21%',
        color: 'red',
    },
    {
        name: 'NIFTY_BANK',
        value: '41,599.40',
        percentage: '0.01%',
        color: 'green',
    },
    {
        name: 'BAJFINANCE',
        value: '6,435.50',
        percentage: '0.30',
        color: 'red',
    },
    {
        name: 'BHARTIARTL',
        value: '771.95',
        percentage: '0.69%',
        color: 'green',
    },
    {
        name: 'HDFCBANK',
        value: '1,657.10',
        percentage: '0.40%',
        color: 'green',
    },
    {
        name: 'HINDUNILVR',
        value: '2,577.50',
        percentage: '0.36%',
        color: 'red',
    },
    {
        name: 'INDIGO',
        value: '2,043.50',
        percentage: '',
        color: '',
    }
]

export default function StockValues({ props }) {
  return (
    <div className='bg-slate-800 flex justify-between gap-x-4 py-2 px-2 md:px-5 overflow-x-scroll no-scrollbar'>
        {
            data.map(item => (
                <div className='flex text-white gap-x-6 w-[15rem]'>
                    <p className='text-[.75rem]'>{item.name}</p>
                    <h5 className='text-[.75rem]'>{item.value}</h5>
                    <h6 className={`text-[.75rem] font-medium`} style={{color: item.color}}>{item.percentage}</h6>
                </div>
            ))
        }
    </div>
  )
}


// export async function getStaticProps() {

// }