import { removeItem } from '../persistence';

export default async (req, res) => {
    await removeItem(req.params.id);
    res.sendStatus(200);
};
