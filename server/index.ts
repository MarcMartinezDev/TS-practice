import express, { Request, Response } from "express";
import { Data } from "./types";
import fs from "node:fs";
import { Router } from "express";
import cors from "cors";

/** server config */

const app = express();
const router = Router();

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server on ${process.env.PORT || "http://localhost:3000"}`);
});

/** Routes */

app.get("/", (req: Request, res: Response) => {
  const init: string = "Hello API";
  res.send(init);
});

router.get("/items", (req: Request, res: Response) => {
  const { q } = req.query;

  const searchedValue: string = q ? q.toString() : "";

  try {
    const data = fs.readFileSync("./products.json", "utf-8");
    const parsedData: Data = JSON.parse(data);
    const query = parsedData.products.filter(
      (product) =>
        product.category.toLowerCase().match(searchedValue.toLowerCase()) ||
        product.title.toLowerCase().match(searchedValue.toLowerCase())
    );
    if (query.length < 1) return res.status(404).json([]);
    res.status(200).json(query);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
});

router.get("/items/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  if (id === undefined) return res.redirect("/");

  const parsedId: number = parseInt(id);

  try {
    const data = fs.readFileSync("./products.json", "utf-8");
    const parsedData: Data = JSON.parse(data);
    const query = parsedData.products.find(
      (product) => product.id === parsedId
    );
    if (!query) return res.status(404).json({});
    res.status(200).json(query);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
});
