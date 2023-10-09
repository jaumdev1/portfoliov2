import React from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import logoSVG from '../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <>
    <header className="p-32 pt-5 pb-5 z-10" >
      <div className="bg-transparent flex flex-col sm:flex-row font-roboto font-bold w-full z-10 gap-5">
    <div className='w-full sm:w-1/4 flex sm:justify-start justify-center'>
      <ReactSVG src={logoSVG} className="w-full h-auto sm:w-auto" style={{ maxWidth: '150px' }}/>    
    </div>
    <nav className="w-full sm:w-2/4 flex gap-5 justify-center items-center overflow-wrap flex-wrap flex-col sm:flex-row">
      <Link to="/" className="text-custom-secondaryColorText">
        Home
      </Link>
      <Link to="/skills" className="text-custom-secondaryColorText">
        Skills
      </Link>
      <Link to="/projects" className="text-custom-secondaryColorText ">
        Projects
      </Link>
      <Link to="/articles" className="text-custom-secondaryColorText ">
       Articles
      </Link>
    </nav>
    <div className='w-full sm:w-1/4 flex justify-center sm:justify-start py-2'>
      <button  style={{ textShadow: '1px 1px 2px #000' }}  className='hover:border-custom-terciaryColor 
                         px-10 bg-opacity-10
                         bg-gradient-to-br from-custom-primaryButton
                       to-custom-secondaryButton 
                            rounded-[100px]
                       
                         '>
        <a href="https://www.linkedin.com/in/joaoantoniodev/" className='text-custom-secondaryColorText' target='_blank' rel="noopener noreferrer">
        ☀️ Let's Connect
        </a>
      </button>
    </div>
    </div>
  </header>
  </>
  );
};

export default Header;
