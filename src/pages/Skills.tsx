import React from 'react';
import SolarSystem from '../components/SolarSystem';
import { Vector3 } from 'three';
import { FaHtml5, FaCss3,FaReact, FaNodeJs,  FaAws, FaDocker } from 'react-icons/fa';
import { TbBrandJavascript, TbBrandCSharp, TbBrandAzure,TbPuzzle} from 'react-icons/tb';
import { SiCoursera,SiFuturelearn, SiDotnet, SiVim, SiJquery, SiLua, SiLichess, SiCplusplus,SiGooglecloudcomposer,SiMinetest} from 'react-icons/si';

const Skills: React.FC = () => {
    const positions = new Vector3(2, -1.1, 2.7);
    const moonPos = new Array<number>(3, -1.7, 2.7);
    return (
        <>
            <SolarSystem moonPosition={moonPos} positions={positions} />
            <section className="animate-wiggle z-10 w-full h-full flex  md:pb-35 p-5 flex-col font-roboto">


                <h2 className="text-3xl font-semibold mb-6 font-roboto  sm:flex sm:justify-center text-custom-secondaryColor">Skills</h2>
                <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 grid-cols-1 xl:px-64">


                    <div className="bg-black p-5 sm:p-6  rounded-xl shadow-md text-custom-secondaryColorText bg-opacity-70" >
                        <h3 className="text-3xl font-roboto font-bold mb-3 text-blue-100 flex justify-center sm:justify-start">Development</h3>
                        <ul className='flex-col grid gap-2 sm:grid-cols-2 grid-cols-2'>
                            <li className="mb-1 text-2xl">
                                <div className="flex  items-center sm:justify-start justify-center gap-2">
                                    <FaHtml5 />
                                    HTML5
                                </div>
                            </li>
                            <li className="mb-1 text-2xl">
                                <div className="flex  items-center sm:justify-start justify-center gap-2">
                                    <FaCss3 />
                                    CSS3
                                </div>
                            </li>


                            <li className="mb-1 text-2xl">

                                <div className="flex  items-center sm:justify-start justify-center gap-2">
                                    <TbBrandJavascript />
                                    JS
                                </div>
                            </li>
                            <li className="mb-1 text-2xl">
                                <div className="flex  items-center sm:justify-start justify-center gap-2">
                                    <FaReact />
                                    React
                                </div></li>
                            <li className="mb-1 text-2xl">
                                <div className="flex  items-center sm:justify-start justify-center gap-2">
                                    <FaNodeJs />
                                    Node.js
                                </div></li>
                                <li className="mb-1 text-2xl">
                                <div className="flex  items-center sm:justify-start justify-center gap-2">
                                    <SiCoursera />
                                    C
                                </div></li>
                                <li className="mb-1 text-2xl">
                                <div className="flex  items-center sm:justify-start justify-center gap-2">
                                    <SiCplusplus />
                                    CPP
                                </div></li>
                                <li className="mb-1 text-2xl">
                                <div className="flex  items-center sm:justify-start justify-center gap-2">
                                    <TbBrandCSharp />
                                    CSharp
                                </div></li>
                                <li className="mb-1 text-2xl">
                                <div className="flex  items-center sm:justify-start justify-center gap-2">
                                    <SiDotnet />
                                    .net
                                </div></li>

                                <li className="mb-1 text-2xl">
                                <div className="flex  items-center sm:justify-start justify-center gap-2">
                                    <FaAws />
                                    AWS
                                </div></li>
                                <li className="mb-1 text-2xl">
                                <div className="flex  items-center sm:justify-start justify-center gap-2">
                                    <TbBrandAzure />
                                    Azure
                                </div></li>
                                <li className="mb-1 text-2xl">
                                <div className="flex  items-center sm:justify-start justify-center gap-2">
                                    <TbBrandAzure />
                                    Azure
                                </div></li>
                                <li className="mb-1 text-2xl">
                                <div className="flex  items-center sm:justify-start justify-center gap-2">
                                    <FaDocker />
                                    Docker
                                </div></li>
                                <li className="mb-1 text-2xl">
                                <div className="flex  items-center sm:justify-start justify-center gap-2">
                                    <SiVim />
                                    Vim
                                </div></li>
                                <li className="mb-1 text-2xl">
                                <div className="flex  items-center sm:justify-start justify-center gap-2">
                                    <SiJquery />
                                   JQuery
                                </div></li>
                                <li className="mb-1 text-2xl">
                                <div className="flex  items-center sm:justify-start justify-center gap-2">
                                    <SiLua />
                                   Lua
                                </div></li>
                        </ul>
                    </div>


                    <div className="bg-black sm:p-6 rounded-xl p-5 shadow-md text-custom-secondaryColorText bg-opacity-70">
                        <h3 className="text-3xl  font-roboto mb-3 font-bold text-blue-100 flex justify-center sm:justify-start">Software Engineer</h3>
                        <ul className='gap-5 flex flex-col sm:items-start items-center'>
                            <li className="mb-1 flex flex-col items-center sm:items-start">   <TbPuzzle /> Algorithms and Data Structures</li>
                            <li className="mb-1 flex flex-col items-center sm:items-start">   <SiLichess /> OOP Object-Oriented Programming</li>
                            <li className="mb-1 flex flex-col items-center sm:items-start">    <SiFuturelearn />Design Patterns</li>
                            <li className="mb-1 flex flex-col items-center sm:items-start">   <SiGooglecloudcomposer />Software Architecture</li>
                            <li className="mb-1 flex flex-col items-center sm:items-start">   <SiMinetest />Test-Driven Development (TDD)</li>
                        </ul>
                    </div>
                    <div className="bg-black sm:p-6 rounded-xl p-5  shadow-m text-custom-secondaryColorText bg-opacity-70 ">
                        <h3 className="text-3xl font-roboto mb-3 font-bold text-blue-100 flex justify-center sm:justify-start">Additional Skills</h3>
                        <ul className='flex gap-2 flex-col'>
                            <li className="mb-1 ">Development Backend with .NET / C#</li>
                            <li className="mb-1">Development JavaScript/TypeScript, HTML5, CSS3</li>
                            <li className="mb-1">Development Web with Angular, React.js, Vue.js, jQuery</li>
                            <li className="mb-1">Concepts and Best Practices: DDD, TDD, EF, SOA Design patterns</li>
                            <li className="mb-1">Knowledge of SQL Server and Oracle</li>
                            <li className="mb-1">Code versioning using Git</li>
                            <li className="mb-1">Environment virtualization using Docker</li>
                            <li className="mb-1">Effective communication in various areas</li>
                        </ul>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Skills;
