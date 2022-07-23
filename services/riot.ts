import axios, { AxiosInstance } from 'axios';
import { IRiotApiResponse } from 'types/riotApiResponse';

export class RiotApi {
  api: AxiosInstance;
  riotApiKey: string;

  constructor(riotApiKey: string) {
    this.riotApiKey = riotApiKey;

    this.api = axios.create({
      baseURL: 'https://br1.api.riotgames.com/lol',
      headers: {
        'X-Riot-Token': process.env.RIOT_DEVELOPMENT_KEY || '',
      },
    });
  }

  async getSummoner(summonerName: string) {
    const { data: summonerInfo } = await this.api.get(
      `/summoner/v4/summoners/by-name/${encodeURIComponent(summonerName)}`
    );

    return summonerInfo as IRiotApiResponse['summoner'];
  }

  async getRanked(summonerId: string) {
    const { data: rankedResponse } = await this.api.get(
      `/league/v4/entries/by-summoner/${summonerId}`
    );

    const soloRanked = rankedResponse.filter(
      (info: any) => info?.queueType === 'RANKED_SOLO_5x5'
    )[0];
    const flexRanked = rankedResponse.filter(
      (info: any) => info?.queueType === 'RANKED_FLEX_SR'
    )[0];

    const ranked: IRiotApiResponse['ranked'] = {};

    if (soloRanked) ranked.soloRanked = soloRanked;
    if (flexRanked) ranked.flexRanked = flexRanked;

    return ranked;
  }

  async getMastery(summonerId: string) {
    const { data: mastery } = await this.api.get(
      `/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}`
    );

    return mastery as IRiotApiResponse['mastery'];
  }

  async getAll(summonerName: string) {
    const summoner = await this.getSummoner(summonerName);

    const [ranked, mastery] = await Promise.all([
      this.getRanked(summoner.id),
      this.getMastery(summoner.id),
    ]);

    return { summoner, ranked, mastery };
  }
}
