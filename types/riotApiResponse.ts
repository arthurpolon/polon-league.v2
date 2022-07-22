interface IChampionMastery {
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

interface IRankedCommonFields {
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

interface IRankedSoloInfo extends IRankedCommonFields {
  queueType: 'RANKED_SOLO_5x5';
}

interface IRankedFlexInfo extends IRankedCommonFields {
  queueType: 'RANKED_FLEX_SR';
}

type IRankedInfo = {
  soloRankedInfo?: IRankedSoloInfo;
  flexRankedInfo?: IRankedFlexInfo;
};

interface ISummoner {
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
  rankedInfo: IRankedInfo;
  championsMastery: IChampionMastery[];
}
