import React, { useEffect, useState } from 'react';
import Card from '../../components/card/index.tsx';
import api from "../../assets/api.png";
import front from "../../assets/front.png";
import test from "../../assets/test.png";
import code from "../../assets/code.png"
import Avatar from "../../components/avatar/index.tsx"
import django from "../../assets/django.png"
import node from "../../assets/node.png"
import reactImg from "../../assets/reactImg.png"


const Skills = () => {

    const [activeFrameworks, setActiveFrameworks] = useState({});

    useEffect(() => {
        handleAvatarHover(0)
    }, [])

    const cardsList = [
        {
            id: 1,
            imgPath: front,
            title: "Front-End",
            description: "Development of dynamic and responsive interfaces that work seamlessly on any device.",
            width: "60px",
            height: "60px",
        },
        {
            id: 2,
            imgPath: code,
            title: "Back-End",
            description: "Development of robust and efficient APIs that support scalable and secure applications.",
            width: "60px",
            height: "60px",
        },
        {
            id: 3,
            imgPath: test,
            title: "Testing and Quality Assurance",
            description: "Implementation of unit, integration, and end-to-end tests to ensure software quality.",
            width: "60px",
            height: "60px",
        },
        {
            id: 4,
            imgPath: api,
            title: "Integration and APIs",
            description: "Connecting different systems and services to work together efficiently.",
            width: "60px",
            height: "60px",
        }
    ]

    const frameworksList = [
        {
            name: "Django",
            description: "Django é uma framework web para Python, que incentiva o desenvolvimento rápido e um design limpo e pragmático. Ele é responsável por grande parte do trabalho de desenvolvimento web."
        },
        {
            name: "React",
            description: "React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. Este framework também permite a criação de componentes reutilizáveis para nossa aplicação e a composição de elementos que podem ser alterados, sem a necessidade de recarregar a página."
        },
        {
            name: "Node",
            description: "Node.js é um ambiente de tempo de execução de código aberto, multiplataforma e baseado em JavaScript. Ele permite que você execute código JavaScript no servidor, em vez de apenas no navegador."
        }
    ]

    const handleAvatarHover = (index: Number) => {
        setActiveFrameworks(frameworksList[index || 0]);
    };

    return (
        <div className='flex flex-col items-center lg:items-start'>
            <h2 className='text-5xl font-bold my-6 '> My Expertise </h2>
            
            <div className='flex gap-8 flex-col lg:flex-row'>
                {
                    cardsList.map((item, index) => (
                        <Card key={item.id} imgPath={item.imgPath} title={item.title} description={item.description} width={item.width} height={item.height}/>
                    ))
                }
            </div>
            
            <p className='text-[#282938] font-semibold text-2xl mt-6'> Main Frameworks </p>
            <div className='grid grid-cols-6 mt-6 justify-between gap-6'>
                <div className='col-span-6 grid grid-cols-3 w-full md:col-span-2'>
                        <Avatar imageSrc={django} knowledgePercentage={70} onMouseOver={() => handleAvatarHover(0)} height={"160px"} width={"160px"}/>
                        <Avatar imageSrc={reactImg} knowledgePercentage={40} onMouseOver={() => handleAvatarHover(1)} height={"160px"} width={"160px"}/>  
                        <Avatar imageSrc={node} knowledgePercentage={40} onMouseOver={() => handleAvatarHover(2)} height={"160px"} width={"160px"}/>
                </div>
                <div className='col-span-6 mt-6 md:col-span-4'>
                    <div className='flex flex-col gap-4'>
                    <h2 className='text-4xl font-semibold'>
                        {activeFrameworks.name} 
                    </h2>
                    <p>
                        {activeFrameworks.description}
                    </p>
                    </div>  
                </div>
                
            </div>
        </div>
    );
};

export default Skills;