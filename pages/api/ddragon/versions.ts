import { NextApiRequest, NextApiResponse } from 'next';
import { DdragonApi } from 'services/ddragon';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await DdragonApi.getGameVersions();

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'An error occurred' });
  }
}
