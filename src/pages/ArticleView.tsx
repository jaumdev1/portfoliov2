
import { useParams } from "react-router-dom"; 
import React, { useState, useEffect } from 'react';
import ArticlePreview from './PreviewArticle';
import {  obterPlayground } from '../services/Article';
import { IsAuthenticated } from '../services/Auth';
import { Link } from 'react-router-dom';

interface BannerArticleProps {
  id:number;
  title: string;
  date: string;
  descricao: string;
  autor: string;
  imagem: string;
  observacao:string;
}
interface filtroObterPlaygroundModel {
    Id:string|undefined;
}
function ArticleView() {
    const [content, setContent] = useState<string>('');
    const [title, setTitle] = useState<string>('Carregando...'); 
    const [autor, setAutor] =  useState<string>('');
    const [data, setData] =  useState<string>('');
    const [article, setArticle] = useState<BannerArticleProps>();

    const [authenticated, setAuthenticated] = useState<boolean | null>(null);
    const {id} = useParams();

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
              setAutor(Article.autor);
              setData(Article.date);
              setArticle(article);

              
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
        
        const checkAuthentication = async () => {
          const isAuthenticated = await IsAuthenticated();
          console.log(isAuthenticated);
          setAuthenticated(isAuthenticated);
        };
    
        checkAuthentication();
      }, []);
    
return(
<div className="w-full justify-center flex text-custom-secondaryColorText">
<div className="w-full sm:w-2/3 flex flex-col gap-2">
{authenticated && ( 
  <div className="flex justify-end">
       <Link to={`/article/edit/${id}`} className="block w-full">
            <button className="bg-blue-600  bg-opacity-20 rounded-sm p-1">Editar</button>
        </Link>
  </div>
          )} 
<ArticlePreview markdownContent={content} />
<div className="flex justify-end">
<h1 className="flex p-5">{autor} - {data}</h1>  
</div>
</div>
</div>
);


}

export default ArticleView;