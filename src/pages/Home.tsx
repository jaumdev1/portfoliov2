
import SolarSystem from '../components/SolarSystem';
import { Vector3 } from 'three';

function Home() {
  const positions = new Vector3(0, 1.5, 0);
  const moonPos  = new Array<number>(0,1.7,0);
 
  return (
    <>
     <SolarSystem moonPosition={moonPos} positions={positions}/>
    <div className=' p-2 sm:p-0 flex flex-col  items-center sm:items-center sm:justify-center flex-grow sm:pt-52'>
    <div   style={{ textShadow: '2px 2px 3px #000' }} className='animate-wiggle rounded-md p-2 sm:w-1/3  bg-black bg-opacity-10 font-roboto text-custom-terciaryColor flex flex-col items-center z-10 gap-5'>
    <div className='flex justify-center'>

    </div>
    <p className='text-5xl font-bold text-custom-secondaryColorText text-center'> Hi, I'm João</p>
    <p className='text-center font-roboto text-custom-secondaryColorText mt-5 p-2 sm:p-0' >Versatile developer capable of problem-solving. My experience and knowledge in various development technologies and methodologies enable me to easily adapt to different projects and work environments!</p>
  </div>
  </div>
  </>
  );
}

export default Home;
