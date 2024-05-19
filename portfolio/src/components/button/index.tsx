import React from 'react';

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ text, href, onClick, className, variant = 'primary' }) => {
  const baseClass = "px-4 py-2 rounded-lg transition duration-300 ease-in-out cursor-pointer border-2 border-[#0065ff] items-center";

  const variants = {
    primary: 'bg-[#0065ff] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#0065ff]',

    secondary: 'bg-[#ffffff] text-[#0065ff] hover:bg-[#0065ff] hover:text-[#ffffff]',
  };  

  const combinedClass = `${baseClass} ${variants[variant]} ${className || ''}`;


  return href ? (
    <a href={href} className={combinedClass}>
      {text}
    </a>
  ) : (
    <div onClick={onClick} className={combinedClass}>
      {text}
    </div>
    
  );
};

export default Button;