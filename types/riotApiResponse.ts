export interface IMastery {
  championId: number;
  championLevel: number;
  championPoints: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  chestGranted: boolean;
  lastPlayTime: number;
  summonerId: string;
  tokensEarned: number;
}

interface IRankedFields {
  veteran: boolean;
  inactive: boolean;
  hotStreak: boolean;
  freshBlood: boolean;

  wins: number;
  losses: number;
  leaguePoints: number;

  rank: string;
  tier: string;
  leagueId: string;
  summonerId: string;
  summonerName: string;
}

interface ISoloRanked extends IRankedFields {
  queueType: 'RANKED_SOLO_5x5';
}

interface IFlexRanked extends IRankedFields {
  queueType: 'RANKED_FLEX_SR';
}

type IRanked = {
  soloRanked?: ISoloRanked;
  flexRanked?: IFlexRanked;
};

export interface ISummoner {
  accountId: string;
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate: number;
  summonerLevel: number;
}

export interface IRiotApiResponse {
  summoner: ISummoner;
  ranked: IRanked;
  mastery: IMastery[];
}
