import { Link } from "react-router-dom";

interface BannerArticleProps {
    id:string;
    title: string;
    date: string;
    descricao: string;
    autor: string;
    imagem: string;
    observacao:string;
  }
  
const BannerAticle: React.FC<BannerArticleProps> = ({id,title,
    date,
    descricao,
    autor,
    imagem,
    observacao}) => {
    return (
      <>
 <div id={id} className="flex flex-grow justify-center items-center flex-wrap p-2  bg-black bg-opacity-10 rounded-sm w-full">
  <div className="sm:flex sm:items-center justify-center sm:space-x-4 w-full sm:h-60  overflow-clip">
    <figure className="sm:w-full">
      <img
        src={imagem}
        className="w-full object-cover"
        alt=""
      />
    </figure>
    <div className="sm:w-full flex flex-col gap-3 p-1 h-full">
      <h1 className="text-xl font-bold">{title}</h1>
      <p>{observacao}</p>
      <p><b>{autor}</b> - {date}</p>
      <div className="w-full flex items-end h-full">
        <div className="w-full">
      <Link to={`/article/${id}`} className="flex flex-col flex-grow">
        <button className="bg-blue-600 w-full bg-opacity-20 rounded-sm flex-grow">
          Ver mais
        </button>
      </Link>
      </div>
      </div>
    </div>
  </div>
</div>



    </>
    );
  };
  
  export default BannerAticle;