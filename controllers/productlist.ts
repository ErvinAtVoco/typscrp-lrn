import { Request, Response, Router } from "express";
import Toode from "../models/Toode";

const router: Router = Router();

const tooted: Toode[] = [
    new Toode(1,"Koola", 1.5, true),
    new Toode(2,"Fanta", 1.0, false),
    new Toode(3,"Sprite", 1.7, true),
    new Toode(4,"Vichy", 2.0, true),
    new Toode(5,"Vitamin well", 2.5, true)
];

router.get("/tooted", (req: Request, res: Response) => {
    res.send(tooted)
});

router.delete("/kustuta-toode/:index", (req: Request, res: Response) => {
    if (/^[0-9]+$/.test(req.params.index)) {
        tooted.splice(Number(req.params.index),1)
    }
    res.send(tooted)
});

router.delete("/kustuta-toode-variant2/:index", (req: Request, res: Response) => {
    if (/^[0-9]+$/.test(req.params.index)) {
        tooted.splice(Number(req.params.index),1);
        res.send("Toode kustutatud!");
    } else {
        res.send("Toode kustutamine ei õnnestunud, sisesta number!");
    }
});

router.post("/lisa-toode", (req: Request, res: Response) => {
    if (/^[0-9]+$/.test(req.body.id) && /^[0-9]+$/.test(req.body.price)) {
        tooted.push(
            new Toode(req.body.id, req.body.name, req.body.price, req.body.isActive)
        )
    }
    res.send(tooted)
});

router.patch("/hind-dollaritesse/:kurss", (req: Request, res: Response) => {
    if (/^[0-9]+$/.test(req.params.kurss)) {
        for (let index = 0; index < tooted.length; index++) {
            tooted[index].price = tooted[index].price * Number(req.params.kurss);
        }
    }
    res.send(tooted)
});

router.get("/kustuta-tooted-koik" , (req:Request, res: Response) => {
    if (tooted.length >= 1) {
        while (tooted.length > 0) {
            tooted.pop();
        }
    }
    res.send(tooted)
});

router.get("/tooted-off", (req: Request, res: Response) => {
    for (let i = 0; i < tooted.length; i++) {
        tooted[i].isActive = false;
    }
    res.send(tooted)
});

router.get("/toode-m/:jarjend", (req: Request, res: Response) => {
    const jarjend = Number(req.params.jarjend)
    res.send(tooted[jarjend])
});

router.get("/toode-kallim", (req: Request, res: Response) => {
    const kallimToode = tooted.reduce((prev, current) => (prev.price > current.price) ? prev : current);
    res.send(kallimToode)
});


export default router;