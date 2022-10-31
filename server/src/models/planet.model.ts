import * as fs from 'fs';
import { parse } from "csv-parse";
import path from "path";

const planets: any = [];

function isHabitablePlanet(planet: any) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 
    && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

fs.createReadStream(`${path.join(__dirname, "kepler_data.csv")}`)
  .pipe(parse({ comment: "#", columns: true }))
  .on("data", (response: any) => {
    // console.log(response);
    if (isHabitablePlanet(response)) {
      planets.push(response)
    }
  })
  .on("error", (error: any) => {
    console.log(error);
  })
  .on("end", () => {
    console.log("end");
    // console.log(planets);
  })

function getAllPlanets() {
  return planets;
}

export {
  getAllPlanets
}