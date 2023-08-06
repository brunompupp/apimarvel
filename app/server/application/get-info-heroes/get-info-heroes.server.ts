import { getInfoMarvel } from '~/server/infra/apis/get-info-marvel';

type InfoHeroesProps = {
  urlPath: string;
  urlQuerys?: {
    limit: string;
    offset: string;
  };
};

export async function getInfoHeroes(params: InfoHeroesProps) {
  //name, thumbnail, description, id;


  return await getInfoMarvel(params);
}
