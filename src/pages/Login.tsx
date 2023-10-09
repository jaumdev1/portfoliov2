
import SolarSystem from '../components/SolarSystem';
import { Vector3 } from 'three';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Auth }from '../services/Auth';
function Login() {
  const positions = new Vector3(0, 1.5, 0);
  const moonPos  = new Array<number>(0,1.7,0);

  const [login, setLogin] = useState<string>(''); 
  const [password, setPassword] = useState<string>(''); 


  async function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); 
    try {
      await Auth(login, password);
      
     
      toast.success('Login bem-sucedido!', {
        position: toast.POSITION.BOTTOM_CENTER
      });

  
    } catch (error:any) {
      
      toast.error('Credenciais inválidas.', {
        position: toast.POSITION.BOTTOM_CENTER
      });
      console.error('Erro ao fazer login:', error.message);
    }

  }
  function handleLoginChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLogin(event.target.value);
  }
  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }
  return (
    <>
    <ToastContainer />
    <div className=' p-2 sm:p-0 flex flex-col  items-center sm:justify-center h-full'>
    <div   style={{ textShadow: '2px 2px 3px #000' }} className='animate-wiggle rounded-md p-10 bg-black bg-opacity-10 font-roboto text-custom-terciaryColor flex flex-col items-center z-10 gap-5'>
    <label>Login</label>
    <form onSubmit={handleSubmit} >
    <div className='flex justify-center flex-col gap-3'>
        <div className='flex gap-1 flex-col items-center'>
       
          <input  type="text"
        value={login}
        onChange={handleLoginChange}

        placeholder="Username" className='text-custom-primaryColorText text-center'/>
        </div>
        <div className='flex gap-1 flex-col items-center'>
      

          <input 
          
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          className='text-custom-primaryColorText  text-center'/>
        </div>


        <button type="submit" style={{ textShadow: '1px 1px 2px #000' }}  className='hover:border-custom-terciaryColor p-1
                         px-10 bg-opacity-10
                         bg-gradient-to-br from-custom-primaryButton
                       to-custom-secondaryButton 
                            rounded-[5px]
                       
                         '>
  
        Acessar
    
      </button>
    </div>
    </form>
  </div>
  </div>
  </>
  );
}

export default Login;
