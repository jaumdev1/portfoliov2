import React, { useRef } from 'react';
import { Canvas,  useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import grelloimg from '../../public/grello.png';
import snakeBattle from '../../public/snakeBattle.png';
import twitter from '../../public/twitter.jpg';
import marvel from '../../public/marvel.png';
import ddd from '../../public/ddd.jpg';
import code from '../../public/code.png';
import { TbBrandCSharp} from 'react-icons/tb';
import { MdOutlineDomain} from 'react-icons/md';
import { FaLinux} from 'react-icons/fa';
import { BiSolidLandmark} from 'react-icons/bi';


const MovingStars: React.FC = () => {
    const starsRef = useRef<THREE.Points | null>(null);

    useFrame(({ clock }) => {
        if (starsRef.current) {
            starsRef.current.rotation.y = clock.elapsedTime * 0.05;
        }
    });

    return (
        <group>
            <Stars ref={starsRef} />
        </group>
    );
};
const Background: React.FC = () => {
    return (
        <div className='min-h-max w-full absolute top-0 left-0 z-0'>
            <Canvas className="w-full h-full" style={{height:'100%'}}>
                <MovingStars />
            </Canvas>
        </div>
    );


};
const Projects: React.FC = ({ }) => {

    return (
        <>
           
            <section className='font-roboto flex justify-center items-center flex-col z-10'>
               
                <h2 className="text-3xl font-semibold mb-6 font-roboto  sm:flex sm:justify-center text-custom-secondaryColor">
                    Projects
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-1 sm:w-7/12 gap-3 p-1'>
                    
                <div className='bg-black text-custom-secondaryColorText flex flex-col p-2 gap-2 rounded-md'>
                        <div className='w-4/4 bg-fuchsia-300 border-solid border-2 border-custom-secondaryColorText'> 
                        
                          <img className='w-full h-full' src={ddd} alt="trello projeto para terminal"/>


                        </div>
                        <div>
                        <p className='text-blue-400 text-2xl'>Soul Sync Server - API</p>
                        </div>
                        <div>
                            <h1 className='text-xl'>Libs e Languages</h1>
                           
                            <p className='flex items-center gap-1'>  <TbBrandCSharp />  CSharp</p>
                            <p className='flex items-center gap-1'>  <MdOutlineDomain />  DDD - Domain Driven Design</p>
                            <p className='flex items-center gap-1'> <BiSolidLandmark />   SOLID </p>
                          
                        </div>
                        <div className=''>
                            <p>
                            My project is an API for my application "Soul Sync," which facilitates soul-to-soul connections to play synchronized music via WebSocket. It employs best practices for decoupling and dependency inversion.
                          </p>
                        </div>
                        <footer className='flex gap-4 w-full h-full justify-center p-2 items-end'>
                            
                        <button className='bg-custom-primaryButton p-1 rounded-sm'><a>Site</a></button>
                        <button className='bg-custom-primaryButton p-1 rounded-sm'><a>Code</a></button>
                        </footer>
                    </div>
                    <div className='bg-black text-custom-secondaryColorText flex flex-col p-2 gap-2 rounded-md'>
                        <div className='w-4/4 bg-fuchsia-300 border-solid border-2 border-custom-secondaryColorText'> 
                        
                          <img className='w-full h-full' src={code} alt="trello projeto para terminal"/>


                        </div>
                        <div>
                        <p className='text-blue-400 text-2xl'>Code Challenges</p>
                        </div>
                        <div>
                            <h1 className='text-xl'>Libs e Languages</h1>
                           
                            <p className='flex items-center gap-1'>C</p>
                            <p className='flex items-center gap-1'> <FaLinux/>Kernel Linux</p>
            
                          
                        </div>
                        <div className=''>
                            <p>
                            Repository created to store code challenges implemented in C, handcrafting certain libraries to strengthen problem-solving skills and pursue performance optimization.
                          </p>
                        </div>
                        <footer className='flex gap-4 w-full h-full justify-center p-2 items-end'>
                            
                        <button className='bg-custom-primaryButton p-1 rounded-sm'><a>Site</a></button>
                        <button className='bg-custom-primaryButton p-1 rounded-sm'><a>Code</a></button>
                        </footer>
                    </div>
                    <div className='bg-black text-custom-secondaryColorText flex flex-col p-2 gap-2 rounded-md'>
                    <div className='w-4/4 bg-fuchsia-300 border-solid border-2 border-custom-secondaryColorText'> 
                    <img className='w-full h-full' src={grelloimg} alt="trello projeto para terminal" />
                     </div>
                        <div>
                        <p className='text-blue-400 text-2xl'>Gnu - Trello (Grello)</p>
                        </div>
                        <div>
                            <h1 className='text-xl'>Libs and Languages</h1>
                            <p>C++</p>
                            
                        </div>
                        <div className=''>
                            <p>
 
                                "Grello - taskManager" is a task management system developed in C++ using the ncurses library. It provides terminal-based control, remote SSH access, Navigation and Edit Modes (shortcuts N and ESC), as well as a Command Line (F1) for commands like :add and :del, offering a complete task management experience in the terminal.
                            </p>
                        </div>
                        <footer className='flex gap-4 w-full h-full justify-center p-2 items-end'>
                            
                        <button className='bg-custom-primaryButton p-1 rounded-sm'><a>Site</a></button>
                        <button className='bg-custom-primaryButton p-1 rounded-sm'><a>Code</a></button>
                        </footer>
                    </div>
                    <div className='bg-black text-custom-secondaryColorText flex flex-col p-2 gap-2 rounded-md'>
                       
                    <div className='w-4/4 bg-fuchsia-300 border-solid border-2 border-custom-secondaryColorText'> 
  <img className='w-full h-full'   src={snakeBattle}  alt="trello projeto para terminal"/>
</div>
               
                        <div>
                        <p className='text-blue-400 text-2xl'>Snake Battle</p>
                        </div>
                        <div>
                            <h1 className='text-xl'>Libs and Languages</h1>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Javascript</p>
                        </div>
                        <div className=''>
                            <p>
                            I'm developing a hobby game, planning to take it online for player-versus-player battles with various powers. Features to implement include proper power and item distribution on the map, snake skin customization, and adding unique snake abilities like turbo, tail grenade, mouth laser, and temporary growth power. Technologies used are Node.js, Socket.io, HTML, CSS, and JS. Any suggestions are welcome. I work on it in my free time and have been studying a lot lately. It will eventually migrate to C#.
                            </p>
                        </div>
                        <footer className='flex gap-4 w-full h-full justify-center p-2 items-end'>
                            
                        <button className='bg-custom-primaryButton p-1 rounded-sm'><a>Site</a></button>
                        <button className='bg-custom-primaryButton p-1 rounded-sm'><a>Code</a></button>
                        </footer>
                    </div>
                    <div className='bg-black text-custom-secondaryColorText flex flex-col p-2 gap-2 rounded-md'>
                        <div className='w-4/4 bg-fuchsia-300 border-solid border-2 border-custom-secondaryColorText'> 
                        
                          <img className='w-full h-full' src={twitter} alt="trello projeto para terminal"/>


                        </div>
                        <div>
                        <p className='text-blue-400 text-2xl'>Modifying Verified Twitter</p>
                        </div>
                        <div>
                            <h1 className='text-xl'>Libs e Languages</h1>
                            <p>Javascript</p>
                            
                        </div>
                        <div className=''>
                            <p>
 
                                
Extension for browsers where the verified symbol is customized to your liking, in this example, it is changed to the skull emoji.

To modify only the blue verified badges, you need to analyze Twitter's webRequest because the display of the verified badge is the same for both types.

Please use this for educational purposes only. Do not attempt to steal or deceive anyone about Twitter verification. Any modifications or alterations to the code with ill intentions to falsify Twitter verification are not my responsibility
                            </p>
                        </div>
                        <footer className='flex gap-4 w-full h-full justify-center p-2 items-end'>
                            
                        <button className='bg-custom-primaryButton p-1 rounded-sm'><a>Site</a></button>
                        <button className='bg-custom-primaryButton p-1 rounded-sm'><a>Code</a></button>
                        </footer>
                    </div>
                    <div className='bg-black text-custom-secondaryColorText flex flex-col p-2 gap-2 rounded-md'>
                        <div className='w-4/4 bg-fuchsia-300 border-solid border-2 border-custom-secondaryColorText'> 
                        
                          <img className='w-full h-full' src={marvel} alt="trello projeto para terminal"/>


                        </div>
                        <div>
                        <p className='text-blue-400 text-2xl'>Marvel Heroes</p>
                        </div>
                        <div>
                            <h1 className='text-xl'>Libs e Languages</h1>
                            <p>Typescript</p>
                            <p>Html</p>
                            <p>CSS</p>
                            <p>React</p>
                        </div>
                        <div className=''>
                            <p>
                            This is a web project built with Vite and TypeScript that showcases all Marvel heroes. Users can search for and access detailed information about each hero, including their description, name, and the series they've participated in.

Users can also like heroes and create a personalized list where they can easily add and remove heroes. Even if you leave the page, your favorites list is preserved.

The project is responsive, and it utilizes the creation of separate components for reusability.

You can access the project in production here.
                          </p>
                        </div>
                        <footer className='flex gap-4 w-full h-full justify-center p-2 items-end'>
                            
                        <button className='bg-custom-primaryButton p-1 rounded-sm'><a>Site</a></button>
                        <button className='bg-custom-primaryButton p-1 rounded-sm'><a>Code</a></button>
                        </footer>
                    </div>

                </div>


            </section>
        </>
    );
};


export default Projects;