import { Request, Response, response } from 'express'
import { LegendService } from './legends.service'

class LegendsController {

    async list(req: Request, res: Response) {
        const legends = await new LegendService().list();

        return res.status(200).json(legends);
    }

    async findName(req: Request, res: Response) {
        const legend = await new LegendService().findName(req.params.name);

        return res.status(200).json(legend)
    }



    async update(req: Request, res: Response) {
        const legend = await new LegendService().update(req.params.id, req.body);

        return res.status(200).json(legend);
    }
}

export default new LegendsController();