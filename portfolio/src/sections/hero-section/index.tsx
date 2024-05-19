import React from 'react';
import Button from '../../components/button/index.tsx';
import person from '../../assets/arthur.png'

const HeroSection = () => {

    return (
        <div className='flex flex-col lg:flex-row gap-8 justify-between items-center lg:items-start'>
            <div className='flex flex-col justify-around gap-6'>
                <p className='text-[#282938] font-semibold text-xl'> Hey, I'm Arthur </p>
                <h1 className='text-7xl font-bold'> Full Stack <br/> Developer </h1>
                <p className='text-[#1c1e53] text-2xl'>
                    I am a Full Stack Developer passionate about creating innovative <br/> and functional web applications.
                </p>
                <div className='flex flex-row'>
                    <Button text='Get in touch' onClick={console.log}/>
                </div>
            </div>
            <div>
                <img src={person} className='max-h-[455px]'/>
            </div>
        </div>
    );
};

export default HeroSection;