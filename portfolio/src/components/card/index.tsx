import React from 'react';


interface CardProps {
    imgPath: string;
    title: string;
    description: string;
    height: string;
    width: string;
}

const Card: React.FC<CardProps> = ({imgPath, title, description, height, width}) => {

  
    return (
        <div className='bg-[#f5fcff] rounded-lg hover:border-b-4 hover:border-[#0065ff] flex flex-col p-8 gap-7'>
            <div className='p-3 bg-[#fff] flex justify-center'>
                <img src={imgPath} height={height} width={width}/>

            </div>
            <div className='flex flex-col gap-6'>
                <h3 className='font-extrabold'>{title}</h3>
                <p>
                 { description }
                </p>
            </div>
        </div>
);
};

export default Card;