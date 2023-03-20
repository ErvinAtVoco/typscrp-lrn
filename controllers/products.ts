import { Request, Response, Router } from "express";
import Toode from "../models/Toode";

const router: Router = Router();

let toode: Toode | null = new Toode(1, "Koola", 1.5, true);

router.get("/toode", (req: Request, res: Response) =>  {
    res.send(toode)
});


export default router;