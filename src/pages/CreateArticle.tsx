import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import ArticlePreview from './PreviewArticle';
import { createPlayground } from '../services/Article';
import { useNavigate  } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
interface PlaygroundModel {
  Nome: string;
  Descricao: string;
  Imagem:string;
}


const CreateArticle: React.FC = () => {
  const [content, setContent] = useState<string>('');

  const [title, setTitle] = useState<string>('');

  const [imagem, setImagem] = useState<string>('');
  
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
      Nome: title,
      Descricao: content,
      Imagem: imagem 
    };

    createPlayground(playgroundData)
      .then(() => {
        toast.success('Artigo criado com sucesso!', {
        position: toast.POSITION.BOTTOM_CENTER
      });
        navigate('/articles');
      })
      .catch(() => {
        toast.error('Erro ao criar Artigo.', {
          position: toast.POSITION.BOTTOM_CENTER
        });
      });
 
  };



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

export default CreateArticle;
