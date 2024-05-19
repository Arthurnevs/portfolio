import React from 'react';

const Avatar = ({ imageSrc, knowledgePercentage, onMouseOver, height, width }) => {
  return (
    <div className="m-4 flex justify-center items-center" onMouseOver={onMouseOver}>
        <div className='flex-col flex'>
            <div className={`mt-2`}>
                <img src={imageSrc} height={height}  width={width} />
            </div>
            {/* <div className="bottom-2 transform bg-gray-300 w-full h-2 rounded-md">
                <div className="h-full bg-[#0065ff] rounded-md" style={{ width: `${knowledgePercentage}%` }}></div>
            </div> */}
        </div>
        
    </div>
  );
};

export default Avatar;
