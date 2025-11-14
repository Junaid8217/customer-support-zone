import React from 'react';
import BannerImg1 from '../../assets/vector1.png';

const Banner = ({visitedTickets, setVisitedTickets, completeTask}) => {


    return (
        <div className=' max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center my-10 gap-4'>
            <div className='w-full md:w-[708px] h-[250px] bg-amber-300 flex flex-col justify-center items-center text-center gap-2 text-white'
                style={{
                    backgroundImage: `url(${BannerImg1}), linear-gradient(to right, rgba(99,46,227,0.8), rgba(159,98,242,0.8))`
                }}>
                <p className='text-3xl'>In-Progress</p>
                <h1 className='font-semibold text-6xl'>{visitedTickets.length}</h1>
            </div>
            <div className='w-full md:w-[708px] h-[250px] bg-amber-300 flex flex-col justify-center items-center text-center gap-2 text-white'
                style={{
                    backgroundImage: `url(${BannerImg1}), linear-gradient(to right, rgba(84, 207, 104, 1), rgba(0, 130, 122, 1))`
                }}>
                <p className='text-3xl'>Resolved</p>
                <h1 className='font-semibold text-6xl'>{completeTask.length}</h1>
            </div>
        </div>
    );
};

export default Banner;