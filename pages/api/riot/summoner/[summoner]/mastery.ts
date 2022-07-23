import { NextApiRequest, NextApiResponse } from 'next';
import { RiotApi } from 'services/riot';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const summonerName = req.query.summoner as string;

    const riotApi = new RiotApi(process.env.RIOT_API_KEY || '');

    const summoner = await riotApi.getSummoner(summonerName);
    const mastery = await riotApi.getMastery(summoner.id);

    res.status(200).json({ summoner, mastery });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'An error occurred' });
  }
}
