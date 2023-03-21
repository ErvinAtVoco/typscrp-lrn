import { Request, Response, Router } from "express";
import Toode from "../models/Toode";

const router: Router = Router();

let toode: Toode | null = new Toode(1, "Koola", 1.5, true);

router.get("/toode", (req: Request, res: Response) =>  {
    res.send(toode)
});

router.get("/kustuta-toode", (req: Request, res: Response) =>  {
    toode = null;
    res.send(toode)
});

router.get("/suurenda-hinda", (req: Request, res: Response) =>  {
    if (toode !== null) {
        toode.price = toode.price + 1;
    }
    res.send(toode);
});

router.get("/kustuta-toode2", (req: Request, res: Response) =>  {
    toode = null;
    res.send("Edukalt kustutatud");
});

router.get("/muuda/:uusnimi", (req: Request, res: Response) => {
    if (toode !== null) {
        const uusnimi = (req.params.uusnimi);
        toode.name = uusnimi;
    }
    res.send(toode);
});

router.get("/toote-onoff", (req: Request, res: Response) => {
    if (toode?.isActive === true) {
        res.send(toode);
        toode.isActive = !toode.isActive
    } else if (toode?.isActive === false) {
        res.send("toode on välja lülitatud")
        toode.isActive = !toode.isActive
    }
});

export default router;