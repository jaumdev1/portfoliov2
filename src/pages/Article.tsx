import BannerArticle from '../components/BannerArticle'
import React, { useState, useEffect } from 'react';
import { buscarPlaygrounds } from '../services/Article';
import Pagination from '../components/Pagination';



interface filtroBuscarPlaygroundModel {
  Page:number;
  PageSize:number;

 }


interface BannerArticleProps {
  id:number;
  title: string;
  date: string;
  descricao: string;
  autor: string;
  imagem: string;
  observacao:string;
}





function Article() {
  const [listArticles, setArticle] = useState<BannerArticleProps[]>([]);

  const [pageSize, setPagesize] = useState<number>(1);

  const [currentPage, setCurrentPage] = useState<number>(1);



  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
 
  
  
  useEffect(() => {
    const fetchData = async () => {
      let filtroBuscarPlayground: filtroBuscarPlaygroundModel = {
        Page: currentPage,
        PageSize: pageSize+2,
      };
      try {
        let listArticle = await buscarPlaygrounds(filtroBuscarPlayground);
          console.log(listArticle);
        if (Array.isArray(listArticle)) {
          setArticle(listArticle);
        } else {
          console.error('Data returned from buscarPlaygrounds is not an array.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
      fetchData();
    
 
   
  
    }, [currentPage]);

  return (


    <div className="w-full flex items-center text-custom-secondaryColorText font-roboto flex-col">
      <div className="p-5">
        <h1 className="text-2xl">Articles</h1>
      </div>

      <div className="flex justify-center items-center flex-wrap  sm:flex-col gap-1 sm:w-1/2 p-2">
      <Pagination totalPages={pageSize} currentPage={currentPage} onPageChange={handlePageChange} />
     {
       listArticles.length == 0 ? <h1> nenhum registro encontrado!</h1>: <></>
     }
     
      {listArticles.map((article) => (
      <BannerArticle
        id={article.id.toString()} 
        title={article.title} 
        autor={article.autor} 
        date={article.date} 
        descricao={article.descricao} 
        imagem={article.imagem}
        observacao={article.observacao}
       />
    ))}
       
        
 

      </div>

    </div>
  );
}

export default Article;
