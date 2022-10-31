import * as models from "../../models";

function httpGetAllLaunches(req: any, res: any) {
    return res.status(200).json(Array.from(models.getAllLaunches()))
}

function httpAddNewLaunches(req: any, res: any) {
    const launch = req.body;

    if (!launch.mission || !launch.launchDate || !launch.rocket || !launch.target) {
        return res.status(400).json({
            error: "Launch Properti Is Required"
        });
    }

    launch.launchDate = new Date(launch.launchDate)

    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: "Invalid Date Format"
        });
    }

    models.addNewLaunches(launch)
    return res.status(201).json(launch)
}

function httpDeleteAbortLaunch(req: any, res: any) {

    if (!models.existsLaunchWithId(req.params?.id)) {
        return res.status(400).json({
            error: "Exists This Launch"
        });
    }

    return res.status(200).json({ message: "deleted" })
}

export {
    httpGetAllLaunches,
    httpAddNewLaunches,
    httpDeleteAbortLaunch
}