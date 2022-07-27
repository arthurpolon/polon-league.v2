import axios from 'axios';
import { IChampion, IDdragonApiResponse } from 'types/ddragonApiResponse';

const api = axios.create({
  baseURL: 'https://ddragon.leagueoflegends.com',
});

export class DdragonApi {
  static async getGameVersions() {
    const { data: gameVersions } = await api.get<
      IDdragonApiResponse['versions']
    >('/api/versions.json');

    return gameVersions;
  }

  static async getChampions(gameVersion: string) {
    const { data: championsResponse } = await api.get<
      IDdragonApiResponse['champions']
    >(`/cdn/${gameVersion}/data/en_US/champion.json`);

    const championsObject: { [championId: string]: IChampion } = {};

    // create a new Object mapping the championID to the object key
    Object.values(championsResponse.data).forEach((champion) => {
      championsObject[champion.key] = champion;
    });

    const champions = {
      ...championsResponse,
      data: championsObject,
    };

    return champions;
  }

  static async getAll() {
    const gameVersions = await this.getGameVersions();
    const champions = await this.getChampions(gameVersions[0]);

    return { gameVersions, champions };
  }
}
