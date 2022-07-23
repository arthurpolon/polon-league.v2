import { NextApiRequest, NextApiResponse } from 'next';
import { DdragonApi } from 'services/ddragon';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const versions = await DdragonApi.getGameVersions();

    const champions = await DdragonApi.getChampions(versions[0]);

    res.status(200).json({ champions, versions });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'An error occurred' });
  }
}
