import axios from 'axios';
import { IDdragonApiResponse } from 'types/ddragonApiResponse';

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
    const { data: champions } = await api.get<IDdragonApiResponse['champions']>(
      `/cdn/${gameVersion}/data/en_US/champion.json`
    );

    return champions;
  }

  static async getAll() {
    const gameVersions = await this.getGameVersions();
    const champions = await this.getChampions(gameVersions[0]);

    return { gameVersions, champions };
  }
}
