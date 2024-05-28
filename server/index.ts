import { Data } from "./types";
import { Router } from "express";
import cors from "cors";
import express, { Request, Response } from "express";
import fs from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** server config */

const app = express();
const router = Router();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api", router);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server on ${process.env.PORT || "http://localhost:3000"}`);
});

/** Routes */

router.get("/items", (req: Request, res: Response) => {
  const { q } = req.query;

  const searchedValue: string = q ? q.toString() : "";

  const filteredValue = searchedValue.replace("(", "").replace(")", "");

  try {
    const data = fs.readFileSync(
      path.resolve(__dirname, "products.json"),
      "utf8"
    );
    const parsedData: Data = JSON.parse(data);
    const query = parsedData.products.filter(
      product =>
        product.category.toLowerCase().match(filteredValue.toLowerCase()) ||
        product.title.toLowerCase().match(filteredValue.toLowerCase())
    );
    if (query.length < 1) return res.status(200).json([]);
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
    const data = fs.readFileSync(
      path.resolve(__dirname, "products.json"),
      "utf8"
    );
    const parsedData: Data = JSON.parse(data);
    const query = parsedData.products.find(product => product.id === parsedId);
    if (!query) return res.status(200).json({});
    res.status(200).json(query);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
});
