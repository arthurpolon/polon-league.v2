import { NextApiRequest, NextApiResponse } from 'next';
import { RiotApi } from 'services/riot';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const summonerName = req.query.summoner as string;

    const riotApi = new RiotApi(process.env.RIOT_DEVELOPMENT_KEY || '');

    const data = await riotApi.getAll(summonerName);

    res.status(200).json(data);
  } catch (err: any) {
    if (err?.response?.status === 404) {
      res.status(404).json({ message: 'Summoner not found' });
    } else {
      res.status(500).json({ message: 'An error occurred' });
    }
  }
}
