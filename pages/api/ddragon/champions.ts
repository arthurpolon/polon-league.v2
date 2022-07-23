import { NextApiRequest, NextApiResponse } from 'next';
import { DdragonApi } from 'services/ddragon';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { version } = req.body;

    if (Boolean(version) === false) {
      res
        .status(400)
        .json({ message: "The parameter 'version' is required in body" });
    }

    if (typeof version !== 'string') {
      res
        .status(400)
        .json({ message: "The parameter 'version' must be a string" });
    }

    const data = await DdragonApi.getChampions(version as string);

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'An error occurred' });
  }
}
