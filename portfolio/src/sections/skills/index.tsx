import React from 'react';
import Card from '../../components/card/index.tsx';
import api from "../../assets/api.png";
import front from "../../assets/front.png";
import test from "../../assets/test.png";
import code from "../../assets/code.png"

const Skills = () => {

    const cardsList = [
        {
            imgPath: front,
            title: "Front-End",
            description: "Desenvolvimento de interfaces dinâmicas e responsivas que funcionam perfeitamente em qualquer dispositivo.",
            width: "60px",
            height: "60px",
        },
        {
            imgPath: code,
            title: "Back-End",
            description: "Desenvolvimento de API's robustas e eficientes que suportam aplicações escaláveis e seguras.",
            width: "60px",
            height: "60px",
        },
        {
            imgPath: test,
            title: "Testes e Garantia de Qualidade",
            description: "Implementação de testes unitários, de integração e end-to-end para garantir a qualidade do software.",
            width: "60px",
            height: "60px",
        },
        {
            imgPath: api,
            title: "Integração e APIs",
            description: "Conexão de diferentes sistemas e serviços para trabalhar em conjunto de maneira eficiente.",
            width: "60px",
            height: "60px",
        }
    ]

    return (
        <div>
            <p className='text-[#282938] font-semibold'> My Skills </p>
            <h2 className='text-5xl font-bold my-6'> My Expertise </h2>
            
            <div className='flex flex-row gap-8'>
                {
                    cardsList.map((item, index) => (
                        <Card imgPath={item.imgPath} title={item.title} description={item.description} width={item.width} height={item.height}/>
                    ))
                }
            </div>
            

        </div>
    );
};

export default Skills;