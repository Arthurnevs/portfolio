import React from 'react';

interface navItem {
    id: number;
    href: string;
    name: string;
}

interface NavProps {
    items: navItem[];
}

const Nav: React.FC<NavProps> = ({items}) => {
  return (
    <div className='flex flex-row'>
        { items.map((item, index) => (
            <div className='rounded-lg px-4 py-6 cursor-pointer'>
                <a id={item.id} href={item.href} > {item.name} </a>
            </div>
        ))

        }
    </div>
);
};

export default Nav;