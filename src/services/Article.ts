
import axios from 'axios';
import config from "./config";


interface PlaygroundModel {
  Nome: string;
  Descricao: string;
}
interface  PlaygroundModel {
  Id:string | undefined;
  Nome: string;
  Descricao: string;
  Imagem:string;
}
interface  PlaygroundModelCreate {

  Nome: string;
  Descricao: string;
  Imagem:string;
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





interface filtroBuscarPlaygroundModel {
 Page:number;
 PageSize:number;
}
interface filtroObterPlaygroundModel {
  Id:string|undefined;
  
 }



export  async function buscarPlaygrounds(filtroplaygroundModel: filtroBuscarPlaygroundModel): Promise<BannerArticleProps[]> {
  try {
    // Substitua a URL pelo seu endpoint real
    const apiUrl = `${config.apiUrl}/playground/listarPlaygrounds`;

 
    const token = config.token;


    const response = await axios.post(
      apiUrl,
      filtroplaygroundModel,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 200) {
      console.log(response.data);
      return response.data.playgrounds as BannerArticleProps[];
    } else {
      throw new Error(`Erro na solicitação: ${response.statusText}`);
    }
  } catch (error:any) {
    throw new Error(`Erro ao criar playground: ${error.message}`);
  }};
  export  async function obterPlayground(filtroplaygroundModel: filtroObterPlaygroundModel): Promise<BannerArticleProps> {
    try {
      // Substitua a URL pelo seu endpoint real
      const apiUrl = `${config.apiUrl}/playground/obterPlayground?id=${filtroplaygroundModel.Id}`;
  
   
      const token = config.token;
  
  
      const response = await axios.get(
        apiUrl,
     
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.status === 200) {
        console.log(response.data);
        return response.data.playground as BannerArticleProps;
      } else {
        throw new Error(`Erro na solicitação: ${response.statusText}`);
      }
    } catch (error:any) {
      throw new Error(`Erro ao criar playground: ${error.message}`);
    }};


export  async function createPlayground(playgroundModel: PlaygroundModelCreate): Promise<any> {
  try {
    // Substitua a URL pelo seu endpoint real
    const apiUrl = `${config.apiUrl}/playground/criarPlayground`;
    const token = config.token;
    const response = await axios.post(
      apiUrl,
      playgroundModel,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Erro na solicitação: ${response.statusText}`);
    }
  } catch (error:any) {
    throw new Error(`Erro ao criar playground: ${error.message}`);
  }};
export  async function editPlayground(playgroundModel: PlaygroundModel): Promise<any> {
  try {
    // Substitua a URL pelo seu endpoint real
    const apiUrl = `${config.apiUrl}/playground/editarPlayground`;

 
    const token = config.token;
    const response = await axios.post(
      apiUrl,
      playgroundModel,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Erro na solicitação: ${response.statusText}`);
    }
  } catch (error:any) {
    throw new Error(`Erro ao criar playground: ${error.message}`);
  }};
