import express from "express";
import { httpAddNewLaunches, httpGetAllLaunches, httpDeleteAbortLaunch } from "./launches.controller";

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunches);
launchesRouter.delete('/:id', httpDeleteAbortLaunch);

export default launchesRouter;