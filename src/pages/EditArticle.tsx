import React, { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import ArticlePreview from './PreviewArticle';
import {editPlayground, obterPlayground } from '../services/Article';
import { useNavigate  } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';

import { useParams } from "react-router-dom"; 

interface PlaygroundModel {
  Id:string | undefined;
  Nome: string;
  Descricao: string;
  Imagem:string;
}

interface filtroObterPlaygroundModel {
  Id:string|undefined;
}

const EditArticle: React.FC = () => {
  const [content, setContent] = useState<string>('');

  const [title, setTitle] = useState<string>('');

  const [imagem, setImagem] = useState<string>('');

  const {id} = useParams();

  const navigate = useNavigate();

  const handleContentChange = (newContent: string | undefined) => {
    if (newContent !== undefined) {
      setContent(newContent);
    }
  };
  const handleImagemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImagem(event.target.value);
  };
  const handleSave = () => {
    const playgroundData: PlaygroundModel = {
      Id:id,
      Nome: title,
      Descricao: content,
      Imagem: imagem 
    };

    editPlayground(playgroundData)
    .then((result) => {
      toast.success('Artigo editado com sucesso!', {
      position: toast.POSITION.BOTTOM_CENTER
    });
      navigate('/articles');
    })
    .catch((error) => {
      toast.error('Erro ao editar Artigo.', {
        position: toast.POSITION.BOTTOM_CENTER
      });
    });
  };
    useEffect(() => {
      const fetchData = async () => {
        let filtroBuscarPlayground: filtroObterPlaygroundModel = {
         Id :id,
        };
        try {
          let Article = await obterPlayground(filtroBuscarPlayground);
            console.log(Article);
      
            setTitle(Article.title);
            setContent(Article.descricao);

            
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
      
     
  
    
    }, []);
    
   
   



  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }


  return (
    <>   
    <ToastContainer />
    <div className='flex justify-center items-center flex-col w-full text-custom-secondaryColor gap-1 font-roboto'>
   
      <div className='w-1/2 flex gap-2 items-center'>
        <label className=''>
          Título:
        </label> <input type="text"
          value={title}
          onChange={handleTitleChange} className='bg-custom-bgColor rounded w-full outline-none p-1' />

       <label className=''>
          Imagem:
        </label> <input type="text"
          value={imagem}
          onChange={handleImagemChange} className='bg-custom-bgColor rounded w-full outline-none p-1' />
      </div>
      <div className='w-1/2 gap-2 flex flex-col'>
        <MDEditor value={content} onChange={handleContentChange} />
        <button className='font-roboto text-custom-secondaryColorText min-w-full px-10 bg-opacity-10 bg-gradient-to-br from-custom-primaryButton to-custom-secondaryButton rounded-lg hover:bg-white' onClick={handleSave}>Salvar</button>

        <ArticlePreview markdownContent={content} />
      </div>
    </div>
    </>
  );
};

export default EditArticle;
