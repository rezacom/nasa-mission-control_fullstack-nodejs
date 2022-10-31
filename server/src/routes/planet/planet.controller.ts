import * as models from "../../models";

function httpGetAllPlanets(req: any, res: any) {
    return res.status(200).json(models.getAllPlanets())
}

export {
    httpGetAllPlanets
}