import { getItems } from '../persistence';

export default async (req, res) => {
    const items = await getItems();
    res.send(items);
};
