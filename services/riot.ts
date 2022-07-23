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

  async getRankedInfo(summonerId: string) {
    const { data: rankedInfoResponse } = await this.api.get(
      `/league/v4/entries/by-summoner/${summonerId}`
    );

    const soloRankedInfo = rankedInfoResponse.filter(
      (info: any) => info?.queueType === 'RANKED_SOLO_5x5'
    )[0];
    const flexRankedInfo = rankedInfoResponse.filter(
      (info: any) => info?.queueType === 'RANKED_FLEX_SR'
    )[0];

    const rankedInfo: IRiotApiResponse['rankedInfo'] = {};

    if (soloRankedInfo) rankedInfo.soloRankedInfo = soloRankedInfo;
    if (flexRankedInfo) rankedInfo.flexRankedInfo = flexRankedInfo;

    return rankedInfo;
  }

  async getChampionsMastery(summonerId: string) {
    const { data: championsMastery } = await this.api.get(
      `/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}`
    );

    return championsMastery as IRiotApiResponse['championsMastery'];
  }

  async getAll(summonerName: string) {
    const summoner = await this.getSummoner(summonerName);

    const [rankedInfo, championsMastery] = await Promise.all([
      this.getRankedInfo(summoner.id),
      this.getChampionsMastery(summoner.id),
    ]);

    return { summoner, rankedInfo, championsMastery };
  }
}
