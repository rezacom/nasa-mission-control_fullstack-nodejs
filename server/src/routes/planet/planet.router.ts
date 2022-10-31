import express from "express";
import { httpGetAllPlanets } from "./planet.controller";

const planetRouter = express.Router();

planetRouter.get('/', httpGetAllPlanets);

export default planetRouter;